# 起飞助手 v1.0
Self-Care Tracker v1.0

---

## 🙏 致谢 Credits

感谢「**Acheron**」在项目接近尾期 Token 烧干的时候，提供 Token 救急，让 v1.0 得以顺利发布。

Special thanks to **Acheron** for providing tokens when the project was running on fumes near the finish line, making the v1.0 release possible.

---

## ⚠️ 重要免责声明 Important Disclaimer

### 🔞 年龄限制 Age Restriction

本软件**仅限年满 18 周岁的成年人**使用。未成年人严禁使用本软件。

This software is **for adults aged 18 and over only**. Minors are strictly prohibited from using this software.

### 📚 仅用于开源学习 For Open-Source Learning Only

本项目**仅供开源学习和技术交流**使用。任何个人或组织不得将本软件用于任何商业用途或非法活动。

This project is **for open-source learning and technical exchange only**. No individual or organization may use this software for any commercial purpose or illegal activity.

### 🎭 娱乐声明 Entertainment Statement

本人开发本软件纯属娱乐行为，不用于任何严肃的医疗或心理治疗用途。

I developed this software purely for entertainment purposes and it is not intended for any serious medical or psychological treatment.

---

## 🆕 v1.0 — 漫画书架功能上线 JM Comic Bookshelf

v1.0 是一个重大版本更新，新增了完整的 **JM 漫画书架系统**，从搜索、下载到阅读，全流程纯前端实现。

v1.0 is a major update introducing a full **JM Comic Bookshelf** — search, download, and read, all implemented purely in the frontend.

### ✨ 核心功能 Core Features

#### 📚 漫画书架 Bookshelf

- **搜索漫画** — 输入 JM 漫画代码，实时获取漫画信息（标题、作者、标签、章节列表）
- **Search comics** — Enter JM comic codes to fetch real-time info (title, author, tags, chapters)
- **下载漫画** — 支持单章和整本下载，自动反混淆加密图片，图片直接存储为数组格式
- **Download comics** — Single chapter or full album download, auto-descrambles encrypted images, stores as image arrays
- **阅读器** — 图片列表式阅读，自适应屏幕宽度，支持全屏模式和左右滑动
- **Reader** — Image-list reader, auto-fits screen width, supports fullscreen and scrolling
- **封面显示** — 下载完成后自动抓取第一章第一张图作为书架封面
- **Cover display** — Auto-fetches first chapter's first image as bookshelf cover after download
- **批量下载** — 支持多漫画并发下载（默认 2 路并发），可暂停/取消
- **Batch download** — Concurrent multi-comic downloading (default 2 parallel), with pause/cancel
- **宫格/列表模式** — 书架支持宫格（2/3 列可选）和列表两种显示模式
- **Grid/List view** — Bookshelf supports grid (2 or 3 columns) and list display modes
- **收藏与标签** — 长按进入多选模式，支持收藏、标签分类
- **Favorites & tags** — Long-press for multi-select mode, supports favorites and tag classification

#### 🔧 技术实现 Technical Implementation

**漫画下载流程：**

1. **API 请求** — 通过 JMComic API 获取漫画信息（AES-ECB 加密解密）
2. **章节解析** — 并发获取多个章节的图片列表（最多 3 章同时）
3. **图片下载** — 多通道并发下载（5 路），通过 CDN 域名分发
4. **图片反混淆** — 根据 `scramble_id` + MD5 算法计算切割参数，用 Canvas 逐片还原
5. **数据存储** — 图片 base64 数组直接存入 IndexedDB，阅读器用 `<img>` 标签渲染

**Download pipeline:**

1. **API request** — Fetch comic info via JMComic API (AES-ECB encrypted)
2. **Chapter parsing** — Concurrently fetch image lists for multiple chapters (up to 3 parallel)
3. **Image download** — Multi-channel concurrent download (5 channels), CDN-distributed
4. **Descrambling** — Calculate slice parameters from `scramble_id` + MD5, reconstruct via Canvas
5. **Storage** — Image base64 arrays stored in IndexedDB, reader renders with `<img>` tags

**平台适配：**

- **Web 端** — 通过本地 Express 服务器（`server.js`）代理 API 请求和图片下载，支持 SSE 实时进度推送
- **Android 端** — 通过 CapacitorHttp 直接请求 JMComic API（绕过 CORS），Canvas 原生反混淆

**Platform adaptation:**

- **Web** — Local Express server (`server.js`) proxies API requests and image downloads, supports SSE real-time progress
- **Android** — CapacitorHttp directly requests JMComic API (bypasses CORS), native Canvas descrambling

---

## 📥 安装 Installation

### 📱 Android APK

1. 下载 `起飞助手.apk`
2. 在手机上安装（如提示"未知来源"，请在设置中允许）
3. 安装完成后即可使用

### 🌐 Web 版本

```bash
cd web
npm install    # 首次运行需要安装依赖
npm start      # 启动本地服务器（端口 3001）
```

然后访问 http://localhost:3001

也可以直接双击 `web/启动Web页面.bat`（Windows）。

### 🔧 开发构建

```bash
# 同步 Web 文件到 Android 项目
cd web && npm run sync

# 构建 Android APK
cd apk/android && ./gradlew assembleDebug
# 输出: apk/android/app/build/outputs/apk/debug/app-debug.apk

# 构建发行版
./gradlew assembleRelease
```

---

## 🛠️ 技术栈 Tech Stack

- **前端**: 纯 HTML / CSS / JavaScript（无框架、无打包）
- **PWA**: Service Worker 离线缓存
- **Android**: Capacitor 打包，minSdk 24，targetSdk 36
- **服务端**: Express.js（仅开发用，提供 JMComic 代理 API）
- **存储**: localStorage（记录数据）+ IndexedDB（漫画数据）
- **加密**: CryptoJS（AES-ECB 解密 API 响应）
- **CDN 依赖**: crypto-js, pdf-lib（运行时懒加载）

---

## 📁 项目结构 Project Structure

```
Self-Pleasure-Tracker/
├── web/                        # 📦 源代码（唯一编辑目录）
│   ├── app.js                  # 主应用逻辑（~8000 行）
│   ├── index.html              # 入口页面
│   ├── styles.css              # 样式（CSS 变量主题系统）
│   ├── server.js               # Express 开发服务器（JMComic 代理）
│   ├── manifest.json           # PWA 配置
│   ├── sw.js                   # Service Worker
│   └── 启动Web页面.bat         # Windows 启动脚本
├── apk/                        # 📱 Android 项目
│   ├── android/                # Gradle 项目（Capacitor 生成）
│   ├── capacitor.config.json   # Capacitor 配置
│   └── www/                    # 同步后的 Web 文件（勿手动编辑）
├── 起飞助手.apk                # 📲 构建输出（根目录）
├── CLAUDE.md                   # Claude Code 开发指引
├── CODE_WIKI.md                # 技术文档
└── README.md                   # 本文档
```

> **注意**: 编辑文件请只修改 `web/` 目录，然后通过 `npx cap sync android` 或手动复制同步到 APK。

---

## ⚙️ 功能特性 Features

- 📝 **添加记录** — 计时器或手动补录，支持多选媒介和性癖标签
- 📋 **记录管理** — 历史记录查看、编辑、删除，日历视图
- 📊 **数据分析** — 总次数、平均/最长/最短时长、频率、禁欲天数、柱状图、饼状图、折线图
- 📚 **漫画书架** — 搜索/下载/阅读 JM 漫画，支持批量并发下载
- ⚙️ **个性化设置** — 丰富的主题自定义、中英文切换、数据导入导出
- 🔒 **隐私保护** — 所有数据 100% 本地存储，零服务器通信

---

## 📝 版本历史 Version History

### v1.0
- ✨ 新增 JM 漫画书架：搜索、下载、阅读完整流程
- ✨ 书架封面自动抓取，宫格/列表显示模式切换
- ✨ 批量下载多漫画并发，图片多通道并发下载
- ✨ 图片直接存储替代 PDF，兼容全平台阅读
- ✨ 外观管理新增书架显示设置
- 🐛 修复 Web 端 PDF 下载失败（改用客户端 PDFLib 生成）
- 🐛 修复书架右键封面白屏/崩溃（Object URL 泄漏 + 并发竞态）
- 🐛 修复日历收起设置锁死问题（仅首次进入生效，手动操作不重置）
- 🐛 修复 Android 返回键直接退出（注册 @capacitor/app 插件）
- 🔒 安全审计，加固 .gitignore 排除敏感文件
- 🙏 感谢「Acheron」提供 Token 救急

### v0.91.8
- ✨ 优化折线图显示，修复时区偏移问题

### v0.91.7
- ✨ 新增折线图可视化和满意度评分，添加全部数据视图

### v0.91.6
- ✨ 柱状图横向显示，外观设置导入导出，记录时长差异显示

### v0.91.5
- ✨ 视觉风格自定义：圆角、阴影、动画、布局

### v0.91.4
- ✨ 高级主题自定义，支持自定义每个颜色

### v0.91 ~ v0.91.3
- 性癖管理、饼状图、分析模板、每周起算日、导出优化

### v0.78
- 媒介管理、免责声明和更新日志

### v0.69
- 数据导出导入、截图分享、中英文双语

### v0.13
- 初始版本：添加、记录、分析、设置

---

## 📄 使用协议 License

Copyright (c) 2026

- ✅ 允许：个人学习、研究、修改、分享、非商业使用
- ❌ 禁止：商业用途、非法活动

本软件按"原样"提供，不提供任何保证。使用后果由使用者自行承担。

This software is provided "as is" without warranty. All consequences are borne by the user.
