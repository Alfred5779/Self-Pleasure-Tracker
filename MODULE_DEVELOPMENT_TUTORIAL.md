# 模块开发教程 - 给开发者
# Module Development Tutorial - For Developers

---

## 👋 欢迎！

你好！欢迎来开发工具箱平台的模块！

---

## 📋 项目简介

### 这是什么项目？

这是一个**AI优先的模块化工具箱平台**，类似于一个"应用商店"，但是：

- **核心体验是AI酒馆** - 一个AI聊天界面
- **所有功能都是模块** - 可以自由安装/卸载
- **AI自动读取所有模块数据** - 给用户智能分析

### 项目特点

1. 🤖 **AI酒馆为核心** - 用户主要和AI聊天
2. 📦 **模块化设计** - 所有功能都是独立模块
3. 🔌 **简单的接口** - 只需实现几个方法
4. 📚 **完善的文档** - 有详细的开发指南

---

## 🎯 你要做什么？

开发一个可以集成到这个平台的模块！

你的模块会：
1. ✅ 出现在用户的模块列表中
2. ✅ 用户可以安装/卸载/启用/禁用
3. ✅ AI可以自动读取你的模块数据
4. ✅ 有自己的独立界面

---

## 🏗️ 模块架构

### 最简单的模块

```dart
import 'package:flutter/material.dart';
import 'package:toolbox_core/module_interface.dart';

class MyModule extends ModuleInterface {
  @override
  ModuleMetadata get metadata => ModuleMetadata(
    id: 'my_module',
    name: '我的模块',
    nameEn: 'My Module',
    version: '1.0.0',
    description: '这是一个示例模块',
    descriptionEn: 'This is an example module',
    author: '你的名字',
    icon: '🎉',
    category: 'tools',
    permissions: ['local_storage'],
    entryPoint: 'main.dart',
  );

  @override
  Widget buildModuleWidget() {
    return Scaffold(
      appBar: AppBar(title: Text(metadata.name)),
      body: const Center(child: Text('这是我的模块！')),
    );
  }

  @override
  Future<Map<String, dynamic>> getData() async {
    return {'hello': 'world'};
  }

  @override
  Future<String> getAIDataSummary() async {
    return '这是我的模块的数据摘要';
  }

  // ... 其他方法用默认实现即可
}
```

就这么简单！

---

## 📦 模块包格式

### 你的模块需要打包成ZIP

```
my-awesome-module-v1.0.0.zip
├── 📄 module.json              # 模块清单（必需）
├── 📄 main.dart                # 主入口（必需）
├── 📁 assets/                  # 资源（可选）
└── 📄 README.md                # 说明（推荐）
```

---

## 📋 module.json 完整示例

```json
{
  "id": "my_awesome_module",
  "name": "我的超棒模块",
  "nameEn": "My Awesome Module",
  "version": "1.0.0",
  "description": "这是一个超棒的模块",
  "descriptionEn": "This is an awesome module",
  "author": "你的名字",
  "authorUrl": "https://github.com/yourname",
  "icon": "🎉",
  "category": "tools",
  "tags": ["example", "demo"],
  
  "permissions": [
    "local_storage"
  ],
  
  "dataSchema": {
    "items": {
      "type": "array",
      "description": "我的数据"
    }
  },
  
  "aiIntegration": {
    "enabled": true
  },
  
  "entryPoint": "main.dart"
}
```

---

## 🔌 必须实现的接口

### ModuleInterface（11个方法）

```dart
abstract class ModuleInterface {
  // 1. 元数据（从module.json读取）
  ModuleMetadata get metadata;

  // 2. 生命周期
  Future<void> onInstall();      // 安装时
  Future<void> onUninstall();    // 卸载时
  Future<void> onEnable();       // 启用时
  Future<void> onDisable();      // 禁用时

  // 3. UI
  Widget buildModuleWidget();     // 主界面
  Widget buildModuleCard();       // 卡片（仪表板用）

  // 4. 数据
  Future<Map<String, dynamic>> getData();
  Future<void> setData(Map<String, dynamic> data);
  Future<void> clearData();

  // 5. AI集成（最重要！）
  Future<String> getAIDataSummary();
}
```

---

## 🎯 AI集成最重要！

### 实现 getAIDataSummary()

这个方法让AI能读懂你的模块数据！

```dart
@override
Future<String> getAIDataSummary() async {
  final data = await getData();
  
  return '''
=== 我的模块数据 ===
记录数量: ${data['items'].length}
最新一条: ${data['items'].last}
其他信息: ...
''';
}
```

这样AI就能：
1. 自动读取你的模块数据
2. 分析数据
3. 给用户智能建议

---

## 📝 完整示例模块

### 示例1：简单的待办事项模块

```dart
// todo_module/main.dart
import 'package:flutter/material.dart';
import 'package:toolbox_core/module_interface.dart';

class TodoModule extends ModuleInterface {
  List<String> todos = [];

  @override
  ModuleMetadata get metadata => ModuleMetadata(
    id: 'todo_module',
    name: '待办事项',
    nameEn: 'Todo List',
    version: '1.0.0',
    description: '简单的待办事项管理',
    descriptionEn: 'Simple todo list manager',
    author: 'Your Name',
    icon: '✅',
    category: 'productivity',
    permissions: ['local_storage'],
    entryPoint: 'main.dart',
  );

  @override
  Future<void> onInstall() async {
    todos = ['欢迎使用待办事项！'];
  }

  @override
  Widget buildModuleWidget() {
    return Scaffold(
      appBar: AppBar(title: Text(metadata.name)),
      body: ListView.builder(
        itemCount: todos.length,
        itemBuilder: (context, index) {
          return ListTile(title: Text(todos[index]));
        },
      ),
      floatingActionButton: FloatingActionButton(
        child: const Icon(Icons.add),
        onPressed: () {
          todos.add('新待办');
        },
      ),
    );
  }

  @override
  Widget buildModuleCard() {
    return Card(
      child: ListTile(
        leading: Text(metadata.icon, style: const TextStyle(fontSize: 32)),
        title: Text(metadata.name),
        subtitle: Text('${todos.length} 个待办'),
      ),
    );
  }

  @override
  Future<Map<String, dynamic>> getData() async {
    return {'todos': todos, 'count': todos.length};
  }

  @override
  Future<String> getAIDataSummary() async {
    return '''
=== 待办事项模块 ===
待办数量: ${todos.length}
待办列表: ${todos.join(', ')}
''';
  }

  @override
  Future<void> setData(Map<String, dynamic> data) async {
    todos = List<String>.from(data['todos'] ?? []);
  }

  @override
  Future<void> clearData() async {
    todos.clear();
  }

  @override
  Future<void> onEnable() async {}
  
  @override
  Future<void> onDisable() async {}
  
  @override
  Future<void> onUninstall() async {}
}
```

---

## 🚀 快速开始

### 1. 获取模块模板

我们提供了三个官方模板：
- `module-template-simple` - 最简模板
- `module-template-with-ui` - 带UI模板
- `module-template-with-ai` - 带AI集成模板

### 2. 开发你的模块

1. 复制模板
2. 修改 module.json
3. 实现你的功能
4. 重点实现 getAIDataSummary()

### 3. 测试你的模块

使用我们的测试工具：
```bash
toolbox-cli validate my-module.zip
toolbox-cli pack ./my-module
```

### 4. 发布你的模块

1. 打包成ZIP
2. 分享给用户
3. 用户在模块管理中安装

---

## 💡 开发建议

### 1. AI优先设计
- 重点实现好 `getAIDataSummary()`
- 让AI能读懂你的数据
- 这样你的模块才有价值！

### 2. 简单就是美
- 不要过度设计
- 接口很简单，用好它
- 专注于你的模块核心功能

### 3. 用户体验
- 界面要简洁
- 性能要流畅
- 数据要安全

---

## 📚 更多资源

- API完整参考文档
- 示例代码仓库
- 常见问题解答
- 社区交流群

---

## 🎉 开始吧！

现在你可以开始开发你的模块了！有问题随时问！

加油！🚀
