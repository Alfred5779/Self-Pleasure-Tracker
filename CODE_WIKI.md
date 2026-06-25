# 起飞助手（Self-Pleasure-Tracker）Code Wiki

## 1 项目概述

### 1.1 项目简介

起飞助手（Self-Care Tracker）是一款帮助用户记录和分析个人习惯的移动应用。该应用支持多平台部署，包括 Android APK、Windows 桌面程序和 Web 浏览器版本。应用采用纯前端技术栈开发，所有数据均存储在用户本地设备上，不会上传至任何服务器，充分保障用户隐私。

### 1.2 核心功能特性

该应用提供四大核心功能模块：添加记录模块支持计时器和手动补录两种记录方式，用户可选择媒介和性癖（支持多选）；记录查询模块允许用户查看历史记录并进行编辑和删除操作；数据分析模块提供丰富的统计功能，包括总次数、平均时长、最长最短时长、频率、最长禁欲天数等指标，并支持柱状图和饼状图可视化展示；设置模块允许用户自定义外观主题、管理媒介和性癖、导出导入数据，并支持中英文双语切换。

### 1.3 技术栈架构

项目采用纯 HTML、CSS 和 JavaScript 构建，辅以多项现代 Web 技术实现跨平台部署。应用实现了 PWA（Progressive Web App）标准，支持离线使用和安装到主屏幕。通过 Capacitor 框架将 Web 应用打包为 Android APK，可在 Android 5.0 及以上设备运行。原本通过 Electron 框架打包为 Windows 桌面程序，现已推荐使用 Web/PWA 版本替代。数据持久化采用浏览器的 LocalStorage API，所有用户数据均存储在本地。

### 1.4 项目版本信息

当前稳定版本为 v0.91.7，采用语义化版本号规范。项目遵循自定义开源协议，允许个人学习、研究、修改和非商业性质的使用与分发，但明确禁止任何形式的商业用途和非法活动。

---

## 2 项目结构

### 2.1 目录结构概览

项目根目录下包含多个子目录和配置文件。其中 `docs` 目录存放各版本的详细使用指南文档；`apk` 目录包含完整的 Android 项目，通过 Capacitor 打包生成 APK 安装包；`web` 目录是 Web 版本的核心源代码目录，也是主开发目录；此外还包含配置文件如 package.json、README.md 等。

```
Self-Pleasure-Tracker/
├── docs/                          # 使用指南和开发文档
│   ├── v0.91/                    # v0.91 版本文档
│   └── v0.91.6/                  # v0.91.6 版本文档
├── apk/                          # Android APK 项目
│   ├── android/                  # Android 原生项目
│   │   └── app/src/main/         # Android 资源文件
│   └── www/                      # 打包后的 Web 文件
├── web/                          # Web 版本源代码（主开发目录）
│   ├── app.js                    # 主应用逻辑文件
│   ├── index.html                # 主页面 HTML
│   ├── styles.css                # 样式文件
│   ├── manifest.json             # PWA 清单文件
│   └── sw.js                     # Service Worker
├── README.md                     # 项目说明文档
└── package.json                  # 项目配置和依赖
```

### 2.2 Web 目录结构详解

Web 目录是项目的主开发目录，包含了应用的全部源代码。`app.js` 是核心业务逻辑文件，体积较大（约 230KB），包含了所有的功能实现；`index.html` 定义了应用的基本页面结构，包含加载屏幕和底部导航栏；`styles.css` 包含完整的样式定义，使用 CSS 变量实现主题切换功能；`manifest.json` 是 PWA 的配置文件，定义了应用的名称、图标和显示模式；`sw.js` 是 Service Worker 文件，实现离线缓存功能；`server.ps1` 和 `启动Web页面.bat` 是本地开发服务器的启动脚本。

### 2.3 APK 目录结构详解

APK 目录下的 `android` 子目录包含通过 Capacitor 生成的原生的 Android 项目结构。`app/src/main/java` 目录下是 Java 原生代码，`MainActivity.java` 是应用的主入口；`app/src/main/res` 目录包含 Android 资源文件，如启动图标、图片资源和布局文件；`www` 目录下存放打包后的 Web 文件，会被复制到 Android 项目的 assets 目录中。`capacitor.config.json` 是 Capacitor 的配置文件，定义了应用的基本信息和原生插件配置。

---

## 3 核心模块架构

### 3.1 模块划分概述

应用采用单页应用（SPA）架构，通过底部导航栏切换四个主要功能模块。添加模块负责创建新记录，支持计时和手动两种模式；记录模块展示历史记录列表，支持编辑和删除操作；分析模块提供数据统计和可视化图表；设置模块管理应用配置、主题和自定义选项。这种模块化设计使得代码组织清晰，功能职责明确。

### 3.2 添加模块（Add Tab）

添加模块是用户创建新记录的主要入口。该模块支持两种记录方式：计时器模式和手动补录模式。在计时器模式下，用户点击开始按钮启动计时，点击停止按钮结束计时，系统自动计算时长；在手动补录模式下，用户直接输入开始时间和时长，适合补录遗漏的记录。模块还提供了媒介选择和性癖多选功能，用户可根据实际使用情况选择相应的标签。

添加模块的核心渲染函数是 `renderAddTab()`，该函数生成添加界面的 HTML 内容，包括计时器显示区域、媒介选择器、性癖多选器和满意度评分滑块等组件。计时器状态通过 `timerState` 对象管理，包含运行状态、开始时间和已过秒数等属性。

### 3.3 记录模块（Records Tab）

记录模块负责展示和管理历史记录列表。该模块从 LocalStorage 读取记录数据，按时间倒序排列显示。每条记录显示日期、开始时间、时长和使用的媒介与性癖标签。模块支持记录的编辑和删除操作，编辑时会弹出编辑界面，加载现有数据供用户修改。

记录模块的核心渲染函数是 `renderRecordsTab()`，该函数首先从存储中获取记录数据，然后遍历生成每条记录的显示卡片。模块还实现了记录差异显示功能，在每条记录旁边标注与上一条记录的时长差异，快了用红色显示，慢了用绿色显示。

### 3.4 分析模块（Stats Tab）

分析模块是应用的数据统计和可视化中心。该模块提供了丰富的统计指标和图表展示，包括总次数、平均时长、最长最短时长、频率、最长禁欲天数等核心指标。模块支持多种时间范围选择，包括本周、本月、上月、今年和自定义范围。

分析模块实现了多种图表渲染函数：`drawPieChart()` 绘制媒介和性癖分布饼状图；`drawBarChart()` 绘制时长趋势柱状图；`drawHorizontalCountChart()` 和 `drawHorizontalBarChart()` 绘制横向计数和分布柱状图；`drawDurationLineChart()` 使用 Canvas API 绘制时长变化折线图。这些图表函数都支持自定义颜色和数据格式。

### 3.5 设置模块（Settings Tab）

设置模块负责应用的整体配置管理。该模块提供了丰富的设置选项，包括语言切换（中文/英文）、主题切换（白天/夜晚模式）、外观自定义、数据管理、媒介管理和性癖管理等核心功能。

外观自定义是设置模块的亮点功能，支持完整的主题定制系统。用户可以自定义主色调、辅助色、危险色、成功色、背景色、卡片背景色、文字颜色和边框颜色等多个颜色选项。系统内置了多个主题预设，包括默认、紫色、绿色、橙色、粉色、青色等，用户也可以保存自定义主题为个人预设。此外还支持视觉风格自定义，包括圆角大小、阴影效果和动画开关，以及布局和尺寸自定义，包括字体大小和间距调整。

---

## 4 核心数据存储

### 4.1 LocalStorage 数据结构

应用使用浏览器的 LocalStorage API 进行数据持久化，共定义了七个主要存储键。`records` 存储所有记录数据，格式为 JSON 数组；`media` 存储媒介列表数据；`fetishes` 存储性癖列表数据；`theme` 存储当前主题模式（light/dark）；`colorTheme` 存储当前颜色主题预设；`customTheme` 存储用户自定义的颜色配置；`lang` 存储当前语言设置；`statsConfig` 存储统计分析配置；`uiConfig` 存储用户界面配置；`customPresets` 存储用户保存的主题预设列表。

### 4.2 记录数据结构

单条记录的数据结构包含多个字段：`id` 是记录的唯一标识符，采用时间戳生成；`startTime` 是开始时间的时间戳；`duration` 是时长，以秒为单位；`medium` 是使用的媒介 ID；`fetishes` 是性癖 ID 数组，支持多选；`notes` 是用户添加的备注信息；`satisfaction` 是满意度评分，范围为 1 到 10。

```javascript
{
  id: 1712345678901,
  startTime: 1712345678901,
  duration: 300,
  medium: "medium_001",
  fetishes: ["fetish_001", "fetish_002"],
  notes: "备注内容",
  satisfaction: 8
}
```

### 4.3 存储操作函数

应用定义了一系列存储操作函数来管理数据读写。`saveRecords()` 函数将记录数组序列化后存储到 LocalStorage；`saveMedia()` 函数保存媒介列表；`saveFetishes()` 函数保存性癖列表；`saveStatsConfig()` 函数保存统计分析配置；`saveUIConfig()` 函数保存用户界面配置；`saveThemeConfig()` 函数保存主题配置。这些函数在数据变更后自动调用，确保数据实时持久化。

### 4.4 数据导入导出

应用支持将数据导出为 JSON、CSV 和 Excel 三种格式。导出功能允许用户选择导出的数据类型（设置或记录）和日期范围。导入功能支持从文件或剪贴板读取数据，并提供了数据覆盖确认机制。导出记录时，CSV 格式包含 ID、日期、开始时间、时长和备注等字段，Excel 格式使用制表符分隔方便粘贴到表格软件中。

---

## 5 核心函数详解

### 5.1 初始化函数

`init()` 函数是应用的初始化入口，负责加载所有存储的配置和数据。该函数首先从 LocalStorage 读取语言设置、主题设置、颜色主题和自定义主题配置；然后加载记录列表、媒介列表、性癖列表、统计配置和界面配置；最后调用 `applyTheme()` 和 `applyUIConfig()` 应用保存的样式和界面配置。

`initApp()` 函数在 `init()` 完成后调用，负责初始化应用界面和绑定事件监听器。该函数调用 `loadExternalLibraries()` 加载外部依赖库，然后渲染底部导航栏，更新导航标签文本，最后根据 URL hash 或默认设置显示对应的功能模块。

### 5.2 主题系统函数

`applyTheme()` 函数负责应用当前设置的主题样式。该函数根据当前主题模式（白天/夜晚）加载对应的 CSS 变量值，区分了浅色模式下的白色背景和深色模式下的深灰背景。函数同时应用颜色主题预设和用户自定义颜色到 CSS 变量系统。

`applyCustomColors()` 函数处理用户自定义颜色的应用。该函数读取存储的 `customTheme` 对象，将每个颜色值映射到对应的 CSS 变量。如果用户未设置某个颜色，则使用颜色主题预设中的默认值。

`applyUIConfig()` 函数负责应用用户界面配置，包括字体大小、间距、圆角、阴影和动画等视觉参数。函数从 `uiConfig` 对象读取各项配置值，动态更新 CSS 变量，实现界面样式的实时预览和保存。

`saveThemeConfig()` 函数保存主题配置到 LocalStorage，包括当前颜色主题和完整的自定义主题对象。同时更新 `mediaCache` 和 `fetishCache` 以反映存储中的最新数据。

### 5.3 国际化函数

`t(key)` 函数是应用的国际化翻译函数，接收翻译键名作为参数。函数首先从 `i18n` 对象中根据当前语言设置获取对应的翻译文本；如果未找到对应翻译，则尝试使用英文作为后备；如果英文也不存在，则返回原始键名。该函数在整个应用中被广泛调用，实现界面的中英文双语切换。

### 5.4 格式化函数

`formatDuration(seconds)` 函数将秒数格式化为可读的时长字符串。函数首先计算小时数，然后计算剩余的分钟数和秒数，格式为「X小时Y分钟Z秒」。对于不足一小时的情况，只显示分钟和秒；对于不足一分钟的情况，只显示秒。

`formatDate(date)` 函数将 Date 对象格式化为日期字符串，格式为「YYYY-MM-DD」。`formatMonth(date)` 函数将 Date 对象格式化为年月字符串，格式为「YYYY-MM」。这两个函数用于记录列表和统计图表的日期显示。

`getMediumLabel(mediumId)` 函数根据媒介 ID 获取对应的显示名称，从媒介列表中查找并返回名称；如果未找到则返回「未知媒介」。`getFetishLabel(fetishId)` 和 `getFetishesLabels(fetishes)` 函数实现类似的功能，分别用于单个和多个性癖的标签显示。

### 5.5 时间处理函数

`getLocalDateStr(startTime)` 函数将时间戳转换为本地日期字符串，处理时区偏移确保显示正确的本地日期。该函数解决了跨时区使用时日期偏移的问题，确保统计数据按本地日期正确分组。

`getTodayStr()` 函数返回今天的本地日期字符串，格式与 `getLocalDateStr()` 保持一致，用于日期比较和筛选。`getWeekStartDay()` 函数获取每周起算日的设置值，支持周一到周日全部七天可选。

### 5.6 图表渲染函数

`drawPieChart(canvasId, data, colors)` 函数在指定的 Canvas 元素上绘制饼状图。函数接收画布 ID、数据数组和颜色数组作为参数，计算每个扇形的角度并使用 Canvas 2D API 绘制。函数支持图例显示，数据项过多时自动调整图例布局。

`drawBarChart(canvasId, data, unit)` 函数绘制柱状图用于展示时长趋势。函数计算每个柱子的宽度和位置，根据数据值绘制垂直柱条，并在柱子上方显示数值标签。函数处理了横坐标标签的旋转和重叠问题，支持按日、周、月、季度和年等多种时间分组粒度。

`drawDurationLineChart(canvasId, data)` 函数使用 Canvas API 绘制折线图展示时长变化趋势。函数首先计算数据的最大最小值确定坐标范围，然后绘制坐标轴和网格线，接着绘制连接数据点的折线，最后在每个数据点位置绘制圆点标记。函数优化了线条的视觉效果，解决了 DOM 操作导致的线条异常波动问题。

`drawHorizontalCountChart(containerId, data)` 函数绘制横向计数柱状图，用于展示媒介或性癖的使用次数排行。函数根据数据值计算每个柱子的宽度，在柱子上显示对应的次数标签，支持自定义颜色数组。

### 5.7 时间分组函数

`getWeekKey(date)` 函数将日期转换为周键字符串，格式为「YYYY-Www」，其中 ww 是周序号。函数考虑用户设置的每周起算日，确保周分组正确。`getMonthKey(date)` 函数将日期转换为月键字符串，格式为「YYYY-MM」。

`generateWeekKeys(fromDate, toDate)` 函数生成指定日期范围内的所有周键数组，用于统计图表的完整时间轴显示。`generateMonthKeys(fromDate, toDate)` 函数类似地生成月键数组。这两个函数确保统计图表显示完整的日期范围，即使某些周或月没有数据也能正确显示。

`formatWeekLabel(key)` 函数将周键格式化为可读的周标签，用于图表横坐标显示。`formatMonthLabel(key)` 函数将月键格式化为可读的月标签。这两个函数根据当前语言设置返回相应的格式化文本。

---

## 6 国际化系统

### 6.1 国际化架构

应用实现了完整的中英文双语支持，核心是 `i18n` 对象。该对象包含 `zh`（中文）和 `en`（英文）两个顶层属性，每个属性下包含所有界面文本的键值对映射。翻译键采用驼峰命名法，如 `tab_add`、`record_saved`、`stats_title` 等，便于维护和扩展。

### 6.2 翻译键命名规范

界面元素的翻译键遵循功能模块前缀命名规则。标签相关使用 `tab_` 前缀，如 `tab_add`、`tab_records`、`tab_stats`、`tab_settings`；按钮相关使用 `btn_` 或直接使用功能名称，如 `start_timer`、`stop_timer`、`save_record`；提示消息使用 `_confirm`、`_success`、`_failed` 后缀区分不同类型；统计指标使用 `stats_` 或指标英文名作为键。

### 6.3 语言切换机制

应用启动时通过 `init()` 函数从 LocalStorage 读取保存的语言设置，默认为中文。用户可在设置界面切换语言，切换时调用 `saveThemeConfig()` 函数将选择保存到 LocalStorage。界面文本通过 `t()` 函数动态获取，无需刷新页面即可切换语言。`updateNavigationLabels()` 函数专门负责更新底部导航栏的标签文本。

---

## 7 主题系统

### 7.1 主题预设

`themePresets` 对象定义了应用内置的多个颜色主题预设。每个预设包含完整的一组颜色配置，包括主色调、辅助色、危险色、成功色、背景色、卡片背景色、主要文字色、次要文字色和边框色。当前版本包含默认（紫色）、绿色、橙色、粉色、青色等多个预设，每个预设针对浅色和深色模式提供不同的颜色方案。

### 7.2 自定义主题

用户可以通过设置界面的自定义主题功能调整每个颜色。颜色通过 `<input type="color">` 元素选择，系统提供颜色预览和重置功能。自定义主题保存到 `customTheme` 对象中，可随时加载修改或重置为预设值。用户还可以将当前自定义主题保存为个人预设，方便快速切换。

### 7.3 视觉风格自定义

除颜色外，应用还支持广泛的视觉风格自定义。圆角设置控制卡片、按钮等元素的圆角大小；阴影开关控制卡片阴影效果是否显示；动画开关控制过渡效果是否启用。布局自定义包括基础字体大小和间距调整。这些设置通过 `uiConfig` 对象统一管理，保存后实时应用到界面。

### 7.4 CSS 变量系统

应用使用 CSS 变量实现主题系统，所有可自定义的样式值都定义为 CSS 变量。主颜色变量包括 `--primary-color`、`--secondary-color`、`--danger-color`、`--success-color`；背景和文字变量包括 `--background-color`、`--card-background`、`--text-primary`、`--text-secondary`、`--border-color`；布局变量包括 `--font-size-base`、`--spacing-base`、`--corner-radius`；效果变量包括 `--shadow-card`、`--shadow-nav`、`--transition-duration`。通过 JavaScript 动态修改这些变量值，实现主题的实时切换。

---

## 8 平台适配

### 8.1 平台检测

`isCapacitor()` 函数检测应用是否运行在 Capacitor 环境中；`isAndroid()` 函数检测是否为 Android 平台；`isWeb()` 函数检测是否为纯 Web 环境。这些函数通过检测 `window.Capacitor` 和 `window.cordova` 等全局对象实现，用于条件性加载平台特定的功能或样式。

### 8.2 响应式设计

应用采用移动优先的响应式设计策略。界面宽度最大限制为 600px，在大屏幕上水平居中显示；底部导航栏固定在屏幕底部，在 iOS 等有安全区域偏移的设备上通过 `env(safe-area-inset-bottom)` 适配刘海屏。触摸操作通过 `-webkit-tap-highlight-color: transparent` 消除默认点击高亮效果，提升触控体验。

### 8.3 PWA 支持

应用实现了 PWA 标准特性，可安装到设备主屏幕独立运行。`manifest.json` 定义了应用的名称、图标、启动 URL 和显示模式；Service Worker（`sw.js`）实现资源的离线缓存和更新检测功能。通过这些技术，用户可以在没有网络连接的情况下使用应用核心功能。

---

## 9 依赖关系

### 9.1 前端依赖

应用本身不依赖任何外部 JavaScript 库，纯原生 JavaScript 实现。所有功能通过原生 DOM API 和 Canvas API 实现，确保最大的兼容性和最小的加载体积。应用按需加载外部库的 CDN 资源，如截图功能需要时才加载 html2canvas 库。

### 9.2 构建工具依赖

项目的 Node.js 依赖定义在 `package.json` 中。`@capacitor/core`、`@capacitor/cli`、`@capacitor/android` 是 Capacitor 框架的核心包，用于 Web 到 Android 的转换和打包；`@capacitor/browser` 提供 Capacitor 环境的浏览器 API 支持；`electron` 和 `electron-builder` 用于 Windows 桌面应用的打包构建（本版本已不推荐使用）；`serve` 用于本地开发服务器启动。

### 9.3 外部库按需加载

应用支持按需加载外部库以扩展功能。截图功能在用户点击分享按钮时动态加载 html2canvas 库；二维码功能在需要生成或扫描二维码时加载相应的库。这种懒加载策略保证了应用核心体积的最小化，用户可以根据需要选择是否使用扩展功能。

---

## 10 运行与部署

### 10.1 开发环境启动

Web 版本支持本地开发服务器运行。进入 `web` 目录，执行 `npm run serve` 命令启动本地服务器，默认端口为 3001。在浏览器中访问 `http://localhost:3001` 即可预览应用。开发过程中修改文件后浏览器会自动刷新。

### 10.2 Android APK 构建

构建 Android APK 需要先确保已安装 Node.js 和 Android SDK。在项目根目录安装依赖后，进入 `apk` 目录执行 `npx cap sync` 同步 Web 文件到 Android 项目，然后进入 `apk/android` 目录执行 Gradle 构建命令生成 APK。生成的 APK 文件位于 `apk/android/app/build/outputs/apk/release/` 目录。

### 10.3 Windows 应用构建

如需构建 Windows 桌面版本，进入项目根目录执行 `npm run electron:build:win` 命令。构建完成后，可执行文件位于 `dist` 目录下，可直接双击运行。但本版本已推荐使用 Web/PWA 版本替代桌面版本。

### 10.4 PWA 部署

Web 版本可直接部署到任何静态文件托管服务。将 `web` 目录下的所有文件上传到服务器，配置好 HTTPS（Service Worker 需要安全上下文）即可。推荐使用 Netlify、Vercel、Cloudflare Pages 等现代静态托管服务，可获得自动 HTTPS、CDN 加速和边缘节点等优势。

---

## 11 安全与隐私

### 11.1 数据存储安全

应用所有数据存储在用户设备的浏览器 LocalStorage 中，不会上传至任何服务器。这意味着数据完全由用户控制，不会被第三方获取或滥用。但需要注意，LocalStorage 的数据可以被访问设备的人查看，建议用户妥善保管设备。

### 11.2 隐私保护措施

应用未集成任何分析、追踪或埋点服务，不收集任何用户行为数据。外部库的 CDN 资源仅在用户明确需要时才加载，不会主动追踪用户。应用的所有网络请求仅用于加载外部库资源，不存在数据泄露风险。

### 11.3 年龄限制与免责声明

应用在首次加载时显示年龄限制确认界面，要求用户确认年满 18 周岁方可使用。README 和设置界面包含详细的免责声明，明确说明开发者不对使用后果承担责任。这些声明旨在明确法律边界，确保应用仅用于开源学习目的。

---

## 12 扩展与维护

### 12.1 添加新功能建议

扩展应用功能时，建议遵循现有的代码结构。新的功能模块可作为新的 Tab 添加到导航栏；新的数据类型需要扩展存储结构和导入导出逻辑；新的图表类型可参考现有图表函数使用 Canvas API 实现。修改核心数据结构时要考虑向后兼容性，避免影响已有用户的数据。

### 12.2 翻译扩展

应用的多语言系统支持轻松扩展新的语言。在 `i18n` 对象中添加新的语言代码（如 `ja`、`ko`），复制英文翻译键值对作为模板，然后逐条翻译为新语言。添加新翻译键时确保所有语言版本都有对应值，避免界面显示空白。

### 12.3 主题扩展

添加新的颜色预设时，在 `themePresets` 对象中添加新的预设对象，包含浅色和深色两种模式的完整配色。预设应保持足够的对比度和可读性，适合长时间使用。新增视觉风格选项时需要在 CSS 变量系统和 `applyUIConfig()` 函数中添加相应处理逻辑。

### 12.4 维护注意事项

应用采用纯前端技术栈，无服务端依赖，维护相对简单。主要维护工作包括跟踪浏览器和移动平台的兼容性变化、更新构建工具依赖、修复用户反馈的问题。更新版本时建议保留数据导出功能，用户可备份重要数据后再更新应用。

---

## 附录 A：文件速查表

| 文件路径 | 说明 | 重要函数 |
|---------|------|---------|
| web/app.js | 核心业务逻辑文件 | init, renderAddTab, renderRecordsTab, renderStatsTab, renderSettingsTab |
| web/index.html | 主页面结构 | — |
| web/styles.css | 样式文件 | CSS 变量定义 |
| web/manifest.json | PWA 配置 | — |
| web/sw.js | Service Worker | 缓存策略 |
| apk/capacitor.config.json | Capacitor 配置 | — |

## 附录 B：LocalStorage 键名速查表

| 键名 | 数据类型 | 说明 |
|-----|---------|------|
| lang | string | 当前语言设置 |
| theme | string | 主题模式 |
| colorTheme | string | 颜色预设名称 |
| customTheme | object | 自定义颜色配置 |
| records | array | 记录数据列表 |
| media | array | 媒介列表 |
| fetishes | array | 性癖列表 |
| statsConfig | object | 统计配置 |
| uiConfig | object | 界面配置 |
| customPresets | array | 自定义预设列表 |

## 附录 C：核心函数索引

### 初始化与配置
- `init()` - 应用初始化入口
- `initApp()` - 应用初始化完成处理
- `loadExternalLibraries()` - 加载外部库

### 主题与样式
- `applyTheme()` - 应用主题
- `applyCustomColors()` - 应用自定义颜色
- `applyUIConfig()` - 应用界面配置
- `saveThemeConfig()` - 保存主题配置
- `updateMediaCache()` - 更新媒介缓存
- `updateFetishCache()` - 更新性癖缓存

### 国际化
- `t(key)` - 翻译函数
- `updateNavigationLabels()` - 更新导航标签

### 数据操作
- `saveRecords()` - 保存记录
- `saveMedia()` - 保存媒介
- `saveFetishes()` - 保存性癖
- `saveStatsConfig()` - 保存统计配置
- `saveUIConfig()` - 保存界面配置

### 格式化
- `formatDuration(seconds)` - 格式化时长
- `formatDate(date)` - 格式化日期
- `formatMonth(date)` - 格式化年月
- `getMediumLabel(mediumId)` - 获取媒介标签
- `getFetishLabel(fetishId)` - 获取性癖标签
- `getFetishesLabels(fetishes)` - 获取多个性癖标签

### 图表渲染
- `drawPieChart(canvasId, data, colors)` - 绘制饼状图
- `drawBarChart(canvasId, data, unit)` - 绘制柱状图
- `drawHorizontalCountChart(containerId, data)` - 绘制横向计数图
- `drawHorizontalBarChart(containerId, data, colors)` - 绘制横向柱状图
- `drawDurationLineChart(canvasId, data)` - 绘制折线图

### 时间处理
- `getLocalDateStr(startTime)` - 获取本地日期字符串
- `getTodayStr()` - 获取今日日期字符串
- `getWeekStartDay()` - 获取每周起算日
- `getWeekKey(date)` - 获取周键
- `getMonthKey(date)` - 获取月键
- `generateWeekKeys(fromDate, toDate)` - 生成周键数组
- `generateMonthKeys(fromDate, toDate)` - 生成月键数组
- `formatWeekLabel(key)` - 格式化周标签
- `formatMonthLabel(key)` - 格式化月标签

### 界面渲染
- `renderAddTab()` - 渲染添加界面
- `renderCalendar()` - 渲染日历视图
- `renderRecordsTab()` - 渲染记录列表
- `renderEditRecord()` - 渲染编辑界面
- `renderStatsTab()` - 渲染统计分析界面
- `renderSettingsTab()` - 渲染设置界面

### 平台检测
- `isCapacitor()` - 检测 Capacitor 环境
- `isAndroid()` - 检测 Android 平台
- `isWeb()` - 检测 Web 环境

---

*本文档最后更新于 2026-05-08，基于项目 v0.91.7 版本生成。*
