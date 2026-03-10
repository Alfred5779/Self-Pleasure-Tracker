# 起飞助手 v0.91.6
Self-Care Tracker v0.91.6

## 📱 Android APK 版本

### 下载 Download

- **app-release.apk** - Android 安装包
  - 适用于 Android 5.0+ 设备
  - 文件大小：约 3-5 MB

### 安装说明 Installation Instructions

1. 下载 `app-release.apk`
2. 在手机上打开安装
3. 如果提示"未知来源"，请在设置中允许安装未知应用
4. 安装完成后即可使用

---

## 🌐 Web 版本

### 下载 Download

- **web.zip** - Web 版本压缩包
  - 适用于所有平台（Windows/Mac/Linux）
  - 仅需要浏览器即可使用

### 使用说明 Usage Instructions

1. 下载 `web.zip`
2. 解压到任意文件夹
3. 双击 `启动Web页面.bat`（Windows）或直接打开 `index.html`
4. 浏览器会自动打开应用

#### 进阶使用 Advanced Usage

如果直接打开 `index.html` 遇到浏览器限制，可以使用本地服务器：

**Windows:**
1. 右键点击 `server.ps1`
2. 选择 "Run with PowerShell"
3. 访问 http://localhost:8000

**其他平台:**
```bash
# 使用 Python
python -m http.server 8000
# 然后访问 http://localhost:8000
```

---

## 🆕 v0.91.6 更新内容 What's New in v0.91.6

### ✨ 新功能 New Features

- 优化手机版柱状图显示，增加柱间距，避免日期重叠
- Optimized mobile bar chart display, increased bar spacing, avoid date overlapping

- 在记录界面显示每条记录与上一条的时长差异
- Show duration difference compared to previous record in records page

- 快了用红色显示，慢了用绿色显示
- Faster shown in red, slower shown in green

- 实现外观设置整体导入导出功能
- Implemented appearance settings import/export

- 允许自定义外观保存为预设
- Allow saving custom appearance as preset

- 将导入导出按钮移到外观管理顶部
- Moved import/export buttons to top of appearance management

- 在自定义主题区域添加保存按钮
- Added save button to custom theme section

- 将分析界面的纵向柱状图改为横向
- Changed vertical bar chart to horizontal in analytics page

- 优化Web端启动方式，支持多种启动方法
- Optimized Web startup method, supports multiple launch options

### 📱 版本信息 Version Info

- 版本号 Version: 0.91.6
- 版本代码 Version Code: 11
- 更新日期 Release Date: 2026-03-10

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

## 📝 使用提示 Usage Tips

- 所有数据保存在本地，不上传服务器
- All data stored locally, never uploaded to any server
- 建议定期使用应用内的导出功能备份数据
- Regularly backup your data using the in-app export feature
- 清除浏览器数据/卸载应用会丢失记录
- Clearing browser data/uninstalling app will lose records

---

## 🐛 问题反馈 Bug Reports

如有问题，请在 GitHub Issues 中反馈。

If you encounter any issues, please report them in GitHub Issues.
