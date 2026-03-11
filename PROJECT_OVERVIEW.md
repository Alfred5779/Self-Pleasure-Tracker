# 工具箱平台 - 项目总览
# Toolbox Platform - Project Overview

## 📋 项目说明

这是一个**AI优先的模块化工具箱平台**，核心设计理念：

**AI酒馆为核心，所有其他功能都是可选模块**

---

## 🎯 项目愿景

创建一个类似开源社区的移动工具箱平台：
- 🤖 AI酒馆作为核心体验
- 📦 所有功能都是可安装/卸载的模块
- 🔌 开发者可以轻松开发和发布模块
- 📊 AI自动整合所有模块的数据

---

## 📁 已有的设计文档

### 1. ARCHITECTURE.md - 整体架构设计
- 完整的项目目录结构
- 三大框架对比（React Native vs Flutter vs UniApp）
- 最终选择：Flutter

### 2. FLUTTER_AI_GUIDE.md - Flutter AI实现指南
- AI服务实现
- 数据桥接层
- 提示词引擎
- 完整的聊天界面代码

### 3. MODULE_SYSTEM.md - 模块管理系统设计
- 模块包格式
- 模块API接口
- 模块管理器实现
- 模块开发模板
- 开发者支持

---

## 🏗️ 整体架构

```
toolbox-platform/
├── 📁 core/                    # 核心层
│   ├── 📁 module_system/       # 模块系统
│   ├── 📁 ai/                   # AI酒馆
│   ├── 📁 data/                 # 数据层
│   └── 📁 storage/              # 存储层
│
├── 📁 modules/                   # 已安装模块
│   ├── 📁 selfcare_tracker/     # 起飞助手
│   └── [用户安装的模块...]
│
├── 📁 ui/                      # UI层
│   ├── 📁 ai_tavern/            # AI酒馆（主界面）
│   ├── 📁 module_management/     # 模块管理
│   └── 📁 dashboard/            # 仪表板
│
└── 📁 docs/                    # 文档
    ├── 📁 module_dev/            # 模块开发文档
    └── [其他文档...]
```

---

## 🎨 核心功能模块

### 1. AI酒馆（核心）
- 🤖 自然语言对话
- 📊 智能数据分析
- 🎯 个性化建议
- 🔍 跨模块数据查询

### 2. 模块系统
- 📦 模块安装/卸载
- ⚙️ 模块启用/禁用
- 🔌 模块开发接口
- 📚 开发者支持

### 3. 数据桥接
- 🔗 统一数据访问层
- 🤝 AI自动读取所有模块数据
- 🔒 安全的权限管理

---

## 🚀 技术栈

- **框架**: Flutter
- **语言**: Dart
- **状态管理**: flutter_riverpod
- **HTTP**: dio
- **存储**: hive + flutter_secure_storage
- **AI API**: OpenAI / Claude（可扩展）

---

## 📋 开发路线图

### Phase 1: 核心框架（当前阶段）
- [ ] 创建Flutter项目
- [ ] 实现基础架构
- [ ] 实现模块管理器
- [ ] 迁移起飞助手为第一个模块

### Phase 2: AI酒馆
- [ ] 实现聊天界面
- [ ] 集成AI API
- [ ] 实现数据桥接
- [ ] 实现提示词引擎

### Phase 3: 模块生态
- [ ] 创建模块开发模板
- [ ] 编写模块开发文档
- [ ] 实现模块商店
- [ ] 社区功能

---

## 📝 下一步行动（给下一个我）

1. **先看这三个文档**：
   - ARCHITECTURE.md - 整体架构
   - FLUTTER_AI_GUIDE.md - AI实现
   - MODULE_SYSTEM.md - 模块系统

2. **创建新仓库**：
   - 不要在当前仓库继续开发
   - 创建新的Flutter项目仓库

3. **开始实现**：
   - 先从核心框架开始
   - 按Phase 1 → Phase 2 → Phase 3顺序进行

4. **模块开发教程**：
   - 已有MODULE_DEVELOPMENT_TUTORIAL.md
   - 可以给朋友看，让他开始写模块

---

## 💡 重要设计决策

### 为什么选择Flutter？
1. ✅ 性能优秀
2. ✅ UI统一美观
3. ✅ Google长期支持
4. ✅ 适合做工具箱平台

### 为什么AI酒馆为核心？
1. ✅ 提供统一的交互体验
2. ✅ 自动整合所有模块数据
3. ✅ 用户无需学习多个界面
4. ✅ 符合未来趋势

---

## 📚 相关文档索引

- [ARCHITECTURE.md](./ARCHITECTURE.md) - 整体架构设计
- [FLUTTER_AI_GUIDE.md](./FLUTTER_AI_GUIDE.md) - Flutter AI实现指南
- [MODULE_SYSTEM.md](./MODULE_SYSTEM.md) - 模块管理系统设计
- [MODULE_DEVELOPMENT_TUTORIAL.md](./MODULE_DEVELOPMENT_TUTORIAL.md) - 模块开发教程（给朋友）

---

## 🎯 总结

这个项目的核心思想：
1. AI酒馆是唯一的核心界面
2. 所有其他功能都是可选模块
3. 用户可以自由安装/卸载模块
4. 开发者可以轻松开发模块
5. AI自动整合所有模块的数据

加油！🚀
