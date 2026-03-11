# 工具箱平台架构设计
# Toolbox Platform Architecture Design

## 📋 项目愿景 Project Vision

创建一个开源社区风格的工具箱平台，支持：
- 模块化应用管理
- AI智能交互
- 数据统一管理

---

## 🏗️ 整体架构 Overall Architecture

```
toolbox-platform/
├── 📁 core/                    # 核心平台 Core Platform
│   ├── 📁 module-manager/      # 模块管理器 Module Manager
│   ├── 📁 data-bridge/         # 数据桥接 Data Bridge
│   ├── 📁 ai-integration/      # AI集成 AI Integration
│   └── 📁 shared-utils/        # 共享工具 Shared Utilities
│
├── 📁 modules/                 # 应用模块 Application Modules
│   ├── 📁 selfcare-tracker/    # 起飞助手 (当前项目)
│   ├── 📁 module-template/     # 模块模板 Module Template
│   └── 📁 [更多模块...]/       # More modules...
│
├── 📁 ai-tavern/               # AI酒馆 AI Tavern
│   ├── 📁 chat-interface/      # 聊天界面 Chat Interface
│   ├── 📁 knowledge-base/      # 知识库 Knowledge Base
│   └── 📁 personality/         # AI人格 AI Personality
│
├── 📁 ui/                      # 用户界面 User Interface
│   ├── 📁 dashboard/           # 仪表板 Dashboard
│   ├── 📁 module-store/        # 模块商店 Module Store
│   └── 📁 settings/            # 设置 Settings
│
├── 📁 docs/                    # 文档 Documentation
│   ├── 📁 module-dev-guide/    # 模块开发指南
│   └── 📁 api-reference/       # API参考
│
└── 📄 config.json              # 配置文件 Configuration
```

---

## 🎯 核心功能 Core Features

### 1. 模块系统 Module System

#### 模块结构 Module Structure
```
module-name/
├── 📄 module.json          # 模块清单 Module Manifest
├── 📄 main.js             # 主入口 Main Entry
├── 📄 styles.css          # 样式 Styles
├── 📁 assets/             # 资源 Assets
└── 📁 data/               # 数据存储 Data Storage (可选)
```

#### module.json 示例 Example
```json
{
  "id": "selfcare-tracker",
  "name": "起飞助手",
  "nameEn": "Self-Care Tracker",
  "version": "0.91.6",
  "description": "个人习惯记录与管理工具",
  "descriptionEn": "Personal habit tracking and management tool",
  "author": "Your Name",
  "icon": "✈️",
  "permissions": [
    "localStorage",
    "data-export"
  ],
  "dataSchema": {
    "records": "array",
    "settings": "object"
  },
  "entryPoint": "main.js"
}
```

### 2. 数据桥接 Data Bridge

统一的数据访问层，让AI可以读取所有模块数据：

```javascript
// 数据桥接 API
class DataBridge {
  // 获取所有已安装模块
  getInstalledModules()
  
  // 获取指定模块的数据
  getModuleData(moduleId)
  
  // 导出所有模块数据
  exportAllData()
  
  // 注册数据变更监听
  onDataChange(callback)
}
```

### 3. AI酒馆 AI Tavern

#### 核心功能 Core Features
- 🤖 多AI人格切换 Multiple AI personalities
- 💬 自然语言对话 Natural language conversation
- 📊 智能数据分析 Smart data analysis
- 🎯 个性化建议 Personalized recommendations
- 🔍 跨模块数据查询 Cross-module data query

#### AI能力 AI Capabilities
1. **数据理解 Data Understanding**
   - 读取起飞助手的记录数据
   - 分析习惯趋势
   - 识别模式和异常

2. **智能交互 Smart Interaction**
   - "帮我看看最近的记录趋势"
   - "给我一些改善建议"
   - "对比一下这两个月的数据"

3. **跨模块整合 Cross-module Integration**
   - 整合多个模块的数据
   - 提供全面的洞察

---

## 📁 目录结构详解 Directory Structure Details

### Core 核心层

```
core/
├── module-manager/
│   ├── loader.js          # 模块加载器
│   ├── registry.js        # 模块注册表
│   └── sandbox.js         # 模块沙箱
│
├── data-bridge/
│   ├── api.js             # 数据API
│   ├── validator.js       # 数据验证
│   └── exporter.js        # 数据导出
│
├── ai-integration/
│   ├── llm-client.js      # LLM客户端
│   ├── prompt-engine.js   # 提示词引擎
│   └── context-builder.js # 上下文构建器
│
└── shared-utils/
    ├── storage.js         # 存储工具
    ├── i18n.js            # 国际化
    └── logger.js          # 日志工具
```

### AI Tavern AI酒馆

```
ai-tavern/
├── chat-interface/
│   ├── chat-window.js     # 聊天窗口
│   ├── message-bubble.js  # 消息气泡
│   └── input-area.js      # 输入区域
│
├── knowledge-base/
│   ├── module-docs.js     # 模块文档
│   ├── usage-guide.js     # 使用指南
│   └── faq.js             # 常见问题
│
└── personality/
    ├── default.js         # 默认人格
    ├── friendly.js        # 友好型
    ├── professional.js    # 专业型
    └── humorous.js        # 幽默型
```

### Modules 模块层

```
modules/
├── selfcare-tracker/      # 起飞助手（迁移为模块）
│   ├── module.json
│   ├── main.js
│   ├── styles.css
│   └── assets/
│
└── module-template/       # 新模块模板
    ├── module.json
    ├── main.js
    └── styles.css
```

---

## 🔌 API 设计 API Design

### 模块生命周期 Module Lifecycle

```javascript
// 模块必须实现的接口
interface Module {
  // 初始化
  init(config): Promise<void>
  
  // 激活（显示界面）
  activate(): void
  
  // 停用（隐藏界面）
  deactivate(): void
  
  // 销毁
  destroy(): void
  
  // 导出数据
  exportData(): any
  
  // 导入数据
  importData(data): void
}
```

### 数据访问 API Data Access API

```javascript
// 为AI提供的数据访问
window.ToolboxAPI = {
  // 获取模块列表
  getModules: () => Module[],
  
  // 获取模块数据
  getModuleData: (moduleId) => any,
  
  // 执行模块操作
  executeModuleAction: (moduleId, action, params) => any,
  
  // 发送消息给用户
  sendMessage: (message) => void
}
```

---

## 🚀 实施路线图 Implementation Roadmap

### Phase 1: 核心框架 Core Framework (Week 1-2)
- [ ] 创建项目目录结构
- [ ] 实现模块加载器
- [ ] 实现数据桥接基础
- [ ] 迁移起飞助手为第一个模块

### Phase 2: AI酒馆 AI Tavern (Week 3-4)
- [ ] 实现聊天界面
- [ ] 集成LLM API
- [ ] 实现数据上下文构建
- [ ] 实现基础对话功能

### Phase 3: 模块生态 Module Ecosystem (Week 5-6)
- [ ] 创建模块开发模板
- [ ] 编写模块开发文档
- [ ] 实现模块商店
- [ ] 添加更多示例模块

### Phase 4: 优化完善 Optimization (Week 7+)
- [ ] 性能优化
- [ ] 安全加固
- [ ] 用户体验优化
- [ ] 社区功能

---

## 🛠️ 技术栈推荐 Tech Stack Recommendations

### 前端 Frontend
- **框架**: Vue 3 或 React
- **状态管理**: Pinia 或 Zustand
- **UI组件**: Element Plus 或 Ant Design
- **构建工具**: Vite

### AI集成 AI Integration
- **LLM**: OpenAI API / Claude API / 本地模型
- **提示词框架**: LangChain (可选)

### 数据存储 Data Storage
- **本地**: IndexedDB (比localStorage更强大)
- **同步**: 可选云端同步

---

## 📝 下一步行动 Next Steps

1. **创建新仓库** - 为工具箱平台创建新的git仓库
2. **设计UI原型** - 画出仪表板和模块商店的草图
3. **选择技术栈** - 确定使用哪个前端框架
4. **开始实现** - 从核心框架开始

---

## 💡 设计亮点 Design Highlights

1. **沙箱安全** - 模块运行在沙箱中，互不影响
2. **统一数据层** - 所有模块数据通过统一接口访问
3. **AI优先** - 从一开始就设计AI友好的数据结构
4. **可扩展** - 轻松添加新模块和新功能
5. **开源友好** - 采用开源社区的最佳实践

---

需要我开始创建具体的代码实现吗？
