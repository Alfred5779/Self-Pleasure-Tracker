
# 自我管理助手

一个帮助你记录和管理个人习惯的移动应用。

## ⚠️ 重要免责声明

### 🔞 年龄限制
本软件**仅限年满 18 周岁的成年人**使用。未成年人严禁使用本软件。

### 📚 仅用于开源学习
本项目**仅供开源学习和技术交流**使用。任何个人或组织不得将本软件用于任何商业用途或非法活动。

### ⚖️ 法律责任
使用本软件所产生的一切后果由使用者自行承担。开发者不对任何使用本软件所导致的直接或间接损失负责。

## 功能特性

- 📝 **添加记录** - 计时器或手动补录
- 📋 **记录查询** - 查看历史记录，支持编辑和删除
- 📊 **数据分析** - 统计总次数、平均时长、最长/最短时长、最喜欢的媒介
- ⚙️ **设置** - 白天/夜晚模式切换、中英文语言切换、数据导出/导入（支持 JSON、CSV、Excel）
- 📱 **移动端优化** - 完美适配手机屏幕
- 🔒 **隐私保护** - 所有数据 100% 保存在本地，不上传任何服务器

## 技术栈

- 纯 HTML/CSS/JavaScript
- PWA (Progressive Web App)
- Capacitor (打包成 Android APK)
- LocalStorage (本地数据存储)

## 开发

### 本地运行

```bash
npm run serve
```

或双击运行 `启动本地服务器.bat`，然后在浏览器打开 http://localhost:8080

### 同步到 Android

```bash
npm run sync
```

### 打开 Android Studio

```bash
npx cap open android
```

## 版本历史

### v1.2
- 添加数据导出和导入功能（支持 JSON、CSV、Excel）
- 版本号更新为 1.2

### v1.1
- 添加媒介选择（黄片、黄漫、黄文、其他）
- 添加备注功能
- 添加记录编辑功能
- 分析页面添加"最长时长"和"最喜欢的媒介"统计

### v1.0
- 初始版本
- 基础的四个模块：添加、记录、分析、设置

## 开源协议

### MIT License

Copyright (c) 2026

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
