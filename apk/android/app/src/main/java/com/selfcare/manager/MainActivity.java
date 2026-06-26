package com.selfcare.manager;

import android.os.Build;
import android.os.Bundle;
import android.os.Environment;
import android.webkit.JavascriptInterface;
import android.webkit.WebView;

import com.getcapacitor.BridgeActivity;
import com.capacitorjs.plugins.app.AppPlugin;

import java.io.File;
import java.io.FileOutputStream;
import java.io.OutputStream;
import android.content.ContentValues;
import android.net.Uri;
import android.provider.MediaStore;

public class MainActivity extends BridgeActivity {

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        // 注册 App 插件（必须在 super.onCreate 之前，否则 load() 不会执行）
        registerPlugin(AppPlugin.class);

        super.onCreate(savedInstanceState);

        // 注入原生文件保存接口到 WebView
        try {
            WebView webView = getBridge().getWebView();
            webView.addJavascriptInterface(new FileHelper(), "FileHelper");
        } catch (Exception e) {
            e.printStackTrace();
        }
    }

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
                    return "OK";
                } else {
                    File dir = Environment.getExternalStoragePublicDirectory(Environment.DIRECTORY_DOWNLOADS);
                    if (!dir.exists()) dir.mkdirs();
                    File file = new File(dir, filename);
                    FileOutputStream fos = new FileOutputStream(file);
                    fos.write(data);
                    fos.close();
                    return "OK";
                }
            } catch (Exception e) {
                return "ERROR: " + e.getMessage();
            }
        }

        @JavascriptInterface
        public String deleteFile(String filename) {
            try {
                if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.Q) {
                    Uri uri = MediaStore.Downloads.EXTERNAL_CONTENT_URI;
                    String selection = MediaStore.Downloads.DISPLAY_NAME + "=?";
                    String[] selectionArgs = new String[]{ filename };
                    int deleted = getContentResolver().delete(uri, selection, selectionArgs);
                    return deleted > 0 ? "OK" : "NOT_FOUND";
                } else {
                    File dir = Environment.getExternalStoragePublicDirectory(Environment.DIRECTORY_DOWNLOADS);
                    File file = new File(dir, filename);
                    if (file.exists() && file.delete()) return "OK";
                    return "NOT_FOUND";
                }
            } catch (Exception e) {
                return "ERROR: " + e.getMessage();
            }
        }
    }
}
