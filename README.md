# 自我管理助手 | Self-Care Tracker

一个帮助你记录和管理个人习惯的移动应用。

A mobile app to help you track and manage personal habits.

---

## ⚠️ 重要免责声明 | Important Disclaimer

### 🔞 年龄限制 | Age Restriction
本软件**仅限年满 18 周岁的成年人**使用。未成年人严禁使用本软件。

This software is **for adults aged 18 and over only**. Minors are strictly prohibited from using this software.

### 📚 仅用于开源学习 | For Open-Source Learning Only
本项目**仅供开源学习和技术交流**使用。任何个人或组织不得将本软件用于任何商业用途或非法活动。

This project is **for open-source learning and technical exchange only**. No individual or organization may use this software for any commercial purpose or illegal activity.

### ⚖️ 法律责任 | Legal Liability
使用本软件所产生的一切后果由使用者自行承担。开发者不对任何使用本软件所导致的直接或间接损失负责。

All consequences arising from the use of this software shall be borne by the user. The developer shall not be responsible for any direct or indirect losses caused by the use of this software.

### 🎭 娱乐声明 | Entertainment Statement
本人开发本软件纯属娱乐行为，不用于任何严肃的医疗或心理治疗用途。

I developed this software purely for entertainment purposes and it is not intended for any serious medical or psychological treatment.

---

## 功能特性 | Features

- 📝 **添加记录** - 计时器或手动补录 | **Add Records** - Timer or manual entry
- 📋 **记录查询** - 查看历史记录，支持编辑和删除 | **Record Management** - View history, edit and delete
- 📊 **数据分析** - 统计总次数、平均时长、最长/最短时长、最喜欢的媒介 | **Data Analysis** - Total count, average duration, max/min duration, favorite medium
- ⚙️ **设置** - 白天/夜晚模式切换、中英文语言切换、数据导出/导入（支持 JSON、CSV、Excel） | **Settings** - Day/night mode, Chinese/English language switch, data export/import (JSON, CSV, Excel)
- 📱 **移动端优化** - 完美适配手机屏幕 | **Mobile Optimized** - Perfect for phone screens
- 🔒 **隐私保护** - 所有数据 100% 保存在本地，不上传任何服务器 | **Privacy Protection** - All data stored locally 100%, never uploaded to any server

---

## 支持平台 | Supported Platforms

- 📱 **Android** - 支持 Android 5.0+ 设备，打包成 APK 安装 | **Android** - Supports Android 5.0+ devices, packaged as APK
- 💻 **Windows** - 支持 Windows 7+ 系统，提供桌面可执行程序 | **Windows** - Supports Windows 7+, provides desktop executable
- 🌐 **Web 浏览器** - 支持所有现代浏览器，直接在浏览器中运行 | **Web Browser** - Supports all modern browsers, runs directly in browser

---

## 技术栈 | Tech Stack

- 纯 HTML/CSS/JavaScript
- PWA (Progressive Web App)
- Capacitor (打包成 Android APK | Package as Android APK)
- Electron (打包成 Windows 桌面程序 | Package as Windows desktop app)
- LocalStorage (本地数据存储 | Local data storage)

---

## 开发 | Development

### 本地运行 | Run Locally

```bash
npm run serve
```

或双击运行 `启动本地服务器.bat`，然后在浏览器打开 http://localhost:8080

Or double-click `启动本地服务器.bat` and open http://localhost:8080 in your browser.

### 同步到 Android | Sync to Android

```bash
npm run sync
```

### 打开 Android Studio | Open Android Studio

```bash
npx cap open android
```

---

## Android APK 版本使用说明 | Android APK Version Instructions

### 找到 APK 文件 | Locate APK File

已打包好的 Android APK 位于：

Packaged Android APK location:

```
c:\Alfredsass\lululu\android\app\build\outputs\apk\debug\app-debug.apk
```

### 安装方法 | Installation Method

1. **将 APK 传输到手机** | **Transfer APK to phone**
   - 通过 USB 数据线连接手机和电脑 | Connect phone to computer via USB cable
   - 或者使用微信、QQ 等工具发送 APK 文件 | Or send APK file via WeChat, QQ, etc.

2. **在手机上安装** | **Install on phone**
   - 在手机文件管理器中找到 APK 文件 | Locate APK file in phone's file manager
   - 点击 APK 文件进行安装 | Tap APK file to install
   - 如果提示"未知来源"，需要在设置中允许安装 | If prompted "Unknown sources", enable in settings

3. **完成！** | **Done!**
   - 安装完成后即可在应用列表中找到 | Find in app list after installation

### APK 特点 | APK Features

- 📱 支持 Android 5.0+ 设备 | Supports Android 5.0+ devices
- 🎯 完美适配手机屏幕 | Perfectly optimized for phone screens
- 🔒 所有数据保存在本地 | All data stored locally
- 🌙 支持白天/夜晚模式 | Supports day/night mode
- 🌐 支持中英文双语 | Supports Chinese/English bilingual

### 重新构建 APK | Rebuild APK

如果需要重新构建 APK：

If you need to rebuild the APK:

1. 同步最新代码 | Sync latest code
   ```bash
   npm run sync
   ```

2. 在 Android Studio 中打开项目 | Open project in Android Studio
   ```bash
   npx cap open android
   ```

3. 在 Android Studio 中构建 APK | Build APK in Android Studio
   - 点击 `Build` → `Build Bundle(s) / APK(s)` → `Build APK(s)`
   - 或者按 `Ctrl+F9` (Windows) / `Cmd+F9` (Mac)

---

## Windows 桌面版本使用说明 | Windows Desktop Version Instructions

### 单文件安装程序（推荐）| Single-File Installer (Recommended)

已打包好的单文件安装程序位于：

Packaged single-file installer location:

```
c:\Alfredsass\lululu\dist\自我管理助手-1.2.0-安装包.exe
```

### 安装程序特点 | Installer Features

- ✅ 单文件安装程序，双击即可安装 | Single-file installer, double-click to install
- ✅ 自动创建开始菜单快捷方式 | Auto-create Start Menu shortcut
- ✅ 可选创建桌面快捷方式 | Optional desktop shortcut
- ✅ 支持自定义安装路径 | Support custom installation path
- ✅ 包含完整的卸载程序 | Includes full uninstaller
- ✅ 安装完成后可自动启动程序 | Auto-launch after installation

### 安装方法 | Installation Method

1. 双击运行 `自我管理助手-1.2.0-安装包.exe` | Double-click `自我管理助手-1.2.0-安装包.exe`
2. 按照安装向导提示操作 | Follow the installation wizard
3. 选择是否创建桌面快捷方式 | Choose whether to create desktop shortcut
4. 完成安装后即可使用 | Ready to use after installation

### 文件夹版本（备选）| Folder Version (Alternative)

如果需要文件夹版本，位于：

If you need the folder version, it's located at:

```
c:\Alfredsass\lululu\dist\win-unpacked\自我管理助手.exe
```

注意：整个 `win-unpacked` 文件夹需要一起使用。

Note: The entire `win-unpacked` folder must be used together.

---

## 版本历史 | Version History

### v1.2
- ✨ 添加数据导出和导入功能（支持 JSON、CSV、Excel）| Added data export/import (JSON, CSV, Excel)
- ✨ 在分析页面添加截图分享功能 | Added screenshot sharing in stats page
- ✨ 在设置页面添加 GitHub 仓库链接 | Added GitHub repository link in settings
- ✨ 添加娱乐声明 | Added entertainment statement
- ✨ 新增 Windows 桌面版本支持 | Added Windows desktop version support
- ✨ 使用 Inno Setup 打包成单文件安装程序 | Packaged as single-file installer using Inno Setup
- 📱 优化移动端显示 | Optimized mobile display
- 🌙 完善白天/夜晚模式切换 | Improved day/night mode switch
- 🌐 支持中英文双语切换 | Support Chinese/English bilingual switch
- 🔒 所有数据 100% 保存在本地 | All data stored 100% locally
- 版本号更新为 1.2 | Version updated to 1.2

### v1.1
- 添加媒介选择（黄片、黄漫、黄文、其他）| Added medium selection (video, comic, text, other)
- 添加备注功能 | Added notes feature
- 添加记录编辑功能 | Added record editing feature
- 分析页面添加"最长时长"和"最喜欢的媒介"统计 | Added "max duration" and "favorite medium" stats

### v1.0
- 初始版本 | Initial version
- 基础的四个模块：添加、记录、分析、设置 | Four basic modules: Add, Records, Stats, Settings

---

## 使用协议 | License

### 自定义使用协议 | Custom License

Copyright (c) 2026

本项目采用自定义使用协议：

This project uses a custom license:

1. ✅ **允许** - 个人学习、研究、修改、分享 | **Allowed** - Personal learning, research, modification, sharing
2. ✅ **允许** - 非商业性质的使用和分发 | **Allowed** - Non-commercial use and distribution
3. ❌ **禁止** - 任何形式的商业用途 | **Prohibited** - Any form of commercial use
4. ❌ **禁止** - 将本软件用于任何非法活动 | **Prohibited** - Using this software for any illegal activity

**免责声明**：本软件按"原样"提供，不提供任何明示或暗示的保证。使用本软件所产生的一切后果由使用者自行承担。

**Disclaimer**: This software is provided "as is" without any express or implied warranty. All consequences arising from the use of this software shall be borne by the user.

---

## Git 仓库说明 | Git Repository Notes

### 大文件处理 | Large File Handling

由于 GitHub 对单个文件的大小限制为 100 MB，以下文件已添加到 `.gitignore` 中，不会提交到 Git 仓库：

Due to GitHub's 100 MB file size limit, the following files are added to `.gitignore` and will not be committed to the Git repository:

- `dist/` - 构建输出文件夹 | Build output folder
- `*.exe` - Windows 可执行文件 | Windows executable files
- `*.apk` - Android 安装包 | Android installation packages

### 如何构建发布版本 | How to Build Release Versions

#### Windows 版本 | Windows Version
```bash
# 使用 Inno Setup 打包
& "C:\Program Files (x86)\Inno Setup 6\ISCC.exe" setup.iss
```

#### Android 版本 | Android Version
```bash
# 同步代码
npm run sync

# 打开 Android Studio
npx cap open android

# 在 Android Studio 中构建 APK
# Build → Build Bundle(s) / APK(s) → Build APK(s)
```

### 发布构建好的文件 | Publishing Built Files

如果你想分享构建好的文件，可以考虑：

If you want to share the built files, you can consider:

- 使用 GitHub Releases 功能 | Use GitHub Releases feature
- 使用其他文件托管服务 | Use other file hosting services
- 在项目 Wiki 中提供下载链接 | Provide download links in project Wiki
