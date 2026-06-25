# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

"起飞助手" (Self-Care Tracker) — a privacy-focused personal habit tracking SPA. All data stored locally in localStorage, zero server communication. Available as a PWA (web) and Android APK (via Capacitor).

## Commands

### Run locally (web)
```bash
# Option A: static server (requires Node.js)
cd web && npx serve -p 3001
# Option B: PowerShell dev server
cd web && pwsh server.ps1
# Option C: open index.html directly (limited features — no service worker)
```

### Build Android APK
```bash
cd apk
npx cap sync android                    # sync web files → android assets
cd android && ./gradlew assembleDebug   # build debug APK
# Output: apk/android/app/build/outputs/apk/debug/app-debug.apk
```

### PWA deploy
Upload `web/` contents (index.html, styles.css, app.js, sw.js, manifest.json) to any HTTPS static host.

## Architecture

**Single monolithic SPA** — all logic lives in `web/app.js` (~6000 lines). No framework, no bundler, no transpilation. The `apk/` directory is a Capacitor wrapper; its `www/` and root-level JS/HTML files are **copies** of `web/` (synced via `npx cap sync`).

### Source of truth

Edit files in `web/` only. After changes, run `npx cap sync android` from `apk/` to propagate to the Android build. Never edit `apk/www/`, `apk/app.js`, or `apk/index.html` directly — they get overwritten.

### `web/app.js` structure

| Section | Description |
|---------|-------------|
| `i18n` object (top ~750 lines) | All UI strings in Chinese/English |
| `init()` / `initApp()` | Bootstrap: load config from localStorage, render first tab |
| `renderAddTab()` | Timer mode + manual record entry |
| `renderRecordsTab()` | History list with edit/delete, calendar view |
| `renderStatsTab()` | Analytics: charts, frequency stats, abstinence tracking |
| `renderSettingsTab()` | Theme, language, data import/export, medium/fetish CRUD |
| `draw*Chart()` functions | Custom Canvas API chart renderers (no chart library) |
| `save*()` / `load*()` functions | localStorage persistence for each data type |
| `t(key)` | i18n lookup function |
| `isCapacitor()` / `isAndroid()` / `isWeb()` | Platform detection for conditional behavior |

### Data model (all in localStorage)

- **`records`**: Array of `{id, startTime, duration, medium, fetishes[], notes, satisfaction}`
- **`media`**: Array of `{id, name}` — selectable mediums
- **`fetishes`**: Array of `{id, name}` — selectable tags
- **`lang`**: `"zh"` or `"en"`
- **`theme`/`colorTheme`/`customTheme`/`customPresets`**: Theme configuration
- **`statsConfig`/`uiConfig`**: Analytics and UI preferences

### Theming

CSS custom properties defined in `web/styles.css`, dynamically overridden by JS. Theme presets are stored as objects; users can also define fully custom color sets. `applyTheme()` and `applyCustomColors()` handle runtime switching.

### i18n

All user-facing strings go through `t(key)`. Translation keys are in the `i18n` object at the top of `app.js`. When adding UI text, add both `zh` and `en` entries.

## Key Conventions

- **Language**: UI text uses Chinese as primary language; code comments and variable names are in English
- **No build step for web**: Edit `web/app.js` directly, refresh browser to test
- **Version sync**: When bumping version, update `web/package.json`, `apk/package.json`, AND `apk/android/app/build.gradle` (`versionCode` + `versionName`)
- **Android SDK**: minSdk 24, compileSdk/targetSdk 36, AGP 9.1.0, Kotlin 1.8.22
- **Gradle repos**: Uses Aliyun Maven mirrors (China) for faster builds
- **No test suite**: There are no automated tests
- **External libraries**: Loaded lazily via CDN at runtime (html2canvas for screenshots, QR libraries) — not bundled
