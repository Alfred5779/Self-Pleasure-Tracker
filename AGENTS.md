# AGENTS.md

This file provides guidance to Codex (Codex.ai/code) when working with code in this repository.

## Project snapshot

“起飞助手” is a privacy-first habit tracker SPA with an integrated JM Comic bookshelf. Core app data stays local in `localStorage` and `IndexedDB`; there is no backend for the main product flows. The app ships as:
- Web/PWA from `web/`
- Android APK via Capacitor from `apk/android/`
- Legacy Electron desktop packaging is still present, but the Web/PWA and Android builds are the primary targets

## Common commands

### Web development
```bash
cd web
npm start        # Express dev server on :3001; required for JMComic proxy/image handling
npm run serve    # Static preview on :3001; no JMComic proxy
```

### Android build / sync
```bash
# Copy the web build inputs into the Android assets folder
cp web/app.js web/index.html web/styles.css web/manifest.json web/sw.js apk/android/app/src/main/assets/public/
cp web/app.js apk/app.js && cp web/app.js apk/www/app.js

# Build APK
cd apk/android && ./gradlew assembleDebug
cd apk/android && ./gradlew assembleRelease
```

### Capacitor sync
```bash
cd apk
npx cap sync android
```

### Legacy desktop build
```bash
cd apk
npm run electron:build:win
```

### Tests and lint
- There is no automated test suite or lint command in the repo today.
- `npm test` in both `web/` and `apk/` is a placeholder that exits with an error.
- For a manual single-feature check, run the relevant app path directly (usually `cd web && npm start`) and verify the affected flow in-browser before syncing to Android.

## High-level architecture

### Source of truth
Edit `web/` first. The Android `apk/` tree contains copies of the web app plus native wrapper code; those generated/copy files should be refreshed after web changes.

### Web app structure
The entire web app is a single monolithic SPA in `web/app.js`. The important sections are:
- `i18n` near the top: all user-facing strings for Chinese/English UI
- Bootstrap/init flow: config load, theme/UI application, initial tab rendering
- Main tabs: add record, record history, analytics, settings, JM Comic bookshelf
- Analytics: custom Canvas-based chart renderers, no charting library
- Bookshelf/JMComic: API client, AES-ECB handling, image descrambling, download pipeline
- Persistence: `localStorage` for the core tracker, `IndexedDB` (`jm_comics`) for bookshelf content

### Web runtime pieces
- `web/index.html` loads local PDF.js assets and sets the worker source
- `web/server.js` is the local Express helper for JMComic proxying, image download/descrambling, and legacy PDF generation; it is only needed on the web path
- `web/manifest.json` and `web/sw.js` provide the PWA shell/offline caching

### Android wrapper
The Android app is a Capacitor shell around the web app.
- `MainActivity.java` injects JS interfaces into the WebView for native file operations and PDF handling
- `PdfReaderActivity.java` is a native PDF viewer used for local cached PDFs
- `AndroidManifest.xml` wires the launcher activity, PDF reader activity, and file provider permissions

### Platform-sensitive behavior
`jmNeedProxy()` is critical: web/file environments should go through the local Express proxy, while Capacitor on Android should use direct fetches. If this detection is wrong, JMComic features break on mobile.

### Mobile / web parity rules
When changing `web/app.js`, keep these in mind before syncing to APK:
- Any runtime dependency used on Android must be local-bundled under `web/` or otherwise available from the APK assets
- `pdf.min.js` and `pdf.worker.min.js` must stay in sync and be loaded from the same directory
- New JMComic or network calls need to be checked against the proxy/direct-fetch split
- Large downloadable assets should not be assumed to work from CDN on Android

## Version sync
Keep the app version aligned in:
- `web/package.json`
- `apk/package.json`
- `apk/android/app/build.gradle` (`versionCode` and `versionName`)

## Practical development flow
1. Change `web/` source first.
2. Run the web app with `cd web && npm start` and verify the feature there.
3. Copy/sync the updated web files into the Android assets directory.
4. Build `apk/android` and verify the Android behavior if the change touches mobile-specific code.

## Useful references in this repo
- `CODE_WIKI.md` contains deeper functional and architectural notes
- `AGENTS.md` should stay short, focused, and aligned with the current source of truth in `web/`
