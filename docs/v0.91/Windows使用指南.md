# Windows 版使用指南
Windows Version Usage Guide

## 版本信息
Version Info

- **版本号 Version**: 0.91

---

## 单文件安装程序（推荐）
Single-File Installer (Recommended)

已打包好的单文件安装程序位于：

Packaged single-file installer location:

```
dist\起飞助手-1.2.0-安装包.exe
```

### 安装程序特点
Installer Features

- ✅ 单文件安装程序，双击即可安装
  Single-file installer, double-click to install

- ✅ 自动创建开始菜单快捷方式
  Auto-create Start Menu shortcut

- ✅ 可选创建桌面快捷方式
  Optional desktop shortcut

- ✅ 支持自定义安装路径
  Support custom installation path

- ✅ 包含完整的卸载程序
  Includes full uninstaller

- ✅ 安装完成后可自动启动程序
  Auto-launch after installation

### 安装方法
Installation Method

1. 双击运行 `起飞助手-1.2.0-安装包.exe`
   Double-click `起飞助手-1.2.0-安装包.exe`

2. 按照安装向导提示操作
   Follow the installation wizard

3. 选择是否创建桌面快捷方式
   Choose whether to create desktop shortcut

4. 完成安装后即可使用
   Ready to use after installation

---

## 文件夹版本（备选）
Folder Version (Alternative)

如果需要文件夹版本，位于：

If you need the folder version, it's located at:

```
dist\win-unpacked\起飞助手.exe
```

注意：整个 `win-unpacked` 文件夹需要一起使用。

Note: The entire `win-unpacked` folder must be used together.

---

## 构建 Windows 版本
Build Windows Version

```bash
# 构建文件夹版本
npm run electron:build:win

# 使用 Inno Setup 打包成安装程序
& "C:\Program Files (x86)\Inno Setup 6\ISCC.exe" setup.iss
```

---

## Windows 版特点
Windows Version Features

- 💻 支持 Windows 7+ 系统
  Supports Windows 7+ systems

- 🎯 桌面程序体验
  Desktop program experience

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
