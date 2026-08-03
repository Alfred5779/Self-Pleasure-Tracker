package com.selfcare.manager;

import android.content.ContentValues;
import android.content.Intent;
import android.net.Uri;
import android.os.Build;
import android.os.Bundle;
import android.os.Environment;
import android.provider.MediaStore;
import android.webkit.JavascriptInterface;
import android.webkit.WebView;

import com.getcapacitor.BridgeActivity;
import com.capacitorjs.plugins.app.AppPlugin;

import java.io.File;
import java.io.FileOutputStream;
import java.io.InputStream;
import java.io.OutputStream;
import java.util.concurrent.CountDownLatch;
import java.util.concurrent.TimeUnit;

public class MainActivity extends BridgeActivity {

    // PdfRendererHelper 需要的字段
    private Uri pendingPdfUri;
    private final CountDownLatch[] pdfPickerLatch = new CountDownLatch[1];
    private static final int REQ_PDF_PICKER = 10001;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        registerPlugin(AppPlugin.class);

        super.onCreate(savedInstanceState);

        // 注入原生接口到 WebView
        try {
            WebView webView = getBridge().getWebView();
            webView.addJavascriptInterface(new FileHelper(), "FileHelper");
            webView.addJavascriptInterface(new PdfRendererHelper(), "PdfRenderer");
        } catch (Exception e) {
            e.printStackTrace();
        }
    }

    // ── 文件选择器结果 ──
    @Override
    protected void onActivityResult(int requestCode, int resultCode, Intent data) {
        super.onActivityResult(requestCode, resultCode, data);
        if (requestCode == REQ_PDF_PICKER) {
            if (resultCode == RESULT_OK && data != null && data.getData() != null) {
                pendingPdfUri = data.getData();
                getContentResolver().takePersistableUriPermission(pendingPdfUri, Intent.FLAG_GRANT_READ_URI_PERMISSION);
            } else {
                pendingPdfUri = null;
            }
            if (pdfPickerLatch[0] != null) pdfPickerLatch[0].countDown();
        }
    }

    // ── 原生 PDF 阅读器接口 ──
    public class PdfRendererHelper {

        @JavascriptInterface
        public String openPdfPicker() {
            try {
                pdfPickerLatch[0] = new CountDownLatch(1);
                pendingPdfUri = null;

                runOnUiThread(() -> {
                    Intent intent = new Intent(Intent.ACTION_OPEN_DOCUMENT);
                    intent.addCategory(Intent.CATEGORY_OPENABLE);
                    intent.setType("application/pdf");
                    intent.putExtra(Intent.EXTRA_ALLOW_MULTIPLE, true);
                    startActivityForResult(intent, REQ_PDF_PICKER);
                });

                pdfPickerLatch[0].await(60, TimeUnit.SECONDS);

                if (pendingPdfUri == null) return "";

                // 保存到 app 缓存目录，返回文件名
                String savedName = savePdfToCache(pendingPdfUri);
                return savedName != null ? savedName : "";
            } catch (Exception e) {
                return "";
            }
        }

        @JavascriptInterface
        public String getPdfPageCount(String cacheFileName) {
            try {
                File file = new File(getCacheDir(), cacheFileName);
                android.os.ParcelFileDescriptor fd = android.os.ParcelFileDescriptor.open(file, android.os.ParcelFileDescriptor.MODE_READ_ONLY);
                android.graphics.pdf.PdfRenderer renderer = new android.graphics.pdf.PdfRenderer(fd);
                int count = renderer.getPageCount();
                renderer.close();
                fd.close();
                return String.valueOf(count);
            } catch (Exception e) {
                return "0";
            }
        }

        @JavascriptInterface
        public String renderPdfPage(String cacheFileName, int pageNum) {
            try {
                File file = new File(getCacheDir(), cacheFileName);
                android.os.ParcelFileDescriptor fd = android.os.ParcelFileDescriptor.open(file, android.os.ParcelFileDescriptor.MODE_READ_ONLY);
                android.graphics.pdf.PdfRenderer renderer = new android.graphics.pdf.PdfRenderer(fd);

                if (pageNum < 0 || pageNum >= renderer.getPageCount()) {
                    renderer.close(); fd.close();
                    return "";
                }

                android.graphics.pdf.PdfRenderer.Page page = renderer.openPage(pageNum);
                float density = getResources().getDisplayMetrics().density;
                float targetW = getResources().getDisplayMetrics().widthPixels;
                float scale = targetW / page.getWidth() * density;
                int w = (int)(page.getWidth() * scale);
                int h = (int)(page.getHeight() * scale);

                android.graphics.Bitmap bitmap = android.graphics.Bitmap.createBitmap(w, h, android.graphics.Bitmap.Config.ARGB_8888);
                bitmap.eraseColor(android.graphics.Color.WHITE);
                page.render(bitmap, null, null, android.graphics.pdf.PdfRenderer.Page.RENDER_MODE_FOR_DISPLAY);
                page.close();
                renderer.close();
                fd.close();

                java.io.ByteArrayOutputStream baos = new java.io.ByteArrayOutputStream();
                bitmap.compress(android.graphics.Bitmap.CompressFormat.JPEG, 80, baos);
                bitmap.recycle();
                byte[] bytes = baos.toByteArray();
                return android.util.Base64.encodeToString(bytes, android.util.Base64.NO_WRAP);
            } catch (Exception e) {
                return "";
            }
        }

        @JavascriptInterface
        public String openPdfReader(String cacheFileName, String title, int lastPage) {
            try {
                Intent intent = new Intent(MainActivity.this, PdfReaderActivity.class);
                intent.putExtra("pdfPath", cacheFileName);
                intent.putExtra("title", title != null ? title : "");
                intent.putExtra("lastPage", lastPage);
                startActivity(intent);
                return "OK";
            } catch (Exception e) {
                return "ERROR: " + e.getMessage();
            }
        }

        /** 读取上次阅读进度（页码） */
        @JavascriptInterface
        public int getLastPage(String cacheFileName) {
            return getSharedPreferences("pdf_progress", MODE_PRIVATE).getInt(cacheFileName, 0);
        }

        @JavascriptInterface
        public String savePdfToCacheBase64(String base64Data, String filename) {
            try {
                byte[] data = android.util.Base64.decode(base64Data, android.util.Base64.DEFAULT);
                File outFile = new File(getCacheDir(), filename);
                FileOutputStream fos = new FileOutputStream(outFile);
                fos.write(data);
                fos.close();
                return "OK";
            } catch (Exception e) {
                return "ERROR: " + e.getMessage();
            }
        }

        @JavascriptInterface
        public String deleteCachePdf(String filename) {
            try {
                File file = new File(getCacheDir(), filename);
                if (file.exists() && file.delete()) return "OK";
                return "NOT_FOUND";
            } catch (Exception e) {
                return "ERROR: " + e.getMessage();
            }
        }

        /** 从缓存复制到 Downloads 目录（文件管理器可见） */
        @JavascriptInterface
        public String copyCacheToDownloads(String cacheFileName, String displayName) {
            try {
                File src = new File(getCacheDir(), cacheFileName);
                if (!src.exists()) return "ERROR: source not found";
                java.io.FileInputStream fis = new java.io.FileInputStream(src);
                byte[] data = new byte[(int) src.length()];
                fis.read(data);
                fis.close();

                if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.Q) {
                    ContentValues values = new ContentValues();
                    values.put(MediaStore.Downloads.DISPLAY_NAME, displayName);
                    values.put(MediaStore.Downloads.MIME_TYPE, "application/pdf");
                    values.put(MediaStore.Downloads.RELATIVE_PATH, Environment.DIRECTORY_DOWNLOADS);
                    Uri uri = getContentResolver().insert(MediaStore.Downloads.EXTERNAL_CONTENT_URI, values);
                    if (uri == null) return "ERROR: cannot create file";
                    OutputStream os = getContentResolver().openOutputStream(uri);
                    if (os == null) return "ERROR: cannot write";
                    os.write(data);
                    os.close();
                    return uri.toString();
                } else {
                    File dir = Environment.getExternalStoragePublicDirectory(Environment.DIRECTORY_DOWNLOADS);
                    if (!dir.exists()) dir.mkdirs();
                    FileOutputStream fos = new FileOutputStream(new File(dir, displayName));
                    fos.write(data);
                    fos.close();
                    return "OK";
                }
            } catch (Exception e) {
                return "ERROR: " + e.getMessage();
            }
        }

        /** 渲染 PDF 第一页为 JPEG base64（用作封面） */
        @JavascriptInterface
        public String renderCoverBase64(String cacheFileName) {
            try {
                File file = new File(getCacheDir(), cacheFileName);
                if (!file.exists()) return "";
                android.os.ParcelFileDescriptor pfd = android.os.ParcelFileDescriptor.open(file, android.os.ParcelFileDescriptor.MODE_READ_ONLY);
                android.graphics.pdf.PdfRenderer r = new android.graphics.pdf.PdfRenderer(pfd);
                if (r.getPageCount() == 0) { r.close(); pfd.close(); return ""; }
                android.graphics.pdf.PdfRenderer.Page page = r.openPage(0);
                int w = 400; // 封面缩略图宽度
                int h = (int)(w * ((float) page.getHeight() / page.getWidth()));
                android.graphics.Bitmap bmp = android.graphics.Bitmap.createBitmap(w, h, android.graphics.Bitmap.Config.ARGB_8888);
                bmp.eraseColor(android.graphics.Color.WHITE);
                float sx = (float) w / page.getWidth();
                float sy = (float) h / page.getHeight();
                android.graphics.Matrix m = new android.graphics.Matrix();
                m.setScale(sx, sy);
                page.render(bmp, null, m, android.graphics.pdf.PdfRenderer.Page.RENDER_MODE_FOR_DISPLAY);
                page.close();
                r.close();
                pfd.close();
                java.io.ByteArrayOutputStream baos = new java.io.ByteArrayOutputStream();
                bmp.compress(android.graphics.Bitmap.CompressFormat.JPEG, 70, baos);
                bmp.recycle();
                return android.util.Base64.encodeToString(baos.toByteArray(), android.util.Base64.NO_WRAP);
            } catch (Exception e) {
                return "";
            }
        }

        private String savePdfToCache(Uri uri) {
            try {
                InputStream is = getContentResolver().openInputStream(uri);
                if (is == null) return null;
                String name = "local_" + System.currentTimeMillis() + ".pdf";
                File outFile = new File(getCacheDir(), name);
                FileOutputStream fos = new FileOutputStream(outFile);
                byte[] buf = new byte[8192];
                int len;
                while ((len = is.read(buf)) > 0) fos.write(buf, 0, len);
                fos.close();
                is.close();
                return name;
            } catch (Exception e) {
                return null;
            }
        }
    }

    // ── 原有的 FileHelper ──
    public class FileHelper {

        @JavascriptInterface
        public String saveFile(String base64Data, String filename, String mimeType) {
            try {
                byte[] data = android.util.Base64.decode(base64Data, android.util.Base64.DEFAULT);

                if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.Q) {
                    ContentValues values = new ContentValues();
                    values.put(MediaStore.Downloads.DISPLAY_NAME, filename);
                    values.put(MediaStore.Downloads.MIME_TYPE, mimeType);
                    values.put(MediaStore.Downloads.RELATIVE_PATH, Environment.DIRECTORY_DOWNLOADS);

                    Uri uri = getContentResolver().insert(MediaStore.Downloads.EXTERNAL_CONTENT_URI, values);
                    if (uri == null) return "ERROR: 无法创建文件";

                    OutputStream os = getContentResolver().openOutputStream(uri);
                    if (os == null) return "ERROR: 无法写入文件";
                    os.write(data);
                    os.close();
                    return uri.toString(); // 返回 content:// URI
                } else {
                    File dir = Environment.getExternalStoragePublicDirectory(Environment.DIRECTORY_DOWNLOADS);
                    if (!dir.exists()) dir.mkdirs();
                    File file = new File(dir, filename);
                    FileOutputStream fos = new FileOutputStream(file);
                    fos.write(data);
                    fos.close();
                    return file.getAbsolutePath();
                }
            } catch (Exception e) {
                return "ERROR: " + e.getMessage();
            }
        }

        @JavascriptInterface
        public String deleteFile(String uriOrName) {
            try {
                if (uriOrName == null || uriOrName.isEmpty()) return "NOT_FOUND";

                // content:// URI 直接删除
                if (uriOrName.startsWith("content://")) {
                    Uri uri = Uri.parse(uriOrName);
                    int deleted = getContentResolver().delete(uri, null, null);
                    return deleted > 0 ? "OK" : "NOT_FOUND";
                }

                // 文件名查询删除（兼容旧数据）
                if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.Q) {
                    String selection = MediaStore.Downloads.DISPLAY_NAME + "=?";
                    int deleted = getContentResolver().delete(
                            MediaStore.Downloads.EXTERNAL_CONTENT_URI, selection, new String[]{ uriOrName });
                    return deleted > 0 ? "OK" : "NOT_FOUND";
                } else {
                    File dir = Environment.getExternalStoragePublicDirectory(Environment.DIRECTORY_DOWNLOADS);
                    File file = new File(dir, uriOrName);
                    if (file.exists() && file.delete()) return "OK";
                    return "NOT_FOUND";
                }
            } catch (Exception e) {
                return "ERROR: " + e.getMessage();
            }
        }
    }
}
