# 起飞助手
Self-Care Tracker

一个帮助你记录和管理个人习惯的移动应用。

A mobile app to help you track and manage personal habits.

---

## ⚠️ 重要免责声明
Important Disclaimer

### 🔞 年龄限制
Age Restriction

本软件**仅限年满 18 周岁的成年人**使用。未成年人严禁使用本软件。

This software is **for adults aged 18 and over only**. Minors are strictly prohibited from using this software.

### 📚 仅用于开源学习
For Open-Source Learning Only

本项目**仅供开源学习和技术交流**使用。任何个人或组织不得将本软件用于任何商业用途或非法活动。

This project is **for open-source learning and technical exchange only**. No individual or organization may use this software for any commercial purpose or illegal activity.

### ⚖️ 法律责任
Legal Liability

使用本软件所产生的一切后果由使用者自行承担。开发者不对任何使用本软件所导致的直接或间接损失负责。

All consequences arising from the use of this software shall be borne by the user. The developer shall not be responsible for any direct or indirect losses caused by the use of this software.

### 🎭 娱乐声明
Entertainment Statement

本人开发本软件纯属娱乐行为，不用于任何严肃的医疗或心理治疗用途。

I developed this software purely for entertainment purposes and it is not intended for any serious medical or psychological treatment.

---

## 功能特性
Features

- 📝 **添加记录** - 计时器或手动补录，可选择媒介和性癖（支持多选）
- **Add Records** - Timer or manual entry, select medium and fetish (supports multi-select)

- 📋 **记录查询** - 查看历史记录，支持编辑和删除
- **Record Management** - View history, edit and delete

- 📊 **数据分析** - 统计总次数、平均时长、最长/最短时长、频率、最长禁欲天数、次数变化、柱状图趋势、最常用的媒介和性癖，以及媒介和性癖分布饼状图
- **Data Analysis** - Total count, average duration, max/min duration, frequency, longest abstinence, count change, bar chart trend, most used medium and fetish, and medium/fetish distribution pie charts

- ⚙️ **设置** - 白天/夜晚模式切换、中英文语言切换、数据导出/导入（支持 JSON、CSV、Excel）、媒介管理、性癖管理、统计无记录开关
- **Settings** - Day/night mode, Chinese/English language switch, data export/import (JSON, CSV, Excel), medium management, fetish management, include empty records toggle

- 📱 **移动端优化** - 完美适配手机屏幕
- **Mobile Optimized** - Perfect for phone screens

- 🔒 **隐私保护** - 所有数据 100% 保存在本地，不上传任何服务器
- **Privacy Protection** - All data stored locally 100%, never uploaded to any server

---

## 支持平台
Supported Platforms

- 📱 **Android** - 支持 Android 5.0+ 设备，打包成 APK 安装
- **Android** - Supports Android 5.0+ devices, packaged as APK

- 💻 **Windows** - 支持 Windows 7+ 系统，提供桌面可执行程序
- **Windows** - Supports Windows 7+, provides desktop executable

- 🌐 **Web 浏览器** - 支持所有现代浏览器，直接在浏览器中运行
- **Web Browser** - Supports all modern browsers, runs directly in browser

---

## 技术栈
Tech Stack

- 纯 HTML/CSS/JavaScript
- PWA (Progressive Web App)
- Capacitor - 打包成 Android APK
- Package as Android APK
- Electron - 打包成 Windows 桌面程序
- Package as Windows desktop app
- LocalStorage - 本地数据存储
- Local data storage

---

## 项目结构
Project Structure

```
lululu/
├── docs/                 # 使用指南和文档
│   └── v0.91.6/          # v0.91.6 版本文档
│       ├── APK使用指南.md      # Android 使用指南
│       ├── Windows使用指南.md  # Windows 使用指南
│       ├── Web使用指南.md      # Web 使用指南
│       └── 开发指南.md         # 开发指南
├── apk/                  # APK 项目目录
│   └── android/          # Android 项目
│       └── app/
│           └── src/
│               └── main/
│                   ├── assets/public/  # 打包后的网页文件
│                   └── res/            # Android 资源文件
├── web/                  # 网页源代码（主目录）
│   ├── app.js            # 主应用逻辑
│   ├── index.html        # 主页面
│   ├── styles.css        # 样式文件
│   ├── manifest.json     # PWA 清单
│   ├── sw.js             # Service Worker
│   └── 启动Web页面.bat   # Web 服务器启动脚本
├── dist/                 # 构建输出目录
├── node_modules/         # 依赖包
├── package.json          # 项目配置
├── capacitor.config.json # Capacitor 配置
└── README.md             # 本文档
```

---

## 使用指南
Usage Guides

详细的使用指南请参考对应版本的文档：

For detailed usage guides, please refer to the corresponding version documents:

- 📱 [APK 使用指南](docs/v0.91.6/APK使用指南.md) - Android 版本安装和使用
- [APK Usage Guide](docs/v0.91.6/APK使用指南.md) - Android version installation and usage

- 🌐 [Web 使用指南](docs/v0.91.6/Web使用指南.md) - Web 浏览器版本使用
- [Web Usage Guide](docs/v0.91.6/Web使用指南.md) - Web browser version usage

- 🔧 [开发指南](docs/v0.91.6/开发指南.md) - 开发者使用和构建指南
- [Development Guide](docs/v0.91.6/开发指南.md) - Developer usage and build guide

---

## 版本历史
Version History

### v0.91.8
- ✨ 优化折线图铺开显示，在每个数据点标注时间
- Optimized line chart with wider layout and time labels at each point
- ✨ 修复日历和统计页面的时区偏移问题
- Fixed timezone offset issues in calendar and stats pages

### v0.91.7
- ✨ 新增折线图数据可视化和满意度评分
- Added line chart data visualization and satisfaction rating
- ✨ 添加全部数据视图，可查看所有记录的统计分析
- Added all data view for analyzing all records

### v0.91.6
- ✨ 将分析界面柱状图改为横向显示
- Changed analytics bar chart to horizontal display
- ✨ 实现外观设置整体导入导出
- Implemented appearance settings import/export
- ✨ 记录界面显示与上一条的时长差异
- Show duration difference compared to previous record

### v0.91.5
- ✨ 视觉风格自定义：圆角、阴影、动画、布局尺寸
- Visual style customization: corner radius, shadow, animation, layout
- ✨ 新增渐变色、高对比度等主题预设
- Added gradient, high contrast and more theme presets

### v0.91.4
- ✨ 高级主题自定义，支持自定义每个颜色
- Advanced theme customization with per-color control

### v0.91.3
- ✨ 优化导出模块，设置和记录分开导出
- Optimized export: separate settings and records export

### v0.91.2
- ✨ 高度自定义分析功能，可控制统计指标显示
- Highly customizable analytics with controllable stats display
- ✨ 新增分析模板保存和加载功能
- Added analytics template save and load

### v0.91.1
- ✨ 每周起算日支持全部7天，新增分析管理功能
- Week start day supports all 7 days, added stats management
- ✨ 优化柱状图显示，删除Windows桌面版本
- Optimized bar chart, removed Windows desktop version

### v0.91
- ✨ 添加性癖管理，支持多选，新增饼状图统计
- Added fetish management with multi-select and pie charts
- ✨ 优化柱状图和夜间模式显示
- Optimized bar chart and dark mode display

### v0.78
- ✨ 添加媒介管理、免责声明和更新日志界面
- Added medium management, disclaimer and changelog pages

### v0.69
- ✨ 添加数据导出导入（JSON/CSV/Excel）和截图分享
- Added data export/import (JSON/CSV/Excel) and screenshot sharing
- ✨ 支持中英文双语切换，所有数据本地存储
- Added bilingual support, all data stored locally

### v0.13
- ✨ 初始版本：添加、记录、分析、设置四大模块
- Initial version: Add, Records, Stats, Settings modules

---

## 使用协议
License

### 自定义使用协议
Custom License

Copyright (c) 2026

本项目采用自定义使用协议：

This project uses a custom license:

1. ✅ **允许** - 个人学习、研究、修改、分享
   **Allowed** - Personal learning, research, modification, sharing

2. ✅ **允许** - 非商业性质的使用和分发
   **Allowed** - Non-commercial use and distribution

3. ❌ **禁止** - 任何形式的商业用途
   **Prohibited** - Any form of commercial use

4. ❌ **禁止** - 将本软件用于任何非法活动
   **Prohibited** - Using this software for any illegal activity

**免责声明**：本软件按"原样"提供，不提供任何明示或暗示的保证。使用本软件所产生的一切后果由使用者自行承担。

**Disclaimer**: This software is provided "as is" without any express or implied warranty. All consequences arising from the use of this software shall be borne by the user.
