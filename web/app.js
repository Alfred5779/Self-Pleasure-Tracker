const i18n = {
  zh: {
    tab_add: '添加',
    tab_records: '记录',
    tab_stats: '分析',
    tab_settings: '设置',
    timer: '计时器',
    manual: '补录',
    start_timer: '开始',
    stop_timer: '停止',
    save_record: '保存记录',
    record_saved: '记录已保存',
    start_time: '开始时间',
    duration_min: '分钟',
    duration_sec: '秒',
    records_title: '历史记录',
    no_records: '暂无记录',
    delete_confirm: '确定删除这条记录？',
    record_deleted: '记录已删除',
    stats_title: '数据分析',
    total_count: '总次数',
    avg_duration: '平均时长',
    min_duration: '最短时长',
    max_duration: '最长时长',
    compare_last_month: '对比上月',
    increase: '增加',
    decrease: '减少',
    from_date: '开始日期',
    to_date: '结束日期',
    preset_one_year: '一年',
    preset_last_month: '上月',
    preset_this_month: '本月',
    preset_custom: '自定义',
    settings_title: '设置',
    language: '语言',
    chinese: '中文',
    english: 'English',
    theme: '外观',
    light_mode: '白天模式',
    dark_mode: '夜晚模式',
    medium: '媒介',
    fetish: '性癖',
    edit_record: '编辑记录',
    save_changes: '保存修改',
    favorite_medium: '最喜欢的媒介',
    most_used_medium: '最常用的媒介',
    favorite_fetish: '最喜欢的性癖',
    most_used_fetish: '最常用的性癖',
    back: '返回',
    export_json: '导出 JSON',
    export_csv: '导出 CSV',
    export_excel: '导出 Excel',
    import_data: '导入数据',
    export_success: '数据导出成功！',
    import_success: '数据导入成功！',
    import_confirm: '导入将覆盖现有数据，确定继续吗？',
    invalid_file: '无效的数据文件',
    id: 'ID',
    date: '日期',
    start_time: '开始时间',
    duration: '时长(秒)',
    notes: '备注',
    github: 'GitHub 仓库',
    qq_group: 'QQ 交流群',
    share_screenshot: '分享截图',
    screenshot_saved: '截图已保存！',
    share_data: '分享数据',
    qr_code: '二维码',
    scan_qr: '扫描二维码',
    copy_to_clipboard: '复制到剪贴板',
    copy_success: '已复制到剪贴板！',
    close: '关闭',
    disclaimer: '免责声明',
    changelog: '更新日志',
    medium_management: '媒介管理',
    add_medium: '添加媒介',
    medium_name: '媒介名称',
    medium_saved: '媒介已保存',
    medium_deleted: '媒介已删除',
    edit_medium: '编辑媒介',
    delete_medium_confirm: '确定删除这个媒介？',
    fetish_management: '性癖管理',
    add_fetish: '添加性癖',
    fetish_name: '性癖名称',
    fetish_saved: '性癖已保存',
    fetish_deleted: '性癖已删除',
    edit_fetish: '编辑性癖',
    delete_fetish_confirm: '确定删除这个性癖？',
    include_empty_records: '统计无记录',
    medium_distribution: '媒介分布',
    fetish_distribution: '性癖分布',
    duration_stats: '时长统计',
    fetish_stats: '性癖统计',
    medium_stats: '媒介统计',
    preset_this_week: '本周',
    preset_this_month: '本月',
    preset_last_month: '上月',
    preset_this_year: '今年',
    frequency: '频率',
    times_per_week: '次/周',
    longest_abstinence: '最长禁欲',
    days: '天',
    count_change: '次数变化',
    count_trend: '次数趋势',
    usage_rank: '使用排行',
    times: '次',
    version: '版本',
    data_management: '数据管理',
    age_restriction: '🔞 年龄限制',
    age_restriction_desc: '本软件<strong>仅限年满 18 周岁的成年人</strong>使用。未成年人严禁使用本软件。',
    learning_only: '📚 仅用于开源学习',
    learning_only_desc: '本项目<strong>仅供开源学习和技术交流</strong>使用。任何个人或组织不得将本软件用于任何商业用途或非法活动。',
    legal_responsibility: '⚖️ 法律责任',
    legal_responsibility_desc: '使用本软件所产生的一切后果由使用者自行承担。开发者不对任何使用本软件所导致的直接或间接损失负责。',
    entertainment_statement: '🎭 娱乐声明',
    entertainment_statement_desc: '本人开发本软件纯属娱乐行为，不用于任何严肃的医疗或心理治疗用途。',
    cl_v091_title: 'v0.91',
    cl_v091_1: '✨ 添加性癖管理功能，与媒介管理并列',
    cl_v091_2: '✨ 在添加/编辑记录时可选择性癖（支持多选）',
    cl_v091_3: '✨ 分析页面新增最常用的性癖统计',
    cl_v091_4: '✨ 新增媒介和性癖分布饼状图',
    cl_v091_5: '✨ 将"最喜欢的媒介"改为"最常用的媒介"',
    cl_v091_6: '✨ 默认性癖改为"纯爱"',
    cl_v091_7: '✨ 优化分析页面布局',
    cl_v091_8: '✨ 新增性癖多选功能，可同时选择多个性癖',
    cl_v091_9: '✨ 增大柱状图尺寸，优化视觉效果',
    cl_v091_10: '✨ 修复年份柱状图只显示双数月的问题，现在完整显示12个月',
    cl_v091_11: '✨ 修复自定义时间范围的柱状图显示问题',
    cl_v091_12: '✨ 优化夜晚模式下柱状图文字颜色显示',
    cl_v091_13: '⚡ 优化代码性能，添加缓存机制减少重复计算',
    cl_v091_14: '📱 版本号更新为 0.91',
    cl_v078_title: 'v0.78',
    cl_v078_1: '✨ 添加 QQ 交流群链接',
    cl_v078_2: '✨ 添加免责声明和更新日志二级界面',
    cl_v078_3: '✨ 添加媒介管理功能',
    cl_v078_4: '✨ 优化二级界面返回逻辑',
    cl_v078_5: '📱 版本号更新为 0.78',
    cl_v069_title: 'v0.69',
    cl_v069_1: '✨ 添加数据导出和导入功能（支持 JSON、CSV、Excel）',
    cl_v069_2: '✨ 在分析页面添加截图分享功能',
    cl_v069_3: '✨ 在设置页面添加 GitHub 仓库链接',
    cl_v069_4: '✨ 添加娱乐声明',
    cl_v069_5: '✨ 新增 Windows 桌面版本支持',
    cl_v069_6: '🌙 完善白天/夜晚模式切换',
    cl_v069_7: '🌐 支持中英文双语切换',
    cl_v069_8: '🔒 所有数据 100% 保存在本地',
    cl_v069_9: '📱 版本号更新为 0.69',
    cl_v013_title: 'v0.13',
    cl_v013_1: '✨ 添加媒介选择',
    cl_v013_2: '✨ 添加备注功能',
    cl_v013_3: '✨ 添加记录编辑功能',
    cl_v013_4: '✨ 分析页面添加"最长时长"和"最喜欢的媒介"统计',
    cl_v013_5: '✨ 初始版本',
    cl_v013_6: '✨ 基础的四个模块：添加、记录、分析、设置',
    screenshot_needs_html2canvas: '截图功能需要加载 html2canvas 库，请确保网络连接正常！',
    screenshot_failed: '截图失败，请刷新页面重试！',
    import_from_clipboard_prompt: '是否从剪贴板导入数据？\n\n点击「确定」从剪贴板导入\n点击「取消」选择文件导入',
    select_format: '选择格式',
    share_json: '分享 JSON',
    share_csv: '分享 CSV',
    share_excel: '分享 Excel',
    receive_data: '接收数据',
    receive_mode: '接收模式',
    waiting_scan: '等待手机端扫描...',
    send_to_web: '发送到 Web 端',
    data_sent: '数据已发送',
    copy_data: '复制数据',
    paste_data_here: '在此粘贴数据',
    clipboard_empty: '剪贴板为空，请先复制数据或选择文件',
    cannot_read_clipboard: '无法读取剪贴板，请手动粘贴数据',
    data_too_large: '数据过大，请使用文件分享',
    download_file: '下载文件',
    data_size_warning: '数据较大，建议使用文件分享方式',
    qr_code_fallback: '二维码无法生成，请使用文件分享',
    share_file: '分享文件',
    split_count: '分割份数',
    split_share: '分割分享',
    part: '第{n}部分',
    confirm: '确认',
    about: '关于',
    about_title: '关于',
    developer: '开发者',
    developer_name: '伊林',
    developer_name_en: 'Eileen',
    app_description: '起飞助手是一款用于记录和分析个人行为的开源应用。',
    stats_management: '分析管理',
    show_this_week: '显示本周',
    show_this_month: '显示本月',
    show_last_month: '显示上月',
    show_this_year: '显示今年',
    week_start_day: '每周起算日',
    monday: '周一',
    tuesday: '周二',
    wednesday: '周三',
    thursday: '周四',
    friday: '周五',
    saturday: '周六',
    sunday: '周日',
    sync_time: '同步时间',
    sync_time_desc: '自动同步系统时间',
    stats_display: '统计显示',
    show_total_count: '显示总次数',
    show_frequency: '显示频率',
    show_longest_abstinence: '显示最长禁欲',
    show_avg_duration: '显示平均时长',
    show_min_duration: '显示最短时长',
    show_max_duration: '显示最长时长',
    time_grouping: '时间分组',
    group_by_day: '按日',
    group_by_week: '按周',
    group_by_month: '按月',
    group_by_quarter: '按季度',
    sort_by: '排序方式',
    sort_by_count: '按次数',
    sort_by_name: '按名称',
    chart_type: '图表类型',
    bar_chart: '柱状图',
    line_chart: '折线图',
    save_template: '保存模板',
    load_template: '加载模板',
    template_name: '模板名称',
    delete_template: '删除模板',
    preset_templates: '预设模板',
    week_compare: '周对比',
    month_compare: '月对比',
    year_summary: '年度总结',
    cl_v0911_title: 'v0.91.1',
    cl_v0911_1: '✨ 每周起算日支持周一到周日全部7天',
    cl_v0911_2: '✨ 专属时间分组配置：本周→日，本月/上月→周/日，今年→日/周/月/季',
    cl_v0911_3: '✨ 新增分析管理功能，可自定义分析界面显示的时间范围按钮',
    cl_v0911_4: '✨ 新增时间同步功能，自动同步系统时间',
    cl_v0911_5: '✨ 优化柱状图：增加柱间距、清晰显示数字、避免横坐标重叠',
    cl_v0911_6: '✨ 删除Windows桌面版本，推荐使用Web/PWA版本',
    cl_v0911_7: '✨ 版本号更新为 0.91.1',
    cl_v0912_title: 'v0.91.2',
    cl_v0912_1: '✨ 高度自定义分析功能，可控制统计指标显示',
    cl_v0912_2: '✨ 新增时间分组粒度选择（按日/周/月/季度）',
    cl_v0912_3: '✨ 新增数据排序方式选择（按次数/名称）',
    cl_v0912_4: '✨ 新增分析模板保存和加载功能',
    cl_v0912_5: '✨ 新增周对比、月对比、年度总结预设模板',
    cl_v0912_6: '✨ 版本号更新为 0.91.2',
    export_settings: '导出设置',
    export_records: '导出记录',
    date_range: '日期范围',
    reset_date_range: '重置为全部记录',
    cl_v0913_title: 'v0.91.3',
    cl_v0913_1: '✨ 优化导出数据模块，将设置和记录分开导出',
    cl_v0913_2: '✨ 为记录导出添加自定义输出范围功能',
    cl_v0913_3: '✨ 版本号更新为 0.91.3',
    theme_management: '主题管理',
    theme_presets: '主题预设',
    custom_theme: '自定义主题',
    primary_color: '主色调',
    secondary_color: '辅助色',
    danger_color: '危险色',
    success_color: '成功色',
    background_color: '背景色',
    card_background: '卡片背景色',
    text_primary: '主要文字色',
    text_secondary: '次要文字色',
    border_color: '边框色',
    reset_theme: '重置主题',
    save_theme: '保存主题',
    export_appearance: '导出外观',
    import_appearance: '导入外观',
    appearance_saved: '外观设置已保存',
    appearance_exported: '外观设置已导出',
    appearance_imported: '外观设置已导入',
    invalid_appearance_file: '无效的外观设置文件',
    custom_presets: '我的预设',
    save_as_preset: '保存为预设',
    preset_name: '预设名称',
    delete_preset: '删除预设',
    delete_preset_confirm: '确定删除这个预设吗？',
    theme_preset_default: '默认',
    theme_preset_purple: '紫色',
    theme_preset_green: '绿色',
    theme_preset_orange: '橙色',
    theme_preset_pink: '粉色',
    theme_preset_cyan: '青色',
    cl_v0914_title: 'v0.91.4',
    cl_v0914_1: '✨ 实现完整的高级主题自定义功能',
    cl_v0914_2: '✨ 新增多个主题预设',
    cl_v0914_3: '✨ 支持自定义每个颜色',
    cl_v0914_4: '✨ 版本号更新为 0.91.4',
    cl_v0915_title: 'v0.91.5',
    cl_v0915_1: '✨ 实现视觉风格自定义：圆角、阴影、动画开关',
    cl_v0915_2: '✨ 实现颜色增强自定义：背景、卡片、文字、边框',
    cl_v0915_3: '✨ 实现布局和尺寸自定义：字体大小、间距',
    cl_v0915_4: '✨ 新增更多主题预设：渐变色、高对比度、单色、节日',
    cl_v0915_5: '✨ 实现功能开关：统计指标显示、导航栏位置、震动反馈',
    cl_v0915_6: '✨ 实现首页设置和底部按钮顺序自定义',
    cl_v0915_7: '✨ 实现数据分析界面自定义：排序、按钮位置',
    cl_v0915_8: '✨ 版本号更新为 0.91.5',
    cl_v0916_title: 'v0.91.6',
    cl_v0916_1: '✨ 优化手机版柱状图显示，增加柱间距，避免日期重叠',
    cl_v0916_2: '✨ 在记录界面显示每条记录与上一条的时长差异',
    cl_v0916_3: '✨ 快了用红色显示，慢了用绿色显示',
    cl_v0916_4: '✨ 实现外观设置整体导入导出功能',
    cl_v0916_5: '✨ 允许自定义外观保存为预设',
    cl_v0916_6: '✨ 将导入导出按钮移到外观管理顶部',
    cl_v0916_7: '✨ 在自定义主题区域添加保存按钮',
    cl_v0916_8: '✨ 将分析界面的纵向柱状图改为横向',
    cl_v0916_9: '✨ 版本号更新为 0.91.6',
    appearance_management: '外观管理',
    advanced_settings: '高级设置',
    visual_style: '视觉风格',
    corner_radius: '圆角大小',
    corner_square: '方正',
    corner_medium: '适中',
    corner_round: '圆润',
    shadow_intensity: '阴影强度',
    shadow_none: '无阴影',
    shadow_light: '弱阴影',
    shadow_medium: '中阴影',
    shadow_strong: '强阴影',
    animation_enabled: '动画效果',
    color_enhanced: '颜色增强',
    light_bg: '白天模式背景',
    dark_bg: '黑夜模式背景',
    card_bg: '卡片背景',
    text_primary_color: '主要文字颜色',
    text_secondary_color: '次要文字颜色',
    border_color_custom: '边框颜色',
    layout_size: '布局和尺寸',
    font_size: '字体大小',
    font_small: '小',
    font_medium: '中',
    font_large: '大',
    font_xlarge: '超大',
    spacing: '间距大小',
    spacing_compact: '紧凑',
    spacing_standard: '标准',
    spacing_loose: '宽松',
    more_presets: '更多主题预设',
    theme_preset_gradient: '渐变色',
    theme_preset_high_contrast: '高对比度',
    theme_preset_monochrome: '单色',
    theme_preset_christmas: '圣诞',
    theme_preset_halloween: '万圣节',
    function_toggles: '功能开关',
    show_stats_indicators: '显示统计指标',
    nav_position: '导航栏位置',
    nav_bottom: '底部',
    nav_top: '顶部',

    home_page: '首页设置',
    default_home: '默认首页',
    nav_order: '导航栏按钮顺序',
    move_up: '上移',
    move_down: '下移',
    custom_icons: '自定义图标',
    add_icon: '添加图标',
    records_icon: '记录图标',
    stats_icon: '分析图标',
    settings_icon: '设置图标',
    reset_icon: '重置图标',
    stats_custom: '数据分析自定义',
    stats_sort_order: '结果排序',
    sort_desc: '降序',
    sort_asc: '升序',
    stats_buttons_position: '时间范围按钮位置',
    buttons_top: '顶部',
    buttons_bottom: '底部'
  },
  en: {
    tab_add: 'Add',
    tab_records: 'Records',
    tab_stats: 'Stats',
    tab_settings: 'Settings',
    timer: 'Timer',
    manual: 'Manual',
    start_timer: 'Start',
    stop_timer: 'Stop',
    save_record: 'Save Record',
    record_saved: 'Record saved',
    start_time: 'Start Time',
    duration_min: 'Minutes',
    duration_sec: 'Seconds',
    records_title: 'History',
    no_records: 'No records yet',
    delete_confirm: 'Delete this record?',
    record_deleted: 'Record deleted',
    stats_title: 'Statistics',
    total_count: 'Total',
    avg_duration: 'Avg Duration',
    min_duration: 'Min Duration',
    max_duration: 'Max Duration',
    compare_last_month: 'vs Last Month',
    increase: 'Increase',
    decrease: 'Decrease',
    from_date: 'From',
    to_date: 'To',
    preset_one_year: 'One Year',
    preset_last_month: 'Last Month',
    preset_this_month: 'This Month',
    preset_custom: 'Custom',
    settings_title: 'Settings',
    language: 'Language',
    chinese: '中文',
    english: 'English',
    theme: 'Theme',
    light_mode: 'Light Mode',
    dark_mode: 'Dark Mode',
    medium: 'Medium',
    fetish: 'Fetish',
    edit_record: 'Edit Record',
    save_changes: 'Save Changes',
    favorite_medium: 'Favorite Medium',
    most_used_medium: 'Most Used Medium',
    favorite_fetish: 'Favorite Fetish',
    most_used_fetish: 'Most Used Fetish',
    back: 'Back',
    export_json: 'Export JSON',
    export_csv: 'Export CSV',
    export_excel: 'Export Excel',
    import_data: 'Import Data',
    export_success: 'Data exported successfully!',
    import_success: 'Data imported successfully!',
    import_confirm: 'Import will overwrite existing data. Continue?',
    invalid_file: 'Invalid data file',
    id: 'ID',
    date: 'Date',
    start_time: 'Start Time',
    duration: 'Duration(sec)',
    notes: 'Notes',
    github: 'GitHub Repo',
    qq_group: 'QQ Group',
    share_screenshot: 'Share Screenshot',
    screenshot_saved: 'Screenshot saved!',
    share_data: 'Share Data',
    qr_code: 'QR Code',
    scan_qr: 'Scan QR Code',
    copy_to_clipboard: 'Copy to Clipboard',
    copy_success: 'Copied to clipboard!',
    close: 'Close',
    disclaimer: 'Disclaimer',
    changelog: 'Changelog',
    medium_management: 'Medium Management',
    add_medium: 'Add Medium',
    medium_name: 'Medium Name',
    medium_saved: 'Medium saved',
    medium_deleted: 'Medium deleted',
    edit_medium: 'Edit Medium',
    delete_medium_confirm: 'Delete this medium?',
    fetish_management: 'Fetish Management',
    add_fetish: 'Add Fetish',
    fetish_name: 'Fetish Name',
    fetish_saved: 'Fetish saved',
    fetish_deleted: 'Fetish deleted',
    edit_fetish: 'Edit Fetish',
    delete_fetish_confirm: 'Delete this fetish?',
    include_empty_records: 'Include Empty Records',
    medium_distribution: 'Medium Distribution',
    fetish_distribution: 'Fetish Distribution',
    duration_stats: 'Duration Stats',
    fetish_stats: 'Fetish Stats',
    medium_stats: 'Medium Stats',
    preset_this_week: 'This Week',
    preset_this_month: 'This Month',
    preset_last_month: 'Last Month',
    preset_this_year: 'This Year',
    frequency: 'Frequency',
    times_per_week: 'times/week',
    longest_abstinence: 'Longest Abstinence',
    days: 'days',
    count_change: 'Count Change',
    count_trend: 'Count Trend',
    usage_rank: 'Usage Rank',
    times: 'times',
    version: 'Version',
    data_management: 'Data Management',
    age_restriction: '🔞 Age Restriction',
    age_restriction_desc: 'This software is <strong>for adults aged 18 and over only</strong>. Minors are strictly prohibited from using this software.',
    learning_only: '📚 For Open Source Learning Only',
    learning_only_desc: 'This project is <strong>for open source learning and technical exchange only</strong>. No individual or organization may use this software for any commercial purpose or illegal activity.',
    legal_responsibility: '⚖️ Legal Responsibility',
    legal_responsibility_desc: 'All consequences arising from the use of this software shall be borne by the user. The developer is not responsible for any direct or indirect losses caused by the use of this software.',
    entertainment_statement: '🎭 Entertainment Statement',
    entertainment_statement_desc: 'I developed this software purely for entertainment purposes and it is not intended for any serious medical or psychological treatment use.',
    cl_v091_title: 'v0.91',
    cl_v091_1: '✨ Added fetish management feature, alongside medium management',
    cl_v091_2: '✨ Added fetish selection when adding/editing records (supports multi-select)',
    cl_v091_3: '✨ Added most used fetish statistics in analytics page',
    cl_v091_4: '✨ Added pie charts for medium and fetish distribution',
    cl_v091_5: '✨ Changed "Favorite Medium" to "Most Used Medium"',
    cl_v091_6: '✨ Changed default fetish to "Pure Love"',
    cl_v091_7: '✨ Optimized analytics page layout',
    cl_v091_8: '✨ Added multi-fetish selection, can select multiple fetishes at once',
    cl_v091_9: '✨ Increased bar chart size for better visual experience',
    cl_v091_10: '✨ Fixed year bar chart only showing even months, now shows all 12 months',
    cl_v091_11: '✨ Fixed custom time range bar chart display issue',
    cl_v091_12: '✨ Improved bar chart text color in dark mode',
    cl_v091_13: '⚡ Optimized code performance with caching mechanism',
    cl_v091_14: '📱 Version updated to 0.91',
    cl_v078_title: 'v0.78',
    cl_v078_1: '✨ Added QQ group link',
    cl_v078_2: '✨ Added disclaimer and changelog secondary interfaces',
    cl_v078_3: '✨ Added medium management feature',
    cl_v078_4: '✨ Optimized secondary interface navigation logic',
    cl_v078_5: '📱 Version updated to 0.78',
    cl_v069_title: 'v0.69',
    cl_v069_1: '✨ Added data export and import (JSON, CSV, Excel support)',
    cl_v069_2: '✨ Added screenshot sharing in analytics page',
    cl_v069_3: '✨ Added GitHub repo link in settings page',
    cl_v069_4: '✨ Added entertainment statement',
    cl_v069_5: '✨ Added Windows desktop version support',
    cl_v069_6: '🌙 Improved light/dark mode switching',
    cl_v069_7: '🌐 Supported Chinese/English bilingual switching',
    cl_v069_8: '🔒 All data stored 100% locally',
    cl_v069_9: '📱 Version updated to 0.69',
    cl_v013_title: 'v0.13',
    cl_v013_1: '✨ Added medium selection',
    cl_v013_2: '✨ Added notes feature',
    cl_v013_3: '✨ Added record editing feature',
    cl_v013_4: '✨ Added "max duration" and "favorite medium" stats in analytics page',
    cl_v013_5: '✨ Initial version',
    cl_v013_6: '✨ Four basic modules: Add, Records, Analytics, Settings',
    screenshot_needs_html2canvas: 'Screenshot feature requires html2canvas library. Please ensure network connection!',
    screenshot_failed: 'Screenshot failed. Please refresh and try again!',
    import_from_clipboard_prompt: 'Import data from clipboard?\n\nClick "OK" to import from clipboard\nClick "Cancel" to select file to import',
    select_format: 'Select Format',
    share_json: 'Share JSON',
    share_csv: 'Share CSV',
    share_excel: 'Share Excel',
    receive_data: 'Receive Data',
    receive_mode: 'Receive Mode',
    waiting_scan: 'Waiting for mobile to scan...',
    send_to_web: 'Send to Web',
    data_sent: 'Data Sent',
    copy_data: 'Copy Data',
    paste_data_here: 'Paste Data Here',
    clipboard_empty: 'Clipboard is empty, please copy data from mobile first',
    cannot_read_clipboard: 'Cannot read clipboard, please paste data manually',
    data_too_large: 'Data too large, please use file sharing',
    download_file: 'Download File',
    data_size_warning: 'Data is large, recommend using file sharing',
    qr_code_fallback: 'QR code cannot be generated, please use file sharing',
    share_file: 'Share File',
    split_count: 'Split Count',
    split_share: 'Split Share',
    part: 'Part {n}',
    confirm: 'Confirm',
    about: 'About',
    about_title: 'About',
    developer: 'Developer',
    developer_name: 'Yilin',
    developer_name_en: 'Eileen',
    app_description: 'Takeoff Assistant is an open-source app for tracking and analyzing personal behavior.',
    stats_management: 'Stats Management',
    show_this_week: 'Show This Week',
    show_this_month: 'Show This Month',
    show_last_month: 'Show Last Month',
    show_this_year: 'Show This Year',
    week_start_day: 'Week Start Day',
    monday: 'Monday',
    tuesday: 'Tuesday',
    wednesday: 'Wednesday',
    thursday: 'Thursday',
    friday: 'Friday',
    saturday: 'Saturday',
    sunday: 'Sunday',
    sync_time: 'Sync Time',
    sync_time_desc: 'Auto sync system time',
    stats_display: 'Stats Display',
    show_total_count: 'Show Total Count',
    show_frequency: 'Show Frequency',
    show_longest_abstinence: 'Show Longest Abstinence',
    show_avg_duration: 'Show Avg Duration',
    show_min_duration: 'Show Min Duration',
    show_max_duration: 'Show Max Duration',
    time_grouping: 'Time Grouping',
    group_by_day: 'By Day',
    group_by_week: 'By Week',
    group_by_month: 'By Month',
    group_by_quarter: 'By Quarter',
    sort_by: 'Sort By',
    sort_by_count: 'By Count',
    sort_by_name: 'By Name',
    chart_type: 'Chart Type',
    bar_chart: 'Bar Chart',
    line_chart: 'Line Chart',
    save_template: 'Save Template',
    load_template: 'Load Template',
    template_name: 'Template Name',
    delete_template: 'Delete Template',
    preset_templates: 'Preset Templates',
    week_compare: 'Week Compare',
    month_compare: 'Month Compare',
    year_summary: 'Year Summary',
    cl_v0911_title: 'v0.91.1',
    cl_v0911_1: '✨ Added support for all 7 days as week start day (Monday to Sunday)',
    cl_v0911_2: '✨ Added dedicated time grouping: This Week→Day, This/Last Month→Week/Day, This Year→Day/Week/Month/Quarter',
    cl_v0911_3: '✨ Added stats management feature, customizable time range buttons in analytics page',
    cl_v0911_4: '✨ Added time sync feature, auto sync system time',
    cl_v0911_5: '✨ Optimized bar chart: increased bar spacing, clear number display, avoid overlapping x-axis labels',
    cl_v0911_6: '✨ Removed Windows desktop version, recommend Web/PWA version',
    cl_v0911_7: '✨ Version updated to 0.91.1',
    cl_v0912_title: 'v0.91.2',
    cl_v0912_1: '✨ Highly customizable analytics feature, control which stats to display',
    cl_v0912_2: '✨ Added time grouping granularity selection (day/week/month/quarter)',
    cl_v0912_3: '✨ Added data sorting selection (by count/name)',
    cl_v0912_4: '✨ Added analytics template save and load feature',
    cl_v0912_5: '✨ Added preset templates: week compare, month compare, year summary',
    cl_v0912_6: '✨ Version updated to 0.91.2',
    export_settings: 'Export Settings',
    export_records: 'Export Records',
    date_range: 'Date Range',
    reset_date_range: 'Reset to All Records',
    cl_v0913_title: 'v0.91.3',
    cl_v0913_1: '✨ Optimized export data module, separate settings and records export',
    cl_v0913_2: '✨ Added custom output range for records export',
    cl_v0913_3: '✨ Version updated to 0.91.3',
    theme_management: 'Theme Management',
    theme_presets: 'Theme Presets',
    custom_theme: 'Custom Theme',
    primary_color: 'Primary Color',
    secondary_color: 'Secondary Color',
    danger_color: 'Danger Color',
    success_color: 'Success Color',
    background_color: 'Background Color',
    card_background: 'Card Background',
    text_primary: 'Primary Text',
    text_secondary: 'Secondary Text',
    border_color: 'Border Color',
    reset_theme: 'Reset Theme',
    save_theme: 'Save Theme',
    export_appearance: 'Export Appearance',
    import_appearance: 'Import Appearance',
    appearance_saved: 'Appearance saved',
    appearance_exported: 'Appearance exported',
    appearance_imported: 'Appearance imported',
    invalid_appearance_file: 'Invalid appearance file',
    custom_presets: 'My Presets',
    save_as_preset: 'Save as Preset',
    preset_name: 'Preset Name',
    delete_preset: 'Delete Preset',
    delete_preset_confirm: 'Delete this preset?',
    theme_preset_default: 'Default',
    theme_preset_purple: 'Purple',
    theme_preset_green: 'Green',
    theme_preset_orange: 'Orange',
    theme_preset_pink: 'Pink',
    theme_preset_cyan: 'Cyan',
    cl_v0914_title: 'v0.91.4',
    cl_v0914_1: '✨ Implemented complete advanced theme customization',
    cl_v0914_2: '✨ Added multiple theme presets',
    cl_v0914_3: '✨ Support customizing each color',
    cl_v0914_4: '✨ Version updated to 0.91.4',
    cl_v0915_title: 'v0.91.5',
    cl_v0915_1: '✨ Implemented visual style customization: corner radius, shadow, animation toggle',
    cl_v0915_2: '✨ Implemented enhanced color customization: background, card, text, border',
    cl_v0915_3: '✨ Implemented layout and size customization: font size, spacing',
    cl_v0915_4: '✨ Added more theme presets: gradient, high contrast, monochrome, holiday',
    cl_v0915_5: '✨ Implemented function toggles: stats indicators, nav position, vibration',
    cl_v0915_6: '✨ Implemented home page and nav button order customization',
    cl_v0915_7: '✨ Implemented analytics page customization: sort order, button position',
    cl_v0915_8: '✨ Version updated to 0.91.5',
    cl_v0916_title: 'v0.91.6',
    cl_v0916_1: '✨ Optimized mobile bar chart display, increased bar spacing, avoid date overlapping',
    cl_v0916_2: '✨ Show duration difference compared to previous record in records page',
    cl_v0916_3: '✨ Faster shown in red, slower shown in green',
    cl_v0916_4: '✨ Implemented appearance settings import/export',
    cl_v0916_5: '✨ Allow saving custom appearance as preset',
    cl_v0916_6: '✨ Moved import/export buttons to top of appearance management',
    cl_v0916_7: '✨ Added save button to custom theme section',
    cl_v0916_8: '✨ Changed vertical bar chart to horizontal in analytics page',
    cl_v0916_9: '✨ Version updated to 0.91.6',
    appearance_management: 'Appearance Management',
    advanced_settings: 'Advanced Settings',
    visual_style: 'Visual Style',
    corner_radius: 'Corner Radius',
    corner_square: 'Square',
    corner_medium: 'Medium',
    corner_round: 'Round',
    shadow_intensity: 'Shadow Intensity',
    shadow_none: 'None',
    shadow_light: 'Light',
    shadow_medium: 'Medium',
    shadow_strong: 'Strong',
    animation_enabled: 'Animation',
    color_enhanced: 'Enhanced Colors',
    light_bg: 'Light Mode Background',
    dark_bg: 'Dark Mode Background',
    card_bg: 'Card Background',
    text_primary_color: 'Primary Text Color',
    text_secondary_color: 'Secondary Text Color',
    border_color_custom: 'Border Color',
    layout_size: 'Layout & Size',
    font_size: 'Font Size',
    font_small: 'Small',
    font_medium: 'Medium',
    font_large: 'Large',
    font_xlarge: 'Extra Large',
    spacing: 'Spacing',
    spacing_compact: 'Compact',
    spacing_standard: 'Standard',
    spacing_loose: 'Loose',
    more_presets: 'More Presets',
    theme_preset_gradient: 'Gradient',
    theme_preset_high_contrast: 'High Contrast',
    theme_preset_monochrome: 'Monochrome',
    theme_preset_christmas: 'Christmas',
    theme_preset_halloween: 'Halloween',
    function_toggles: 'Function Toggles',
    show_stats_indicators: 'Show Stats Indicators',
    nav_position: 'Nav Position',
    nav_bottom: 'Bottom',
    nav_top: 'Top',

    home_page: 'Home Page',
    default_home: 'Default Home',
    nav_order: 'Nav Button Order',
    move_up: 'Move Up',
    move_down: 'Move Down',
    custom_icons: 'Custom Icons',
    add_icon: 'Add Icon',
    records_icon: 'Records Icon',
    stats_icon: 'Stats Icon',
    settings_icon: 'Settings Icon',
    reset_icon: 'Reset Icon',
    stats_custom: 'Analytics Customization',
    stats_sort_order: 'Result Sort Order',
    sort_desc: 'Descending',
    sort_asc: 'Ascending',
    stats_buttons_position: 'Time Range Buttons',
    buttons_top: 'Top',
    buttons_bottom: 'Bottom'
  }
};

function isCapacitor() {
  return typeof Capacitor !== 'undefined' && Capacitor.isNativePlatform();
}

function isAndroid() {
  return isCapacitor() && Capacitor.getPlatform() === 'android';
}

function isWeb() {
  return !isCapacitor();
}

function init() {
  const storage = {};
  try {
    storage.lang = localStorage.getItem('lang') || 'zh';
    storage.theme = localStorage.getItem('theme') || 'light';
    storage.colorTheme = localStorage.getItem('colorTheme') || 'default';
    storage.customTheme = JSON.parse(localStorage.getItem('customTheme') || '{}');
    storage.records = JSON.parse(localStorage.getItem('records') || '[]');
    storage.media = JSON.parse(localStorage.getItem('media') || '[]');
    storage.fetishes = JSON.parse(localStorage.getItem('fetishes') || '[]');
    storage.statsConfig = JSON.parse(localStorage.getItem('statsConfig') || '{}');
    storage.uiConfig = JSON.parse(localStorage.getItem('uiConfig') || '{}');
    storage.customPresets = JSON.parse(localStorage.getItem('customPresets') || '[]');
  } catch (e) {
    storage.lang = 'zh';
    storage.theme = 'light';
    storage.colorTheme = 'default';
    storage.customTheme = {};
    storage.records = [];
    storage.media = [];
    storage.fetishes = [];
    storage.statsConfig = {};
    storage.uiConfig = {};
    storage.customPresets = [];
  }

  if (!storage.statsConfig.showThisWeek) storage.statsConfig.showThisWeek = true;
  if (!storage.statsConfig.showThisMonth) storage.statsConfig.showThisMonth = true;
  if (!storage.statsConfig.showLastMonth) storage.statsConfig.showLastMonth = true;
  if (!storage.statsConfig.showThisYear) storage.statsConfig.showThisYear = true;
  if (!storage.statsConfig.weekStartDay) storage.statsConfig.weekStartDay = 'monday';
  if (!storage.statsConfig.syncTime) storage.statsConfig.syncTime = true;
  
  if (!storage.statsConfig.showTotalCount) storage.statsConfig.showTotalCount = true;
  if (!storage.statsConfig.showFrequency) storage.statsConfig.showFrequency = true;
  if (!storage.statsConfig.showLongestAbstinence) storage.statsConfig.showLongestAbstinence = true;
  if (!storage.statsConfig.showAvgDuration) storage.statsConfig.showAvgDuration = true;
  if (!storage.statsConfig.showMinDuration) storage.statsConfig.showMinDuration = true;
  if (!storage.statsConfig.showMaxDuration) storage.statsConfig.showMaxDuration = true;
  
  if (!storage.statsConfig.timeGroupingWeek) storage.statsConfig.timeGroupingWeek = 'day';
  if (!storage.statsConfig.timeGroupingMonth) storage.statsConfig.timeGroupingMonth = 'week';
  if (!storage.statsConfig.timeGroupingYear) storage.statsConfig.timeGroupingYear = 'month';
  if (!storage.statsConfig.sortBy) storage.statsConfig.sortBy = 'count';
  if (!storage.statsConfig.chartType) storage.statsConfig.chartType = 'bar';

  if (!storage.uiConfig.cornerRadius) storage.uiConfig.cornerRadius = 'medium';
  if (!storage.uiConfig.shadowIntensity) storage.uiConfig.shadowIntensity = 'medium';
  if (!storage.uiConfig.lightBg) storage.uiConfig.lightBg = '';
  if (!storage.uiConfig.darkBg) storage.uiConfig.darkBg = '';
  if (!storage.uiConfig.lightBgImage) storage.uiConfig.lightBgImage = '';
  if (!storage.uiConfig.darkBgImage) storage.uiConfig.darkBgImage = '';
  if (!storage.uiConfig.addIcon) storage.uiConfig.addIcon = '';
  if (!storage.uiConfig.recordsIcon) storage.uiConfig.recordsIcon = '';
  if (!storage.uiConfig.statsIcon) storage.uiConfig.statsIcon = '';
  if (!storage.uiConfig.settingsIcon) storage.uiConfig.settingsIcon = '';
  if (!storage.uiConfig.cardBg) storage.uiConfig.cardBg = '';
  if (!storage.uiConfig.textPrimary) storage.uiConfig.textPrimary = '';
  if (!storage.uiConfig.textSecondary) storage.uiConfig.textSecondary = '';
  if (!storage.uiConfig.borderColor) storage.uiConfig.borderColor = '';
  if (!storage.uiConfig.fontSize) storage.uiConfig.fontSize = 'medium';
  if (!storage.uiConfig.spacing) storage.uiConfig.spacing = 'standard';
  if (!storage.uiConfig.navPosition) storage.uiConfig.navPosition = 'bottom';
  if (!storage.uiConfig.defaultHome) storage.uiConfig.defaultHome = 'add';
  if (!storage.uiConfig.navOrder) storage.uiConfig.navOrder = ['add', 'records', 'stats', 'settings'];
  if (!storage.uiConfig.statsSortOrder) storage.uiConfig.statsSortOrder = 'desc';
  if (!storage.uiConfig.statsButtonsPosition) storage.uiConfig.statsButtonsPosition = 'top';

  if (storage.media.length === 0) {
    storage.media = [{ id: Date.now(), name: 'AV' }];
    localStorage.setItem('media', JSON.stringify(storage.media));
  }

  if (storage.fetishes.length === 0) {
    storage.fetishes = [{ id: Date.now() + 1, name: '纯爱' }];
    localStorage.setItem('fetishes', JSON.stringify(storage.fetishes));
  }

  return storage;
}

let currentLang = 'zh';
let currentTheme = 'light';
let currentColorTheme = 'default';
let customTheme = {};
let records = [];
let media = [];
let fetishes = [];
let statsConfig = {};
let uiConfig = {};
let customPresets = [];

let mediaCache = {};
let fetishCache = {};

let currentTab = 'add';
let settingsSubPage = null;
let editingRecordId = null;
let editingMediumId = null;
let editingFetishId = null;
let timerRunning = false;
let timerStartTime = null;
let timerInterval = null;
let timerElapsed = 0;

const themePresets = {
  default: {
    primaryColor: '#6366f1',
    primaryDark: '#4f46e5',
    secondaryColor: '#8b5cf6',
    dangerColor: '#ef4444',
    successColor: '#10b981'
  },
  purple: {
    primaryColor: '#8b5cf6',
    primaryDark: '#7c3aed',
    secondaryColor: '#a855f7',
    dangerColor: '#ef4444',
    successColor: '#10b981'
  },
  green: {
    primaryColor: '#10b981',
    primaryDark: '#059669',
    secondaryColor: '#34d399',
    dangerColor: '#ef4444',
    successColor: '#10b981'
  },
  orange: {
    primaryColor: '#f97316',
    primaryDark: '#ea580c',
    secondaryColor: '#fb923c',
    dangerColor: '#ef4444',
    successColor: '#10b981'
  },
  pink: {
    primaryColor: '#ec4899',
    primaryDark: '#db2777',
    secondaryColor: '#f472b6',
    dangerColor: '#ef4444',
    successColor: '#10b981'
  },
  cyan: {
    primaryColor: '#06b6d4',
    primaryDark: '#0891b2',
    secondaryColor: '#22d3ee',
    dangerColor: '#ef4444',
    successColor: '#10b981'
  }
};

const mainContent = document.getElementById('main-content');
const bottomNav = document.getElementById('bottom-nav');

function t(key) {
  return i18n[currentLang][key] || key;
}

function applyTheme() {
  document.body.classList.remove('light-theme', 'dark-theme', 'purple-theme', 'green-theme', 'orange-theme', 'pink-theme', 'cyan-theme');
  document.body.classList.add(currentTheme + '-theme');
  
  if (currentColorTheme !== 'default') {
    document.body.classList.add(currentColorTheme + '-theme');
  }
  
  applyCustomColors();
}

function applyCustomColors() {
  const root = document.documentElement;
  
  if (currentColorTheme === 'custom' && Object.keys(customTheme).length > 0) {
    if (customTheme.primaryColor) root.style.setProperty('--primary-color', customTheme.primaryColor);
    if (customTheme.primaryDark) root.style.setProperty('--primary-dark', customTheme.primaryDark);
    if (customTheme.secondaryColor) root.style.setProperty('--secondary-color', customTheme.secondaryColor);
    if (customTheme.dangerColor) root.style.setProperty('--danger-color', customTheme.dangerColor);
    if (customTheme.successColor) root.style.setProperty('--success-color', customTheme.successColor);
  } else {
    root.style.removeProperty('--primary-color');
    root.style.removeProperty('--primary-dark');
    root.style.removeProperty('--secondary-color');
    root.style.removeProperty('--danger-color');
    root.style.removeProperty('--success-color');
  }
}

function applyUIConfig() {
  const root = document.documentElement;
  
  const cornerRadiusMap = {
    square: { corner: '4px', cornerSm: '4px' },
    medium: { corner: '16px', cornerSm: '12px' },
    round: { corner: '24px', cornerSm: '16px' }
  };
  const corner = cornerRadiusMap[uiConfig.cornerRadius] || cornerRadiusMap.medium;
  root.style.setProperty('--corner-radius', corner.corner);
  root.style.setProperty('--corner-radius-sm', corner.cornerSm);
  
  const shadowMap = {
    none: { card: 'none', nav: 'none' },
    light: { card: '0 1px 4px rgba(0, 0, 0, 0.05)', nav: '0 -1px 5px rgba(0, 0, 0, 0.03)' },
    medium: { card: '0 2px 8px rgba(0, 0, 0, 0.04)', nav: '0 -2px 10px rgba(0, 0, 0, 0.05)' },
    strong: { card: '0 4px 16px rgba(0, 0, 0, 0.08)', nav: '0 -4px 20px rgba(0, 0, 0, 0.1)' }
  };
  const shadow = shadowMap[uiConfig.shadowIntensity] || shadowMap.medium;
  root.style.setProperty('--shadow-card', shadow.card);
  root.style.setProperty('--shadow-nav', shadow.nav);
  
  if (currentTheme === 'light') {
    if (uiConfig.lightBgImage) {
      document.body.style.backgroundImage = `url(${uiConfig.lightBgImage})`;
      document.body.style.backgroundSize = 'cover';
      document.body.style.backgroundPosition = 'center';
      document.body.style.backgroundAttachment = 'fixed';
      root.style.removeProperty('--background-color');
    } else if (uiConfig.lightBg) {
      document.body.style.backgroundImage = 'none';
      root.style.setProperty('--background-color', uiConfig.lightBg);
    } else {
      document.body.style.backgroundImage = 'none';
      root.style.removeProperty('--background-color');
    }
  } else {
    if (uiConfig.darkBgImage) {
      document.body.style.backgroundImage = `url(${uiConfig.darkBgImage})`;
      document.body.style.backgroundSize = 'cover';
      document.body.style.backgroundPosition = 'center';
      document.body.style.backgroundAttachment = 'fixed';
      root.style.removeProperty('--background-color');
    } else if (uiConfig.darkBg) {
      document.body.style.backgroundImage = 'none';
      root.style.setProperty('--background-color', uiConfig.darkBg);
    } else {
      document.body.style.backgroundImage = 'none';
      root.style.removeProperty('--background-color');
    }
  }
  if (uiConfig.cardBg) {
    root.style.setProperty('--card-background', uiConfig.cardBg);
  }
  if (uiConfig.textPrimary) {
    root.style.setProperty('--text-primary', uiConfig.textPrimary);
  }
  if (uiConfig.textSecondary) {
    root.style.setProperty('--text-secondary', uiConfig.textSecondary);
  }
  if (uiConfig.borderColor) {
    root.style.setProperty('--border-color', uiConfig.borderColor);
  }
  
  const fontSizeMap = {
    small: '14px',
    medium: '16px',
    large: '18px',
    xlarge: '20px'
  };
  root.style.setProperty('--font-size-base', fontSizeMap[uiConfig.fontSize] || fontSizeMap.medium);
  
  const spacingMap = {
    compact: { base: '12px', sm: '8px', lg: '16px' },
    standard: { base: '16px', sm: '12px', lg: '20px' },
    loose: { base: '20px', sm: '16px', lg: '24px' }
  };
  const spacing = spacingMap[uiConfig.spacing] || spacingMap.standard;
  root.style.setProperty('--spacing-base', spacing.base);
  root.style.setProperty('--spacing-sm', spacing.sm);
  root.style.setProperty('--spacing-lg', spacing.lg);
  
  if (uiConfig.navPosition === 'top') {
    bottomNav.classList.add('top-nav');
    mainContent.style.paddingTop = '80px';
    mainContent.style.paddingBottom = '16px';
  } else {
    bottomNav.classList.remove('top-nav');
    mainContent.style.paddingTop = '16px';
    mainContent.style.paddingBottom = '90px';
  }
}

function saveUIConfig() {
  localStorage.setItem('uiConfig', JSON.stringify(uiConfig));
}

function saveCustomPresets() {
  localStorage.setItem('customPresets', JSON.stringify(customPresets));
}

function loadCustomPresets() {
  const saved = localStorage.getItem('customPresets');
  if (saved) {
    customPresets = JSON.parse(saved);
  }
}

function saveThemeConfig() {
  localStorage.setItem('colorTheme', currentColorTheme);
  localStorage.setItem('customTheme', JSON.stringify(customTheme));
}

function updateMediaCache() {
  mediaCache = {};
  media.forEach(m => {
    mediaCache[m.id] = m.name;
  });
}

function updateFetishCache() {
  fetishCache = {};
  fetishes.forEach(f => {
    fetishCache[f.id] = f.name;
  });
}

function updateProgress(percent, status) {
  const progressBar = document.getElementById('loading-progress');
  const statusText = document.getElementById('loading-status');
  if (progressBar) {
    progressBar.style.width = percent + '%';
  }
  if (statusText) {
    statusText.textContent = status;
  }
}

function initApp() {
  try {
    const storage = init();
    
    currentLang = storage.lang;
    currentTheme = storage.theme;
    currentColorTheme = storage.colorTheme;
    customTheme = storage.customTheme;
    records = storage.records;
    media = storage.media;
    fetishes = storage.fetishes;
    statsConfig = storage.statsConfig;
    uiConfig = storage.uiConfig;
    customPresets = storage.customPresets;
    
    updateMediaCache();
    updateFetishCache();
    
    applyTheme();
    applyUIConfig();
    updateNavigationLabels();
    
    initNavigation();
    
    currentTab = uiConfig.defaultHome;
    renderCurrentTab();
    
    setTimeout(() => {
      loadExternalLibraries();
    }, 300);
  } catch (error) {
    console.error('Init error:', error);
  }
}

function loadExternalLibraries() {
  if (!isWeb()) return;
  
  const loadScript = (src) => {
    return new Promise((resolve, reject) => {
      const script = document.createElement('script');
      script.src = src;
      script.onload = resolve;
      script.onerror = reject;
      document.body.appendChild(script);
    });
  };
  
  loadScript('https://cdn.jsdelivr.net/npm/html2canvas@1.4.1/dist/html2canvas.min.js').catch(() => {});
  loadScript('https://cdn.jsdelivr.net/npm/qrcodejs@1.0.0/qrcode.min.js').catch(() => {});
}

function updateNavigationLabels() {
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.dataset.i18n;
    if (i18n[currentLang][key]) {
      el.textContent = i18n[currentLang][key];
    }
  });
}

function showToast(message) {
  const toast = document.createElement('div');
  toast.className = 'toast';
  toast.textContent = message;
  document.body.appendChild(toast);
  setTimeout(() => toast.classList.add('show'), 10);
  setTimeout(() => {
    toast.classList.remove('show');
    setTimeout(() => toast.remove(), 300);
  }, 2000);
}

function formatDuration(seconds) {
  const mins = Math.floor(seconds / 60);
  const secs = seconds % 60;
  return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
}

function formatDate(date) {
  const d = new Date(date);
  return `${d.getFullYear()}-${(d.getMonth() + 1).toString().padStart(2, '0')}-${d.getDate().toString().padStart(2, '0')} ${d.getHours().toString().padStart(2, '0')}:${d.getMinutes().toString().padStart(2, '0')}`;
}

function formatMonth(date) {
  const d = new Date(date);
  return `${d.getFullYear()}年${d.getMonth() + 1}月`;
}

function getMediumLabel(mediumId) {
  if (!mediumId) return '';
  const id = parseInt(mediumId);
  return mediaCache[id] || '';
}

function getFetishLabel(fetishId) {
  if (!fetishId) return '';
  const id = parseInt(fetishId);
  return fetishCache[id] || '';
}

function getFetishesLabels(fetishes) {
  if (!fetishes || !Array.isArray(fetishes) || fetishes.length === 0) return '';
  return fetishes.map(id => getFetishLabel(id)).filter(label => label).join(', ');
}

function saveRecords() {
  localStorage.setItem('records', JSON.stringify(records));
}

function saveMedia() {
  localStorage.setItem('media', JSON.stringify(media));
  updateMediaCache();
}

function saveFetishes() {
  localStorage.setItem('fetishes', JSON.stringify(fetishes));
  updateFetishCache();
}

function saveStatsConfig() {
  localStorage.setItem('statsConfig', JSON.stringify(statsConfig));
}

function renderAddTab() {
  let mediumOptions = media.map(m => `<option value="${m.id}">${m.name}</option>`).join('');
  
  function createFetishCheckboxes(prefix) {
    return fetishes.map(f => `
      <label style="display: flex; align-items: center; padding: 8px 0; cursor: pointer;">
        <input type="checkbox" class="fetish-checkbox" id="${prefix}-fetish-${f.id}" value="${f.id}" style="margin-right: 8px; width: 18px; height: 18px;">
        <span>${f.name}</span>
      </label>
    `).join('');
  }
  
  mainContent.innerHTML = `
    <div class="tab-buttons">
      <button class="tab-btn active" data-subtab="timer">${t('timer')}</button>
      <button class="tab-btn" data-subtab="manual">${t('manual')}</button>
    </div>
    <div id="timer-section">
      <div class="card" style="text-align: center;">
        <div class="timer-display" id="timer-display">00:00</div>
        <button class="btn btn-timer btn-primary" id="timer-btn">
          <span id="timer-btn-text">${t('start_timer')}</span>
        </button>
      </div>
      <div class="card">
        <div class="form-group">
          <label class="form-label">${t('medium')}</label>
          <select class="form-input" id="timer-medium">
            ${mediumOptions}
          </select>
        </div>
        <div class="form-group">
          <label class="form-label">${t('fetish')}</label>
          <div id="timer-fetishes">
            ${createFetishCheckboxes('timer')}
          </div>
        </div>
        <div class="form-group">
          <label class="form-label">${t('notes')}</label>
          <input type="text" class="form-input" id="timer-notes" placeholder="">
        </div>
      </div>
    </div>
    <div id="manual-section" class="hidden">
      <div class="card">
        <h3 class="card-title">${t('manual')}</h3>
        <div class="form-group">
          <label class="form-label">${t('start_time')}</label>
          <input type="datetime-local" class="form-input" id="manual-datetime">
        </div>
        <div class="form-group">
          <div class="input-row">
            <div class="input-col">
              <label class="form-label">${t('duration_min')}</label>
              <input type="number" class="form-input" id="manual-min" min="0" value="0">
            </div>
            <div class="input-col">
              <label class="form-label">${t('duration_sec')}</label>
              <input type="number" class="form-input" id="manual-sec" min="0" max="59" value="0">
            </div>
          </div>
        </div>
        <div class="form-group">
          <label class="form-label">${t('medium')}</label>
          <select class="form-input" id="manual-medium">
            ${mediumOptions}
          </select>
        </div>
        <div class="form-group">
          <label class="form-label">${t('fetish')}</label>
          <div id="manual-fetishes">
            ${createFetishCheckboxes('manual')}
          </div>
        </div>
        <div class="form-group">
          <label class="form-label">${t('notes')}</label>
          <input type="text" class="form-input" id="manual-notes" placeholder="">
        </div>
        <button class="btn btn-primary" id="save-manual-btn">${t('save_record')}</button>
      </div>
    </div>
  `;

  const tabBtns = mainContent.querySelectorAll('.tab-btn');
  const timerSection = document.getElementById('timer-section');
  const manualSection = document.getElementById('manual-section');

  tabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      tabBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      if (btn.dataset.subtab === 'timer') {
        timerSection.classList.remove('hidden');
        manualSection.classList.add('hidden');
      } else {
        timerSection.classList.add('hidden');
        manualSection.classList.remove('hidden');
        const now = new Date();
        now.setMinutes(now.getMinutes() - now.getTimezoneOffset());
        document.getElementById('manual-datetime').value = now.toISOString().slice(0, 16);
      }
    });
  });

  const timerBtn = document.getElementById('timer-btn');
  const timerDisplay = document.getElementById('timer-display');
  const timerBtnText = document.getElementById('timer-btn-text');

  timerBtn.addEventListener('click', () => {
    if (timerRunning) {
      stopTimer();
    } else {
      startTimer();
    }
  });

  function startTimer() {
    timerRunning = true;
    timerStartTime = Date.now() - timerElapsed * 1000;
    timerBtn.classList.add('running');
    timerBtnText.textContent = t('stop_timer');
    
    timerInterval = setInterval(() => {
      timerElapsed = Math.floor((Date.now() - timerStartTime) / 1000);
      timerDisplay.textContent = formatDuration(timerElapsed);
    }, 100);
  }

  function stopTimer() {
    timerRunning = false;
    clearInterval(timerInterval);
    timerBtn.classList.remove('running');
    timerBtnText.textContent = t('start_timer');
    
    const selectedFetishes = [];
    document.querySelectorAll('#timer-fetishes .fetish-checkbox:checked').forEach(checkbox => {
      selectedFetishes.push(parseInt(checkbox.value));
    });
    
    const record = {
      id: Date.now(),
      startTime: new Date(timerStartTime).toISOString(),
      duration: timerElapsed,
      medium: document.getElementById('timer-medium').value,
      fetishes: selectedFetishes,
      notes: document.getElementById('timer-notes').value
    };
    records.unshift(record);
    saveRecords();
    showToast(t('record_saved'));
    
    timerElapsed = 0;
    timerDisplay.textContent = '00:00';
    document.getElementById('timer-notes').value = '';
    document.querySelectorAll('#timer-fetishes .fetish-checkbox').forEach(checkbox => {
      checkbox.checked = false;
    });
  }

  document.getElementById('save-manual-btn').addEventListener('click', () => {
    const datetime = document.getElementById('manual-datetime').value;
    const mins = parseInt(document.getElementById('manual-min').value) || 0;
    const secs = parseInt(document.getElementById('manual-sec').value) || 0;
    
    if (!datetime) {
      showToast('请选择开始时间');
      return;
    }
    
    const selectedFetishes = [];
    document.querySelectorAll('#manual-fetishes .fetish-checkbox:checked').forEach(checkbox => {
      selectedFetishes.push(parseInt(checkbox.value));
    });
    
    const record = {
      id: Date.now(),
      startTime: new Date(datetime).toISOString(),
      duration: mins * 60 + secs,
      medium: document.getElementById('manual-medium').value,
      fetishes: selectedFetishes,
      notes: document.getElementById('manual-notes').value
    };
    records.unshift(record);
    records.sort((a, b) => new Date(b.startTime) - new Date(a.startTime));
    saveRecords();
    showToast(t('record_saved'));
    
    document.getElementById('manual-min').value = '0';
    document.getElementById('manual-sec').value = '0';
    document.getElementById('manual-notes').value = '';
    document.querySelectorAll('#manual-fetishes .fetish-checkbox').forEach(checkbox => {
      checkbox.checked = false;
    });
  });
}

function renderRecordsTab() {
  if (editingRecordId !== null) {
    renderEditRecord();
    return;
  }

  const sortedRecords = [...records].sort((a, b) => new Date(a.startTime) - new Date(b.startTime));
  const grouped = {};
  sortedRecords.forEach(record => {
    const monthKey = new Date(record.startTime).toISOString().slice(0, 7);
    if (!grouped[monthKey]) grouped[monthKey] = [];
    grouped[monthKey].push(record);
  });

  let html = `<div class="card"><h3 class="card-title">${t('records_title')}</h3>`;
  
  if (records.length === 0) {
    html += `
      <div class="empty-state">
        <div class="empty-state-icon">📝</div>
        <div class="empty-state-text">${t('no_records')}</div>
      </div>
    `;
  } else {
    Object.keys(grouped).sort().reverse().forEach(month => {
      const monthRecords = grouped[month].sort((a, b) => new Date(b.startTime) - new Date(a.startTime));
      const recordsHTML = monthRecords.map(record => {
        const recordIndex = sortedRecords.findIndex(r => r.id === record.id);
        let durationDiffHTML = '';
        if (recordIndex > 0) {
          const prevRecord = sortedRecords[recordIndex - 1];
          const diff = record.duration - prevRecord.duration;
          const absDiff = Math.abs(diff);
          const diffMins = Math.floor(absDiff / 60);
          const diffSecs = absDiff % 60;
          let diffText = '';
          let diffClass = '';
          if (diff > 0) {
            diffText = `慢了 ${diffMins > 0 ? diffMins + '分' : ''}${diffSecs}秒`;
            diffClass = 'duration-slower';
          } else if (diff < 0) {
            diffText = `快了 ${diffMins > 0 ? diffMins + '分' : ''}${diffSecs}秒`;
            diffClass = 'duration-faster';
          }
          if (diffText) {
            durationDiffHTML = `<div class="record-duration-diff ${diffClass}">${diffText}</div>`;
          }
        }
        
        let fetishHTML = '';
        const fetishLabels = getFetishesLabels(record.fetishes);
        const singleFetishLabel = getFetishLabel(record.fetish);
        const labels = fetishLabels || singleFetishLabel;
        if (labels) {
          fetishHTML = `<div class="record-medium">${labels}</div>`;
        }
        return `
            <div class="record-item" data-record-id="${record.id}">
              <div class="record-info">
                <div class="record-time">${formatDate(record.startTime)}</div>
                <div class="record-duration">${formatDuration(record.duration)}</div>
                ${durationDiffHTML}
                ${record.medium ? `<div class="record-medium">${getMediumLabel(record.medium)}</div>` : ''}
                ${fetishHTML}
                ${record.notes ? `<div class="record-notes">${record.notes}</div>` : ''}
              </div>
              <div style="display: flex; gap: 8px;">
                <button class="record-edit" data-id="${record.id}">✏️</button>
                <button class="record-delete" data-id="${record.id}">🗑️</button>
              </div>
            </div>
        `;
      }).join('');
      
      html += `
        <div class="record-group">
          <div class="group-header">${formatMonth(grouped[month][0].startTime)}</div>
          ${recordsHTML}
        </div>
      `;
    });
  }
  
  html += '</div>';
  mainContent.innerHTML = html;

  mainContent.querySelectorAll('.record-edit').forEach(btn => {
    btn.addEventListener('click', () => {
      editingRecordId = parseInt(btn.dataset.id);
      renderEditRecord();
    });
  });

  mainContent.querySelectorAll('.record-delete').forEach(btn => {
    btn.addEventListener('click', () => {
      if (confirm(t('delete_confirm'))) {
        records = records.filter(r => r.id !== parseInt(btn.dataset.id));
        saveRecords();
        showToast(t('record_deleted'));
        renderRecordsTab();
      }
    });
  });
}

function renderEditRecord() {
  const record = records.find(r => r.id === editingRecordId);
  if (!record) {
    editingRecordId = null;
    renderRecordsTab();
    return;
  }

  const date = new Date(record.startTime);
  date.setMinutes(date.getMinutes() - date.getTimezoneOffset());
  const datetimeValue = date.toISOString().slice(0, 16);
  const mins = Math.floor(record.duration / 60);
  const secs = record.duration % 60;
  let mediumOptions = media.map(m => `<option value="${m.id}" ${record.medium === m.id ? 'selected' : ''}>${m.name}</option>`).join('');
  
  const recordFetishes = Array.isArray(record.fetishes) ? record.fetishes : (record.fetish ? [parseInt(record.fetish)] : []);
  
  function createFetishCheckboxes() {
    return fetishes.map(f => `
      <label style="display: flex; align-items: center; padding: 8px 0; cursor: pointer;">
        <input type="checkbox" class="fetish-checkbox" id="edit-fetish-${f.id}" value="${f.id}" ${recordFetishes.includes(f.id) ? 'checked' : ''} style="margin-right: 8px; width: 18px; height: 18px;">
        <span>${f.name}</span>
      </label>
    `).join('');
  }

  mainContent.innerHTML = `
    <div class="card">
      <h3 class="card-title">${t('edit_record')}</h3>
      <div class="form-group">
        <label class="form-label">${t('start_time')}</label>
        <input type="datetime-local" class="form-input" id="edit-datetime" value="${datetimeValue}">
      </div>
      <div class="form-group">
        <div class="input-row">
          <div class="input-col">
            <label class="form-label">${t('duration_min')}</label>
            <input type="number" class="form-input" id="edit-min" min="0" value="${mins}">
          </div>
          <div class="input-col">
            <label class="form-label">${t('duration_sec')}</label>
            <input type="number" class="form-input" id="edit-sec" min="0" max="59" value="${secs}">
          </div>
        </div>
      </div>
      <div class="form-group">
        <label class="form-label">${t('medium')}</label>
        <select class="form-input" id="edit-medium">
          ${mediumOptions}
        </select>
      </div>
      <div class="form-group">
        <label class="form-label">${t('fetish')}</label>
        <div id="edit-fetishes">
          ${createFetishCheckboxes()}
        </div>
      </div>
      <div class="form-group">
        <label class="form-label">${t('notes')}</label>
        <input type="text" class="form-input" id="edit-notes" value="${record.notes || ''}">
      </div>
      <div style="display: flex; gap: 12px;">
        <button class="btn btn-secondary" id="cancel-edit">${t('back')}</button>
        <button class="btn btn-primary" id="save-edit">${t('save_changes')}</button>
      </div>
    </div>
  `;

  document.getElementById('cancel-edit').addEventListener('click', () => {
    editingRecordId = null;
    renderRecordsTab();
  });

  document.getElementById('save-edit').addEventListener('click', () => {
    const datetime = document.getElementById('edit-datetime').value;
    const mins = parseInt(document.getElementById('edit-min').value) || 0;
    const secs = parseInt(document.getElementById('edit-sec').value) || 0;
    const medium = document.getElementById('edit-medium').value;
    
    const selectedFetishes = [];
    document.querySelectorAll('#edit-fetishes .fetish-checkbox:checked').forEach(checkbox => {
      selectedFetishes.push(parseInt(checkbox.value));
    });
    
    const notes = document.getElementById('edit-notes').value;
    
    if (!datetime) {
      showToast('请选择开始时间');
      return;
    }
    
    const recordIndex = records.findIndex(r => r.id === editingRecordId);
    if (recordIndex !== -1) {
      records[recordIndex] = {
        ...records[recordIndex],
        startTime: new Date(datetime).toISOString(),
        duration: mins * 60 + secs,
        medium: medium,
        fetishes: selectedFetishes,
        notes: notes
      };
      delete records[recordIndex].fetish;
      records.sort((a, b) => new Date(b.startTime) - new Date(a.startTime));
      saveRecords();
      showToast(t('record_saved'));
      editingRecordId = null;
      renderRecordsTab();
    }
  });
}

function drawPieChart(canvasId, data, colors) {
  const canvas = document.getElementById(canvasId);
  if (!canvas) return;
  
  const ctx = canvas.getContext('2d');
  const centerX = canvas.width / 2;
  const centerY = canvas.height / 2;
  const radius = Math.min(centerX, centerY) - 20;
  
  const total = data.reduce((sum, item) => sum + item.value, 0);
  
  if (total === 0) {
    ctx.fillStyle = '#e0e0e0';
    ctx.beginPath();
    ctx.arc(centerX, centerY, radius, 0, 2 * Math.PI);
    ctx.fill();
    ctx.fillStyle = '#666';
    ctx.font = '14px Arial';
    ctx.textAlign = 'center';
    ctx.fillText(t('no_records'), centerX, centerY);
    return;
  }
  
  let currentAngle = -Math.PI / 2;
  
  data.forEach((item, index) => {
    const sliceAngle = (item.value / total) * 2 * Math.PI;
    
    ctx.fillStyle = colors[index % colors.length];
    ctx.beginPath();
    ctx.moveTo(centerX, centerY);
    ctx.arc(centerX, centerY, radius, currentAngle, currentAngle + sliceAngle);
    ctx.closePath();
    ctx.fill();
    
    currentAngle += sliceAngle;
  });
}

function drawBarChart(canvasId, data, unit) {
  const canvas = document.getElementById(canvasId);
  if (!canvas) return;
  
  const ctx = canvas.getContext('2d');
  const padding = 60;
  
  const isDarkMode = currentTheme === 'dark';
  const textColor = isDarkMode ? '#ffffff' : '#333333';
  const barColor = '#6366f1';
  const barBorderColor = '#4f46e5';
  
  const maxValue = Math.max(...data.map(d => d.value), 1);
  
  const dpr = window.devicePixelRatio || 1;
  
  let canvasWidth = canvas.width || 500;
  let canvasHeight = canvas.height || 250;
  
  if (canvas.offsetWidth > 0 && canvas.offsetHeight > 0) {
    canvasWidth = canvas.offsetWidth;
    canvasHeight = canvas.offsetHeight;
  }
  
  canvas.width = canvasWidth * dpr;
  canvas.height = canvasHeight * dpr;
  canvas.style.width = canvasWidth + 'px';
  canvas.style.height = canvasHeight + 'px';
  ctx.scale(dpr, dpr);
  
  const chartWidth = canvasWidth - padding * 2;
  const chartHeight = canvasHeight - padding * 2;
  const barWidth = Math.max(15, Math.min(50, chartWidth / data.length - 30));
  
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  
  data.forEach((item, index) => {
    const barHeight = (item.value / maxValue) * chartHeight;
    const x = padding + index * (chartWidth / data.length) + (chartWidth / data.length - barWidth) / 2;
    const y = padding + chartHeight - barHeight;
    
    ctx.fillStyle = barColor;
    ctx.fillRect(x, y, barWidth, barHeight);
    
    ctx.strokeStyle = barBorderColor;
    ctx.lineWidth = 1;
    ctx.strokeRect(x, y, barWidth, barHeight);
    
    ctx.fillStyle = textColor;
    ctx.font = 'bold 14px Arial';
    ctx.textAlign = 'center';
    
    if (item.value > 0) {
      ctx.fillText(item.value.toString(), x + barWidth / 2, y - 6);
    }
    
    ctx.font = '11px Arial';
    const label = item.label;
    
    let skipInterval = 1;
    
    if (data.length > 15) {
      skipInterval = 3;
    } else if (data.length > 8) {
      skipInterval = 2;
    }
    
    if (index % skipInterval === 0) {
      ctx.save();
      const labelX = x + barWidth / 2;
      const labelY = canvasHeight - 8;
      ctx.translate(labelX, labelY);
      ctx.rotate(-Math.PI / 4);
      ctx.fillText(label, 0, 0);
      ctx.restore();
    }
  });
}

function drawHorizontalCountChart(containerId, data) {
  const container = document.getElementById(containerId);
  if (!container) return;
  
  container.innerHTML = '';
  
  const maxValue = Math.max(...data.map(d => d.value), 1);
  const barColor = '#6366f1';
  
  data.forEach((item, index) => {
    const itemDiv = document.createElement('div');
    itemDiv.style.cssText = 'display: flex; align-items: center; margin-bottom: 10px;';
    
    const labelDiv = document.createElement('div');
    labelDiv.style.cssText = 'min-width: 100px; margin-right: 12px; font-weight: 500; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; color: var(--text-primary);';
    labelDiv.textContent = item.label;
    
    const barContainer = document.createElement('div');
    barContainer.style.cssText = 'flex: 1; display: flex; align-items: center; gap: 8px;';
    
    const barBackground = document.createElement('div');
    barBackground.style.cssText = 'flex: 1; height: 28px; background: var(--border-color); border-radius: 6px; overflow: hidden;';
    
    const bar = document.createElement('div');
    const barWidthPercent = (item.value / maxValue) * 100;
    bar.style.cssText = `height: 100%; width: ${barWidthPercent}%; background: ${barColor}; border-radius: 6px; transition: width 0.3s ease;`;
    
    barBackground.appendChild(bar);
    
    const valueDiv = document.createElement('div');
    valueDiv.style.cssText = 'min-width: 40px; text-align: right; color: var(--text-secondary); font-weight: 600;';
    valueDiv.textContent = item.value.toString();
    
    barContainer.appendChild(barBackground);
    barContainer.appendChild(valueDiv);
    
    itemDiv.appendChild(labelDiv);
    itemDiv.appendChild(barContainer);
    
    container.appendChild(itemDiv);
  });
}

function drawHorizontalBarChart(containerId, data, colors) {
  const container = document.getElementById(containerId);
  if (!container) return;
  
  container.innerHTML = '';
  
  const maxValue = Math.max(...data.map(d => d.value), 1);
  
  data.forEach((item, index) => {
    const itemDiv = document.createElement('div');
    itemDiv.style.cssText = 'display: flex; align-items: center; margin-bottom: 12px;';
    
    const labelDiv = document.createElement('div');
    labelDiv.style.cssText = 'min-width: 80px; margin-right: 12px; font-weight: 600; white-space: nowrap; overflow: hidden; text-overflow: ellipsis;';
    labelDiv.textContent = `${index + 1}. ${item.label}`;
    
    const barContainer = document.createElement('div');
    barContainer.style.cssText = 'flex: 1; display: flex; align-items: center; gap: 8px;';
    
    const barBackground = document.createElement('div');
    barBackground.style.cssText = 'flex: 1; height: 24px; background: var(--border-color); border-radius: 4px; overflow: hidden;';
    
    const bar = document.createElement('div');
    const barWidthPercent = (item.value / maxValue) * 100;
    bar.style.cssText = `height: 100%; width: ${barWidthPercent}%; background: ${colors[index % colors.length]}; border-radius: 4px; transition: width 0.3s ease;`;
    
    barBackground.appendChild(bar);
    
    const valueDiv = document.createElement('div');
    valueDiv.style.cssText = 'min-width: 40px; text-align: right; color: var(--text-secondary);';
    valueDiv.textContent = `${item.value} ${t('times')}`;
    
    barContainer.appendChild(barBackground);
    barContainer.appendChild(valueDiv);
    
    itemDiv.appendChild(labelDiv);
    itemDiv.appendChild(barContainer);
    
    container.appendChild(itemDiv);
  });
}

function getWeekStartDay() {
  return statsConfig.weekStartDay || 'monday';
}

function getWeekKey(date) {
  const d = new Date(date);
  d.setHours(0, 0, 0, 0);
  const day = d.getDay();
  const weekStart = getWeekStartDay();
  
  let diff;
  if (weekStart === 'monday') {
    diff = d.getDate() - day + (day === 0 ? -6 : 1);
  } else if (weekStart === 'tuesday') {
    diff = d.getDate() - day + (day === 0 ? -5 : (day === 1 ? -6 : 2));
  } else if (weekStart === 'wednesday') {
    diff = d.getDate() - day + (day === 0 ? -4 : (day <= 2 ? -6 - day + 1 : 3));
  } else if (weekStart === 'thursday') {
    diff = d.getDate() - day + (day === 0 ? -3 : (day <= 3 ? -6 - day + 1 : 4));
  } else if (weekStart === 'friday') {
    diff = d.getDate() - day + (day === 0 ? -2 : (day <= 4 ? -6 - day + 1 : 5));
  } else if (weekStart === 'saturday') {
    diff = d.getDate() - day + (day === 0 ? -1 : (day <= 5 ? -6 - day + 1 : 6));
  } else {
    diff = d.getDate() - day;
  }
  
  const weekStartDate = new Date(d.setDate(diff));
  return `${weekStartDate.getFullYear()}-${String(weekStartDate.getMonth() + 1).padStart(2, '0')}-${String(weekStartDate.getDate()).padStart(2, '0')}`;
}

function getMonthKey(date) {
  const d = new Date(date);
  return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}`;
}

function generateWeekKeys(fromDate, toDate) {
  const keys = [];
  const current = new Date(fromDate);
  current.setHours(0, 0, 0, 0);
  const day = current.getDay();
  const weekStart = getWeekStartDay();
  
  let diff;
  if (weekStart === 'monday') {
    diff = current.getDate() - day + (day === 0 ? -6 : 1);
  } else if (weekStart === 'tuesday') {
    diff = current.getDate() - day + (day === 0 ? -5 : (day === 1 ? -6 : 2));
  } else if (weekStart === 'wednesday') {
    diff = current.getDate() - day + (day === 0 ? -4 : (day <= 2 ? -6 - day + 1 : 3));
  } else if (weekStart === 'thursday') {
    diff = current.getDate() - day + (day === 0 ? -3 : (day <= 3 ? -6 - day + 1 : 4));
  } else if (weekStart === 'friday') {
    diff = current.getDate() - day + (day === 0 ? -2 : (day <= 4 ? -6 - day + 1 : 5));
  } else if (weekStart === 'saturday') {
    diff = current.getDate() - day + (day === 0 ? -1 : (day <= 5 ? -6 - day + 1 : 6));
  } else {
    diff = current.getDate() - day;
  }
  current.setDate(diff);
  
  const end = new Date(toDate);
  end.setHours(0, 0, 0, 0);
  
  while (current <= end) {
    const key = `${current.getFullYear()}-${String(current.getMonth() + 1).padStart(2, '0')}-${String(current.getDate()).padStart(2, '0')}`;
    keys.push(key);
    current.setDate(current.getDate() + 7);
  }
  return keys;
}

function generateMonthKeys(fromDate, toDate) {
  const keys = [];
  const current = new Date(fromDate.getFullYear(), fromDate.getMonth(), 1);
  const end = new Date(toDate.getFullYear(), toDate.getMonth(), 1);
  
  while (current <= end) {
    const key = `${current.getFullYear()}-${String(current.getMonth() + 1).padStart(2, '0')}`;
    keys.push(key);
    current.setMonth(current.getMonth() + 1);
  }
  return keys;
}

function formatWeekLabel(key) {
  const d = new Date(key);
  const month = d.getMonth() + 1;
  const date = d.getDate();
  return `${month}/${date}`;
}

function formatMonthLabel(key) {
  const parts = key.split('-');
  return `${parts[1]}月`;
}

function formatMonthLabelShort(key) {
  const parts = key.split('-');
  return `${parts[1]}`;
}

function calculateLongestAbstinence(filteredRecords) {
  if (filteredRecords.length < 2) return 0;
  
  let maxDays = 0;
  const sorted = [...filteredRecords].sort((a, b) => new Date(a.startTime) - new Date(b.startTime));
  
  for (let i = 1; i < sorted.length; i++) {
    const prev = new Date(sorted[i - 1].startTime);
    const curr = new Date(sorted[i].startTime);
    const diffDays = Math.floor((curr - prev) / (1000 * 60 * 60 * 24));
    if (diffDays > maxDays) maxDays = diffDays;
  }
  
  return maxDays;
}

function calculateFrequency(filteredRecords, fromDate, toDate) {
  if (filteredRecords.length === 0) return 0;
  const totalDays = Math.max(1, Math.ceil((toDate - fromDate) / (1000 * 60 * 60 * 24)));
  const totalWeeks = totalDays / 7;
  return (filteredRecords.length / totalWeeks).toFixed(1);
}

function getTimeRange(preset, now) {
  let from, to;
  switch (preset) {
    case 'thisWeek':
      from = new Date(now);
      from.setHours(0, 0, 0, 0);
      const day = from.getDay();
      const weekStart = getWeekStartDay();
      
      let diff;
      if (weekStart === 'monday') {
        diff = from.getDate() - day + (day === 0 ? -6 : 1);
      } else if (weekStart === 'tuesday') {
        diff = from.getDate() - day + (day === 0 ? -5 : (day === 1 ? -6 : 2));
      } else if (weekStart === 'wednesday') {
        diff = from.getDate() - day + (day === 0 ? -4 : (day <= 2 ? -6 - day + 1 : 3));
      } else if (weekStart === 'thursday') {
        diff = from.getDate() - day + (day === 0 ? -3 : (day <= 3 ? -6 - day + 1 : 4));
      } else if (weekStart === 'friday') {
        diff = from.getDate() - day + (day === 0 ? -2 : (day <= 4 ? -6 - day + 1 : 5));
      } else if (weekStart === 'saturday') {
        diff = from.getDate() - day + (day === 0 ? -1 : (day <= 5 ? -6 - day + 1 : 6));
      } else {
        diff = from.getDate() - day;
      }
      
      from.setDate(diff);
      to = new Date(from);
      to.setDate(from.getDate() + 6);
      to.setHours(23, 59, 59, 999);
      break;
    case 'thisMonth':
      from = new Date(now.getFullYear(), now.getMonth(), 1);
      to = new Date(now.getFullYear(), now.getMonth() + 1, 0, 23, 59, 59, 999);
      break;
    case 'lastMonth':
      from = new Date(now.getFullYear(), now.getMonth() - 1, 1);
      to = new Date(now.getFullYear(), now.getMonth(), 0, 23, 59, 59, 999);
      break;
    case 'thisYear':
      from = new Date(now.getFullYear(), 0, 1);
      to = new Date(now.getFullYear(), 11, 31, 23, 59, 59, 999);
      break;
    default:
      from = new Date(now.getFullYear(), now.getMonth(), 1);
      to = new Date(now);
      to.setHours(23, 59, 59, 999);
  }
  return { from, to };
}

function renderStatsTab() {
  const now = new Date();
  const defaultRange = getTimeRange('thisWeek', now);
  
  let screenshotButtonHTML = '';
  if (isWeb()) {
    screenshotButtonHTML = `
      <div style="margin-bottom: 16px;">
        <button class="btn btn-secondary" id="screenshot-btn" style="width: 100%; padding: 12px 16px;">
          <span style="margin-right: 8px;">📸</span>${t('share_screenshot')}
        </button>
      </div>
    `;
  }

  let presetButtonsHTML = '';
  let firstButtonAdded = false;
  let defaultPreset = 'custom';
  
  if (statsConfig.showThisWeek) {
    presetButtonsHTML += `<button class="tab-btn ${!firstButtonAdded ? 'active' : ''}" data-preset="thisWeek">${t('preset_this_week')}</button>`;
    if (!firstButtonAdded) defaultPreset = 'thisWeek';
    firstButtonAdded = true;
  }
  if (statsConfig.showThisMonth) {
    presetButtonsHTML += `<button class="tab-btn ${!firstButtonAdded ? 'active' : ''}" data-preset="thisMonth">${t('preset_this_month')}</button>`;
    if (!firstButtonAdded) defaultPreset = 'thisMonth';
    firstButtonAdded = true;
  }
  if (statsConfig.showLastMonth) {
    presetButtonsHTML += `<button class="tab-btn ${!firstButtonAdded ? 'active' : ''}" data-preset="lastMonth">${t('preset_last_month')}</button>`;
    if (!firstButtonAdded) defaultPreset = 'lastMonth';
    firstButtonAdded = true;
  }
  if (statsConfig.showThisYear) {
    presetButtonsHTML += `<button class="tab-btn ${!firstButtonAdded ? 'active' : ''}" data-preset="thisYear">${t('preset_this_year')}</button>`;
    if (!firstButtonAdded) defaultPreset = 'thisYear';
    firstButtonAdded = true;
  }
  presetButtonsHTML += `<button class="tab-btn ${!firstButtonAdded ? 'active' : ''}" data-preset="custom">${t('preset_custom')}</button>`;

  mainContent.innerHTML = `
    <div class="card">
      <h3 class="card-title">${t('stats_title')}</h3>
      ${screenshotButtonHTML}
      <div class="tab-buttons" style="margin-bottom: 16px;">
        ${presetButtonsHTML}
      </div>
      <div class="date-range" id="custom-date-range" style="display: none;">
        <input type="date" class="form-input" id="stat-from" value="${defaultRange.from.toISOString().slice(0, 10)}">
        <input type="date" class="form-input" id="stat-to" value="${defaultRange.to.toISOString().slice(0, 10)}">
      </div>
      <div id="stats-result"></div>
    </div>
  `;

  let currentPreset = defaultPreset;
  const pieColors = ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0', '#9966FF', '#FF9F40', '#FF6384', '#C9CBCF'];

  function setDateRange(from, to) {
    document.getElementById('stat-from').value = from.toISOString().slice(0, 10);
    document.getElementById('stat-to').value = to.toISOString().slice(0, 10);
  }

  function applyPreset(preset) {
    currentPreset = preset;
    const customDateRange = document.getElementById('custom-date-range');
    const range = getTimeRange(preset, now);
    
    if (preset === 'custom') {
      customDateRange.style.display = 'flex';
    } else {
      customDateRange.style.display = 'none';
      setDateRange(range.from, range.to);
    }
    calculateStats();
  }

  function calculateStats() {
    const from = new Date(document.getElementById('stat-from').value);
    const to = new Date(document.getElementById('stat-to').value);
    to.setHours(23, 59, 59, 999);

    const filtered = [];
    const mediumCounts = {};
    const fetishCounts = {};
    const barData = {};
    let totalDuration = 0;
    let minDuration = Infinity;
    let maxDuration = 0;

    for (let i = 0; i < records.length; i++) {
      const record = records[i];
      const d = new Date(record.startTime);
      
      if (d >= from && d <= to) {
        const hasValidMedium = record.medium && mediaCache[record.medium];
        let hasValidFetish = false;
        
        if (Array.isArray(record.fetishes)) {
          hasValidFetish = record.fetishes.some(id => fetishCache[id]);
        } else if (record.fetish) {
          hasValidFetish = !!fetishCache[record.fetish];
        }
        
        if (hasValidMedium || hasValidFetish) {
          filtered.push(record);
          
          totalDuration += record.duration;
          if (record.duration < minDuration) minDuration = record.duration;
          if (record.duration > maxDuration) maxDuration = record.duration;
          
          if (hasValidMedium) {
            mediumCounts[record.medium] = (mediumCounts[record.medium] || 0) + 1;
          }
          
          if (Array.isArray(record.fetishes)) {
            record.fetishes.forEach(fetish => {
              if (fetishCache[fetish]) {
                fetishCounts[fetish] = (fetishCounts[fetish] || 0) + 1;
              }
            });
          } else if (record.fetish && fetishCache[record.fetish]) {
            fetishCounts[record.fetish] = (fetishCounts[record.fetish] || 0) + 1;
          }
          
          let key;
          let currentGrouping;
          if (currentPreset === 'thisWeek') {
            currentGrouping = statsConfig.timeGroupingWeek;
          } else if (currentPreset === 'thisMonth' || currentPreset === 'lastMonth') {
            currentGrouping = statsConfig.timeGroupingMonth;
          } else if (currentPreset === 'thisYear') {
            currentGrouping = statsConfig.timeGroupingYear;
          } else {
            const totalDays = Math.ceil((to - from) / (1000 * 60 * 60 * 24));
            if (totalDays > 90) {
              currentGrouping = 'month';
            } else if (totalDays > 30) {
              currentGrouping = 'week';
            } else {
              currentGrouping = 'day';
            }
          }
          
          if (currentGrouping === 'day') {
            key = new Date(record.startTime).toISOString().slice(0, 10);
          } else if (currentGrouping === 'week') {
            key = getWeekKey(record.startTime);
          } else if (currentGrouping === 'month') {
            key = getMonthKey(record.startTime);
          } else if (currentGrouping === 'quarter') {
            const d = new Date(record.startTime);
            const year = d.getFullYear();
            const quarter = Math.floor(d.getMonth() / 3) + 1;
            key = `${year}-Q${quarter}`;
          }
          barData[key] = (barData[key] || 0) + 1;
        }
      }
    }

    const count = filtered.length;
    const avgDuration = count > 0 ? Math.round(totalDuration / count) : 0;
    minDuration = count > 0 ? minDuration : 0;
    maxDuration = count > 0 ? maxDuration : 0;
    const frequency = calculateFrequency(filtered, from, to);
    const longestAbstinence = calculateLongestAbstinence(filtered);

    let prevPeriodCount = 0;
    let countChange = 0;
    let countChangePercent = 0;
    
    if (currentPreset === 'thisWeek' || currentPreset === 'thisMonth') {
      let prevFrom, prevTo;
      if (currentPreset === 'thisWeek') {
        prevFrom = new Date(from);
        prevFrom.setDate(prevFrom.getDate() - 7);
        prevTo = new Date(from);
        prevTo.setDate(prevTo.getDate() - 1);
        prevTo.setHours(23, 59, 59, 999);
      } else {
        prevFrom = new Date(from.getFullYear(), from.getMonth() - 1, 1);
        prevTo = new Date(from.getFullYear(), from.getMonth(), 0, 23, 59, 59, 999);
      }
      
      let prevCount = 0;
      for (let i = 0; i < records.length; i++) {
        const record = records[i];
        const d = new Date(record.startTime);
        if (d >= prevFrom && d <= prevTo) {
          const hasValidMedium = record.medium && mediaCache[record.medium];
          let hasValidFetish = false;
          
          if (Array.isArray(record.fetishes)) {
            hasValidFetish = record.fetishes.some(id => fetishCache[id]);
          } else if (record.fetish) {
            hasValidFetish = !!fetishCache[record.fetish];
          }
          
          if (hasValidMedium || hasValidFetish) {
            prevCount++;
          }
        }
      }
      
      prevPeriodCount = prevCount;
      countChange = count - prevPeriodCount;
      if (prevPeriodCount > 0) {
        countChangePercent = Math.round((countChange / prevPeriodCount) * 100);
      }
    }

    let mediumChartData = Object.keys(mediumCounts).map(key => ({
      label: getMediumLabel(key),
      value: mediumCounts[key]
    }));
    
    let fetishChartData = Object.keys(fetishCounts).map(key => ({
      label: getFetishLabel(key),
      value: fetishCounts[key]
    }));
    
    if (statsConfig.sortBy === 'count') {
      mediumChartData.sort((a, b) => b.value - a.value);
      fetishChartData.sort((a, b) => b.value - a.value);
    } else {
      mediumChartData.sort((a, b) => a.label.localeCompare(b.label, currentLang === 'zh' ? 'zh-CN' : 'en-US'));
      fetishChartData.sort((a, b) => a.label.localeCompare(b.label, currentLang === 'zh' ? 'zh-CN' : 'en-US'));
    }

    let allKeys;
    let formatLabel;
    
    let currentGrouping;
    if (currentPreset === 'thisWeek') {
      currentGrouping = statsConfig.timeGroupingWeek;
    } else if (currentPreset === 'thisMonth' || currentPreset === 'lastMonth') {
      currentGrouping = statsConfig.timeGroupingMonth;
    } else if (currentPreset === 'thisYear') {
      currentGrouping = statsConfig.timeGroupingYear;
    } else {
      const totalDays = Math.ceil((to - from) / (1000 * 60 * 60 * 24));
      if (totalDays > 90) {
        currentGrouping = 'month';
      } else if (totalDays > 30) {
        currentGrouping = 'week';
      } else {
        currentGrouping = 'day';
      }
    }
    
    if (currentGrouping === 'day') {
      allKeys = [];
      const current = new Date(from);
      current.setHours(0, 0, 0, 0);
      const end = new Date(to);
      while (current <= end) {
        allKeys.push(current.toISOString().slice(0, 10));
        current.setDate(current.getDate() + 1);
      }
      formatLabel = (key) => {
        const d = new Date(key);
        return `${d.getMonth() + 1}/${d.getDate()}`;
      };
    } else if (currentGrouping === 'week') {
      allKeys = generateWeekKeys(from, to);
      formatLabel = formatWeekLabel;
    } else if (currentGrouping === 'month') {
      allKeys = generateMonthKeys(from, to);
      formatLabel = formatMonthLabelShort;
    } else if (currentGrouping === 'quarter') {
      allKeys = [];
      const startYear = from.getFullYear();
      const startQuarter = Math.floor(from.getMonth() / 3) + 1;
      const endYear = to.getFullYear();
      const endQuarter = Math.floor(to.getMonth() / 3) + 1;
      
      for (let year = startYear; year <= endYear; year++) {
        const qStart = year === startYear ? startQuarter : 1;
        const qEnd = year === endYear ? endQuarter : 4;
        for (let q = qStart; q <= qEnd; q++) {
          allKeys.push(`${year}-Q${q}`);
        }
      }
      formatLabel = (key) => key.split('-')[1];
    }

    const barChartData = allKeys.map(key => ({
      label: formatLabel(key),
      value: barData[key] || 0
    }));

    let changeHTML = '';
    if (prevPeriodCount > 0) {
      const changeClass = countChange >= 0 ? 'positive' : 'negative';
      changeHTML = `<div class="stat-change ${changeClass}">${countChange >= 0 ? '+' : ''}${countChange} (${countChange >= 0 ? '+' : ''}${countChangePercent}%)</div>`;
    }

    let statsGridHTML = '';
    if (statsConfig.showTotalCount) {
      statsGridHTML += `
        <div class="stat-card">
          <div class="stat-value">${count}</div>
          <div class="stat-label">${t('total_count')}</div>
          ${changeHTML}
        </div>
      `;
    }
    if (statsConfig.showFrequency) {
      statsGridHTML += `
        <div class="stat-card">
          <div class="stat-value">${frequency}</div>
          <div class="stat-label">${t('frequency')} (${t('times_per_week')})</div>
        </div>
      `;
    }
    if (statsConfig.showLongestAbstinence) {
      statsGridHTML += `
        <div class="stat-card">
          <div class="stat-value">${longestAbstinence}</div>
          <div class="stat-label">${t('longest_abstinence')} (${t('days')})</div>
        </div>
      `;
    }
    if (statsConfig.showAvgDuration) {
      statsGridHTML += `
        <div class="stat-card">
          <div class="stat-value">${formatDuration(avgDuration)}</div>
          <div class="stat-label">${t('avg_duration')}</div>
        </div>
      `;
    }
    if (statsConfig.showMinDuration) {
      statsGridHTML += `
        <div class="stat-card">
          <div class="stat-value">${formatDuration(minDuration)}</div>
          <div class="stat-label">${t('min_duration')}</div>
        </div>
      `;
    }
    if (statsConfig.showMaxDuration) {
      statsGridHTML += `
        <div class="stat-card">
          <div class="stat-value">${formatDuration(maxDuration)}</div>
          <div class="stat-label">${t('max_duration')}</div>
        </div>
      `;
    }

    document.getElementById('stats-result').innerHTML = `
      <div class="card" style="margin-bottom: 16px;">
        <h3 class="card-title">${t('duration_stats')}</h3>
        <div class="stats-grid">
          ${statsGridHTML}
        </div>
        <div style="margin-top: 16px;">
          <h4 style="margin-bottom: 12px;">${t('count_trend')}</h4>
          <div id="count-bar"></div>
        </div>
      </div>
      
      <div class="card" style="margin-bottom: 16px;">
        <h3 class="card-title">${t('medium_stats')}</h3>
        <canvas id="medium-pie" width="300" height="250" style="width: 100%; max-width: 300px; display: block; margin: 0 auto;"></canvas>
        <div style="margin-top: 16px;">
          <h4 style="margin-bottom: 12px;">${t('usage_rank')}</h4>
          <div id="medium-rank-chart"></div>
        </div>
      </div>
      
      <div class="card">
        <h3 class="card-title">${t('fetish_stats')}</h3>
        <canvas id="fetish-pie" width="300" height="250" style="width: 100%; max-width: 300px; display: block; margin: 0 auto;"></canvas>
        <div style="margin-top: 16px;">
          <h4 style="margin-bottom: 12px;">${t('usage_rank')}</h4>
          <div id="fetish-rank-chart"></div>
        </div>
      </div>
    `;

    setTimeout(() => {
      drawPieChart('medium-pie', mediumChartData, pieColors);
      drawPieChart('fetish-pie', fetishChartData, pieColors);
      drawHorizontalCountChart('count-bar', barChartData);
      
      if (mediumChartData.length > 0) {
        drawHorizontalBarChart('medium-rank-chart', mediumChartData, pieColors);
      } else {
        document.getElementById('medium-rank-chart').innerHTML = '<p style="color: var(--text-secondary);">' + t('no_records') + '</p>';
      }
      
      if (fetishChartData.length > 0) {
        drawHorizontalBarChart('fetish-rank-chart', fetishChartData, pieColors);
      } else {
        document.getElementById('fetish-rank-chart').innerHTML = '<p style="color: var(--text-secondary);">' + t('no_records') + '</p>';
      }
    }, 50);
  }

  applyPreset(defaultPreset);
  
  mainContent.querySelectorAll('[data-preset]').forEach(btn => {
    btn.addEventListener('click', () => {
      mainContent.querySelectorAll('[data-preset]').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      applyPreset(btn.dataset.preset);
    });
  });

  document.getElementById('stat-from').addEventListener('change', () => {
    if (currentPreset === 'custom') calculateStats();
  });
  document.getElementById('stat-to').addEventListener('change', () => {
    if (currentPreset === 'custom') calculateStats();
  });

  if (isWeb()) {
    const screenshotBtn = document.getElementById('screenshot-btn');
    if (screenshotBtn) {
      screenshotBtn.addEventListener('click', takeScreenshot);
    }
  }
}

function takeScreenshot() {
  if (typeof html2canvas === 'undefined') {
    alert(t('screenshot_needs_html2canvas'));
    return;
  }

  const element = document.querySelector('#main-content .card');
  if (!element) return;

  html2canvas(element, {
    backgroundColor: getComputedStyle(document.documentElement).getPropertyValue('--bg-color') || '#ffffff',
    scale: window.devicePixelRatio > 1 ? window.devicePixelRatio : 2,
    useCORS: true,
    allowTaint: true,
    logging: false
  }).then(canvas => {
    const link = document.createElement('a');
    link.download = `selfcare-stats-${new Date().toISOString().slice(0,10)}.png`;
    link.href = canvas.toDataURL('image/png');
    link.click();
    alert(t('screenshot_saved'));
  }).catch(err => {
    console.error('Screenshot failed:', err);
    alert(t('screenshot_failed'));
  });
}

function renderSettingsTab() {
  if (settingsSubPage === 'mediumManagement') {
    renderMediumManagement();
    return;
  }
  if (settingsSubPage === 'fetishManagement') {
    renderFetishManagement();
    return;
  }
  if (settingsSubPage === 'dataManagement') {
    renderDataManagement();
    return;
  }
  if (settingsSubPage === 'statsManagement') {
    renderStatsManagement();
    return;
  }
  if (settingsSubPage === 'appearanceManagement') {
    renderAppearanceManagement();
    return;
  }
  if (settingsSubPage === 'about') {
    renderAbout();
    return;
  }

  mainContent.innerHTML = `
    <div class="card">
      <h3 class="card-title">${t('settings_title')}</h3>
      <div class="settings-item">
        <span class="settings-label">${t('theme')}</span>
        <select class="settings-select" id="theme-select">
          <option value="light" ${currentTheme === 'light' ? 'selected' : ''}>${t('light_mode')}</option>
          <option value="dark" ${currentTheme === 'dark' ? 'selected' : ''}>${t('dark_mode')}</option>
        </select>
      </div>
      <div class="settings-item">
        <span class="settings-label">${t('language')}</span>
        <select class="settings-select" id="lang-select">
          <option value="zh" ${currentLang === 'zh' ? 'selected' : ''}>${t('chinese')}</option>
          <option value="en" ${currentLang === 'en' ? 'selected' : ''}>${t('english')}</option>
        </select>
      </div>
      <div class="settings-item">
        <span class="settings-label">${t('version')}</span>
        <span class="settings-value">0.91.5</span>
      </div>
      <div style="display: flex; gap: 8px; margin-top: 12px;">
        <a href="https://github.com/Alfred5779/Self-Pleasure-Tracker?tab=readme-ov-file#mit-license" target="_blank" style="flex: 1; display: flex; align-items: center; justify-content: center; gap: 8px; padding: 12px; background: var(--card-bg); border-radius: 12px; text-decoration: none; color: var(--text-color);">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
          </svg>
          <span>${t('github')}</span>
        </a>
        <a href="https://qm.qq.com/q/yCkDxZkzvy" target="_blank" style="flex: 1; display: flex; align-items: center; justify-content: center; gap: 8px; padding: 12px; background: var(--card-bg); border-radius: 12px; text-decoration: none; color: var(--text-color);">
          <span style="font-size: 24px;">🐧</span>
          <span>${t('qq_group')}</span>
        </a>
      </div>
      <div class="card" style="margin-top: 16px;">
        <button class="btn btn-secondary" id="appearance-management-btn" style="width: 100%; margin-bottom: 8px;">🎨 ${t('appearance_management')}</button>
        <button class="btn btn-secondary" id="data-management-btn" style="width: 100%; margin-bottom: 8px;">${t('data_management')}</button>
        <button class="btn btn-secondary" id="medium-management-btn" style="width: 100%; margin-bottom: 8px;">${t('medium_management')}</button>
        <button class="btn btn-secondary" id="fetish-management-btn" style="width: 100%; margin-bottom: 8px;">${t('fetish_management')}</button>
        <button class="btn btn-secondary" id="stats-management-btn" style="width: 100%; margin-bottom: 8px;">${t('stats_management')}</button>
        <button class="btn btn-secondary" id="about-btn" style="width: 100%;">${t('about')}</button>
      </div>
    </div>
    <div id="qr-modal" class="modal hidden">
      <div class="modal-content">
        <div class="modal-header">
          <h3>${t('qr_code')}</h3>
          <button class="modal-close" id="close-qr-modal">&times;</button>
        </div>
        <div class="modal-body" style="text-align: center;">
          <div id="qr-canvas-container" style="margin: 20px 0;"></div>
          <button class="btn btn-primary" id="copy-data-btn" style="width: 100%; margin-top: 12px;">📋 ${t('copy_to_clipboard')}</button>
        </div>
      </div>
    </div>
  `;

  document.getElementById('theme-select').addEventListener('change', (e) => {
    currentTheme = e.target.value;
    localStorage.setItem('theme', currentTheme);
    applyTheme();
  });

  document.getElementById('lang-select').addEventListener('change', (e) => {
    currentLang = e.target.value;
    localStorage.setItem('lang', currentLang);
    updateLanguage();
    renderCurrentTab();
  });

  document.getElementById('appearance-management-btn').addEventListener('click', () => {
    settingsSubPage = 'appearanceManagement';
    renderSettingsTab();
  });

  document.getElementById('data-management-btn').addEventListener('click', () => {
    settingsSubPage = 'dataManagement';
    renderSettingsTab();
  });

  document.getElementById('medium-management-btn').addEventListener('click', () => {
    settingsSubPage = 'mediumManagement';
    renderSettingsTab();
  });

  document.getElementById('fetish-management-btn').addEventListener('click', () => {
    settingsSubPage = 'fetishManagement';
    renderSettingsTab();
  });

  document.getElementById('stats-management-btn').addEventListener('click', () => {
    settingsSubPage = 'statsManagement';
    renderSettingsTab();
  });

  document.getElementById('about-btn').addEventListener('click', () => {
    settingsSubPage = 'about';
    renderSettingsTab();
  });
}

function renderDisclaimer() {
  mainContent.innerHTML = `
    <div class="card">
      <div style="display: flex; align-items: center; margin-bottom: 16px;">
        <button class="btn btn-secondary" id="back-btn" style="margin-right: 12px;">← ${t('back')}</button>
        <h3 class="card-title" style="margin: 0;">${t('disclaimer')}</h3>
      </div>
      <div style="line-height: 1.8; color: var(--text-secondary);">
        <h4 style="color: var(--text-color); margin-bottom: 8px;">${t('age_restriction')}</h4>
        <p style="margin-bottom: 16px;">${t('age_restriction_desc')}</p>
        
        <h4 style="color: var(--text-color); margin-bottom: 8px;">${t('learning_only')}</h4>
        <p style="margin-bottom: 16px;">${t('learning_only_desc')}</p>
        
        <h4 style="color: var(--text-color); margin-bottom: 8px;">${t('legal_responsibility')}</h4>
        <p style="margin-bottom: 16px;">${t('legal_responsibility_desc')}</p>
        
        <h4 style="color: var(--text-color); margin-bottom: 8px;">${t('entertainment_statement')}</h4>
        <p>${t('entertainment_statement_desc')}</p>
      </div>
    </div>
  `;

  document.getElementById('back-btn').addEventListener('click', () => {
    settingsSubPage = null;
    renderSettingsTab();
  });
}

function renderAppearanceManagement() {
  mainContent.innerHTML = `
    <div class="card">
      <div style="display: flex; align-items: center; margin-bottom: 16px;">
        <button class="btn btn-secondary" id="back-btn" style="margin-right: 12px;">← ${t('back')}</button>
        <h3 class="card-title" style="margin: 0;">${t('appearance_management')}</h3>
      </div>
      
      <div style="display: flex; gap: 8px; margin-bottom: 24px;">
        <button class="btn btn-secondary" id="export-appearance-btn" style="flex: 1;">${t('export_appearance')}</button>
        <button class="btn btn-secondary" id="import-appearance-btn" style="flex: 1;">${t('import_appearance')}</button>
        <input type="file" id="appearance-file-input" accept=".json" style="display: none;">
      </div>
      
      <div style="margin-bottom: 24px;">
        <h4 style="color: var(--text-primary); margin-bottom: 12px; font-size: 16px;">🎨 ${t('theme_presets')}</h4>
        <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 8px; margin-bottom: 16px;">
          <button class="btn ${currentColorTheme === 'default' ? 'btn-primary' : 'btn-secondary'}" id="theme-preset-default" style="padding: 10px;">
            <span style="display: block; font-size: 24px; margin-bottom: 4px;">💜</span>
            ${t('theme_preset_default')}
          </button>
          <button class="btn ${currentColorTheme === 'purple' ? 'btn-primary' : 'btn-secondary'}" id="theme-preset-purple" style="padding: 10px;">
            <span style="display: block; font-size: 24px; margin-bottom: 4px;">🟣</span>
            ${t('theme_preset_purple')}
          </button>
          <button class="btn ${currentColorTheme === 'green' ? 'btn-primary' : 'btn-secondary'}" id="theme-preset-green" style="padding: 10px;">
            <span style="display: block; font-size: 24px; margin-bottom: 4px;">🟢</span>
            ${t('theme_preset_green')}
          </button>
          <button class="btn ${currentColorTheme === 'orange' ? 'btn-primary' : 'btn-secondary'}" id="theme-preset-orange" style="padding: 10px;">
            <span style="display: block; font-size: 24px; margin-bottom: 4px;">🟠</span>
            ${t('theme_preset_orange')}
          </button>
          <button class="btn ${currentColorTheme === 'pink' ? 'btn-primary' : 'btn-secondary'}" id="theme-preset-pink" style="padding: 10px;">
            <span style="display: block; font-size: 24px; margin-bottom: 4px;">🩷</span>
            ${t('theme_preset_pink')}
          </button>
          <button class="btn ${currentColorTheme === 'cyan' ? 'btn-primary' : 'btn-secondary'}" id="theme-preset-cyan" style="padding: 10px;">
            <span style="display: block; font-size: 24px; margin-bottom: 4px;">🔵</span>
            ${t('theme_preset_cyan')}
          </button>
          ${customPresets.map((preset, index) => `
            <div style="position: relative;">
              <button class="btn ${currentColorTheme === 'custom-' + preset.id ? 'btn-primary' : 'btn-secondary'}" id="custom-preset-${preset.id}" style="padding: 10px; width: 100%;">
                <span style="display: block; font-size: 24px; margin-bottom: 4px;">⭐</span>
                ${preset.name}
              </button>
              <button class="btn btn-danger" id="delete-custom-preset-${preset.id}" style="position: absolute; top: 2px; right: 2px; padding: 2px 6px; font-size: 12px; min-width: auto;">×</button>
            </div>
          `).join('')}
        </div>
      </div>
      
      <div style="margin-bottom: 24px;">
        <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 12px;">
          <h4 style="color: var(--text-primary); margin: 0; font-size: 16px;">🛠️ ${t('custom_theme')}</h4>
          <button class="btn btn-primary" id="save-as-preset-btn" style="padding: 6px 12px; font-size: 14px;">${t('save_as_preset')}</button>
        </div>
        <div class="form-group">
          <label class="form-label">${t('primary_color')}</label>
          <input type="color" id="custom-primary-color" class="form-input" style="width: 60px; height: 48px; padding: 4px;" value="${customTheme.primaryColor || '#6366f1'}">
        </div>
      </div>
      
      <div style="margin-bottom: 24px;">
        <h4 style="color: var(--text-primary); margin-bottom: 12px; font-size: 16px;">🎨 ${t('visual_style')}</h4>
        
        <div class="form-group">
          <label class="form-label">${t('corner_radius')}</label>
          <div style="display: flex; gap: 8px;">
            <button class="btn ${uiConfig.cornerRadius === 'square' ? 'btn-primary' : 'btn-secondary'}" id="corner-square" style="flex: 1; padding: 10px;">${t('corner_square')}</button>
            <button class="btn ${uiConfig.cornerRadius === 'medium' ? 'btn-primary' : 'btn-secondary'}" id="corner-medium" style="flex: 1; padding: 10px;">${t('corner_medium')}</button>
            <button class="btn ${uiConfig.cornerRadius === 'round' ? 'btn-primary' : 'btn-secondary'}" id="corner-round" style="flex: 1; padding: 10px;">${t('corner_round')}</button>
          </div>
        </div>
        
        <div class="form-group">
          <label class="form-label">${t('shadow_intensity')}</label>
          <div style="display: flex; gap: 8px;">
            <button class="btn ${uiConfig.shadowIntensity === 'none' ? 'btn-primary' : 'btn-secondary'}" id="shadow-none" style="flex: 1; padding: 10px;">${t('shadow_none')}</button>
            <button class="btn ${uiConfig.shadowIntensity === 'light' ? 'btn-primary' : 'btn-secondary'}" id="shadow-light" style="flex: 1; padding: 10px;">${t('shadow_light')}</button>
            <button class="btn ${uiConfig.shadowIntensity === 'medium' ? 'btn-primary' : 'btn-secondary'}" id="shadow-medium" style="flex: 1; padding: 10px;">${t('shadow_medium')}</button>
            <button class="btn ${uiConfig.shadowIntensity === 'strong' ? 'btn-primary' : 'btn-secondary'}" id="shadow-strong" style="flex: 1; padding: 10px;">${t('shadow_strong')}</button>
          </div>
        </div>
        

      </div>
      
      <div style="margin-bottom: 24px;">
        <h4 style="color: var(--text-primary); margin-bottom: 12px; font-size: 16px;">🎨 ${t('color_enhanced')}</h4>
        
        <div class="form-group">
          <label class="form-label">白天模式背景图片</label>
          <input type="file" id="light-bg-image" accept="image/*" style="width: 100%; padding: 8px; margin-bottom: 8px;">
          <div id="light-bg-preview" style="width: 100%; height: 100px; border-radius: 8px; border: 2px dashed var(--border-color); display: flex; align-items: center; justify-content: center; margin-bottom: 8px; background-size: cover; background-position: center;"></div>
          <button class="btn btn-secondary" id="reset-light-bg-image" style="width: 100%;">清除白天模式背景图片</button>
        </div>
        
        <div class="form-group">
          <label class="form-label">黑夜模式背景图片</label>
          <input type="file" id="dark-bg-image" accept="image/*" style="width: 100%; padding: 8px; margin-bottom: 8px;">
          <div id="dark-bg-preview" style="width: 100%; height: 100px; border-radius: 8px; border: 2px dashed var(--border-color); display: flex; align-items: center; justify-content: center; margin-bottom: 8px; background-size: cover; background-position: center;"></div>
          <button class="btn btn-secondary" id="reset-dark-bg-image" style="width: 100%;">清除黑夜模式背景图片</button>
        </div>
        
        <div class="form-group">
          <label class="form-label">${t('light_bg')}</label>
          <div style="display: flex; gap: 8px;">
            <input type="color" id="custom-light-bg" class="form-input" style="flex: 0 0 60px; height: 48px; padding: 4px;" value="${uiConfig.lightBg || '#f8fafc'}">
            <button class="btn btn-secondary" id="reset-light-bg" style="flex: 1; padding: 0 12px;">×</button>
          </div>
        </div>
        
        <div class="form-group">
          <label class="form-label">${t('dark_bg')}</label>
          <div style="display: flex; gap: 8px;">
            <input type="color" id="custom-dark-bg" class="form-input" style="flex: 0 0 60px; height: 48px; padding: 4px;" value="${uiConfig.darkBg || '#0f172a'}">
            <button class="btn btn-secondary" id="reset-dark-bg" style="flex: 1; padding: 0 12px;">×</button>
          </div>
        </div>
        
        <div class="form-group">
          <label class="form-label">${t('card_bg')}</label>
          <div style="display: flex; gap: 8px;">
            <input type="color" id="custom-card-bg" class="form-input" style="flex: 0 0 60px; height: 48px; padding: 4px;" value="${uiConfig.cardBg || '#ffffff'}">
            <button class="btn btn-secondary" id="reset-card-bg" style="flex: 1; padding: 0 12px;">×</button>
          </div>
        </div>
        
        <div class="form-group">
          <label class="form-label">${t('text_primary_color')}</label>
          <div style="display: flex; gap: 8px;">
            <input type="color" id="custom-text-primary" class="form-input" style="flex: 0 0 60px; height: 48px; padding: 4px;" value="${uiConfig.textPrimary || '#1e293b'}">
            <button class="btn btn-secondary" id="reset-text-primary" style="flex: 1; padding: 0 12px;">×</button>
          </div>
        </div>
        
        <div class="form-group">
          <label class="form-label">${t('text_secondary_color')}</label>
          <div style="display: flex; gap: 8px;">
            <input type="color" id="custom-text-secondary" class="form-input" style="flex: 0 0 60px; height: 48px; padding: 4px;" value="${uiConfig.textSecondary || '#64748b'}">
            <button class="btn btn-secondary" id="reset-text-secondary" style="flex: 1; padding: 0 12px;">×</button>
          </div>
        </div>
        
        <div class="form-group">
          <label class="form-label">${t('border_color_custom')}</label>
          <div style="display: flex; gap: 8px;">
            <input type="color" id="custom-border-color" class="form-input" style="flex: 0 0 60px; height: 48px; padding: 4px;" value="${uiConfig.borderColor || '#e2e8f0'}">
            <button class="btn btn-secondary" id="reset-border-color" style="flex: 1; padding: 0 12px;">×</button>
          </div>
        </div>
      </div>
      
      <div style="margin-bottom: 24px;">
        <h4 style="color: var(--text-primary); margin-bottom: 12px; font-size: 16px;">📐 ${t('layout_size')}</h4>
        
        <div class="form-group">
          <label class="form-label">${t('font_size')}</label>
          <div style="display: flex; gap: 8px;">
            <button class="btn ${uiConfig.fontSize === 'small' ? 'btn-primary' : 'btn-secondary'}" id="font-small" style="flex: 1; padding: 10px;">${t('font_small')}</button>
            <button class="btn ${uiConfig.fontSize === 'medium' ? 'btn-primary' : 'btn-secondary'}" id="font-medium" style="flex: 1; padding: 10px;">${t('font_medium')}</button>
            <button class="btn ${uiConfig.fontSize === 'large' ? 'btn-primary' : 'btn-secondary'}" id="font-large" style="flex: 1; padding: 10px;">${t('font_large')}</button>
            <button class="btn ${uiConfig.fontSize === 'xlarge' ? 'btn-primary' : 'btn-secondary'}" id="font-xlarge" style="flex: 1; padding: 10px;">${t('font_xlarge')}</button>
          </div>
        </div>
        
        <div class="form-group">
          <label class="form-label">${t('spacing')}</label>
          <div style="display: flex; gap: 8px;">
            <button class="btn ${uiConfig.spacing === 'compact' ? 'btn-primary' : 'btn-secondary'}" id="spacing-compact" style="flex: 1; padding: 10px;">${t('spacing_compact')}</button>
            <button class="btn ${uiConfig.spacing === 'standard' ? 'btn-primary' : 'btn-secondary'}" id="spacing-standard" style="flex: 1; padding: 10px;">${t('spacing_standard')}</button>
            <button class="btn ${uiConfig.spacing === 'loose' ? 'btn-primary' : 'btn-secondary'}" id="spacing-loose" style="flex: 1; padding: 10px;">${t('spacing_loose')}</button>
          </div>
        </div>
      </div>
      
      <div style="margin-bottom: 24px;">
        <h4 style="color: var(--text-primary); margin-bottom: 12px; font-size: 16px;">🏠 ${t('home_page')}</h4>
        
        <div class="form-group">
          <label class="form-label">${t('default_home')}</label>
          <select class="form-input" id="default-home-select">
            <option value="add" ${uiConfig.defaultHome === 'add' ? 'selected' : ''}>${t('tab_add')}</option>
            <option value="records" ${uiConfig.defaultHome === 'records' ? 'selected' : ''}>${t('tab_records')}</option>
            <option value="stats" ${uiConfig.defaultHome === 'stats' ? 'selected' : ''}>${t('tab_stats')}</option>
            <option value="settings" ${uiConfig.defaultHome === 'settings' ? 'selected' : ''}>${t('tab_settings')}</option>
          </select>
        </div>
      </div>
      
      <div style="margin-bottom: 24px;">
        <h4 style="color: var(--text-primary); margin-bottom: 12px; font-size: 16px;">🔧 ${t('function_toggles')}</h4>
        
        <div class="form-group">
          <label class="form-label">${t('nav_position')}</label>
          <div style="display: flex; gap: 8px;">
            <button class="btn ${uiConfig.navPosition === 'bottom' ? 'btn-primary' : 'btn-secondary'}" id="nav-bottom" style="flex: 1; padding: 10px;">${t('nav_bottom')}</button>
            <button class="btn ${uiConfig.navPosition === 'top' ? 'btn-primary' : 'btn-secondary'}" id="nav-top" style="flex: 1; padding: 10px;">${t('nav_top')}</button>
          </div>
        </div>
      </div>
      
      <div style="margin-bottom: 24px;">
        <h4 style="color: var(--text-primary); margin-bottom: 12px; font-size: 16px;">🎨 ${t('custom_icons')}</h4>
        
        <div class="form-group">
          <label class="form-label">${t('add_icon')}</label>
          <input type="file" id="add-icon" accept="image/*" style="width: 100%; padding: 8px; margin-bottom: 8px;">
          <div id="add-icon-preview" style="width: 100%; height: 60px; border-radius: 8px; border: 2px dashed var(--border-color); display: flex; align-items: center; justify-content: center; margin-bottom: 8px; background-size: contain; background-repeat: no-repeat; background-position: center;"></div>
          <button class="btn btn-secondary" id="reset-add-icon" style="width: 100%;">${t('reset_icon')}</button>
        </div>
        
        <div class="form-group">
          <label class="form-label">${t('records_icon')}</label>
          <input type="file" id="records-icon" accept="image/*" style="width: 100%; padding: 8px; margin-bottom: 8px;">
          <div id="records-icon-preview" style="width: 100%; height: 60px; border-radius: 8px; border: 2px dashed var(--border-color); display: flex; align-items: center; justify-content: center; margin-bottom: 8px; background-size: contain; background-repeat: no-repeat; background-position: center;"></div>
          <button class="btn btn-secondary" id="reset-records-icon" style="width: 100%;">${t('reset_icon')}</button>
        </div>
        
        <div class="form-group">
          <label class="form-label">${t('stats_icon')}</label>
          <input type="file" id="stats-icon" accept="image/*" style="width: 100%; padding: 8px; margin-bottom: 8px;">
          <div id="stats-icon-preview" style="width: 100%; height: 60px; border-radius: 8px; border: 2px dashed var(--border-color); display: flex; align-items: center; justify-content: center; margin-bottom: 8px; background-size: contain; background-repeat: no-repeat; background-position: center;"></div>
          <button class="btn btn-secondary" id="reset-stats-icon" style="width: 100%;">${t('reset_icon')}</button>
        </div>
        
        <div class="form-group">
          <label class="form-label">${t('settings_icon')}</label>
          <input type="file" id="settings-icon" accept="image/*" style="width: 100%; padding: 8px; margin-bottom: 8px;">
          <div id="settings-icon-preview" style="width: 100%; height: 60px; border-radius: 8px; border: 2px dashed var(--border-color); display: flex; align-items: center; justify-content: center; margin-bottom: 8px; background-size: contain; background-repeat: no-repeat; background-position: center;"></div>
          <button class="btn btn-secondary" id="reset-settings-icon" style="width: 100%;">${t('reset_icon')}</button>
        </div>
      </div>
      
      <div style="margin-bottom: 24px;">
        <h4 style="color: var(--text-primary); margin-bottom: 12px; font-size: 16px;">🔄 ${t('nav_order')}</h4>
        <div id="nav-order-list">
          ${uiConfig.navOrder.map((tab, index) => `
            <div style="display: flex; align-items: center; gap: 12px; margin-bottom: 10px; padding: 12px 16px; background: var(--border-color); border-radius: 12px;">
              <span style="flex: 1; font-weight: 600; color: var(--text-primary); white-space: nowrap;">${t('tab_' + tab)}</span>
              <button class="btn btn-secondary" id="move-up-${index}" style="padding: 8px 16px; min-width: 44px; ${index === 0 ? 'opacity: 0.4; pointer-events: none;' : ''}" data-index="${index}">↑</button>
            </div>
          `).join('')}
        </div>
      </div>
      
      <div style="display: flex; gap: 8px;">
        <button class="btn btn-secondary" id="reset-all-btn" style="flex: 1;">${t('reset_theme')}</button>
        <button class="btn btn-primary" id="save-appearance-btn" style="flex: 1;">${t('save_theme')}</button>
      </div>
    </div>
  `;

  document.getElementById('back-btn').addEventListener('click', () => {
    settingsSubPage = null;
    renderSettingsTab();
  });

  const presets = ['default', 'purple', 'green', 'orange', 'pink', 'cyan'];
  presets.forEach(preset => {
    document.getElementById(`theme-preset-${preset}`).addEventListener('click', () => {
      currentColorTheme = preset;
      customTheme = {};
      saveThemeConfig();
      applyTheme();
      renderAppearanceManagement();
    });
  });

  function updateCustomTheme() {
    currentColorTheme = 'custom';
    customTheme = {
      primaryColor: document.getElementById('custom-primary-color').value,
      primaryDark: adjustBrightness(document.getElementById('custom-primary-color').value, -20)
    };
    applyCustomColors();
  }

  function adjustBrightness(hex, percent) {
    const num = parseInt(hex.replace('#', ''), 16);
    const r = Math.min(255, Math.max(0, (num >> 16) + percent));
    const g = Math.min(255, Math.max(0, ((num >> 8) & 0x00FF) + percent));
    const b = Math.min(255, Math.max(0, (num & 0x0000FF) + percent));
    return '#' + (0x1000000 + r * 0x10000 + g * 0x100 + b).toString(16).slice(1);
  }

  document.getElementById('custom-primary-color').addEventListener('input', updateCustomTheme);

  function syncColorInputUI(colorInput, configKey, resetBtn) {
    const colorEl = document.getElementById(colorInput);
    const resetEl = document.getElementById(resetBtn);
    
    colorEl.addEventListener('input', () => {
      uiConfig[configKey] = colorEl.value;
      applyUIConfig();
    });
    
    resetEl.addEventListener('click', () => {
      uiConfig[configKey] = '';
      applyUIConfig();
      renderAppearanceManagement();
    });
  }

  syncColorInputUI('custom-light-bg', 'lightBg', 'reset-light-bg');
  syncColorInputUI('custom-dark-bg', 'darkBg', 'reset-dark-bg');
  syncColorInputUI('custom-card-bg', 'cardBg', 'reset-card-bg');
  syncColorInputUI('custom-text-primary', 'textPrimary', 'reset-text-primary');
  syncColorInputUI('custom-text-secondary', 'textSecondary', 'reset-text-secondary');
  syncColorInputUI('custom-border-color', 'borderColor', 'reset-border-color');
  
  const lightBgPreview = document.getElementById('light-bg-preview');
  const darkBgPreview = document.getElementById('dark-bg-preview');
  
  if (uiConfig.lightBgImage) {
    lightBgPreview.style.backgroundImage = `url(${uiConfig.lightBgImage})`;
    lightBgPreview.innerHTML = '';
  } else {
    lightBgPreview.innerHTML = '预览';
  }
  
  if (uiConfig.darkBgImage) {
    darkBgPreview.style.backgroundImage = `url(${uiConfig.darkBgImage})`;
    darkBgPreview.innerHTML = '';
  } else {
    darkBgPreview.innerHTML = '预览';
  }
  
  const addIconPreview = document.getElementById('add-icon-preview');
  const recordsIconPreview = document.getElementById('records-icon-preview');
  const statsIconPreview = document.getElementById('stats-icon-preview');
  const settingsIconPreview = document.getElementById('settings-icon-preview');
  
  if (uiConfig.addIcon) {
    addIconPreview.style.backgroundImage = `url(${uiConfig.addIcon})`;
    addIconPreview.innerHTML = '';
  } else {
    addIconPreview.innerHTML = '➕';
  }
  
  if (uiConfig.recordsIcon) {
    recordsIconPreview.style.backgroundImage = `url(${uiConfig.recordsIcon})`;
    recordsIconPreview.innerHTML = '';
  } else {
    recordsIconPreview.innerHTML = '📋';
  }
  
  if (uiConfig.statsIcon) {
    statsIconPreview.style.backgroundImage = `url(${uiConfig.statsIcon})`;
    statsIconPreview.innerHTML = '';
  } else {
    statsIconPreview.innerHTML = '📊';
  }
  
  if (uiConfig.settingsIcon) {
    settingsIconPreview.style.backgroundImage = `url(${uiConfig.settingsIcon})`;
    settingsIconPreview.innerHTML = '';
  } else {
    settingsIconPreview.innerHTML = '⚙️';
  }
  
  document.getElementById('light-bg-image').addEventListener('change', (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        uiConfig.lightBgImage = event.target.result;
        applyUIConfig();
        renderAppearanceManagement();
      };
      reader.readAsDataURL(file);
    }
  });
  
  document.getElementById('dark-bg-image').addEventListener('change', (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        uiConfig.darkBgImage = event.target.result;
        applyUIConfig();
        renderAppearanceManagement();
      };
      reader.readAsDataURL(file);
    }
  });
  
  document.getElementById('reset-light-bg-image').addEventListener('click', () => {
    uiConfig.lightBgImage = '';
    applyUIConfig();
    renderAppearanceManagement();
  });
  
  document.getElementById('reset-dark-bg-image').addEventListener('click', () => {
    uiConfig.darkBgImage = '';
    applyUIConfig();
    renderAppearanceManagement();
  });
  
  function handleIconUpload(tab) {
    return (e) => {
      const file = e.target.files[0];
      if (file) {
        const reader = new FileReader();
        reader.onload = (event) => {
          const iconKey = tab + 'Icon';
          uiConfig[iconKey] = event.target.result;
          saveUIConfig();
          renderNavigation();
          renderAppearanceManagement();
        };
        reader.readAsDataURL(file);
      }
    };
  }
  
  function handleIconReset(tab) {
    return () => {
      const iconKey = tab + 'Icon';
      uiConfig[iconKey] = '';
      saveUIConfig();
      renderNavigation();
      renderAppearanceManagement();
    };
  }
  
  document.getElementById('add-icon').addEventListener('change', handleIconUpload('add'));
  document.getElementById('records-icon').addEventListener('change', handleIconUpload('records'));
  document.getElementById('stats-icon').addEventListener('change', handleIconUpload('stats'));
  document.getElementById('settings-icon').addEventListener('change', handleIconUpload('settings'));
  
  document.getElementById('reset-add-icon').addEventListener('click', handleIconReset('add'));
  document.getElementById('reset-records-icon').addEventListener('click', handleIconReset('records'));
  document.getElementById('reset-stats-icon').addEventListener('click', handleIconReset('stats'));
  document.getElementById('reset-settings-icon').addEventListener('click', handleIconReset('settings'));

  ['square', 'medium', 'round'].forEach(size => {
    document.getElementById(`corner-${size}`).addEventListener('click', () => {
      uiConfig.cornerRadius = size;
      applyUIConfig();
      renderAppearanceManagement();
    });
  });

  ['none', 'light', 'medium', 'strong'].forEach(intensity => {
    document.getElementById(`shadow-${intensity}`).addEventListener('click', () => {
      uiConfig.shadowIntensity = intensity;
      applyUIConfig();
      renderAppearanceManagement();
    });
  });

  ['small', 'medium', 'large', 'xlarge'].forEach(size => {
    document.getElementById(`font-${size}`).addEventListener('click', () => {
      uiConfig.fontSize = size;
      applyUIConfig();
      renderAppearanceManagement();
    });
  });

  ['compact', 'standard', 'loose'].forEach(spacing => {
    document.getElementById(`spacing-${spacing}`).addEventListener('click', () => {
      uiConfig.spacing = spacing;
      applyUIConfig();
      renderAppearanceManagement();
    });
  });

  document.getElementById('default-home-select').addEventListener('change', (e) => {
    uiConfig.defaultHome = e.target.value;
  });

  document.getElementById('nav-bottom').addEventListener('click', () => {
    uiConfig.navPosition = 'bottom';
    applyUIConfig();
    renderAppearanceManagement();
  });
  document.getElementById('nav-top').addEventListener('click', () => {
    uiConfig.navPosition = 'top';
    applyUIConfig();
    renderAppearanceManagement();
  });

  uiConfig.navOrder.forEach((tab, index) => {
    const upBtn = document.getElementById(`move-up-${index}`);
    
    if (upBtn) {
      upBtn.addEventListener('click', () => {
        if (index > 0) {
          const temp = uiConfig.navOrder[index];
          uiConfig.navOrder[index] = uiConfig.navOrder[index - 1];
          uiConfig.navOrder[index - 1] = temp;
          renderNavigation();
          renderAppearanceManagement();
        }
      });
    }
  });

  document.getElementById('reset-all-btn').addEventListener('click', () => {
    currentColorTheme = 'default';
    customTheme = {};
    uiConfig = {
      cornerRadius: 'medium',
      shadowIntensity: 'medium',
      lightBg: '',
      darkBg: '',
      lightBgImage: '',
      darkBgImage: '',
      addIcon: '',
      recordsIcon: '',
      statsIcon: '',
      settingsIcon: '',
      cardBg: '',
      textPrimary: '',
      textSecondary: '',
      borderColor: '',
      fontSize: 'medium',
      spacing: 'standard',
      navPosition: 'bottom',
      defaultHome: 'add',
      navOrder: ['add', 'records', 'stats', 'settings'],
      statsSortOrder: 'desc',
      statsButtonsPosition: 'top'
    };
    saveThemeConfig();
    saveUIConfig();
    applyTheme();
    applyUIConfig();
    renderNavigation();
    renderAppearanceManagement();
  });

  document.getElementById('save-appearance-btn').addEventListener('click', () => {
    if (currentColorTheme === 'custom') {
      customTheme = {
        primaryColor: document.getElementById('custom-primary-color').value,
        primaryDark: adjustBrightness(document.getElementById('custom-primary-color').value, -20)
      };
    }
    saveThemeConfig();
    saveUIConfig();
    showToast(t('appearance_saved'));
  });
  
  function exportAppearance() {
    if (currentColorTheme === 'custom') {
      customTheme = {
        primaryColor: document.getElementById('custom-primary-color').value,
        primaryDark: adjustBrightness(document.getElementById('custom-primary-color').value, -20)
      };
    }
    
    const appearanceData = {
      version: '1.0',
      exportDate: new Date().toISOString(),
      type: 'appearance',
      lang: currentLang,
      theme: currentTheme,
      colorTheme: currentColorTheme,
      customTheme: customTheme,
      uiConfig: uiConfig
    };
    
    const dataStr = JSON.stringify(appearanceData, null, 2);
    const dataBlob = new Blob([dataStr], { type: 'application/json' });
    const url = URL.createObjectURL(dataBlob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `takeoff-appearance-${new Date().toISOString().slice(0, 10)}.json`;
    link.click();
    URL.revokeObjectURL(url);
    
    showToast(t('appearance_exported'));
  }
  
  function importAppearance(file) {
    const reader = new FileReader();
    reader.onload = (e) => {
      try {
        const appearanceData = JSON.parse(e.target.result);
        
        if (appearanceData.type !== 'appearance') {
          showToast(t('invalid_appearance_file'));
          return;
        }
        
        if (appearanceData.lang) currentLang = appearanceData.lang;
        if (appearanceData.theme) currentTheme = appearanceData.theme;
        if (appearanceData.colorTheme) currentColorTheme = appearanceData.colorTheme;
        if (appearanceData.customTheme) customTheme = appearanceData.customTheme;
        if (appearanceData.uiConfig) uiConfig = appearanceData.uiConfig;
        
        saveThemeConfig();
        saveUIConfig();
        applyTheme();
        applyUIConfig();
        renderNavigation();
        updateNavigationLabels();
        renderAppearanceManagement();
        
        showToast(t('appearance_imported'));
      } catch (error) {
        console.error('Import error:', error);
        showToast(t('invalid_appearance_file'));
      }
    };
    reader.readAsText(file);
  }
  
  document.getElementById('export-appearance-btn').addEventListener('click', exportAppearance);
  
  document.getElementById('import-appearance-btn').addEventListener('click', () => {
    document.getElementById('appearance-file-input').click();
  });
  
  document.getElementById('appearance-file-input').addEventListener('change', (e) => {
    const file = e.target.files[0];
    if (file) {
      importAppearance(file);
    }
    e.target.value = '';
  });

  document.getElementById('save-as-preset-btn').addEventListener('click', () => {
    const presetName = prompt(t('preset_name'));
    if (presetName && presetName.trim()) {
      if (currentColorTheme === 'custom') {
        customTheme = {
          primaryColor: document.getElementById('custom-primary-color').value,
          primaryDark: adjustBrightness(document.getElementById('custom-primary-color').value, -20)
        };
      }
      
      const newPreset = {
        id: Date.now(),
        name: presetName.trim(),
        colorTheme: currentColorTheme,
        customTheme: { ...customTheme },
        uiConfig: { ...uiConfig }
      };
      
      customPresets.push(newPreset);
      saveCustomPresets();
      
      currentColorTheme = 'custom-' + newPreset.id;
      saveThemeConfig();
      
      showToast(t('appearance_saved'));
      renderAppearanceManagement();
    }
  });

  customPresets.forEach(preset => {
    document.getElementById(`custom-preset-${preset.id}`).addEventListener('click', () => {
      currentColorTheme = 'custom-' + preset.id;
      customTheme = { ...preset.customTheme };
      uiConfig = { ...preset.uiConfig };
      saveThemeConfig();
      saveUIConfig();
      applyTheme();
      applyUIConfig();
      renderNavigation();
      renderAppearanceManagement();
    });

    document.getElementById(`delete-custom-preset-${preset.id}`).addEventListener('click', (e) => {
      e.stopPropagation();
      if (confirm(t('delete_preset_confirm'))) {
        customPresets = customPresets.filter(p => p.id !== preset.id);
        saveCustomPresets();
        if (currentColorTheme === 'custom-' + preset.id) {
          currentColorTheme = 'default';
          customTheme = {};
          saveThemeConfig();
          applyTheme();
        }
        renderAppearanceManagement();
      }
    });
  });
}

function renderChangelog() {
  mainContent.innerHTML = `
    <div class="card">
      <div style="display: flex; align-items: center; margin-bottom: 16px;">
        <button class="btn btn-secondary" id="back-btn" style="margin-right: 12px;">← ${t('back')}</button>
        <h3 class="card-title" style="margin: 0;">${t('changelog')}</h3>
      </div>
      <div style="line-height: 1.8;">
        <div style="margin-bottom: 24px; padding-bottom: 16px; border-bottom: 1px solid var(--border-color);">
          <h4 style="color: var(--primary-color); margin-bottom: 8px;">${t('cl_v091_title')}</h4>
          <ul style="color: var(--text-secondary); margin: 0; padding-left: 20px;">
            <li>${t('cl_v091_1')}</li>
            <li>${t('cl_v091_2')}</li>
            <li>${t('cl_v091_3')}</li>
            <li>${t('cl_v091_4')}</li>
            <li>${t('cl_v091_5')}</li>
            <li>${t('cl_v091_6')}</li>
            <li>${t('cl_v091_7')}</li>
            <li>${t('cl_v091_8')}</li>
            <li>${t('cl_v091_9')}</li>
            <li>${t('cl_v091_10')}</li>
            <li>${t('cl_v091_11')}</li>
            <li>${t('cl_v091_12')}</li>
          </ul>
        </div>
        <div style="margin-bottom: 24px; padding-bottom: 16px; border-bottom: 1px solid var(--border-color);">
          <h4 style="color: var(--text-color); margin-bottom: 8px;">${t('cl_v078_title')}</h4>
          <ul style="color: var(--text-secondary); margin: 0; padding-left: 20px;">
            <li>${t('cl_v078_1')}</li>
            <li>${t('cl_v078_2')}</li>
            <li>${t('cl_v078_3')}</li>
            <li>${t('cl_v078_4')}</li>
          </ul>
        </div>
        <div style="margin-bottom: 24px; padding-bottom: 16px; border-bottom: 1px solid var(--border-color);">
          <h4 style="color: var(--text-color); margin-bottom: 8px;">${t('cl_v069_title')}</h4>
          <ul style="color: var(--text-secondary); margin: 0; padding-left: 20px;">
            <li>${t('cl_v069_1')}</li>
            <li>${t('cl_v069_2')}</li>
            <li>${t('cl_v069_3')}</li>
            <li>${t('cl_v069_4')}</li>
            <li>${t('cl_v069_5')}</li>
            <li>${t('cl_v069_6')}</li>
            <li>${t('cl_v069_7')}</li>
            <li>${t('cl_v069_8')}</li>
          </ul>
        </div>
        <div>
          <h4 style="color: var(--text-color); margin-bottom: 8px;">${t('cl_v013_title')}</h4>
          <ul style="color: var(--text-secondary); margin: 0; padding-left: 20px;">
            <li>${t('cl_v013_1')}</li>
            <li>${t('cl_v013_2')}</li>
          </ul>
        </div>
      </div>
    </div>
  `;

  document.getElementById('back-btn').addEventListener('click', () => {
    settingsSubPage = null;
    renderSettingsTab();
  });
}

function renderStatsManagement() {
  mainContent.innerHTML = `
    <div class="card">
      <div style="display: flex; align-items: center; margin-bottom: 16px;">
        <button class="btn btn-secondary" id="back-btn" style="margin-right: 12px;">← ${t('back')}</button>
        <h3 class="card-title" style="margin: 0;">${t('stats_management')}</h3>
      </div>
      
      <div style="margin-bottom: 24px;">
        <h4 style="color: var(--text-color); margin-bottom: 12px;">📊 ${t('stats_title')} ${t('settings_title')}</h4>
        
        <div class="settings-item">
          <span class="settings-label">${t('show_this_week')}</span>
          <label class="toggle-switch">
            <input type="checkbox" id="show-this-week" ${statsConfig.showThisWeek ? 'checked' : ''}>
            <span class="toggle-slider"></span>
          </label>
        </div>
        
        <div class="settings-item">
          <span class="settings-label">${t('show_this_month')}</span>
          <label class="toggle-switch">
            <input type="checkbox" id="show-this-month" ${statsConfig.showThisMonth ? 'checked' : ''}>
            <span class="toggle-slider"></span>
          </label>
        </div>
        
        <div class="settings-item">
          <span class="settings-label">${t('show_last_month')}</span>
          <label class="toggle-switch">
            <input type="checkbox" id="show-last-month" ${statsConfig.showLastMonth ? 'checked' : ''}>
            <span class="toggle-slider"></span>
          </label>
        </div>
        
        <div class="settings-item">
          <span class="settings-label">${t('show_this_year')}</span>
          <label class="toggle-switch">
            <input type="checkbox" id="show-this-year" ${statsConfig.showThisYear ? 'checked' : ''}>
            <span class="toggle-slider"></span>
          </label>
        </div>
      </div>
      
      <div style="margin-bottom: 24px;">
        <h4 style="color: var(--text-color); margin-bottom: 12px;">📈 ${t('stats_display')}</h4>
        
        <div class="settings-item">
          <span class="settings-label">${t('show_total_count')}</span>
          <label class="toggle-switch">
            <input type="checkbox" id="show-total-count" ${statsConfig.showTotalCount ? 'checked' : ''}>
            <span class="toggle-slider"></span>
          </label>
        </div>
        
        <div class="settings-item">
          <span class="settings-label">${t('show_frequency')}</span>
          <label class="toggle-switch">
            <input type="checkbox" id="show-frequency" ${statsConfig.showFrequency ? 'checked' : ''}>
            <span class="toggle-slider"></span>
          </label>
        </div>
        
        <div class="settings-item">
          <span class="settings-label">${t('show_longest_abstinence')}</span>
          <label class="toggle-switch">
            <input type="checkbox" id="show-longest-abstinence" ${statsConfig.showLongestAbstinence ? 'checked' : ''}>
            <span class="toggle-slider"></span>
          </label>
        </div>
        
        <div class="settings-item">
          <span class="settings-label">${t('show_avg_duration')}</span>
          <label class="toggle-switch">
            <input type="checkbox" id="show-avg-duration" ${statsConfig.showAvgDuration ? 'checked' : ''}>
            <span class="toggle-slider"></span>
          </label>
        </div>
        
        <div class="settings-item">
          <span class="settings-label">${t('show_min_duration')}</span>
          <label class="toggle-switch">
            <input type="checkbox" id="show-min-duration" ${statsConfig.showMinDuration ? 'checked' : ''}>
            <span class="toggle-slider"></span>
          </label>
        </div>
        
        <div class="settings-item">
          <span class="settings-label">${t('show_max_duration')}</span>
          <label class="toggle-switch">
            <input type="checkbox" id="show-max-duration" ${statsConfig.showMaxDuration ? 'checked' : ''}>
            <span class="toggle-slider"></span>
          </label>
        </div>
      </div>
      
      <div style="margin-bottom: 24px;">
        <h4 style="color: var(--text-color); margin-bottom: 12px;">📅 ${t('time_grouping')}</h4>
        
        <div class="settings-item">
          <span class="settings-label">${t('preset_this_week')}</span>
          <select class="settings-select" id="time-grouping-week">
            <option value="day" selected>${t('group_by_day')}</option>
          </select>
        </div>
        
        <div class="settings-item">
          <span class="settings-label">${t('preset_this_month')} / ${t('preset_last_month')}</span>
          <select class="settings-select" id="time-grouping-month">
            <option value="week">${t('group_by_week')}</option>
            <option value="day">${t('group_by_day')}</option>
          </select>
        </div>
        
        <div class="settings-item">
          <span class="settings-label">${t('preset_this_year')}</span>
          <select class="settings-select" id="time-grouping-year">
            <option value="month">${t('group_by_month')}</option>
            <option value="week">${t('group_by_week')}</option>
            <option value="day">${t('group_by_day')}</option>
            <option value="quarter">${t('group_by_quarter')}</option>
          </select>
        </div>
      </div>
      
      <div style="margin-bottom: 24px;">
        <h4 style="color: var(--text-color); margin-bottom: 12px;">🔤 ${t('sort_by')}</h4>
        <div class="settings-item">
          <span class="settings-label">${t('sort_by')}</span>
          <select class="settings-select" id="sort-by">
            <option value="count" ${statsConfig.sortBy === 'count' ? 'selected' : ''}>${t('sort_by_count')}</option>
            <option value="name" ${statsConfig.sortBy === 'name' ? 'selected' : ''}>${t('sort_by_name')}</option>
          </select>
        </div>
      </div>
      
      <div style="margin-bottom: 24px;">
        <h4 style="color: var(--text-color); margin-bottom: 12px;">📅 ${t('week_start_day')}</h4>
        <div class="settings-item">
          <span class="settings-label">${t('week_start_day')}</span>
          <select class="settings-select" id="week-start-day">
            <option value="monday" ${statsConfig.weekStartDay === 'monday' ? 'selected' : ''}>${t('monday')}</option>
            <option value="tuesday" ${statsConfig.weekStartDay === 'tuesday' ? 'selected' : ''}>${t('tuesday')}</option>
            <option value="wednesday" ${statsConfig.weekStartDay === 'wednesday' ? 'selected' : ''}>${t('wednesday')}</option>
            <option value="thursday" ${statsConfig.weekStartDay === 'thursday' ? 'selected' : ''}>${t('thursday')}</option>
            <option value="friday" ${statsConfig.weekStartDay === 'friday' ? 'selected' : ''}>${t('friday')}</option>
            <option value="saturday" ${statsConfig.weekStartDay === 'saturday' ? 'selected' : ''}>${t('saturday')}</option>
            <option value="sunday" ${statsConfig.weekStartDay === 'sunday' ? 'selected' : ''}>${t('sunday')}</option>
          </select>
        </div>
      </div>
      
      <div>
        <h4 style="color: var(--text-color); margin-bottom: 12px;">⏰ ${t('sync_time')}</h4>
        <div class="settings-item">
          <span class="settings-label">${t('sync_time')}</span>
          <label class="toggle-switch">
            <input type="checkbox" id="sync-time" ${statsConfig.syncTime ? 'checked' : ''}>
            <span class="toggle-slider"></span>
          </label>
        </div>
        <p style="color: var(--text-secondary); font-size: 14px; margin-top: 8px;">${t('sync_time_desc')}</p>
      </div>
    </div>
  `;

  document.getElementById('back-btn').addEventListener('click', () => {
    settingsSubPage = null;
    renderSettingsTab();
  });

  document.getElementById('show-this-week').addEventListener('change', (e) => {
    statsConfig.showThisWeek = e.target.checked;
    saveStatsConfig();
  });

  document.getElementById('show-this-month').addEventListener('change', (e) => {
    statsConfig.showThisMonth = e.target.checked;
    saveStatsConfig();
  });

  document.getElementById('show-last-month').addEventListener('change', (e) => {
    statsConfig.showLastMonth = e.target.checked;
    saveStatsConfig();
  });

  document.getElementById('show-this-year').addEventListener('change', (e) => {
    statsConfig.showThisYear = e.target.checked;
    saveStatsConfig();
  });

  document.getElementById('show-total-count').addEventListener('change', (e) => {
    statsConfig.showTotalCount = e.target.checked;
    saveStatsConfig();
  });

  document.getElementById('show-frequency').addEventListener('change', (e) => {
    statsConfig.showFrequency = e.target.checked;
    saveStatsConfig();
  });

  document.getElementById('show-longest-abstinence').addEventListener('change', (e) => {
    statsConfig.showLongestAbstinence = e.target.checked;
    saveStatsConfig();
  });

  document.getElementById('show-avg-duration').addEventListener('change', (e) => {
    statsConfig.showAvgDuration = e.target.checked;
    saveStatsConfig();
  });

  document.getElementById('show-min-duration').addEventListener('change', (e) => {
    statsConfig.showMinDuration = e.target.checked;
    saveStatsConfig();
  });

  document.getElementById('show-max-duration').addEventListener('change', (e) => {
    statsConfig.showMaxDuration = e.target.checked;
    saveStatsConfig();
  });

  if (!statsConfig.timeGroupingWeek) statsConfig.timeGroupingWeek = 'day';
  if (!statsConfig.timeGroupingMonth) statsConfig.timeGroupingMonth = 'week';
  if (!statsConfig.timeGroupingYear) statsConfig.timeGroupingYear = 'month';

  document.getElementById('time-grouping-week').value = statsConfig.timeGroupingWeek;
  document.getElementById('time-grouping-month').value = statsConfig.timeGroupingMonth;
  document.getElementById('time-grouping-year').value = statsConfig.timeGroupingYear;

  document.getElementById('time-grouping-week').addEventListener('change', (e) => {
    statsConfig.timeGroupingWeek = e.target.value;
    saveStatsConfig();
  });

  document.getElementById('time-grouping-month').addEventListener('change', (e) => {
    statsConfig.timeGroupingMonth = e.target.value;
    saveStatsConfig();
  });

  document.getElementById('time-grouping-year').addEventListener('change', (e) => {
    statsConfig.timeGroupingYear = e.target.value;
    saveStatsConfig();
  });

  document.getElementById('sort-by').addEventListener('change', (e) => {
    statsConfig.sortBy = e.target.value;
    saveStatsConfig();
  });

  document.getElementById('week-start-day').addEventListener('change', (e) => {
    statsConfig.weekStartDay = e.target.value;
    saveStatsConfig();
  });

  document.getElementById('sync-time').addEventListener('change', (e) => {
    statsConfig.syncTime = e.target.checked;
    saveStatsConfig();
  });
}

function renderAbout() {
  mainContent.innerHTML = `
    <div class="card">
      <div style="display: flex; align-items: center; margin-bottom: 16px;">
        <button class="btn btn-secondary" id="back-btn" style="margin-right: 12px;">← ${t('back')}</button>
        <h3 class="card-title" style="margin: 0;">${t('about_title')}</h3>
      </div>
      
      <div style="text-align: center; margin-bottom: 24px;">
        <div style="font-size: 48px; margin-bottom: 12px;">✈️</div>
        <h2 style="font-size: 24px; font-weight: 700; color: var(--text-primary); margin-bottom: 8px;">起飞助手</h2>
        <p style="color: var(--text-secondary); font-size: 16px;">${t('app_description')}</p>
      </div>
      
      <div style="margin-bottom: 24px; padding: 16px; background: var(--border-color); border-radius: 12px;">
        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 12px;">
          <span style="font-weight: 600; color: var(--text-primary);">${t('version')}</span>
          <span style="color: var(--primary-color); font-weight: 700;">0.91.6</span>
        </div>
        <div style="display: flex; justify-content: space-between; align-items: center;">
          <span style="font-weight: 600; color: var(--text-primary);">${t('developer')}</span>
          <span style="color: var(--primary-color); font-weight: 700;">${t('developer_name')} (${t('developer_name_en')})</span>
        </div>
      </div>
      
      <div style="margin-bottom: 24px;">
        <h4 style="color: var(--text-color); margin-bottom: 12px; font-size: 16px;">📋 ${t('disclaimer')}</h4>
        <div style="line-height: 1.6; color: var(--text-secondary); font-size: 14px;">
          <p style="margin-bottom: 12px;"><strong>${t('age_restriction')}</strong><br>${t('age_restriction_desc')}</p>
          <p style="margin-bottom: 12px;"><strong>${t('learning_only')}</strong><br>${t('learning_only_desc')}</p>
          <p style="margin-bottom: 12px;"><strong>${t('legal_responsibility')}</strong><br>${t('legal_responsibility_desc')}</p>
          <p><strong>${t('entertainment_statement')}</strong><br>${t('entertainment_statement_desc')}</p>
        </div>
      </div>
      
      <div>
        <h4 style="color: var(--text-color); margin-bottom: 12px; font-size: 16px;">📝 ${t('changelog')}</h4>
        <div style="line-height: 1.6;">
          <div style="margin-bottom: 24px; padding-bottom: 16px; border-bottom: 1px solid var(--border-color);">
            <h5 style="color: var(--primary-color); margin-bottom: 8px; font-size: 15px;">${t('cl_v0916_title')}</h5>
            <ul style="color: var(--text-secondary); margin: 0; padding-left: 20px; font-size: 14px;">
              <li>${t('cl_v0916_1')}</li>
              <li>${t('cl_v0916_2')}</li>
              <li>${t('cl_v0916_3')}</li>
              <li>${t('cl_v0916_4')}</li>
              <li>${t('cl_v0916_5')}</li>
              <li>${t('cl_v0916_6')}</li>
              <li>${t('cl_v0916_7')}</li>
              <li>${t('cl_v0916_8')}</li>
              <li>${t('cl_v0916_9')}</li>
            </ul>
          </div>
          <div style="margin-bottom: 24px; padding-bottom: 16px; border-bottom: 1px solid var(--border-color);">
            <h5 style="color: var(--text-color); margin-bottom: 8px; font-size: 15px;">${t('cl_v0915_title')}</h5>
            <ul style="color: var(--text-secondary); margin: 0; padding-left: 20px; font-size: 14px;">
              <li>${t('cl_v0915_1')}</li>
              <li>${t('cl_v0915_2')}</li>
              <li>${t('cl_v0915_3')}</li>
              <li>${t('cl_v0915_4')}</li>
              <li>${t('cl_v0915_5')}</li>
              <li>${t('cl_v0915_6')}</li>
              <li>${t('cl_v0915_7')}</li>
              <li>${t('cl_v0915_8')}</li>
            </ul>
          </div>
          <div style="margin-bottom: 24px; padding-bottom: 16px; border-bottom: 1px solid var(--border-color);">
            <h5 style="color: var(--text-color); margin-bottom: 8px; font-size: 15px;">${t('cl_v0914_title')}</h5>
            <ul style="color: var(--text-secondary); margin: 0; padding-left: 20px; font-size: 14px;">
              <li>${t('cl_v0914_1')}</li>
              <li>${t('cl_v0914_2')}</li>
              <li>${t('cl_v0914_3')}</li>
              <li>${t('cl_v0914_4')}</li>
            </ul>
          </div>
          <div style="margin-bottom: 24px; padding-bottom: 16px; border-bottom: 1px solid var(--border-color);">
            <h5 style="color: var(--text-color); margin-bottom: 8px; font-size: 15px;">${t('cl_v0913_title')}</h5>
            <ul style="color: var(--text-secondary); margin: 0; padding-left: 20px; font-size: 14px;">
              <li>${t('cl_v0913_1')}</li>
              <li>${t('cl_v0913_2')}</li>
              <li>${t('cl_v0913_3')}</li>
            </ul>
          </div>
          <div style="margin-bottom: 24px; padding-bottom: 16px; border-bottom: 1px solid var(--border-color);">
            <h5 style="color: var(--text-color); margin-bottom: 8px; font-size: 15px;">${t('cl_v0912_title')}</h5>
            <ul style="color: var(--text-secondary); margin: 0; padding-left: 20px; font-size: 14px;">
              <li>${t('cl_v0912_1')}</li>
              <li>${t('cl_v0912_2')}</li>
              <li>${t('cl_v0912_3')}</li>
              <li>${t('cl_v0912_4')}</li>
              <li>${t('cl_v0912_5')}</li>
              <li>${t('cl_v0912_6')}</li>
            </ul>
          </div>
          <div style="margin-bottom: 24px; padding-bottom: 16px; border-bottom: 1px solid var(--border-color);">
            <h5 style="color: var(--text-color); margin-bottom: 8px; font-size: 15px;">${t('cl_v0911_title')}</h5>
            <ul style="color: var(--text-secondary); margin: 0; padding-left: 20px; font-size: 14px;">
              <li>${t('cl_v0911_1')}</li>
              <li>${t('cl_v0911_2')}</li>
              <li>${t('cl_v0911_3')}</li>
              <li>${t('cl_v0911_4')}</li>
              <li>${t('cl_v0911_5')}</li>
              <li>${t('cl_v0911_6')}</li>
              <li>${t('cl_v0911_7')}</li>
            </ul>
          </div>
          <div style="margin-bottom: 24px; padding-bottom: 16px; border-bottom: 1px solid var(--border-color);">
            <h5 style="color: var(--text-color); margin-bottom: 8px; font-size: 15px;">${t('cl_v091_title')}</h5>
            <ul style="color: var(--text-secondary); margin: 0; padding-left: 20px; font-size: 14px;">
              <li>${t('cl_v091_1')}</li>
              <li>${t('cl_v091_2')}</li>
              <li>${t('cl_v091_3')}</li>
              <li>${t('cl_v091_4')}</li>
              <li>${t('cl_v091_5')}</li>
              <li>${t('cl_v091_6')}</li>
              <li>${t('cl_v091_7')}</li>
              <li>${t('cl_v091_8')}</li>
              <li>${t('cl_v091_9')}</li>
              <li>${t('cl_v091_10')}</li>
              <li>${t('cl_v091_11')}</li>
              <li>${t('cl_v091_12')}</li>
              <li>${t('cl_v091_13')}</li>
              <li>${t('cl_v091_14')}</li>
            </ul>
          </div>
          <div style="margin-bottom: 24px; padding-bottom: 16px; border-bottom: 1px solid var(--border-color);">
            <h5 style="color: var(--text-color); margin-bottom: 8px; font-size: 15px;">${t('cl_v078_title')}</h5>
            <ul style="color: var(--text-secondary); margin: 0; padding-left: 20px; font-size: 14px;">
              <li>${t('cl_v078_1')}</li>
              <li>${t('cl_v078_2')}</li>
              <li>${t('cl_v078_3')}</li>
              <li>${t('cl_v078_4')}</li>
              <li>${t('cl_v078_5')}</li>
            </ul>
          </div>
          <div style="margin-bottom: 24px; padding-bottom: 16px; border-bottom: 1px solid var(--border-color);">
            <h5 style="color: var(--text-color); margin-bottom: 8px; font-size: 15px;">${t('cl_v069_title')}</h5>
            <ul style="color: var(--text-secondary); margin: 0; padding-left: 20px; font-size: 14px;">
              <li>${t('cl_v069_1')}</li>
              <li>${t('cl_v069_2')}</li>
              <li>${t('cl_v069_3')}</li>
              <li>${t('cl_v069_4')}</li>
              <li>${t('cl_v069_5')}</li>
              <li>${t('cl_v069_6')}</li>
              <li>${t('cl_v069_7')}</li>
              <li>${t('cl_v069_8')}</li>
              <li>${t('cl_v069_9')}</li>
            </ul>
          </div>
          <div>
            <h5 style="color: var(--text-color); margin-bottom: 8px; font-size: 15px;">${t('cl_v013_title')}</h5>
            <ul style="color: var(--text-secondary); margin: 0; padding-left: 20px; font-size: 14px;">
              <li>${t('cl_v013_1')}</li>
              <li>${t('cl_v013_2')}</li>
              <li>${t('cl_v013_3')}</li>
              <li>${t('cl_v013_4')}</li>
              <li>${t('cl_v013_5')}</li>
              <li>${t('cl_v013_6')}</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  `;

  document.getElementById('back-btn').addEventListener('click', () => {
    settingsSubPage = null;
    renderSettingsTab();
  });
}

function renderMediumManagement() {
  if (editingMediumId !== null) {
    renderEditMedium();
    return;
  }

  let mediaListHTML = media.map(m => `
    <div class="record-item">
      <div class="record-info">
        <div style="font-weight: 600;">${m.name}</div>
      </div>
      <div style="display: flex; gap: 8px;">
        <button class="record-edit" data-id="${m.id}">✏️</button>
        <button class="record-delete" data-id="${m.id}">🗑️</button>
      </div>
    </div>
  `).join('');

  mainContent.innerHTML = `
    <div class="card">
      <div style="display: flex; align-items: center; margin-bottom: 16px;">
        <button class="btn btn-secondary" id="back-btn" style="margin-right: 12px;">← ${t('back')}</button>
        <h3 class="card-title" style="margin: 0;">${t('medium_management')}</h3>
      </div>
      <div class="form-group">
        <label class="form-label">${t('medium_name')}</label>
        <input type="text" class="form-input" id="new-medium-name" placeholder="">
      </div>
      <button class="btn btn-primary" id="add-medium-btn" style="width: 100%; margin-bottom: 16px;">${t('add_medium')}</button>
      ${mediaListHTML}
    </div>
  `;

  document.getElementById('back-btn').addEventListener('click', () => {
    settingsSubPage = null;
    renderSettingsTab();
  });

  document.getElementById('add-medium-btn').addEventListener('click', () => {
    const name = document.getElementById('new-medium-name').value.trim();
    if (!name) {
      showToast('请输入媒介名称');
      return;
    }
    media.push({ id: Date.now(), name: name });
    saveMedia();
    showToast(t('medium_saved'));
    document.getElementById('new-medium-name').value = '';
    renderMediumManagement();
  });

  mainContent.querySelectorAll('.record-edit').forEach(btn => {
    btn.addEventListener('click', () => {
      editingMediumId = parseInt(btn.dataset.id);
      renderEditMedium();
    });
  });

  mainContent.querySelectorAll('.record-delete').forEach(btn => {
    btn.addEventListener('click', () => {
      if (confirm(t('delete_medium_confirm'))) {
        const mediumId = parseInt(btn.dataset.id);
        media = media.filter(m => m.id !== mediumId);
        records = records.map(r => ({
          ...r,
          medium: r.medium === mediumId ? null : r.medium
        }));
        saveMedia();
        saveRecords();
        updateMediaCache();
        showToast(t('medium_deleted'));
        renderMediumManagement();
      }
    });
  });
}

function renderEditMedium() {
  const medium = media.find(m => m.id === editingMediumId);
  if (!medium) {
    editingMediumId = null;
    renderMediumManagement();
    return;
  }

  mainContent.innerHTML = `
    <div class="card">
      <div style="display: flex; align-items: center; margin-bottom: 16px;">
        <button class="btn btn-secondary" id="back-btn" style="margin-right: 12px;">← ${t('back')}</button>
        <h3 class="card-title" style="margin: 0;">${t('edit_medium')}</h3>
      </div>
      <div class="form-group">
        <label class="form-label">${t('medium_name')}</label>
        <input type="text" class="form-input" id="edit-medium-name" value="${medium.name}">
      </div>
      <div style="display: flex; gap: 12px;">
        <button class="btn btn-secondary" id="cancel-edit-medium" style="flex: 1;">${t('back')}</button>
        <button class="btn btn-primary" id="save-edit-medium" style="flex: 1;">${t('save_changes')}</button>
      </div>
    </div>
  `;

  document.getElementById('back-btn').addEventListener('click', () => {
    editingMediumId = null;
    renderMediumManagement();
  });

  document.getElementById('cancel-edit-medium').addEventListener('click', () => {
    editingMediumId = null;
    renderMediumManagement();
  });

  document.getElementById('save-edit-medium').addEventListener('click', () => {
    const name = document.getElementById('edit-medium-name').value.trim();
    if (!name) {
      showToast('请输入媒介名称');
      return;
    }
    const index = media.findIndex(m => m.id === editingMediumId);
    if (index !== -1) {
      media[index].name = name;
      saveMedia();
      showToast(t('medium_saved'));
      editingMediumId = null;
      renderMediumManagement();
    }
  });
}

function renderFetishManagement() {
  if (editingFetishId !== null) {
    renderEditFetish();
    return;
  }

  let fetishListHTML = fetishes.map(f => `
    <div class="record-item">
      <div class="record-info">
        <div style="font-weight: 600;">${f.name}</div>
      </div>
      <div style="display: flex; gap: 8px;">
        <button class="record-edit" data-id="${f.id}">✏️</button>
        <button class="record-delete" data-id="${f.id}">🗑️</button>
      </div>
    </div>
  `).join('');

  mainContent.innerHTML = `
    <div class="card">
      <div style="display: flex; align-items: center; margin-bottom: 16px;">
        <button class="btn btn-secondary" id="back-btn" style="margin-right: 12px;">← ${t('back')}</button>
        <h3 class="card-title" style="margin: 0;">${t('fetish_management')}</h3>
      </div>
      <div class="form-group">
        <label class="form-label">${t('fetish_name')}</label>
        <input type="text" class="form-input" id="new-fetish-name" placeholder="">
      </div>
      <button class="btn btn-primary" id="add-fetish-btn" style="width: 100%; margin-bottom: 16px;">${t('add_fetish')}</button>
      ${fetishListHTML}
    </div>
  `;

  document.getElementById('back-btn').addEventListener('click', () => {
    settingsSubPage = null;
    renderSettingsTab();
  });

  document.getElementById('add-fetish-btn').addEventListener('click', () => {
    const name = document.getElementById('new-fetish-name').value.trim();
    if (!name) {
      showToast('请输入性癖名称');
      return;
    }
    fetishes.push({ id: Date.now(), name: name });
    saveFetishes();
    showToast(t('fetish_saved'));
    document.getElementById('new-fetish-name').value = '';
    renderFetishManagement();
  });

  mainContent.querySelectorAll('.record-edit').forEach(btn => {
    btn.addEventListener('click', () => {
      editingFetishId = parseInt(btn.dataset.id);
      renderEditFetish();
    });
  });

  mainContent.querySelectorAll('.record-delete').forEach(btn => {
    btn.addEventListener('click', () => {
      if (confirm(t('delete_fetish_confirm'))) {
        const fetishId = parseInt(btn.dataset.id);
        fetishes = fetishes.filter(f => f.id !== fetishId);
        records = records.map(r => {
          let newRecord = { ...r };
          newRecord.fetish = r.fetish === fetishId ? null : r.fetish;
          if (Array.isArray(r.fetishes)) {
            newRecord.fetishes = r.fetishes.filter(id => id !== fetishId);
          }
          return newRecord;
        });
        saveFetishes();
        saveRecords();
        updateFetishCache();
        showToast(t('fetish_deleted'));
        renderFetishManagement();
      }
    });
  });
}

function renderDataManagement() {
  let dataManagementHTML = '';
  
  if (isWeb()) {
    dataManagementHTML = `
      <button class="btn btn-secondary" id="import-btn" style="width: 100%; margin-bottom: 16px;">📥 ${t('import_data')}</button>
      
      <div style="margin-bottom: 24px;">
        <h4 style="margin-bottom: 12px; color: var(--text-color);">${t('export_settings')}</h4>
        <button class="btn btn-primary" id="export-settings-copy" style="width: 100%;">📋 复制设置数据</button>
      </div>
      
      <div>
        <h4 style="margin-bottom: 12px; color: var(--text-color);">${t('export_records')}</h4>
        <div class="form-group" style="margin-bottom: 12px;">
          <label class="form-label">${t('date_range')}</label>
          <div style="display: flex; gap: 8px; margin-bottom: 8px;">
            <input type="date" class="form-input" id="date-from" style="flex: 1;">
            <input type="date" class="form-input" id="date-to" style="flex: 1;">
          </div>
          <button class="btn btn-secondary" id="reset-date-btn" style="width: 100%;">${t('reset_date_range')}</button>
        </div>
        <div style="display: flex; gap: 8px; margin-bottom: 12px;">
          <button class="btn btn-primary" id="export-records-json" style="flex: 1;">${t('export_json')}</button>
          <button class="btn btn-primary" id="export-records-csv" style="flex: 1;">${t('export_csv')}</button>
        </div>
        <button class="btn btn-primary" id="export-records-excel" style="width: 100%;">${t('export_excel')}</button>
      </div>
      
      <div style="margin-top: 24px;">
        <button class="btn btn-primary" id="receive-data-btn" style="width: 100%;">📥 ${t('receive_data')}</button>
      </div>
      <input type="file" id="import-file" accept=".json" style="display: none;">
    `;
  } else {
    dataManagementHTML = `
      <button class="btn btn-secondary" id="import-btn" style="width: 100%; margin-bottom: 16px;">📥 ${t('import_data')}</button>
      
      <div style="margin-bottom: 24px;">
        <h4 style="margin-bottom: 12px; color: var(--text-color);">${t('export_settings')}</h4>
        <button class="btn btn-primary" id="export-settings-copy" style="width: 100%;">📋 复制设置数据</button>
      </div>
      
      <div>
        <h4 style="margin-bottom: 12px; color: var(--text-color);">${t('export_records')}</h4>
        <div class="form-group" style="margin-bottom: 12px;">
          <label class="form-label">${t('date_range')}</label>
          <div style="display: flex; gap: 8px; margin-bottom: 8px;">
            <input type="date" class="form-input" id="date-from" style="flex: 1;">
            <input type="date" class="form-input" id="date-to" style="flex: 1;">
          </div>
          <button class="btn btn-secondary" id="reset-date-btn" style="width: 100%; margin-bottom: 16px;">${t('reset_date_range')}</button>
        </div>
        <div class="form-group">
          <label class="form-label">${t('split_count')}</label>
          <select class="form-input" id="split-count-select" style="width: 100%; margin-bottom: 8px;">
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
            <option value="7">7</option>
            <option value="8">8</option>
            <option value="9">9</option>
            <option value="10">10</option>
          </select>
          <button class="btn btn-primary" id="confirm-split-btn" style="width: 100%;">${t('confirm')}</button>
        </div>
        <div id="split-buttons-container"></div>
        <p style="color: var(--text-secondary); font-size: 12px; line-height: 1.6; margin-top: 12px;">
          <strong>用法：</strong>选择日期范围（可选），然后选择要分成几份，点击确定后会生成对应数量的分享按钮，依次点击分享每个部分。<br>
          <strong>目的：</strong>当数据量太大时，可以将数据分成多个小文件分别分享，每个部分都可以单独导入。<br>
          <strong>导入：</strong>可以单独导入任意部分，也可以收集全部部分后合并导入。<br>
          <strong>说明：</strong>点击分享按钮后会直接复制到剪贴板，这是因为手机分享API技术限制，改用剪贴板方式更稳定可靠。
        </p>
      </div>
      
      <input type="file" id="import-file" accept=".json" style="display: none;">
    `;
  }

  mainContent.innerHTML = `
    <div class="card">
      <div style="display: flex; align-items: center; margin-bottom: 16px;">
        <button class="btn btn-secondary" id="back-btn" style="margin-right: 12px;">← ${t('back')}</button>
        <h3 class="card-title" style="margin: 0;">${t('data_management')}</h3>
      </div>
      ${dataManagementHTML}
    </div>
  `;

  document.getElementById('back-btn').addEventListener('click', () => {
    settingsSubPage = null;
    renderSettingsTab();
  });

  if (isWeb()) {
    document.getElementById('export-settings-copy').addEventListener('click', copySettingsToClipboard);
    document.getElementById('export-records-json').addEventListener('click', () => exportRecords('json'));
    document.getElementById('export-records-csv').addEventListener('click', () => exportRecords('csv'));
    document.getElementById('export-records-excel').addEventListener('click', () => exportRecords('excel'));
    document.getElementById('receive-data-btn').addEventListener('click', receiveDataFromMobile);
    
    const dateFrom = document.getElementById('date-from');
    const dateTo = document.getElementById('date-to');
    
    if (records.length > 0) {
      const sortedRecords = [...records].sort((a, b) => new Date(a.startTime) - new Date(b.startTime));
      const firstDate = new Date(sortedRecords[0].startTime);
      const lastDate = new Date(sortedRecords[sortedRecords.length - 1].startTime);
      dateFrom.value = firstDate.toISOString().slice(0, 10);
      dateTo.value = lastDate.toISOString().slice(0, 10);
    }
    
    document.getElementById('reset-date-btn').addEventListener('click', () => {
      if (records.length > 0) {
        const sortedRecords = [...records].sort((a, b) => new Date(a.startTime) - new Date(b.startTime));
        const firstDate = new Date(sortedRecords[0].startTime);
        const lastDate = new Date(sortedRecords[sortedRecords.length - 1].startTime);
        dateFrom.value = firstDate.toISOString().slice(0, 10);
        dateTo.value = lastDate.toISOString().slice(0, 10);
      }
    });
  } else {
    let currentSplitCount = 1;
    
    function renderSplitButtons() {
      const container = document.getElementById('split-buttons-container');
      container.innerHTML = '';
      
      for (let i = 1; i <= currentSplitCount; i++) {
        const btn = document.createElement('button');
        btn.className = 'btn btn-primary';
        btn.style.cssText = 'width: 100%; margin-bottom: 8px;';
        btn.innerHTML = `📤 ${t('share_file')} (${t('part').replace('{n}', i)})`;
        btn.addEventListener('click', () => shareSplitData(i, currentSplitCount));
        container.appendChild(btn);
      }
    }
    
    document.getElementById('export-settings-copy').addEventListener('click', copySettingsToClipboard);
    
    document.getElementById('confirm-split-btn').addEventListener('click', () => {
      const select = document.getElementById('split-count-select');
      const value = parseInt(select.value) || 1;
      currentSplitCount = Math.max(1, Math.min(10, value));
      select.value = currentSplitCount;
      renderSplitButtons();
    });
    
    renderSplitButtons();
    
    const dateFrom = document.getElementById('date-from');
    const dateTo = document.getElementById('date-to');
    
    if (records.length > 0) {
      const sortedRecords = [...records].sort((a, b) => new Date(a.startTime) - new Date(b.startTime));
      const firstDate = new Date(sortedRecords[0].startTime);
      const lastDate = new Date(sortedRecords[sortedRecords.length - 1].startTime);
      dateFrom.value = firstDate.toISOString().slice(0, 10);
      dateTo.value = lastDate.toISOString().slice(0, 10);
    }
    
    document.getElementById('reset-date-btn').addEventListener('click', () => {
      if (records.length > 0) {
        const sortedRecords = [...records].sort((a, b) => new Date(a.startTime) - new Date(b.startTime));
        const firstDate = new Date(sortedRecords[0].startTime);
        const lastDate = new Date(sortedRecords[sortedRecords.length - 1].startTime);
        dateFrom.value = firstDate.toISOString().slice(0, 10);
        dateTo.value = lastDate.toISOString().slice(0, 10);
      }
    });
  }

  document.getElementById('import-btn').addEventListener('click', () => {
    const choice = confirm('点击「确定」从剪贴板粘贴数据\n点击「取消」选择文件导入');
    if (choice) {
      importFromClipboard();
    } else {
      document.getElementById('import-file').click();
    }
  });
  
  document.getElementById('import-file').addEventListener('change', (e) => {
    if (e.target.files[0]) {
      importFromFile(e.target.files[0], e);
    }
  });
}

function shareSplitData(partNumber, totalParts) {
  const dateFrom = document.getElementById('date-from')?.value;
  const dateTo = document.getElementById('date-to')?.value;
  
  const fullData = getExportData(dateFrom, dateTo);
  
  const totalRecords = fullData.records.length;
  const recordsPerPart = Math.ceil(totalRecords / totalParts);
  const startIndex = (partNumber - 1) * recordsPerPart;
  const endIndex = Math.min(startIndex + recordsPerPart, totalRecords);
  
  const splitData = {
    version: '1.0',
    exportDate: new Date().toISOString(),
    part: partNumber,
    totalParts: totalParts,
    canStandalone: true,
    records: fullData.records.slice(startIndex, endIndex),
    media: fullData.media,
    fetishes: fullData.fetishes
  };
  
  const dataStr = JSON.stringify(splitData);
  
  if (navigator.clipboard) {
    navigator.clipboard.writeText(dataStr).then(() => {
      alert(t('copy_success'));
    }).catch(() => {
      const textarea = document.createElement('textarea');
      textarea.value = dataStr;
      document.body.appendChild(textarea);
      textarea.select();
      document.execCommand('copy');
      document.body.removeChild(textarea);
      alert(t('copy_success'));
    });
  } else {
    const textarea = document.createElement('textarea');
    textarea.value = dataStr;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand('copy');
    document.body.removeChild(textarea);
    alert(t('copy_success'));
  }
}

function renderEditFetish() {
  const fetish = fetishes.find(f => f.id === editingFetishId);
  if (!fetish) {
    editingFetishId = null;
    renderFetishManagement();
    return;
  }

  mainContent.innerHTML = `
    <div class="card">
      <div style="display: flex; align-items: center; margin-bottom: 16px;">
        <button class="btn btn-secondary" id="back-btn" style="margin-right: 12px;">← ${t('back')}</button>
        <h3 class="card-title" style="margin: 0;">${t('edit_fetish')}</h3>
      </div>
      <div class="form-group">
        <label class="form-label">${t('fetish_name')}</label>
        <input type="text" class="form-input" id="edit-fetish-name" value="${fetish.name}">
      </div>
      <div style="display: flex; gap: 12px;">
        <button class="btn btn-secondary" id="cancel-edit-fetish" style="flex: 1;">${t('back')}</button>
        <button class="btn btn-primary" id="save-edit-fetish" style="flex: 1;">${t('save_changes')}</button>
      </div>
    </div>
  `;

  document.getElementById('back-btn').addEventListener('click', () => {
    editingFetishId = null;
    renderFetishManagement();
  });

  document.getElementById('cancel-edit-fetish').addEventListener('click', () => {
    editingFetishId = null;
    renderFetishManagement();
  });

  document.getElementById('save-edit-fetish').addEventListener('click', () => {
    const name = document.getElementById('edit-fetish-name').value.trim();
    if (!name) {
      showToast('请输入性癖名称');
      return;
    }
    const index = fetishes.findIndex(f => f.id === editingFetishId);
    if (index !== -1) {
      fetishes[index].name = name;
      saveFetishes();
      showToast(t('fetish_saved'));
      editingFetishId = null;
      renderFetishManagement();
    }
  });
}

function getDataBlob(format = 'json') {
  if (format === 'json') {
    const data = {
      version: '1.0',
      exportDate: new Date().toISOString(),
      records: records,
      media: media,
      fetishes: fetishes
    };
    return {
      blob: new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' }),
      ext: 'json',
      mimeType: 'application/json'
    };
  } else if (format === 'csv' || format === 'excel') {
    const headers = [t('id'), t('date'), t('start_time'), t('duration'), t('medium'), t('fetish'), t('notes')];
    let csvContent = headers.join(',') + '\n';
    
    records.forEach((record, index) => {
      const row = [
        index + 1,
        new Date(record.startTime).toLocaleDateString(),
        new Date(record.startTime).toLocaleTimeString(),
        record.duration,
        getMediumLabel(record.medium),
        getFetishLabel(record.fetish),
        (record.notes || '').replace(/"/g, '""')
      ];
      csvContent += row.map(field => `"${field}"`).join(',') + '\n';
    });
    
    return {
      blob: new Blob(['\ufeff' + csvContent], { type: 'text/csv;charset=utf-8;' }),
      ext: 'csv',
      mimeType: 'text/csv'
    };
  }
}

function exportData(format = 'json') {
  const dateStr = new Date().toISOString().slice(0,10);
  const data = getDataBlob(format);
  if (data) {
    downloadFile(data.blob, `selfcare-data-${dateStr}.${data.ext}`);
    alert(t('export_success'));
  }
}

function copySettingsToClipboard() {
  const settingsData = {
    version: '1.0',
    exportDate: new Date().toISOString(),
    type: 'settings',
    lang: currentLang,
    theme: currentTheme,
    colorTheme: currentColorTheme,
    customTheme: customTheme,
    statsConfig: statsConfig,
    uiConfig: uiConfig,
    media: media,
    fetishes: fetishes
  };
  
  const dataStr = JSON.stringify(settingsData);
  
  if (navigator.clipboard) {
    navigator.clipboard.writeText(dataStr).then(() => {
      showToast(t('copy_success'));
    }).catch(() => {
      const textarea = document.createElement('textarea');
      textarea.value = dataStr;
      document.body.appendChild(textarea);
      textarea.select();
      document.execCommand('copy');
      document.body.removeChild(textarea);
      showToast(t('copy_success'));
    });
  } else {
    const textarea = document.createElement('textarea');
    textarea.value = dataStr;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand('copy');
    document.body.removeChild(textarea);
    showToast(t('copy_success'));
  }
}

function exportSettings(format = 'json') {
  const dateStr = new Date().toISOString().slice(0,10);
  let data;
  
  if (format === 'json') {
    const settingsData = {
      version: '1.0',
      exportDate: new Date().toISOString(),
      type: 'settings',
      lang: currentLang,
      theme: currentTheme,
      colorTheme: currentColorTheme,
      customTheme: customTheme,
      statsConfig: statsConfig,
      uiConfig: uiConfig,
      media: media,
      fetishes: fetishes
    };
    
    data = {
      blob: new Blob([JSON.stringify(settingsData, null, 2)], { type: 'application/json' }),
      ext: 'json',
      mimeType: 'application/json'
    };
  }
  
  if (data) {
    downloadFile(data.blob, `selfcare-settings-${dateStr}.${data.ext}`);
    alert(t('export_success'));
  }
}

function exportRecords(format = 'json') {
  const dateStr = new Date().toISOString().slice(0,10);
  const dateFrom = document.getElementById('date-from')?.value;
  const dateTo = document.getElementById('date-to')?.value;
  
  let filteredRecords = records;
  
  if (dateFrom && dateTo) {
    const fromDate = new Date(dateFrom);
    fromDate.setHours(0, 0, 0, 0);
    const toDate = new Date(dateTo);
    toDate.setHours(23, 59, 59, 999);
    
    filteredRecords = records.filter(record => {
      const recordDate = new Date(record.startTime);
      return recordDate >= fromDate && recordDate <= toDate;
    });
  }
  
  let data;
  
  if (format === 'json') {
    const recordsData = {
      version: '1.0',
      exportDate: new Date().toISOString(),
      type: 'records',
      records: filteredRecords,
      media: media,
      fetishes: fetishes
    };
    
    data = {
      blob: new Blob([JSON.stringify(recordsData, null, 2)], { type: 'application/json' }),
      ext: 'json',
      mimeType: 'application/json'
    };
  } else if (format === 'csv' || format === 'excel') {
    const headers = [t('id'), t('date'), t('start_time'), t('duration'), t('medium'), t('fetish'), t('notes')];
    let csvContent = headers.join(',') + '\n';
    
    filteredRecords.forEach((record, index) => {
      const row = [
        index + 1,
        new Date(record.startTime).toLocaleDateString(),
        new Date(record.startTime).toLocaleTimeString(),
        record.duration,
        getMediumLabel(record.medium),
        getFetishLabel(record.fetish),
        (record.notes || '').replace(/"/g, '""')
      ];
      csvContent += row.map(field => `"${field}"`).join(',') + '\n';
    });
    
    data = {
      blob: new Blob(['\ufeff' + csvContent], { type: 'text/csv;charset=utf-8;' }),
      ext: 'csv',
      mimeType: 'text/csv'
    };
  }
  
  if (data) {
    downloadFile(data.blob, `selfcare-records-${dateStr}.${data.ext}`);
    alert(t('export_success'));
  }
}

function downloadFile(blob, filename) {
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = filename;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
}

function importData(e) {
  const file = e.target.files[0];
  
  if (file) {
    importFromFile(file, e);
  } else {
    importFromClipboard();
  }
}

let splitDataParts = {};

function importFromFile(file, e) {
  const reader = new FileReader();
  reader.onload = (event) => {
    try {
      const data = JSON.parse(event.target.result);
      
      if (data.type === 'settings') {
        if (!confirm(t('import_confirm'))) {
          if (e) e.target.value = '';
          return;
        }
        
        if (data.lang) {
          localStorage.setItem('lang', data.lang);
          currentLang = data.lang;
        }
        if (data.theme) {
          localStorage.setItem('theme', data.theme);
          currentTheme = data.theme;
        }
        if (data.colorTheme) {
          localStorage.setItem('colorTheme', data.colorTheme);
          currentColorTheme = data.colorTheme;
        }
        if (data.customTheme) {
          localStorage.setItem('customTheme', JSON.stringify(data.customTheme));
          customTheme = data.customTheme;
        }
        if (data.statsConfig) {
          localStorage.setItem('statsConfig', JSON.stringify(data.statsConfig));
          statsConfig = data.statsConfig;
        }
        if (data.uiConfig) {
          localStorage.setItem('uiConfig', JSON.stringify(data.uiConfig));
          uiConfig = data.uiConfig;
        }
        if (data.media && Array.isArray(data.media)) {
          localStorage.setItem('media', JSON.stringify(data.media));
          media = data.media;
        }
        if (data.fetishes && Array.isArray(data.fetishes)) {
          localStorage.setItem('fetishes', JSON.stringify(data.fetishes));
          fetishes = data.fetishes;
        }
        
        updateMediaCache();
        updateFetishCache();
        applyTheme();
        applyUIConfig();
        updateNavigationLabels();
        renderCurrentTab();
        
        alert(t('import_success'));
        if (e) e.target.value = '';
        return;
      }
      
      if (data.part && data.totalParts) {
        if (data.canStandalone) {
          if (!confirm(`检测到可单独导入的第 ${data.part}/${data.totalParts} 部分数据。\n\n点击「确定」仅导入这部分数据\n点击「取消」收集全部部分后合并导入`)) {
            const key = data.exportDate || 'default';
            if (!splitDataParts[key]) {
              splitDataParts[key] = {
                totalParts: data.totalParts,
                receivedParts: {},
                media: data.media,
                fetishes: data.fetishes
              };
            }
            
            splitDataParts[key].receivedParts[data.part] = data.records;
            
            const receivedCount = Object.keys(splitDataParts[key].receivedParts).length;
            const totalNeeded = splitDataParts[key].totalParts;
            
            if (receivedCount === totalNeeded) {
              if (!confirm(t('import_confirm'))) {
                if (e) e.target.value = '';
                return;
              }
              
              let allRecords = [];
              for (let i = 1; i <= totalNeeded; i++) {
                allRecords = allRecords.concat(splitDataParts[key].receivedParts[i] || []);
              }
              
              allRecords.sort((a, b) => new Date(b.startTime) - new Date(a.startTime));
              
              localStorage.setItem('records', JSON.stringify(allRecords));
              records = allRecords;
              
              if (splitDataParts[key].media && Array.isArray(splitDataParts[key].media)) {
                localStorage.setItem('media', JSON.stringify(splitDataParts[key].media));
                media = splitDataParts[key].media;
              }
              if (splitDataParts[key].fetishes && Array.isArray(splitDataParts[key].fetishes)) {
                localStorage.setItem('fetishes', JSON.stringify(splitDataParts[key].fetishes));
                fetishes = splitDataParts[key].fetishes;
              }
              
              updateMediaCache();
              updateFetishCache();
              
              delete splitDataParts[key];
              
              alert(t('import_success'));
              renderCurrentTab();
            } else {
              alert(`已收集 ${receivedCount}/${totalNeeded} 部分数据，请继续导入剩余部分`);
            }
          } else {
            if (!confirm(t('import_confirm'))) {
              if (e) e.target.value = '';
              return;
            }
            
            const existingRecords = [...records];
            const newRecords = data.records || [];
            
            const mergedRecords = [...existingRecords, ...newRecords];
            
            const seenIds = new Set();
            const uniqueRecords = mergedRecords.filter(record => {
              if (seenIds.has(record.id)) {
                return false;
              }
              seenIds.add(record.id);
              return true;
            });
            
            uniqueRecords.sort((a, b) => new Date(b.startTime) - new Date(a.startTime));
            
            localStorage.setItem('records', JSON.stringify(uniqueRecords));
            records = uniqueRecords;
            
            if (data.media && Array.isArray(data.media)) {
              const existingMedia = [...media];
              const newMedia = data.media;
              const mergedMedia = [];
              const mediaIds = new Set();
              
              [...existingMedia, ...newMedia].forEach(m => {
                if (!mediaIds.has(m.id)) {
                  mediaIds.add(m.id);
                  mergedMedia.push(m);
                }
              });
              
              localStorage.setItem('media', JSON.stringify(mergedMedia));
              media = mergedMedia;
            }
            
            if (data.fetishes && Array.isArray(data.fetishes)) {
              const existingFetishes = [...fetishes];
              const newFetishes = data.fetishes;
              const mergedFetishes = [];
              const fetishIds = new Set();
              
              [...existingFetishes, ...newFetishes].forEach(f => {
                if (!fetishIds.has(f.id)) {
                  fetishIds.add(f.id);
                  mergedFetishes.push(f);
                }
              });
              
              localStorage.setItem('fetishes', JSON.stringify(mergedFetishes));
              fetishes = mergedFetishes;
            }
            
            updateMediaCache();
            updateFetishCache();
            alert(t('import_success'));
            renderCurrentTab();
          }
        } else {
          const key = data.exportDate || 'default';
          if (!splitDataParts[key]) {
            splitDataParts[key] = {
              totalParts: data.totalParts,
              receivedParts: {},
              media: data.media,
              fetishes: data.fetishes
            };
          }
          
          splitDataParts[key].receivedParts[data.part] = data.records;
          
          const receivedCount = Object.keys(splitDataParts[key].receivedParts).length;
          const totalNeeded = splitDataParts[key].totalParts;
          
          if (receivedCount === totalNeeded) {
            if (!confirm(t('import_confirm'))) {
              if (e) e.target.value = '';
              return;
            }
            
            let allRecords = [];
            for (let i = 1; i <= totalNeeded; i++) {
              allRecords = allRecords.concat(splitDataParts[key].receivedParts[i] || []);
            }
            
            allRecords.sort((a, b) => new Date(b.startTime) - new Date(a.startTime));
            
            localStorage.setItem('records', JSON.stringify(allRecords));
            records = allRecords;
            
            if (splitDataParts[key].media && Array.isArray(splitDataParts[key].media)) {
              localStorage.setItem('media', JSON.stringify(splitDataParts[key].media));
              media = splitDataParts[key].media;
            }
            if (splitDataParts[key].fetishes && Array.isArray(splitDataParts[key].fetishes)) {
              localStorage.setItem('fetishes', JSON.stringify(splitDataParts[key].fetishes));
              fetishes = splitDataParts[key].fetishes;
            }
            
            updateMediaCache();
            updateFetishCache();
            
            delete splitDataParts[key];
            
            alert(t('import_success'));
            renderCurrentTab();
          } else {
            alert(`已收集 ${receivedCount}/${totalNeeded} 部分数据，请继续导入剩余部分`);
          }
        }
      } else if (data.records && Array.isArray(data.records)) {
        if (!confirm(t('import_confirm'))) {
          if (e) e.target.value = '';
          return;
        }
        
        localStorage.setItem('records', JSON.stringify(data.records));
        records = data.records;
        if (data.media && Array.isArray(data.media)) {
          localStorage.setItem('media', JSON.stringify(data.media));
          media = data.media;
        }
        if (data.fetishes && Array.isArray(data.fetishes)) {
          localStorage.setItem('fetishes', JSON.stringify(data.fetishes));
          fetishes = data.fetishes;
        }
        updateMediaCache();
        updateFetishCache();
        alert(t('import_success'));
        renderCurrentTab();
      } else {
        alert(t('invalid_file'));
      }
    } catch (error) {
      alert(t('invalid_file'));
    }
    if (e) e.target.value = '';
  };
  reader.readAsText(file);
}

async function importFromClipboard() {
  try {
    let text = '';
    
    try {
      text = await navigator.clipboard.readText();
    } catch (e) {
      text = prompt('请粘贴数据：');
    }
    
    if (text && text.trim()) {
      try {
        const data = JSON.parse(text);
        
        if (data.type === 'settings') {
          if (!confirm(t('import_confirm'))) {
            return;
          }
          
          if (data.lang) {
            localStorage.setItem('lang', data.lang);
            currentLang = data.lang;
          }
          if (data.theme) {
            localStorage.setItem('theme', data.theme);
            currentTheme = data.theme;
          }
          if (data.colorTheme) {
            localStorage.setItem('colorTheme', data.colorTheme);
            currentColorTheme = data.colorTheme;
          }
          if (data.customTheme) {
            localStorage.setItem('customTheme', JSON.stringify(data.customTheme));
            customTheme = data.customTheme;
          }
          if (data.statsConfig) {
            localStorage.setItem('statsConfig', JSON.stringify(data.statsConfig));
            statsConfig = data.statsConfig;
          }
          if (data.uiConfig) {
            localStorage.setItem('uiConfig', JSON.stringify(data.uiConfig));
            uiConfig = data.uiConfig;
          }
          if (data.media && Array.isArray(data.media)) {
            localStorage.setItem('media', JSON.stringify(data.media));
            media = data.media;
          }
          if (data.fetishes && Array.isArray(data.fetishes)) {
            localStorage.setItem('fetishes', JSON.stringify(data.fetishes));
            fetishes = data.fetishes;
          }
          
          updateMediaCache();
          updateFetishCache();
          applyTheme();
          applyUIConfig();
          updateNavigationLabels();
          renderCurrentTab();
          
          alert(t('import_success'));
          return;
        }
        
        if (data.part && data.totalParts) {
          if (data.canStandalone) {
            if (!confirm(`检测到可单独导入的第 ${data.part}/${data.totalParts} 部分数据。\n\n点击「确定」仅导入这部分数据\n点击「取消」收集全部部分后合并导入`)) {
              const key = data.exportDate || 'default';
              if (!splitDataParts[key]) {
                splitDataParts[key] = {
                  totalParts: data.totalParts,
                  receivedParts: {},
                  media: data.media,
                  fetishes: data.fetishes
                };
              }
              
              splitDataParts[key].receivedParts[data.part] = data.records;
              
              const receivedCount = Object.keys(splitDataParts[key].receivedParts).length;
              const totalNeeded = splitDataParts[key].totalParts;
              
              if (receivedCount === totalNeeded) {
                if (!confirm(t('import_confirm'))) {
                  return;
                }
                
                let allRecords = [];
                for (let i = 1; i <= totalNeeded; i++) {
                  allRecords = allRecords.concat(splitDataParts[key].receivedParts[i] || []);
                }
                
                allRecords.sort((a, b) => new Date(b.startTime) - new Date(a.startTime));
                
                localStorage.setItem('records', JSON.stringify(allRecords));
                records = allRecords;
                
                if (splitDataParts[key].media && Array.isArray(splitDataParts[key].media)) {
                  localStorage.setItem('media', JSON.stringify(splitDataParts[key].media));
                  media = splitDataParts[key].media;
                }
                if (splitDataParts[key].fetishes && Array.isArray(splitDataParts[key].fetishes)) {
                  localStorage.setItem('fetishes', JSON.stringify(splitDataParts[key].fetishes));
                  fetishes = splitDataParts[key].fetishes;
                }
                
                updateMediaCache();
                updateFetishCache();
                
                delete splitDataParts[key];
                
                alert(t('import_success'));
                renderCurrentTab();
              } else {
                alert(`已收集 ${receivedCount}/${totalNeeded} 部分数据，请继续导入剩余部分`);
              }
            } else {
              if (!confirm(t('import_confirm'))) {
                return;
              }
              
              const existingRecords = [...records];
              const newRecords = data.records || [];
              
              const mergedRecords = [...existingRecords, ...newRecords];
              
              const seenIds = new Set();
              const uniqueRecords = mergedRecords.filter(record => {
                if (seenIds.has(record.id)) {
                  return false;
                }
                seenIds.add(record.id);
                return true;
              });
              
              uniqueRecords.sort((a, b) => new Date(b.startTime) - new Date(a.startTime));
              
              localStorage.setItem('records', JSON.stringify(uniqueRecords));
              records = uniqueRecords;
              
              if (data.media && Array.isArray(data.media)) {
                const existingMedia = [...media];
                const newMedia = data.media;
                const mergedMedia = [];
                const mediaIds = new Set();
                
                [...existingMedia, ...newMedia].forEach(m => {
                  if (!mediaIds.has(m.id)) {
                    mediaIds.add(m.id);
                    mergedMedia.push(m);
                  }
                });
                
                localStorage.setItem('media', JSON.stringify(mergedMedia));
                media = mergedMedia;
              }
              
              if (data.fetishes && Array.isArray(data.fetishes)) {
                const existingFetishes = [...fetishes];
                const newFetishes = data.fetishes;
                const mergedFetishes = [];
                const fetishIds = new Set();
                
                [...existingFetishes, ...newFetishes].forEach(f => {
                  if (!fetishIds.has(f.id)) {
                    fetishIds.add(f.id);
                    mergedFetishes.push(f);
                  }
                });
                
                localStorage.setItem('fetishes', JSON.stringify(mergedFetishes));
                fetishes = mergedFetishes;
              }
              
              updateMediaCache();
              updateFetishCache();
              alert(t('import_success'));
              renderCurrentTab();
            }
          } else {
            const key = data.exportDate || 'default';
            if (!splitDataParts[key]) {
              splitDataParts[key] = {
                totalParts: data.totalParts,
                receivedParts: {},
                media: data.media,
                fetishes: data.fetishes
              };
            }
            
            splitDataParts[key].receivedParts[data.part] = data.records;
            
            const receivedCount = Object.keys(splitDataParts[key].receivedParts).length;
            const totalNeeded = splitDataParts[key].totalParts;
            
            if (receivedCount === totalNeeded) {
              if (!confirm(t('import_confirm'))) {
                return;
              }
              
              let allRecords = [];
              for (let i = 1; i <= totalNeeded; i++) {
                allRecords = allRecords.concat(splitDataParts[key].receivedParts[i] || []);
              }
              
              allRecords.sort((a, b) => new Date(b.startTime) - new Date(a.startTime));
              
              localStorage.setItem('records', JSON.stringify(allRecords));
              records = allRecords;
              
              if (splitDataParts[key].media && Array.isArray(splitDataParts[key].media)) {
                localStorage.setItem('media', JSON.stringify(splitDataParts[key].media));
                media = splitDataParts[key].media;
              }
              if (splitDataParts[key].fetishes && Array.isArray(splitDataParts[key].fetishes)) {
                localStorage.setItem('fetishes', JSON.stringify(splitDataParts[key].fetishes));
                fetishes = splitDataParts[key].fetishes;
              }
              
              updateMediaCache();
              updateFetishCache();
              
              delete splitDataParts[key];
              
              alert(t('import_success'));
              renderCurrentTab();
            } else {
              alert(`已收集 ${receivedCount}/${totalNeeded} 部分数据，请继续导入剩余部分`);
            }
          }
        } else if (data.records && Array.isArray(data.records)) {
          if (!confirm(t('import_confirm'))) {
            return;
          }
          
          localStorage.setItem('records', JSON.stringify(data.records));
          records = data.records;
          if (data.media && Array.isArray(data.media)) {
            localStorage.setItem('media', JSON.stringify(data.media));
            media = data.media;
          }
          if (data.fetishes && Array.isArray(data.fetishes)) {
            localStorage.setItem('fetishes', JSON.stringify(data.fetishes));
            fetishes = data.fetishes;
          }
          updateMediaCache();
          updateFetishCache();
          alert(t('import_success'));
          renderCurrentTab();
        } else {
          alert(t('invalid_file'));
        }
      } catch (error) {
        alert(t('invalid_file'));
      }
    } else {
      alert('剪贴板为空，请先复制数据或选择文件');
    }
  } catch (error) {
    alert('无法读取剪贴板，请使用文件导入方式');
  }
}

function updateLanguage() {
  document.querySelectorAll('[data-i18n]').forEach(el => {
    el.textContent = t(el.dataset.i18n);
  });
}

function renderCurrentTab() {
  switch (currentTab) {
    case 'add':
      renderAddTab();
      break;
    case 'records':
      editingRecordId = null;
      renderRecordsTab();
      break;
    case 'stats':
      renderStatsTab();
      break;
    case 'settings':
      settingsSubPage = null;
      editingMediumId = null;
      editingFetishId = null;
      renderSettingsTab();
      break;
  }
}

function initNavigation() {
  renderNavigation();
}

function renderNavigation() {
  const navIcons = {
    add: '➕',
    records: '📋',
    stats: '📊',
    settings: '⚙️'
  };
  
  let navHTML = '';
  uiConfig.navOrder.forEach((tab, index) => {
    const customIconKey = tab + 'Icon';
    const hasCustomIcon = uiConfig[customIconKey];
    navHTML += `
      <button class="nav-item ${currentTab === tab ? 'active' : ''}" data-tab="${tab}">
        <span class="nav-icon">${hasCustomIcon ? `<img src="${hasCustomIcon}" style="width: 24px; height: 24px; object-fit: contain;">` : navIcons[tab]}</span>
        <span class="nav-label" data-i18n="tab_${tab}">${t('tab_' + tab)}</span>
      </button>
    `;
  });
  
  bottomNav.innerHTML = navHTML;
  
  const navItems = bottomNav.querySelectorAll('.nav-item');
  navItems.forEach(btn => {
    btn.addEventListener('click', () => {
      navItems.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      currentTab = btn.dataset.tab;
      renderCurrentTab();
    });
  });
}

function getExportData(fromDate = null, toDate = null) {
  let filteredRecords = records;
  
  if (fromDate && toDate) {
    const from = new Date(fromDate);
    from.setHours(0, 0, 0, 0);
    const to = new Date(toDate);
    to.setHours(23, 59, 59, 999);
    
    filteredRecords = records.filter(record => {
      const recordDate = new Date(record.startTime);
      return recordDate >= from && recordDate <= to;
    });
  }
  
  return {
    version: '1.0',
    exportDate: new Date().toISOString(),
    records: filteredRecords,
    media: media,
    fetishes: fetishes
  };
}

function getDataAsString() {
  return JSON.stringify(getExportData());
}

function getDataSizeInfo() {
  const dataStr = getDataAsString();
  const sizeInBytes = new Blob([dataStr]).size;
  const sizeInKB = (sizeInBytes / 1024).toFixed(1);
  const sizeInMB = (sizeInBytes / (1024 * 1024)).toFixed(2);
  return {
    bytes: sizeInBytes,
    kb: sizeInKB,
    mb: sizeInMB,
    isLarge: sizeInBytes > 10 * 1024,
    isVeryLarge: sizeInBytes > 50 * 1024
  };
}

function shareData(format = 'json') {
  const dateStr = new Date().toISOString().slice(0,10);
  const data = getDataBlob(format);
  
  if (!data) return;
  
  if (isCapacitor()) {
    try {
      const file = new File([data.blob], `selfcare-data-${dateStr}.${data.ext}`, { type: data.mimeType });
      
      if (navigator.share) {
        navigator.share({
          title: '起飞助手 - 数据备份',
          text: '这是我的起飞助手数据备份',
          files: [file]
        }).catch(err => {
          console.log('Share failed, falling back to download');
          downloadFile(data.blob, `selfcare-data-${dateStr}.${data.ext}`);
        });
      } else {
        downloadFile(data.blob, `selfcare-data-${dateStr}.${data.ext}`);
      }
    } catch (e) {
      downloadFile(data.blob, `selfcare-data-${dateStr}.${data.ext}`);
    }
  } else {
    downloadFile(data.blob, `selfcare-data-${dateStr}.${data.ext}`);
  }
}

function sendToWeb() {
  const sizeInfo = getDataSizeInfo();
  
  if (sizeInfo.isVeryLarge) {
    alert(t('data_too_large'));
    shareData('json');
    return;
  }
  
  if (sizeInfo.isLarge) {
    if (confirm(t('data_size_warning') + ' (' + sizeInfo.kb + ' KB)\n\n继续使用剪贴板？')) {
    } else {
      shareData('json');
      return;
    }
  }
  
  const dataStr = getDataAsString();
  navigator.clipboard.writeText(dataStr).then(() => {
    alert(t('data_sent') + '\n\n' + t('copy_to_clipboard') + '!');
  }).catch(() => {
    prompt(t('copy_data') + '\n\n' + dataStr);
  });
}

function receiveDataFromMobile() {
  async function doImport() {
    try {
      let text = '';
      
      try {
        text = await navigator.clipboard.readText();
      } catch (e) {
        text = prompt(t('paste_data_here') + ':');
      }
      
      if (text && text.trim()) {
        if (!confirm(t('import_confirm'))) {
          return;
        }
        try {
          const data = JSON.parse(text);
          if (data.records && Array.isArray(data.records)) {
            localStorage.setItem('records', JSON.stringify(data.records));
            if (data.media && Array.isArray(data.media)) {
              localStorage.setItem('media', JSON.stringify(data.media));
              media = data.media;
            }
            if (data.fetishes && Array.isArray(data.fetishes)) {
              localStorage.setItem('fetishes', JSON.stringify(data.fetishes));
              fetishes = data.fetishes;
            }
            alert(t('import_success'));
            renderCurrentTab();
          } else {
            alert(t('invalid_file'));
          }
        } catch (error) {
          alert(t('invalid_file'));
        }
      } else {
        alert(t('clipboard_empty'));
      }
    } catch (error) {
      alert(t('cannot_read_clipboard'));
    }
  }
  doImport();
}

if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('sw.js').catch(() => {});
  });
}

initApp();