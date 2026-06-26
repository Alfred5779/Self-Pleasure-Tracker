# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

"起飞助手" (Self-Care Tracker) — a privacy-focused personal habit tracking SPA with an integrated JM Comic bookshelf. All data stored locally (localStorage + IndexedDB), zero server communication for core features. Available as a PWA (web) and Android APK (via Capacitor).

## Commands

### Run locally (web)
```bash
cd web
npm start                   # Express dev server (node server.js) — required for JMComic proxy
npm run serve               # Static server (npx serve -p 3001) — no JMComic proxy
# Or open index.html directly (limited — no service worker, no JMComic)
```
All dev servers run on port 3001. `npm start` is required for bookshelf download feature (proxies JMComic API, handles image descrambling).

### Build Android APK
```bash
# Quick: manually copy web files + rebuild
SRC=web DEST=apk/android/app/src/main/assets/public
cp $SRC/app.js $SRC/index.html $SRC/styles.css $SRC/manifest.json $SRC/sw.js $DEST/
# Then:
cd apk/android && ./gradlew assembleDebug   # debug
cd apk/android && ./gradlew assembleRelease # release
# Output: apk/android/app/build/outputs/apk/{debug,release}/app-*.apk

# Or use cap sync (requires npm install in apk/ first):
cd apk && npx cap sync android
```
After building, copy APK to project root: `cp apk/android/app/build/outputs/apk/release/app-release.apk 起飞助手.apk`

### Sync web → APK (manual, no cap CLI needed)
```bash
cp web/app.js web/index.html web/styles.css web/manifest.json web/sw.js apk/android/app/src/main/assets/public/
cp web/app.js apk/app.js && cp web/app.js apk/www/app.js
```

## Architecture

**Single monolithic SPA** — all logic lives in `web/app.js` (~8000 lines). No framework, no bundler, no transpilation. The `apk/` directory is a Capacitor wrapper; its `www/` and root-level JS/HTML files are **copies** of `web/`.

### Source of truth

Edit files in `web/` only. After changes, copy to `apk/android/app/src/main/assets/public/` and rebuild. Never edit `apk/www/`, `apk/app.js`, or `apk/index.html` directly — they get overwritten.

### Platform detection: `jmNeedProxy()`

**Critical function** — determines whether API calls go through the local Express proxy or directly to JMComic servers:
- **Web (localhost/file:)** → returns `true` → uses `server.js` proxy at `localhost:3001`
- **Android (Capacitor)** → returns `false` → direct fetch via CapacitorHttp (bypasses CORS)

The Capacitor `androidScheme: "https"` makes the WebView hostname `localhost`, so `jmNeedProxy()` must check `window.Capacitor.isNativePlatform()` first. If this check is wrong, all JMComic features break on mobile.

### `web/app.js` structure

| Section | Description |
|---------|-------------|
| `i18n` object (top ~800 lines) | All UI strings in Chinese/English |
| `init()` / `initApp()` | Bootstrap: load config from localStorage, render first tab |
| `renderAddTab()` | Timer mode + manual record entry |
| `renderRecordsTab()` | History list with edit/delete, calendar view |
| `renderStatsTab()` | Analytics: charts, frequency stats, abstinence tracking |
| `renderSettingsTab()` | Theme, language, data import/export, medium/fetish CRUD |
| `renderBookshelfTab()` | JM Comic bookshelf: main/search/reader/downloads sub-pages |
| JMComic section (~6200-6600) | API client, encryption (AES-ECB), image descrambling, download pipeline |
| IndexedDB section (~6560-6640) | `jmDbOpen/Save/List/Get/Delete` for comic storage |
| `draw*Chart()` functions | Custom Canvas API chart renderers (no chart library) |
| `hideNav()` / `showNav()` | Hide bottom nav for sub-pages (reader, settings management, etc.) |

### JM Comic download pipeline

1. `jmApiRequest()` → AES-ECB decrypt → get album/chapter info
2. `jmGetChapter()` → fetch `scramble_id` from `chapter_view_template` (proxy on web, direct on mobile)
3. Image download → concurrent (5 channels) → `jmDescrambleCanvas()` or server-side `descrambleImage()`
4. Store as `pages: [base64, ...]` in IndexedDB (not PDF — Android WebView can't render PDF in-page)
5. Reader renders `<img>` tags with `loading="lazy"`

### Data model

**localStorage** (core app):
- `records`: `[{id, startTime, duration, medium, fetishes[], notes, satisfaction}]`
- `media` / `fetishes`: `[{id, name}]`
- `lang`: `"zh"` or `"en"`
- `theme`/`colorTheme`/`customTheme`/`customPresets`: Theme config
- `statsConfig`/`uiConfig`: Analytics and UI prefs (includes `bsViewMode`, `bsGridCols`)

**IndexedDB** `jm_comics` → `comics` store (bookshelf):
- `{albumId, title, author, tags, chapters[], coverBlob, pdfBlob, pages[], favorite, jmTags[], addedAt, source}`
- `pages` is the primary display format; `pdfBlob` is legacy (pre-v1.0)

### `web/server.js` (~260 lines)

Express dev server providing JMComic APIs (only needed on web, not on mobile):
- `POST /api/jm/proxy` — CORS proxy for JMComic API
- `POST /api/jm/images` — concurrent image download + descrambling + SSE progress
- `POST /api/jm/pdf` — PDF generation from base64 images (legacy, no longer used by default)

### Theming & i18n

CSS custom properties in `web/styles.css`, overridden by JS. All user-facing strings go through `t(key)` with `zh`/`en` entries in the `i18n` object.

## Key Conventions

- **Language**: UI text in Chinese as primary; code comments and variable names in English
- **No build step for web**: Edit `web/app.js` directly, refresh browser to test
- **Version sync**: Update `web/package.json`, `apk/package.json`, AND `apk/android/app/build.gradle` (`versionCode` + `versionName`)
- **Android SDK**: minSdk 24, compileSdk/targetSdk 36, AGP 9.1.0, Kotlin 1.8.22
- **Gradle repos**: Aliyun Maven mirrors (China)
- **No test suite**: No automated tests
- **External libraries**: CDN at runtime (crypto-js, pdf-lib in `index.html`; html2canvas, pdf.js loaded lazily)
- **Additional docs**: `CODE_WIKI.md` has detailed technical documentation

## Web → Mobile Porting Checklist

When adding any feature to `web/app.js`, check these **before** syncing to APK:

### CDN / 外部资源
- **Web**: 可以访问 `cdnjs.cloudflare.com`, `unpkg.com` 等 CDN
- **Android**: 只能访问本地 `assets/public/` 下的文件 + 远程 HTTP API
- **检查清单**:
  - 所有 `<script src="https://...">` 标签 → 手机上不可用，必须本地化或用 `ensureJMComicDeps()` 懒加载
  - pdf.js 需要 `pdf.worker.min.js` 与 `pdf.min.js` 版本匹配且在同一目录，`workerSrc` 指向相对路径 `'pdf.worker.min.js'`。设空字符串或 `false` 均无效，会回退到 `https://localhost/pdf.worker.min.js` 报错
  - `html2canvas`, `qrcodejs` 等 CDN 库在手机上无法加载 → 这些功能在手机上会静默失败

### Web Worker / Service Worker
- **Web**: Service Worker 正常工作，Worker 文件从 origin 加载
- **Android**: `androidScheme: "https"` 使 origin 为 `https://localhost`，没有实际服务器
- **检查清单**:
  - Worker 文件必须本地打包（放在 `assets/public/`），或禁用 Worker（设 `workerSrc = false`）
  - Service Worker 在 Capacitor 中行为不同，`sw.js` 注册可能失败但不影响功能

### 网络 / CORS
- **Web**: 受浏览器 CORS 限制，JMComic API 必须走 `server.js` 代理
- **Android**: `CapacitorHttp` 绕过 CORS，可直连 API
- **检查清单**:
  - 所有 `jmNeedProxy()` 判断是否正确覆盖新 API 调用
  - 新增的 `fetch()` 调用在手机上是否能直连目标服务器

### 文件系统
- **Web**: 无法访问本地文件系统
- **Android**: `window.FileHelper.saveFile()` / `FileHelper.deleteFile()` 可操作 Downloads 目录
- **检查清单**:
  - 下载文件时记录文件名（`localPdfName`），删除时同步清理
  - 不要在 IndexedDB 中存储过大的 Blob（手机内存有限）

### 快速验证流程
```bash
# 1. 在 web 版本测试功能正常
cd web && npm start

# 2. 同步到 APK
cp web/app.js web/index.html web/styles.css web/manifest.json web/sw.js apk/android/app/src/main/assets/public/

# 3. 构建并在手机上测试
cd apk/android && ./gradlew assembleRelease
```
