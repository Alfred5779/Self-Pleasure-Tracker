# APK 使用指南
APK Usage Guide

## 版本信息
Version Info

- **版本号 Version**: 0.91
- **版本代码 Version Code**: 6

---

## 前置条件
Prerequisites

- 安装 Android 5.0+ 设备
- Supports Android 5.0+ devices

---

## 安装方法
Installation Methods

### 方法 1: USB 传输
Method 1: USB Transfer

1. 用 USB 数据线连接手机和电脑
   Connect phone to computer via USB cable

2. 在手机上启用 USB 调试（可选）
   Enable USB debugging on phone (optional)

3. 将 APK 文件复制到手机存储
   Copy APK file to phone storage

4. 在手机文件管理器中找到 APK 文件
   Locate APK file in phone's file manager

5. 点击 APK 文件进行安装
   Tap APK file to install

6. 如果提示"未知来源"，在设置中允许安装
   If prompted "Unknown sources", enable in settings

### 方法 2: 无线传输
Method 2: Wireless Transfer

- 使用微信、QQ 等聊天工具发送 APK 文件
  Send APK file via WeChat, QQ, etc.

- 使用云盘（百度网盘、Google Drive 等）上传后下载
  Upload to cloud storage (Baidu Cloud, Google Drive, etc.) then download

- 使用 AirDroid、ShareMe 等文件传输工具
  Use file transfer tools like AirDroid, ShareMe, etc.

### 方法 3: 通过 ADB 安装（开发者）
Method 3: Install via ADB (Developers)

```bash
# 确保手机已连接并启用 USB 调试
adb devices

# 安装 APK
adb install android/app/build/outputs/apk/debug/app-debug.apk

# 如果已安装，使用 -r 参数覆盖安装
adb install -r android/app/build/outputs/apk/debug/app-debug.apk
```

---

## APK 特点
APK Features

- 📱 支持 Android 5.0+ 设备
  Supports Android 5.0+ devices

- 🎯 完美适配手机屏幕
  Perfectly optimized for phone screens

- 🔒 所有数据保存在本地
  All data stored locally

- 🌙 支持白天/夜晚模式
  Supports day/night mode

- 🌐 支持中英文双语
  Supports Chinese/English bilingual

---

## v0.91 更新内容
What's New in v0.91

- ✨ 添加性癖管理功能，与媒介管理并列
  Added fetish management, parallel to medium management

- ✨ 在添加/编辑记录时可选择性癖（支持多选）
  Added fetish selection when adding/editing records (supports multi-select)

- ✨ 分析页面新增最常用的性癖统计
  Added most used fetish statistics in analytics page

- ✨ 新增媒介和性癖分布饼状图
  Added pie charts for medium and fetish distribution

- ✨ 新增统计无记录的设置选项
  Added setting option to include empty records in statistics

- ✨ 删除媒介/性癖时同步更新相关记录
  Automatically update related records when deleting medium/fetish

- ✨ 将"最喜欢的媒介"改为"最常用的媒介"
  Changed "Favorite Medium" to "Most Used Medium"

- ✨ 默认性癖改为"纯爱"
  Changed default fetish to "Pure Love"

- ✨ 优化分析页面布局
  Optimized analytics page layout

- ✨ 新增性癖多选功能，可同时选择多个性癖
  Added multi-fetish selection, can select multiple fetishes at once

- ✨ 增大柱状图尺寸，优化视觉效果
  Increased bar chart size for better visual experience

- ✨ 修复年份柱状图只显示双数月的问题，现在完整显示12个月
  Fixed year bar chart only showing even months, now shows all 12 months

- ✨ 修复自定义时间范围的柱状图显示问题
  Fixed custom time range bar chart display issue

- ✨ 优化夜晚模式下柱状图文字颜色显示
  Improved bar chart text color in dark mode

- ⚡ 优化代码性能，添加缓存机制减少重复计算
  Optimized code performance with caching mechanism
