const express = require('express');
const path = require('path');
const axios = require('axios');
const sharp = require('sharp');
const PDFDocument = require('pdfkit');
const crypto = require('crypto');

const app = express();
const PORT = 3001;

// ──────────────────────────────────────────────
//  CORS + JSON
// ──────────────────────────────────────────────
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  if (req.method === 'OPTIONS') return res.sendStatus(200);
  next();
});
app.use(express.json({ limit: '50mb' }));

// ──────────────────────────────────────────────
//  工具函数
// ──────────────────────────────────────────────
function sleep(ms) { return new Promise(r => setTimeout(r, ms)); }

function md5hex(str) {
  return crypto.createHash('md5').update(str, 'utf-8').digest('hex');
}

// 图片反混淆
function getScrambleNum(scrambleId, aid, filename) {
  scrambleId = parseInt(scrambleId);
  aid = parseInt(aid);
  if (aid < scrambleId) return 0;
  if (aid < 268850) return 10;
  const x = aid < 421926 ? 10 : 8;
  const s = md5hex(`${aid}${filename}`);
  const num = s.charCodeAt(s.length - 1) % x;
  return num * 2 + 2;
}

async function descrambleImage(buffer, num) {
  if (num === 0) return buffer;
  const img = sharp(buffer);
  const meta = await img.metadata();
  const { width, height } = meta;
  const canvas = sharp({ create: { width, height, channels: 3, background: { r: 255, g: 255, b: 255 } } });
  const composites = [];
  const over = height % num;
  for (let i = 0; i < num; i++) {
    const move = Math.floor(height / num);
    let ySrc = height - (move * (i + 1)) - over;
    let yDst = move * i;
    let sliceH = move;
    if (i === 0) sliceH += over; else yDst += over;
    const slice = await sharp(buffer).extract({ left: 0, top: ySrc, width, height: sliceH }).toBuffer();
    composites.push({ input: slice, top: yDst, left: 0 });
  }
  return canvas.composite(composites).jpeg({ quality: 95 }).toBuffer();
}

// ──────────────────────────────────────────────
//  API 端点
// ──────────────────────────────────────────────

// 代理 JMComic API 请求（绕过 CORS）
app.post('/api/jm/proxy', async (req, res) => {
  const { url, headers: customHeaders } = req.body;
  if (!url) return res.status(400).json({ error: '缺少 url 参数' });

  try {
    const resp = await axios.get(url, {
      headers: {
        'Accept-Encoding': 'gzip, deflate',
        'User-Agent': 'Mozilla/5.0 (Linux; Android 9; V1938CT) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.114 Mobile Safari/537.36',
        'X-Requested-With': 'com.JMComic3.app',
        ...customHeaders,
      },
      timeout: 30000,
      responseType: 'text',
    });
    res.json({ status: resp.status, data: resp.data });
  } catch (e) {
    res.status(e.response?.status || 500).json({
      error: e.message,
      status: e.response?.status || 500,
    });
  }
});

// 下载图片 → 反混淆 → 实时推送进度 → 返回 base64 数组
app.post('/api/jm/images', async (req, res) => {
  const { images, scrambleId, albumId } = req.body;
  if (!images || !Array.isArray(images)) {
    return res.status(400).json({ error: '缺少 images 数组' });
  }

  // 支持 SSE 进度推送（客户端传 ?stream=1）
  const stream = req.query.stream === '1';

  console.log(`[JM] 下载 ${images.length} 张图片, scrambleId=${scrambleId}, albumId=${albumId}, stream=${stream}`);

  if (stream) {
    res.writeHead(200, {
      'Content-Type': 'text/event-stream',
      'Cache-Control': 'no-cache',
      'Connection': 'keep-alive',
    });
  }

  const results = new Array(images.length);
  let errors = 0;
  let completed = 0;
  const CONCURRENT = 5;

  async function downloadOne(i) {
    const { url, filename, photoId } = images[i];
    try {
      const resp = await axios.get(url, {
        headers: {
          'Accept': 'image/avif,image/webp,image/apng,image/*,*/*;q=0.8',
          'X-Requested-With': 'com.JMComic3.app',
          'Referer': 'https://www.cdnhjk.net/',
          'User-Agent': 'Mozilla/5.0 (Linux; Android 9) AppleWebKit/537.36',
        },
        timeout: 30000,
        responseType: 'arraybuffer',
      });

      if (resp.status === 200 && resp.data && resp.data.byteLength > 100) {
        let buf = Buffer.from(resp.data);
        const nameNoExt = filename.replace(/\.\w+$/, '');
        const num = getScrambleNum(scrambleId || '999999', photoId || '0', nameNoExt);
        if (num > 0) { try { buf = await descrambleImage(buf, num); } catch (de) {} }
        try {
          const meta = await sharp(buf).metadata();
          if (meta.format !== 'jpeg') buf = await sharp(buf).jpeg({ quality: 90 }).toBuffer();
        } catch (e) {}
        results[i] = buf.toString('base64');
      }
    } catch (e) { errors++; }
    completed++;
    if (stream) res.write(`data: ${JSON.stringify({ done: completed, total: images.length })}\n\n`);
  }

  // 并发下载，每 CONCURRENT 个一批
  for (let i = 0; i < images.length; i += CONCURRENT) {
    const batch = [];
    for (let j = i; j < Math.min(i + CONCURRENT, images.length); j++) batch.push(downloadOne(j));
    await Promise.all(batch);
  }

  const filtered = results.filter(Boolean);
  console.log(`[JM] 图片下载完成: ${filtered.length}/${images.length}, 错误: ${errors}`);

  if (stream) {
    res.write(`data: ${JSON.stringify({ done: images.length, total: images.length, finished: true, images: filtered, errors })}\n\n`);
    res.end();
  } else {
    res.json({ images: filtered, errors });
  }
});

// 从 base64 图片数组生成 PDF
app.post('/api/jm/pdf', async (req, res) => {
  const { images, title } = req.body;
  if (!images || !Array.isArray(images) || images.length === 0) {
    return res.status(400).json({ error: '缺少图片数据' });
  }

  console.log(`[JM] 生成 PDF: ${images.length} 页`);

  const doc = new PDFDocument({ autoFirstPage: false, margin: 0, info: { Title: title || 'JMComic' } });
  const chunks = [];
  doc.on('data', chunk => chunks.push(chunk));

  for (const b64 of images) {
    try {
      const buf = Buffer.from(b64, 'base64');
      const img = doc.openImage(buf);
      doc.addPage({ size: [img.width, img.height] });
      doc.image(img, 0, 0);
    } catch (e) {
      console.log(`[JM] PDF 页面跳过: ${e.message}`);
    }
  }

  doc.end();
  await new Promise(r => doc.on('end', r));
  const pdfBuf = Buffer.concat(chunks);

  const safeTitle = (title || 'JMComic').replace(/[\/\\:*?"<>|]/g, '_').substring(0, 80);
  res.setHeader('Content-Type', 'application/pdf');
  res.setHeader('Content-Disposition', `attachment; filename*=UTF-8''${encodeURIComponent(safeTitle)}.pdf`);
  res.send(pdfBuf);

  console.log(`[JM] PDF 完成: ${(pdfBuf.length / 1024 / 1024).toFixed(1)}MB`);
});

// ──────────────────────────────────────────────
//  静态文件服务
// ──────────────────────────────────────────────
app.use(express.static(__dirname, {
  maxAge: 0,
  setHeaders(res, filePath) {
    const ext = path.extname(filePath).toLowerCase();
    const mimeMap = {
      '.html': 'text/html; charset=utf-8',
      '.css': 'text/css; charset=utf-8',
      '.js': 'application/javascript; charset=utf-8',
      '.json': 'application/json; charset=utf-8',
      '.png': 'image/png', '.jpg': 'image/jpeg', '.jpeg': 'image/jpeg',
      '.gif': 'image/gif', '.svg': 'image/svg+xml', '.ico': 'image/x-icon',
      '.webmanifest': 'application/manifest+json',
    };
    if (mimeMap[ext]) res.setHeader('Content-Type', mimeMap[ext]);
  },
}));

app.get('*', (_req, res) => res.sendFile(path.join(__dirname, 'index.html')));

// ──────────────────────────────────────────────
//  启动（自动杀掉占用端口的旧进程）
// ──────────────────────────────────────────────
const { execSync } = require('child_process');

function killPort(port) {
  try {
    // Windows: find and kill process using the port
    const out = execSync(`netstat -ano | findstr ":${port}.*LISTEN"`, { encoding: 'utf-8', timeout: 5000 });
    const pids = new Set();
    out.split('\n').forEach(line => {
      const parts = line.trim().split(/\s+/);
      const pid = parts[parts.length - 1];
      if (pid && pid !== '0' && /^\d+$/.test(pid)) pids.add(pid);
    });
    pids.forEach(pid => {
      try { execSync(`taskkill /F /PID ${pid}`, { timeout: 5000 }); } catch (_) {}
    });
    if (pids.size > 0) {
      console.log(`Killed old server PID: ${[...pids].join(', ')}`);
      execSync('timeout /t 1 /nobreak >nul', { timeout: 5000 });
    }
  } catch (_) {}
}

killPort(PORT);

const srv = app.listen(PORT, () => {
  console.log('====================================');
  console.log('   Self-Care Tracker - Server');
  console.log('====================================');
  console.log(`http://localhost:${PORT}`);
  console.log('JMComic downloader ready');
});
