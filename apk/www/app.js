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
    calendar_default_collapsed: '日历默认收起',
    time_grouping: '时间分组',
    group_by_day: '按日',
    group_by_week: '按周',
    group_by_month: '按月',
    group_by_quarter: '按季度',
    group_by_year: '按年',
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
    cl_v0917_title: 'v0.91.7',
    cl_v0917_1: '✨ 修复分析界面功能缺失，添加折线图数据可视化组件',
    cl_v0917_2: '✨ 确保添加界面满意度评分模块正确实现',
    cl_v0917_3: '✨ 修复计时状态异常BUG，确保界面切换后状态正确保持',
    cl_v0917_4: '📱 版本号更新为 0.91.7',
    cl_v0917_5: '✨ 添加全部数据视图，可查看所有记录的统计分析',
    cl_v0918_title: 'v0.91.8',
    cl_v0918_1: '✨ 优化折线图铺开显示，在每个数据点标注时间',
    cl_v0918_2: '✨ 修复日历和统计页面的时区偏移问题',
    cl_v100_title: 'v1.0',
    cl_v100_1: '✨ 新增 JM 漫画书架功能，支持搜索、下载、阅读漫画',
    cl_v100_2: '✨ 书架支持封面显示，下载后自动抓取第一章封面',
    cl_v100_3: '✨ 书架支持宫格和列表两种显示模式，宫格可选 2/3 列',
    cl_v100_4: '✨ 批量下载支持多漫画并发下载，提升下载效率',
    cl_v100_5: '✨ 图片下载支持多通道并发，章节信息并发获取',
    cl_v100_6: '✨ 外观管理新增书架显示设置，移除自定义图标功能',
    credits_title: '致谢',
    credits_acheron: '感谢「Acheron」在项目接近尾期Token烧干的时候，提供Token救急',
    reader_convert: '转换为图片格式',
    reader_converting: '转换中...',
    reader_converted: '转换完成，已可离线阅读',
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
    bookshelf_display: '书架显示',
    bs_view_grid: '宫格模式',
    bs_view_list: '列表模式',
    bs_columns: '每行列数',
    bs_settings: '书架设置',
    bs_download_format: '下载格式',
    bs_format_pdf: '仅 PDF 文件',
    bs_format_read: '仅软件内阅读',
    bs_format_both: '都要（推荐）',
    bs_format_hint: 'PDF 文件会保存到手机，可在文件管理器中找到和分享',
    bs_save_images: '软件内阅读',
    bs_save_images_desc: '将图片存储在应用内，可离线阅读，不占用手机文件空间',
    bs_save_pdf: '保存 PDF 到手机',
    bs_save_pdf_desc: '同时保存 PDF 文件到手机下载目录，可在文件管理器中找到和分享',
    bs_download_choice_title: '选择下载方式',
    bs_download_choice_msg: '首次下载，请选择漫画存储方式：',
    bs_download_choice_hint: '可在 设置 → 书架设置 中随时修改',
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
    buttons_bottom: '底部',
    duration_chart_count: '时间次数图表显示次数',
    duration_trend: '时间次数趋势',
    satisfaction_rating: '满意度评分',
    satisfaction_hint: '0-10分，0分最低，10分最高',
    show_duration_diff: '显示时长差异',
    show_duration_diff_desc: '在记录界面显示与上一条记录的时长差异',
    jm_downloader: '漫画下载',
    jm_input_hint: '输入漫画代码，如 350234',
    jm_search: '搜索',
    jm_searching: '正在搜索...',
    jm_loading: '加载中...',
    jm_chapters: '章节列表',
    jm_download: '下载 PDF',
    jm_downloading: '正在下载...',
    jm_download_complete: '下载完成',
    jm_download_failed: '下载失败',
    jm_no_images: '未找到图片',
    jm_title: '标题',
    jm_scrambled_warn: '部分图片可能需要解密，下载结果可能不完整',
    jm_input_empty: '请输入漫画代码',
    jm_server_error: '服务器未启动，请先运行: npm start',
    tab_bookshelf: '书架',
    jm_add_comic: '添加漫画',
    jm_search_download: '搜索下载',
    jm_local_import: '本地导入',
    jm_no_comics: '暂无漫画，点击 + 添加',
    jm_chapter_count: '章',
    jm_favorite: '收藏',
    jm_unfavorite: '取消收藏',
    jm_filter: '筛选',
    jm_filter_all: '全部',
    jm_filter_favorite: '⭐ 收藏',
    jm_filter_tag: '性癖标签',
    jm_long_press_hint: '长按卡片进入多选',
    jm_select_mode: '多选模式',
    jm_select_all: '全选',
    jm_cancel: '取消',
    jm_export_codes: '导出代码',
    jm_export_done: '已复制到剪贴板',
    jm_tag_comic: '打标签',
    jm_delete_comic: '删除',
    jm_delete_confirm: '确认删除选中的漫画？',
    jm_comic_count: '共 {n} 本',
    jm_batch_download: '批量下载',
    jm_batch_hint: '每行一个 JM 代码，支持逗号/空格分隔',
    jm_batch_start: '开始下载',
    jm_batch_progress: '下载进度',
    jm_batch_done: '批量下载完成',
    jm_batch_pause: '暂停',
    jm_batch_resume: '继续',
    jm_batch_summary: '成功 {s} / 跳过 {k} / 失败 {f}',
    jm_already_downloaded: '已下载',
    jm_batch_skip: '跳过',
    jm_back: '返回',
    jm_open_reader: '阅读',
    jm_no_chapter: '无章节'
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
    calendar_default_collapsed: 'Calendar Default Collapsed',
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
    cl_v0917_title: 'v0.91.7',
    cl_v0917_1: '✨ Fixed analytics page functionality, added line chart data visualization component',
    cl_v0917_2: '✨ Ensured satisfaction rating module is correctly implemented in add page',
    cl_v0917_3: '✨ Fixed timer state anomaly BUG, ensuring state is correctly maintained after switching interfaces',
    cl_v0917_4: '📱 Version updated to 0.91.7',
    cl_v0917_5: '✨ Added all data view for analyzing all records',
    cl_v0918_title: 'v0.91.8',
    cl_v0918_1: '✨ Optimized line chart with wider layout and time labels at each point',
    cl_v0918_2: '✨ Fixed timezone offset issues in calendar and stats pages',
    cl_v100_title: 'v1.0',
    cl_v100_1: '✨ Added JM Comic bookshelf with search, download, and reader',
    cl_v100_2: '✨ Bookshelf shows covers — auto-fetches first chapter cover after download',
    cl_v100_3: '✨ Bookshelf supports grid and list view modes, grid can be 2 or 3 columns',
    cl_v100_4: '✨ Batch download supports concurrent multi-comic downloading',
    cl_v100_5: '✨ Image downloads use concurrent channels, parallel chapter fetching',
    cl_v100_6: '✨ Appearance settings now includes bookshelf display options, removed custom icon feature',
    credits_title: 'Credits',
    credits_acheron: 'Special thanks to 「Acheron」for providing tokens when the project was running on fumes near the finish line',
    reader_convert: 'Convert to Images',
    reader_converting: 'Converting...',
    reader_converted: 'Done! Now available offline',
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
    bookshelf_display: 'Bookshelf Display',
    bs_view_grid: 'Grid Mode',
    bs_view_list: 'List Mode',
    bs_columns: 'Columns per Row',
    bs_settings: 'Bookshelf Settings',
    bs_download_format: 'Download Format',
    bs_format_pdf: 'PDF File Only',
    bs_format_read: 'In-App Reading Only',
    bs_format_both: 'Both (Recommended)',
    bs_format_hint: 'PDF will be saved to your phone, accessible from file manager',
    bs_save_images: 'In-App Reading',
    bs_save_images_desc: 'Store images in app for offline reading, no file storage used',
    bs_save_pdf: 'Save PDF to Phone',
    bs_save_pdf_desc: 'Also save PDF to Downloads folder, accessible from file manager',
    bs_download_choice_title: 'Choose Download Format',
    bs_download_choice_msg: 'First download — choose how to store comics:',
    bs_download_choice_hint: 'You can change this anytime in Settings → Bookshelf Settings',
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
    buttons_bottom: 'Bottom',
    duration_chart_count: 'Duration Chart Count',
    duration_trend: 'Duration Trend',
    satisfaction_rating: 'Satisfaction Rating',
    satisfaction_hint: '0-10 points, 0 lowest, 10 highest',
    show_duration_diff: 'Show Duration Difference',
    show_duration_diff_desc: 'Show duration difference compared to previous record in records page',
    jm_downloader: 'Manga Download',
    jm_input_hint: 'Enter code, e.g. 350234',
    jm_search: 'Search',
    jm_searching: 'Searching...',
    jm_loading: 'Loading...',
    jm_chapters: 'Chapters',
    jm_download: 'Download PDF',
    jm_downloading: 'Downloading...',
    jm_download_complete: 'Download Complete',
    jm_download_failed: 'Download Failed',
    jm_no_images: 'No images found',
    jm_title: 'Title',
    jm_scrambled_warn: 'Some images may need decryption, download may be incomplete',
    jm_input_empty: 'Please enter manga code',
    jm_server_error: 'Server not started. Run: npm start',
    tab_bookshelf: 'Bookshelf',
    jm_add_comic: 'Add Comic',
    jm_search_download: 'Search & Download',
    jm_local_import: 'Local Import',
    jm_no_comics: 'No comics yet, tap + to add',
    jm_chapter_count: 'ch',
    jm_favorite: 'Favorite',
    jm_unfavorite: 'Unfavorite',
    jm_filter: 'Filter',
    jm_filter_all: 'All',
    jm_filter_favorite: '⭐ Favorites',
    jm_filter_tag: 'Fetish Tags',
    jm_long_press_hint: 'Long press to select',
    jm_select_mode: 'Select Mode',
    jm_select_all: 'Select All',
    jm_cancel: 'Cancel',
    jm_export_codes: 'Export Codes',
    jm_export_done: 'Copied to clipboard',
    jm_tag_comic: 'Tag',
    jm_delete_comic: 'Delete',
    jm_delete_confirm: 'Delete selected comics?',
    jm_comic_count: '{n} comics',
    jm_batch_download: 'Batch Download',
    jm_batch_hint: 'One JM code per line, comma/space separated',
    jm_batch_start: 'Start Download',
    jm_batch_progress: 'Download Progress',
    jm_batch_done: 'Batch Download Complete',
    jm_batch_pause: 'Pause',
    jm_batch_resume: 'Resume',
    jm_batch_summary: 'Success {s} / Skipped {k} / Failed {f}',
    jm_already_downloaded: 'Downloaded',
    jm_batch_skip: 'Skip',
    jm_back: 'Back',
    jm_open_reader: 'Read',
    jm_no_chapter: 'No chapters'
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
  if (!storage.statsConfig.durationChartCount) storage.statsConfig.durationChartCount = 5;
  if (!storage.statsConfig.showDurationDiff) storage.statsConfig.showDurationDiff = true;
  
  if (!storage.statsConfig.timeGroupingWeek) storage.statsConfig.timeGroupingWeek = 'day';
  if (!storage.statsConfig.timeGroupingMonth) storage.statsConfig.timeGroupingMonth = 'week';
  if (!storage.statsConfig.timeGroupingYear) storage.statsConfig.timeGroupingYear = 'month';
  if (!storage.statsConfig.sortBy) storage.statsConfig.sortBy = 'count';
  if (!storage.statsConfig.chartType) storage.statsConfig.chartType = 'bar';
  if (!storage.statsConfig.showAllCountAnalysis) storage.statsConfig.showAllCountAnalysis = false;
  if (storage.statsConfig.calendarDefaultCollapsed === undefined) storage.statsConfig.calendarDefaultCollapsed = true;
  if (!storage.statsConfig.allDataGrouping) storage.statsConfig.allDataGrouping = 'year';

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
  if (!storage.uiConfig.navOrder) storage.uiConfig.navOrder = ['add', 'records', 'stats', 'bookshelf', 'settings'];
  // 旧版本用户可能没有 bookshelf，自动补上（兼容 tools → bookshelf）
  if (!storage.uiConfig.navOrder.includes('bookshelf')) {
    const idx = storage.uiConfig.navOrder.indexOf('tools');
    if (idx >= 0) storage.uiConfig.navOrder[idx] = 'bookshelf';
    else storage.uiConfig.navOrder.push('bookshelf');
    localStorage.setItem('uiConfig', JSON.stringify(storage.uiConfig));
  }
  // 书栏移到设置左边（v1.0 迁移）
  const bsIdx = storage.uiConfig.navOrder.indexOf('bookshelf');
  const stIdx = storage.uiConfig.navOrder.indexOf('settings');
  if (bsIdx >= 0 && stIdx >= 0 && bsIdx > stIdx) {
    storage.uiConfig.navOrder.splice(bsIdx, 1);
    storage.uiConfig.navOrder.splice(stIdx, 0, 'bookshelf');
    localStorage.setItem('uiConfig', JSON.stringify(storage.uiConfig));
  }

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
let calendarCurrentMonth = new Date(); // 日历当前显示的月份
let calendarCollapsed = false; // 日历是否收起
let calendarSelectedDate = null; // 日历选中的日期 YYYY-MM-DD

// 统一的日期提取函数 - 将 startTime 字符串转为本地日期 YYYY-MM-DD
function getLocalDateStr(startTime) {
  const d = new Date(startTime);
  return `${d.getFullYear()}-${(d.getMonth() + 1).toString().padStart(2, '0')}-${d.getDate().toString().padStart(2, '0')}`;
}

// 获取今天的本地日期字符串
function getTodayStr() {
  const now = new Date();
  return `${now.getFullYear()}-${(now.getMonth() + 1).toString().padStart(2, '0')}-${now.getDate().toString().padStart(2, '0')}`;
}

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

    // ── Android 返回键处理 ──
    if (isCapacitor()) {
      const registerBackButton = () => {
        const App = window.Capacitor?.Plugins?.App || window.Capacitor?.App;
        if (!App) {
          console.warn('[BackButton] App plugin not found, retrying...');
          setTimeout(registerBackButton, 500);
          return;
        }
        console.log('[BackButton] registering backButton listener');
        App.addListener('backButton', ({ canGoBack }) => {
          console.log('[BackButton] fired, settingsSubPage=', settingsSubPage, 'currentTab=', currentTab);
          // 编辑记录：返回记录列表
          if (editingRecordId !== null) {
            editingRecordId = null;
            renderRecordsTab();
            return;
          }
          // 编辑媒介/性癖：返回管理列表
          if (editingMediumId !== null) {
            editingMediumId = null;
            renderMediumManagement();
            return;
          }
          if (editingFetishId !== null) {
            editingFetishId = null;
            renderFetishManagement();
            return;
          }
          // 子页面：返回上级
          if (settingsSubPage) {
            settingsSubPage = null;
            renderSettingsTab();
            return;
          }
          if (bookshelfSubPage) {
            if (document.fullscreenElement) document.exitFullscreen();
            bookshelfSubPage = null;
            showNav();
            renderBookshelfTab();
            return;
          }
          // 非默认 tab：回到默认 tab
          const defaultTab = uiConfig.defaultHome || 'add';
          if (currentTab !== defaultTab) {
            currentTab = defaultTab;
            renderCurrentTab();
            return;
          }
          // 已在默认 tab：退出 app
          App.exitApp();
        });
      };
      registerBackButton();
    }
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

// ── JMComic 依赖懒加载（crypto-js, pdf-lib）──
let _jmDepsReady = null;
function ensureJMComicDeps() {
  if (window.CryptoJS && window.PDFLib) return Promise.resolve();
  if (_jmDepsReady) return _jmDepsReady;
  const loadScript = (src) => new Promise((resolve, reject) => {
    const s = document.createElement('script');
    s.src = src; s.onload = resolve; s.onerror = reject;
    document.head.appendChild(s);
  });
  _jmDepsReady = Promise.all([
    window.CryptoJS ? Promise.resolve() : loadScript('https://cdnjs.cloudflare.com/ajax/libs/crypto-js/4.2.0/crypto-js.min.js'),
    window.PDFLib ? Promise.resolve() : loadScript('https://unpkg.com/pdf-lib@1.17.1/dist/pdf-lib.min.js'),
  ]).catch(e => { console.log('[JM] 依赖加载失败:', e.message); _jmDepsReady = null; });
  return _jmDepsReady;
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
        <div class="form-group">
          <label class="form-label">${t('satisfaction_rating')}</label>
          <input type="number" class="form-input" id="timer-satisfaction" min="0" max="10" step="1" value="6" placeholder="${t('satisfaction_hint')}">
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
        <div class="form-group">
          <label class="form-label">${t('satisfaction_rating')}</label>
          <input type="number" class="form-input" id="manual-satisfaction" min="0" max="10" step="1" value="6" placeholder="${t('satisfaction_hint')}">
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
        document.getElementById('manual-datetime').value = `${now.getFullYear()}-${(now.getMonth() + 1).toString().padStart(2, '0')}-${now.getDate().toString().padStart(2, '0')}T${now.getHours().toString().padStart(2, '0')}:${now.getMinutes().toString().padStart(2, '0')}`;
      }
    });
  });

  const timerBtn = document.getElementById('timer-btn');
  const timerDisplay = document.getElementById('timer-display');
  const timerBtnText = document.getElementById('timer-btn-text');

  // 初始化时检查timerRunning状态
  if (timerRunning) {
    timerBtn.classList.add('running');
    timerBtnText.textContent = t('stop_timer');
    timerDisplay.textContent = formatDuration(timerElapsed);
    
    // 如果计时器正在运行，重新启动计时器
    timerInterval = setInterval(() => {
      timerElapsed = Math.floor((Date.now() - timerStartTime) / 1000);
      timerDisplay.textContent = formatDuration(timerElapsed);
    }, 100);
  }

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
    
    let satisfaction = parseInt(document.getElementById('timer-satisfaction').value);
    if (isNaN(satisfaction) || satisfaction < 0 || satisfaction > 10) {
      satisfaction = 6;
    }
    const startTime = new Date(timerStartTime);
    const record = {
      id: Date.now(),
      startTime: `${startTime.getFullYear()}-${(startTime.getMonth() + 1).toString().padStart(2, '0')}-${startTime.getDate().toString().padStart(2, '0')}T${startTime.getHours().toString().padStart(2, '0')}:${startTime.getMinutes().toString().padStart(2, '0')}:00`,
      duration: timerElapsed,
      medium: document.getElementById('timer-medium').value,
      fetishes: selectedFetishes,
      notes: document.getElementById('timer-notes').value,
      satisfaction: satisfaction
    };
    records.unshift(record);
    saveRecords();
    showToast(t('record_saved'));
    
    // 重置计时器
    timerElapsed = 0;
    timerDisplay.textContent = '00:00';
    
    document.getElementById('timer-notes').value = '';
    document.getElementById('timer-satisfaction').value = '6';
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
    
    let satisfaction = parseInt(document.getElementById('manual-satisfaction').value);
    if (isNaN(satisfaction) || satisfaction < 0 || satisfaction > 10) {
      satisfaction = 6;
    }
    
    const dateParts = datetime.split('T');
    const timeParts = dateParts[1].split(':');
    const date = new Date();
    const datePart = dateParts[0].split('-');
    date.setFullYear(parseInt(datePart[0]), parseInt(datePart[1]) - 1, parseInt(datePart[2]));
    date.setHours(parseInt(timeParts[0]), parseInt(timeParts[1]), 0);
    
    const record = {
      id: Date.now(),
      startTime: `${date.getFullYear()}-${(date.getMonth() + 1).toString().padStart(2, '0')}-${date.getDate().toString().padStart(2, '0')}T${date.getHours().toString().padStart(2, '0')}:${date.getMinutes().toString().padStart(2, '0')}:00`,
      duration: mins * 60 + secs,
      medium: document.getElementById('manual-medium').value,
      fetishes: selectedFetishes,
      notes: document.getElementById('manual-notes').value,
      satisfaction: satisfaction
    };
    records.unshift(record);
    records.sort((a, b) => new Date(b.startTime) - new Date(a.startTime));
    saveRecords();
    showToast(t('record_saved'));
    
    document.getElementById('manual-min').value = '0';
    document.getElementById('manual-sec').value = '0';
    document.getElementById('manual-notes').value = '';
    document.getElementById('manual-satisfaction').value = '6';
    document.querySelectorAll('#manual-fetishes .fetish-checkbox').forEach(checkbox => {
      checkbox.checked = false;
    });
  });
}

function renderCalendar() {
  const year = calendarCurrentMonth.getFullYear();
  const month = calendarCurrentMonth.getMonth();

  // 统计每天的记录次数 - 使用统一的本地日期提取函数
  const dailyCounts = {};
  records.forEach(record => {
    const dateStr = getLocalDateStr(record.startTime);
    dailyCounts[dateStr] = (dailyCounts[dateStr] || 0) + 1;
  });

  // 获取今天的日期字符串
  const todayStr = getTodayStr();

  // 获取月份第一天是星期几
  const firstDay = new Date(year, month, 1).getDay();
  // 获取月份有多少天
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  // 获取上个月有多少天
  const daysInPrevMonth = new Date(year, month, 0).getDate();

  // 星期标题
  const weekDays = ['日', '一', '二', '三', '四', '五', '六'];

  let calendarHTML = '';

  if (calendarCollapsed) {
    // 收起状态：只显示标题栏，点击展开
    calendarHTML += `
      <div class="calendar-header-bar" id="calendar-header-bar">
        <span class="calendar-title">${year}年${month + 1}月</span>
        <span class="calendar-toggle-indicator">▼</span>
      </div>
    `;
    return calendarHTML;
  }

  // 展开状态：标题栏 + 导航按钮 + 日历网格
  calendarHTML += `
    <div class="calendar-header-bar" id="calendar-header-bar">
      <div style="display: flex; align-items: center; gap: 8px;">
        <button class="calendar-nav-btn" id="calendar-prev">◀</button>
        <span class="calendar-title">${year}年${month + 1}月</span>
        <button class="calendar-nav-btn" id="calendar-next">▶</button>
      </div>
      <span class="calendar-toggle-indicator">▲</span>
    </div>
    <div class="calendar-container">
      <div class="calendar-grid">
  `;

  // 添加星期标题
  weekDays.forEach(day => {
    calendarHTML += `<div class="calendar-day-header">${day}</div>`;
  });

  // 添加上个月的日期
  for (let i = firstDay - 1; i >= 0; i--) {
    const day = daysInPrevMonth - i;
    const prevMonth = month === 0 ? 12 : month;
    const prevYear = month === 0 ? year - 1 : year;
    const dateStr = `${prevYear}-${prevMonth.toString().padStart(2, '0')}-${day.toString().padStart(2, '0')}`;
    const count = dailyCounts[dateStr] || 0;
    const countClass = getDayCountClass(count);
    calendarHTML += `<div class="calendar-day other-month ${countClass}" data-date="${dateStr}">${day}</div>`;
  }

  // 添加当月的日期
  for (let day = 1; day <= daysInMonth; day++) {
    const dateStr = `${year}-${(month + 1).toString().padStart(2, '0')}-${day.toString().padStart(2, '0')}`;
    const count = dailyCounts[dateStr] || 0;
    const countClass = getDayCountClass(count);
    const todayClass = dateStr === todayStr ? ' today' : '';
    const selectedClass = dateStr === calendarSelectedDate ? ' selected' : '';
    calendarHTML += `<div class="calendar-day ${countClass}${todayClass}${selectedClass}" data-date="${dateStr}">${day}</div>`;
  }

  // 添加下个月的日期
  const totalCells = firstDay + daysInMonth;
  const remainingCells = 7 - (totalCells % 7);
  if (remainingCells < 7) {
    for (let day = 1; day <= remainingCells; day++) {
      const nextMonth = (month + 1) % 12 + 1;
      const nextYear = month === 11 ? year + 1 : year;
      const dateStr = `${nextYear}-${nextMonth.toString().padStart(2, '0')}-${day.toString().padStart(2, '0')}`;
      const count = dailyCounts[dateStr] || 0;
      const countClass = getDayCountClass(count);
      calendarHTML += `<div class="calendar-day other-month ${countClass}" data-date="${dateStr}">${day}</div>`;
    }
  }

  calendarHTML += `
      </div>
    </div>
  `;

  return calendarHTML;
}

function getDayCountClass(count) {
  if (count === 0) return 'calendar-day-count-0';
  if (count === 1) return 'calendar-day-count-1';
  if (count === 2) return 'calendar-day-count-2';
  if (count === 3) return 'calendar-day-count-3';
  if (count === 4) return 'calendar-day-count-4';
  if (count === 5) return 'calendar-day-count-5';
  return 'calendar-day-count-6-plus';
}

function renderRecordsTab() {
  if (editingRecordId !== null) {
    renderEditRecord();
    return;
  }

  const sortedRecords = [...records].sort((a, b) => new Date(a.startTime) - new Date(b.startTime));
  const grouped = {};
  sortedRecords.forEach(record => {
    const datePart = getLocalDateStr(record.startTime);
    const monthKey = datePart.substring(0, 7);
    if (!grouped[monthKey]) grouped[monthKey] = [];
    grouped[monthKey].push(record);
  });

  // 构建记录列表 HTML
  let recordsHTML = '';
  if (records.length === 0) {
    recordsHTML = `
      <div class="empty-state">
        <div class="empty-state-icon">📝</div>
        <div class="empty-state-text">${t('no_records')}</div>
      </div>
    `;
  } else {
    Object.keys(grouped).sort().reverse().forEach(month => {
      const monthRecords = grouped[month].sort((a, b) => new Date(b.startTime) - new Date(a.startTime));
      const itemsHTML = monthRecords.map(record => {
        const recordIndex = sortedRecords.findIndex(r => r.id === record.id);
        let durationDiffHTML = '';
        if (recordIndex > 0 && statsConfig.showDurationDiff) {
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
                ${record.satisfaction !== undefined && record.satisfaction !== null ? `<div class="record-satisfaction">满意度: ${record.satisfaction}/10</div>` : ''}
              </div>
              <div style="display: flex; gap: 8px;">
                <button class="record-edit" data-id="${record.id}">✏️</button>
                <button class="record-delete" data-id="${record.id}">🗑️</button>
              </div>
            </div>
        `;
      }).join('');

      recordsHTML += `
        <div class="record-group" data-month="${month}">
          <div class="group-header">${formatMonth(grouped[month][0].startTime)}</div>
          ${itemsHTML}
        </div>
      `;
    });
  }

  // 两栏布局：日历固定顶部，记录独立滚动
  mainContent.innerHTML = `
    <div class="records-calendar-section">${renderCalendar()}</div>
    <div class="records-panel" id="records-panel">
      <div class="card"><h3 class="card-title">${t('records_title')}</h3>${recordsHTML}</div>
    </div>
  `;

  // 记录编辑/删除事件
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

  // 日历收起/展开事件
  const headerBar = document.getElementById('calendar-header-bar');
  if (headerBar) {
    headerBar.addEventListener('click', () => {
      calendarCollapsed = !calendarCollapsed;
      renderRecordsTab();
    });
  }

  // 日历导航按钮事件
  const prevBtn = document.getElementById('calendar-prev');
  const nextBtn = document.getElementById('calendar-next');

  if (prevBtn) {
    prevBtn.addEventListener('click', () => {
      calendarCurrentMonth.setMonth(calendarCurrentMonth.getMonth() - 1);
      renderRecordsTab();
    });
  }

  if (nextBtn) {
    nextBtn.addEventListener('click', () => {
      calendarCurrentMonth.setMonth(calendarCurrentMonth.getMonth() + 1);
      renderRecordsTab();
    });
  }

  // 日历日期点击 → 滚动到当天记录
  mainContent.querySelectorAll('.calendar-day[data-date]').forEach(day => {
    day.addEventListener('click', () => {
      const dateStr = day.dataset.date;
      calendarSelectedDate = dateStr;

      // 高亮选中日期
      mainContent.querySelectorAll('.calendar-day.selected').forEach(d => d.classList.remove('selected'));
      day.classList.add('selected');

      // 滚动记录列表到当天
      const recordsPanel = document.getElementById('records-panel');
      if (recordsPanel) {
        const target = recordsPanel.querySelector(`.record-item[data-record-id]`);
        // 查找该日期的第一条记录
        const dateRecords = records.filter(r => getLocalDateStr(r.startTime) === dateStr);
        if (dateRecords.length > 0) {
          // 按时间正序排列，找第一条
          dateRecords.sort((a, b) => new Date(a.startTime) - new Date(b.startTime));
          const firstRecordId = dateRecords[0].id;
          const targetEl = recordsPanel.querySelector(`.record-item[data-record-id="${firstRecordId}"]`);
          if (targetEl) {
            targetEl.scrollIntoView({ behavior: 'smooth', block: 'start' });
            // 短暂高亮
            targetEl.style.transition = 'background-color 0.3s';
            targetEl.style.backgroundColor = 'var(--primary-color)';
            setTimeout(() => { targetEl.style.backgroundColor = ''; }, 1000);
          }
        }
      }
    });
  });

  // 如果有选中日期，滚动到该日期
  if (calendarSelectedDate) {
    const recordsPanel = document.getElementById('records-panel');
    if (recordsPanel) {
      const dateRecords = records.filter(r => getLocalDateStr(r.startTime) === calendarSelectedDate);
      if (dateRecords.length > 0) {
        dateRecords.sort((a, b) => new Date(a.startTime) - new Date(b.startTime));
        const targetEl = recordsPanel.querySelector(`.record-item[data-record-id="${dateRecords[0].id}"]`);
        if (targetEl) {
          setTimeout(() => targetEl.scrollIntoView({ behavior: 'auto', block: 'start' }), 50);
        }
      }
    }
  }
}

function renderEditRecord() {
  const record = records.find(r => r.id === editingRecordId);
  if (!record) {
    editingRecordId = null;
    renderRecordsTab();
    return;
  }

  const date = new Date(record.startTime);
  const datetimeValue = `${date.getFullYear()}-${(date.getMonth() + 1).toString().padStart(2, '0')}-${date.getDate().toString().padStart(2, '0')}T${date.getHours().toString().padStart(2, '0')}:${date.getMinutes().toString().padStart(2, '0')}`;
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
      <div class="form-group">
        <label class="form-label">${t('satisfaction_rating')}</label>
        <input type="number" class="form-input" id="edit-satisfaction" min="0" max="10" step="1" value="${record.satisfaction || 6}" placeholder="${t('satisfaction_hint')}">
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
    let satisfaction = parseInt(document.getElementById('edit-satisfaction').value);
    if (isNaN(satisfaction) || satisfaction < 0 || satisfaction > 10) {
      satisfaction = 6;
    }
    
    if (!datetime) {
      showToast('请选择开始时间');
      return;
    }
    
    const dateParts = datetime.split('T');
    const timeParts = dateParts[1].split(':');
    const date = new Date();
    const datePart = dateParts[0].split('-');
    date.setFullYear(parseInt(datePart[0]), parseInt(datePart[1]) - 1, parseInt(datePart[2]));
    date.setHours(parseInt(timeParts[0]), parseInt(timeParts[1]), 0);
    
    const recordIndex = records.findIndex(r => r.id === editingRecordId);
    if (recordIndex !== -1) {
      records[recordIndex] = {
        ...records[recordIndex],
        startTime: `${date.getFullYear()}-${(date.getMonth() + 1).toString().padStart(2, '0')}-${date.getDate().toString().padStart(2, '0')}T${date.getHours().toString().padStart(2, '0')}:${date.getMinutes().toString().padStart(2, '0')}:00`,
        duration: mins * 60 + secs,
        medium: medium,
        fetishes: selectedFetishes,
        notes: notes,
        satisfaction: satisfaction
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
    // 根据值的范围判断是次数还是满意度
    if (maxValue <= 10) {
      valueDiv.textContent = `${item.value} 分`;
    } else {
      valueDiv.textContent = `${item.value} ${t('times')}`;
    }
    
    barContainer.appendChild(barBackground);
    barContainer.appendChild(valueDiv);
    
    itemDiv.appendChild(labelDiv);
    itemDiv.appendChild(barContainer);
    
    container.appendChild(itemDiv);
  });
}

function drawDurationLineChart(canvasId, data) {
  const canvas = document.getElementById(canvasId);
  if (!canvas) return;
  if (!data.length) return;

  const ctx = canvas.getContext('2d');
  const paddingTop = 40;
  const paddingBottom = 50;
  const paddingLeft = 60;
  const paddingRight = 20;

  const isDarkMode = currentTheme === 'dark';
  const textColor = isDarkMode ? '#ffffff' : '#333333';
  const lineColor = '#6366f1';
  const pointColor = '#4f46e5';
  const gridColor = isDarkMode ? '#444444' : '#e0e0e0';
  const labelColor = isDarkMode ? '#aaaaaa' : '#888888';

  const values = data.map(d => d.value);
  const maxValue = Math.max(...values, 1);
  const minValue = Math.min(...values);
  const valueRange = Math.max(maxValue - minValue, 1);

  const dpr = window.devicePixelRatio || 1;

  // 自适应容器宽度，不撑出
  const canvasWidth = canvas.offsetWidth || canvas.parentElement.offsetWidth || 500;
  const canvasHeight = 280;

  canvas.width = canvasWidth * dpr;
  canvas.height = canvasHeight * dpr;
  canvas.style.width = canvasWidth + 'px';
  canvas.style.height = canvasHeight + 'px';
  ctx.scale(dpr, dpr);

  const chartWidth = canvasWidth - paddingLeft - paddingRight;
  const chartHeight = canvasHeight - paddingTop - paddingBottom;

  ctx.clearRect(0, 0, canvasWidth, canvasHeight);

  // 水平网格线 + Y轴标签
  ctx.strokeStyle = gridColor;
  ctx.lineWidth = 1;
  const gridLines = 5;
  for (let i = 0; i <= gridLines; i++) {
    const y = paddingTop + (i / gridLines) * chartHeight;
    ctx.beginPath();
    ctx.moveTo(paddingLeft, y);
    ctx.lineTo(canvasWidth - paddingRight, y);
    ctx.stroke();

    const value = maxValue - (i / gridLines) * valueRange;
    ctx.fillStyle = textColor;
    ctx.font = '10px Arial';
    ctx.textAlign = 'right';
    ctx.fillText(formatDuration(Math.round(value)), paddingLeft - 8, y + 3);
  }

  // 垂直网格线
  for (let i = 0; i < data.length; i++) {
    const x = paddingLeft + (i / Math.max(data.length - 1, 1)) * chartWidth;
    ctx.beginPath();
    ctx.strokeStyle = gridColor;
    ctx.lineWidth = 1;
    ctx.moveTo(x, paddingTop);
    ctx.lineTo(x, canvasHeight - paddingBottom);
    ctx.stroke();
  }

  // X轴标签：根据点数决定显示密度，避免重叠
  const labelStep = data.length <= 6 ? 1 :
                    data.length <= 12 ? 2 :
                    data.length <= 24 ? 4 : Math.ceil(data.length / 6);
  ctx.font = '10px Arial';
  for (let i = 0; i < data.length; i += labelStep) {
    const x = paddingLeft + (i / Math.max(data.length - 1, 1)) * chartWidth;
    ctx.save();
    ctx.translate(x, canvasHeight - paddingBottom + 14);
    ctx.rotate(-Math.PI / 4);
    ctx.fillStyle = textColor;
    ctx.textAlign = 'right';
    ctx.fillText(data[i].label, 0, 0);
    ctx.restore();
  }

  // 绘制折线
  ctx.strokeStyle = lineColor;
  ctx.lineWidth = 2.5;
  ctx.beginPath();
  data.forEach((item, index) => {
    const x = paddingLeft + (index / Math.max(data.length - 1, 1)) * chartWidth;
    const y = paddingTop + chartHeight - ((item.value - minValue) / valueRange) * chartHeight;
    if (index === 0) ctx.moveTo(x, y);
    else ctx.lineTo(x, y);
  });
  ctx.stroke();

  // 绘制数据点 + 时长标签
  ctx.font = '10px Arial';
  data.forEach((item, index) => {
    const x = paddingLeft + (index / Math.max(data.length - 1, 1)) * chartWidth;
    const y = paddingTop + chartHeight - ((item.value - minValue) / valueRange) * chartHeight;

    ctx.fillStyle = pointColor;
    ctx.beginPath();
    ctx.arc(x, y, 3.5, 0, 2 * Math.PI);
    ctx.fill();

    // 时长标签（点上方），密集时也跳过
    if (index % labelStep === 0) {
      ctx.fillStyle = labelColor;
      ctx.textAlign = 'center';
      ctx.fillText(formatDuration(item.value), x, y - 10);
    }
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
    case 'all':
      // 根据实际记录的时间范围计算
      if (records.length > 0) {
        const sortedRecords = [...records].sort((a, b) => new Date(a.startTime) - new Date(b.startTime));
        from = new Date(sortedRecords[0].startTime);
        from.setHours(0, 0, 0, 0);
        to = new Date(sortedRecords[sortedRecords.length - 1].startTime);
        to.setHours(23, 59, 59, 999);
      } else {
        // 如果没有记录，使用当前时间
        from = new Date(now);
        from.setHours(0, 0, 0, 0);
        to = new Date(now);
        to.setHours(23, 59, 59, 999);
      }
      break;
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
  const defaultRange = getTimeRange('all', now);
  
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
  
  let refreshButtonHTML = `
    <div style="margin-bottom: 16px;">
      <button class="btn btn-secondary" id="refresh-stats-btn" style="width: 100%; padding: 12px 16px;">
        <span style="margin-right: 8px;">🔄</span>刷新数据
      </button>
    </div>
  `;

  let presetButtonsHTML = '';
  let firstButtonAdded = false;
  let defaultPreset = 'all';
  
  // 添加"全部"选项
  presetButtonsHTML += `<button class="tab-btn ${!firstButtonAdded ? 'active' : ''}" data-preset="all">全部</button>`;
  if (!firstButtonAdded) defaultPreset = 'all';
  firstButtonAdded = true;
  
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
      ${refreshButtonHTML}
      <div class="tab-buttons" style="margin-bottom: 16px;">
        ${presetButtonsHTML}
      </div>
      <div class="date-range" id="custom-date-range" style="display: none;">
        <input type="date" class="form-input" id="stat-from" value="${getLocalDateStr(defaultRange.from)}">
        <input type="date" class="form-input" id="stat-to" value="${getLocalDateStr(defaultRange.to)}">
      </div>
      <div id="stats-result"></div>
    </div>
  `;

  let currentPreset = defaultPreset;
  const pieColors = ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0', '#9966FF', '#FF9F40', '#FF6384', '#C9CBCF'];

  function setDateRange(from, to) {
    document.getElementById('stat-from').value = getLocalDateStr(from);
    document.getElementById('stat-to').value = getLocalDateStr(to);
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
    const mediumSatisfaction = {};
    const fetishCounts = {};
    const fetishSatisfaction = {};
    const barData = {};
    let totalDuration = 0;
    let minDuration = Infinity;
    let maxDuration = 0;
    let totalSatisfaction = 0;
    let satisfactionCount = 0;
    let currentGrouping;

    // 计算当前分组方式
    if (currentPreset === 'all') {
      // 全部数据使用专门的分组设置
      currentGrouping = statsConfig.allDataGrouping || 'year';
    } else if (currentPreset === 'thisWeek') {
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
          
          // 统计满意度
          if (record.satisfaction !== undefined && record.satisfaction !== null) {
            totalSatisfaction += record.satisfaction;
            satisfactionCount++;
          }
          
          if (hasValidMedium) {
            mediumCounts[record.medium] = (mediumCounts[record.medium] || 0) + 1;
            // 统计媒介的满意度
            if (record.satisfaction !== undefined && record.satisfaction !== null) {
              mediumSatisfaction[record.medium] = (mediumSatisfaction[record.medium] || 0) + record.satisfaction;
            }
          }
          
          if (Array.isArray(record.fetishes)) {
            record.fetishes.forEach(fetish => {
              if (fetishCache[fetish]) {
                fetishCounts[fetish] = (fetishCounts[fetish] || 0) + 1;
                // 统计性癖的满意度
                if (record.satisfaction !== undefined && record.satisfaction !== null) {
                  fetishSatisfaction[fetish] = (fetishSatisfaction[fetish] || 0) + record.satisfaction;
                }
              }
            });
          } else if (record.fetish && fetishCache[record.fetish]) {
            fetishCounts[record.fetish] = (fetishCounts[record.fetish] || 0) + 1;
            // 统计性癖的满意度
            if (record.satisfaction !== undefined && record.satisfaction !== null) {
              fetishSatisfaction[record.fetish] = (fetishSatisfaction[record.fetish] || 0) + record.satisfaction;
            }
          }
          
          let key;
          if (currentGrouping === 'day') {
            key = getLocalDateStr(record.startTime);
          } else if (currentGrouping === 'week') {
            key = getWeekKey(record.startTime);
          } else if (currentGrouping === 'month') {
            key = getMonthKey(record.startTime);
          } else if (currentGrouping === 'quarter') {
            const d = new Date(record.startTime);
            const year = d.getFullYear();
            const quarter = Math.floor(d.getMonth() / 3) + 1;
            key = `${year}-Q${quarter}`;
          } else if (currentGrouping === 'year') {
            const d = new Date(record.startTime);
            key = d.getFullYear().toString();
          }
          barData[key] = (barData[key] || 0) + 1;
        }
      }
    }

    const count = filtered.length;
    const avgDuration = count > 0 ? Math.round(totalDuration / count) : 0;
    minDuration = count > 0 ? minDuration : 0;
    maxDuration = count > 0 ? maxDuration : 0;
    const avgSatisfaction = satisfactionCount > 0 ? (totalSatisfaction / satisfactionCount).toFixed(1) : 0;
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
      value: mediumCounts[key],
      satisfaction: mediumSatisfaction[key] ? (mediumSatisfaction[key] / mediumCounts[key]).toFixed(1) : 0
    }));
    
    let fetishChartData = Object.keys(fetishCounts).map(key => ({
      label: getFetishLabel(key),
      value: fetishCounts[key],
      satisfaction: fetishSatisfaction[key] ? (fetishSatisfaction[key] / fetishCounts[key]).toFixed(1) : 0
    }));
    
    if (statsConfig.sortBy === 'count') {
      mediumChartData.sort((a, b) => b.value - a.value);
      fetishChartData.sort((a, b) => b.value - a.value);
    } else if (statsConfig.sortBy === 'satisfaction') {
      mediumChartData.sort((a, b) => parseFloat(b.satisfaction) - parseFloat(a.satisfaction));
      fetishChartData.sort((a, b) => parseFloat(b.satisfaction) - parseFloat(a.satisfaction));
    } else {
      mediumChartData.sort((a, b) => a.label.localeCompare(b.label, currentLang === 'zh' ? 'zh-CN' : 'en-US'));
      fetishChartData.sort((a, b) => a.label.localeCompare(b.label, currentLang === 'zh' ? 'zh-CN' : 'en-US'));
    }

    let allKeys;
    let formatLabel;
    
    // 确保currentGrouping已定义
    if (!currentGrouping) {
      currentGrouping = 'month';
    }
    
    // 只显示有数值的时间点
    const barChartData = Object.keys(barData).map(key => {
      let label;
      if (currentGrouping === 'day') {
        const d = new Date(key);
        if (!isNaN(d.getTime())) {
          label = `${d.getMonth() + 1}/${d.getDate()}`;
        } else {
          label = key;
        }
      } else if (currentGrouping === 'week') {
        const d = new Date(key);
        if (!isNaN(d.getTime())) {
          label = `${d.getMonth() + 1}/${d.getDate()}`;
        } else {
          label = key;
        }
      } else if (currentGrouping === 'month') {
        const parts = key.split('-');
        if (parts.length === 2) {
          const month = parseInt(parts[1]);
          if (!isNaN(month)) {
            label = `${month}月`;
          } else {
            label = key;
          }
        } else {
          label = key;
        }
      } else if (currentGrouping === 'quarter') {
        const parts = key.split('-');
        if (parts.length === 2) {
          const quarter = parts[1].replace('Q', '');
          const quarterMap = {'1': '一', '2': '二', '3': '三', '4': '四'};
          if (quarterMap[quarter]) {
            label = `第${quarterMap[quarter]}季度`;
          } else {
            label = key;
          }
        } else {
          label = key;
        }
      } else if (currentGrouping === 'year') {
        label = key;
      } else {
        label = key;
      }
      return {
        label: label,
        value: barData[key],
        originalKey: key
      };
    }).sort((a, b) => {
      // 按时间顺序排序
      return a.originalKey.localeCompare(b.originalKey);
    });

    // 检查是否跨年，如果是则在最开头添加年份
    if (barChartData.length > 1) {
      const firstKey = barChartData[0].originalKey;
      const lastKey = barChartData[barChartData.length - 1].originalKey;
      let hasCrossYear = false;
      
      if (currentGrouping === 'day') {
        const firstYear = new Date(firstKey).getFullYear();
        const lastYear = new Date(lastKey).getFullYear();
        hasCrossYear = firstYear !== lastYear;
      } else if (currentGrouping === 'week') {
        const firstYear = new Date(firstKey).getFullYear();
        const lastYear = new Date(lastKey).getFullYear();
        hasCrossYear = firstYear !== lastYear;
      } else if (currentGrouping === 'month') {
        const firstYear = firstKey.split('-')[0];
        const lastYear = lastKey.split('-')[0];
        hasCrossYear = firstYear !== lastYear;
      } else if (currentGrouping === 'quarter') {
        const firstYear = firstKey.split('-')[0];
        const lastYear = lastKey.split('-')[0];
        hasCrossYear = firstYear !== lastYear;
      } else if (currentGrouping === 'year') {
        // 按年分组时，直接显示年份
        hasCrossYear = false;
      }
      
      if (hasCrossYear) {
        // 在每个标签前添加年份
        barChartData.forEach(item => {
          if (currentGrouping === 'day') {
            const d = new Date(item.originalKey);
            item.label = `${d.getFullYear()}/${item.label}`;
          } else if (currentGrouping === 'week') {
            const d = new Date(item.originalKey);
            item.label = `${d.getFullYear()}/${item.label}`;
          } else if (currentGrouping === 'month') {
            const year = item.originalKey.split('-')[0];
            item.label = `${year}/${item.label}`;
          } else if (currentGrouping === 'quarter') {
            const year = item.originalKey.split('-')[0];
            item.label = `${year}年${item.label}`;
          }
        });
      }
    }

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
    // 添加满意度统计
    if (satisfactionCount > 0) {
      statsGridHTML += `
        <div class="stat-card">
          <div class="stat-value">${avgSatisfaction}/10</div>
          <div class="stat-label">平均满意度</div>
        </div>
      `;
    }

    // 准备时间次数折线图数据
    const recentRecords = [...records].sort((a, b) => new Date(b.startTime) - new Date(a.startTime))
      .slice(0, statsConfig.durationChartCount);
    const durationLineData = recentRecords.map((record, index) => {
      const d = new Date(record.startTime);
      const month = d.getMonth() + 1;
      const day = d.getDate();
      return {
        label: `${month}/${day}`,
        value: record.duration
      };
    }).reverse();

    document.getElementById('stats-result').innerHTML = `
      <div class="card" style="margin-bottom: 16px;">
        <h3 class="card-title">${t('duration_stats')}</h3>
        <div class="stats-grid">
          ${statsGridHTML}
        </div>
        ${currentPreset === 'all' && !statsConfig.showAllCountAnalysis ? '' : `
        <div style="margin-top: 16px;">
          <h4 style="margin-bottom: 12px;">${t('count_trend')}</h4>
          <div id="count-bar"></div>
        </div>
        `}
        <div style="margin-top: 24px;">
          <h4 style="margin-bottom: 12px;">${t('duration_trend')}</h4>
          <canvas id="duration-line" style="width: 100%; display: block;"></canvas>
        </div>
      </div>
      
      <div class="card" style="margin-bottom: 16px;">
        <h3 class="card-title">${t('medium_stats')}</h3>
        <canvas id="medium-pie" width="300" height="250" style="width: 100%; max-width: 300px; display: block; margin: 0 auto;"></canvas>
        <div style="margin-top: 16px;">
          <h4 style="margin-bottom: 12px;">满意度排名</h4>
          <div id="medium-rank-chart"></div>
        </div>
      </div>
      
      <div class="card">
        <h3 class="card-title">${t('fetish_stats')}</h3>
        <canvas id="fetish-pie" width="300" height="250" style="width: 100%; max-width: 300px; display: block; margin: 0 auto;"></canvas>
        <div style="margin-top: 16px;">
          <h4 style="margin-bottom: 12px;">满意度排名</h4>
          <div id="fetish-rank-chart"></div>
        </div>
      </div>
    `;

    setTimeout(() => {
      drawPieChart('medium-pie', mediumChartData, pieColors);
      drawPieChart('fetish-pie', fetishChartData, pieColors);
      drawHorizontalCountChart('count-bar', barChartData);
      drawDurationLineChart('duration-line', durationLineData);
      
      if (mediumChartData.length > 0) {
        // 转换为显示满意度的数据
        const mediumSatisfactionData = mediumChartData.map(item => ({
          label: `${item.label} (${item.value}次)`,
          value: parseFloat(item.satisfaction)
        }));
        drawHorizontalBarChart('medium-rank-chart', mediumSatisfactionData, pieColors);
      } else {
        document.getElementById('medium-rank-chart').innerHTML = '<p style="color: var(--text-secondary);">' + t('no_records') + '</p>';
      }
      
      if (fetishChartData.length > 0) {
        // 转换为显示满意度的数据
        const fetishSatisfactionData = fetishChartData.map(item => ({
          label: `${item.label} (${item.value}次)`,
          value: parseFloat(item.satisfaction)
        }));
        drawHorizontalBarChart('fetish-rank-chart', fetishSatisfactionData, pieColors);
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
  
  const refreshStatsBtn = document.getElementById('refresh-stats-btn');
  if (refreshStatsBtn) {
    refreshStatsBtn.addEventListener('click', () => {
      // 重新更新缓存
      updateMediaCache();
      updateFetishCache();
      // 重新计算统计数据
      calculateStats();
      // 显示刷新成功的提示
      showToast('数据已刷新');
    });
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
    hideNav(); renderMediumManagement(); return;
  }
  if (settingsSubPage === 'fetishManagement') {
    hideNav(); renderFetishManagement(); return;
  }
  if (settingsSubPage === 'dataManagement') {
    hideNav(); renderDataManagement(); return;
  }
  if (settingsSubPage === 'statsManagement') {
    hideNav(); renderStatsManagement(); return;
  }
  if (settingsSubPage === 'appearanceManagement') {
    hideNav(); renderAppearanceManagement(); return;
  }
  if (settingsSubPage === 'about') {
    hideNav(); renderAbout(); return;
  }
  if (settingsSubPage === 'bookshelfSettings') {
    hideNav(); renderBookshelfSettings(); return;
  }
  showNav();

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
        <button class="btn btn-secondary" id="bookshelf-settings-btn" style="width: 100%; margin-bottom: 8px;">📚 ${t('bs_settings')}</button>
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

  document.getElementById('bookshelf-settings-btn').addEventListener('click', () => {
    settingsSubPage = 'bookshelfSettings';
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
      cardBg: '',
      textPrimary: '',
      textSecondary: '',
      borderColor: '',
      fontSize: 'medium',
      spacing: 'standard',
      navPosition: 'bottom',
      defaultHome: 'add',
      navOrder: ['add', 'records', 'stats', 'bookshelf', 'settings'],
      statsSortOrder: 'desc',
      statsButtonsPosition: 'top',
      bsViewMode: 'grid',
      bsGridCols: 3,
      bsSaveImages: true,
      bsSavePdf: false,
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
          <h4 style="color: var(--primary-color); margin-bottom: 8px;">${t('cl_v100_title')}</h4>
          <ul style="color: var(--text-secondary); margin: 0; padding-left: 20px;">
            <li>${t('cl_v100_1')}</li>
            <li>${t('cl_v100_2')}</li>
            <li>${t('cl_v100_3')}</li>
            <li>${t('cl_v100_4')}</li>
            <li>${t('cl_v100_5')}</li>
            <li>${t('cl_v100_6')}</li>
            <li style="margin-top:8px;color:var(--primary-color);">🙏 ${t('credits_acheron')}</li>
          </ul>
        </div>
        <div style="margin-bottom: 24px; padding-bottom: 16px; border-bottom: 1px solid var(--border-color);">
          <h4 style="color: var(--text-color); margin-bottom: 8px;">${t('cl_v0918_title')}</h4>
          <ul style="color: var(--text-secondary); margin: 0; padding-left: 20px;">
            <li>${t('cl_v0918_1')}</li>
            <li>${t('cl_v0918_2')}</li>
          </ul>
        </div>
        <div style="margin-bottom: 24px; padding-bottom: 16px; border-bottom: 1px solid var(--border-color);">
          <h4 style="color: var(--text-color); margin-bottom: 8px;">${t('cl_v0917_title')}</h4>
          <ul style="color: var(--text-secondary); margin: 0; padding-left: 20px;">
            <li>${t('cl_v0917_1')}</li>
            <li>${t('cl_v0917_2')}</li>
            <li>${t('cl_v0917_3')}</li>
            <li>${t('cl_v0917_4')}</li>
            <li>${t('cl_v0917_5')}</li>
          </ul>
        </div>
        <div style="margin-bottom: 24px; padding-bottom: 16px; border-bottom: 1px solid var(--border-color);">
          <h4 style="color: var(--text-color); margin-bottom: 8px;">${t('cl_v0916_title')}</h4>
          <ul style="color: var(--text-secondary); margin: 0; padding-left: 20px;">
            <li>${t('cl_v0916_1')}</li>
            <li>${t('cl_v0916_2')}</li>
            <li>${t('cl_v0916_3')}</li>
            <li>${t('cl_v0916_4')}</li>
            <li>${t('cl_v0916_5')}</li>
            <li>${t('cl_v0916_6')}</li>
            <li>${t('cl_v0916_7')}</li>
            <li>${t('cl_v0916_8')}</li>
          </ul>
        </div>
        <div style="margin-bottom: 24px; padding-bottom: 16px; border-bottom: 1px solid var(--border-color);">
          <h4 style="color: var(--text-color); margin-bottom: 8px;">${t('cl_v0915_title')}</h4>
          <ul style="color: var(--text-secondary); margin: 0; padding-left: 20px;">
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
          <h4 style="color: var(--text-color); margin-bottom: 8px;">${t('cl_v0914_title')}</h4>
          <ul style="color: var(--text-secondary); margin: 0; padding-left: 20px;">
            <li>${t('cl_v0914_1')}</li>
            <li>${t('cl_v0914_2')}</li>
            <li>${t('cl_v0914_3')}</li>
            <li>${t('cl_v0914_4')}</li>
          </ul>
        </div>
        <div style="margin-bottom: 24px; padding-bottom: 16px; border-bottom: 1px solid var(--border-color);">
          <h4 style="color: var(--text-color); margin-bottom: 8px;">${t('cl_v0913_title')}</h4>
          <ul style="color: var(--text-secondary); margin: 0; padding-left: 20px;">
            <li>${t('cl_v0913_1')}</li>
            <li>${t('cl_v0913_2')}</li>
            <li>${t('cl_v0913_3')}</li>
          </ul>
        </div>
        <div style="margin-bottom: 24px; padding-bottom: 16px; border-bottom: 1px solid var(--border-color);">
          <h4 style="color: var(--text-color); margin-bottom: 8px;">${t('cl_v0912_title')}</h4>
          <ul style="color: var(--text-secondary); margin: 0; padding-left: 20px;">
            <li>${t('cl_v0912_1')}</li>
            <li>${t('cl_v0912_2')}</li>
            <li>${t('cl_v0912_3')}</li>
            <li>${t('cl_v0912_4')}</li>
            <li>${t('cl_v0912_5')}</li>
            <li>${t('cl_v0912_6')}</li>
          </ul>
        </div>
        <div style="margin-bottom: 24px; padding-bottom: 16px; border-bottom: 1px solid var(--border-color);">
          <h4 style="color: var(--text-color); margin-bottom: 8px;">${t('cl_v0911_title')}</h4>
          <ul style="color: var(--text-secondary); margin: 0; padding-left: 20px;">
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
          <h4 style="color: var(--text-color); margin-bottom: 8px;">${t('cl_v091_title')}</h4>
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
        
        <div class="settings-item">
          <span class="settings-label">${t('show_duration_diff')}</span>
          <label class="toggle-switch">
            <input type="checkbox" id="show-duration-diff" ${statsConfig.showDurationDiff ? 'checked' : ''}>
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
      
      <div style="margin-bottom: 24px;">
        <h4 style="color: var(--text-color); margin-bottom: 12px;">📈 ${t('duration_chart_count')}</h4>
        <div class="settings-item">
          <span class="settings-label">${t('duration_chart_count')}</span>
          <select class="settings-select" id="duration-chart-count">
            <option value="5" ${statsConfig.durationChartCount === 5 ? 'selected' : ''}>5 ${t('times')}</option>
            <option value="10" ${statsConfig.durationChartCount === 10 ? 'selected' : ''}>10 ${t('times')}</option>
            <option value="20" ${statsConfig.durationChartCount === 20 ? 'selected' : ''}>20 ${t('times')}</option>
          </select>
        </div>
      </div>
      
      <div style="margin-bottom: 24px;">
        <h4 style="color: var(--text-color); margin-bottom: 12px;">📊 全部数据统计设置</h4>
        
        <div class="settings-item">
          <span class="settings-label">显示全部数据的次数分析</span>
          <label class="toggle-switch">
            <input type="checkbox" id="show-all-count-analysis" ${statsConfig.showAllCountAnalysis ? 'checked' : ''}>
            <span class="toggle-slider"></span>
          </label>
        </div>
        
        <div class="settings-item">
          <span class="settings-label">全部数据的分析周期</span>
          <select class="settings-select" id="all-data-grouping">
            <option value="year" ${statsConfig.allDataGrouping === 'year' ? 'selected' : ''}>${t('group_by_year')}</option>
            <option value="quarter" ${statsConfig.allDataGrouping === 'quarter' ? 'selected' : ''}>${t('group_by_quarter')}</option>
            <option value="month" ${statsConfig.allDataGrouping === 'month' ? 'selected' : ''}>${t('group_by_month')}</option>
            <option value="week" ${statsConfig.allDataGrouping === 'week' ? 'selected' : ''}>${t('group_by_week')}</option>
          </select>
        </div>
      </div>
      
      <div style="margin-bottom: 24px;">
        <div class="settings-item">
          <span class="settings-label">${t('calendar_default_collapsed')}</span>
          <label class="toggle-switch">
            <input type="checkbox" id="calendar-default-collapsed" ${statsConfig.calendarDefaultCollapsed ? 'checked' : ''}>
            <span class="toggle-slider"></span>
          </label>
        </div>
      </div>

      <div>
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

  document.getElementById('show-duration-diff').addEventListener('change', (e) => {
    statsConfig.showDurationDiff = e.target.checked;
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

  document.getElementById('duration-chart-count').addEventListener('change', (e) => {
    statsConfig.durationChartCount = parseInt(e.target.value);
    saveStatsConfig();
  });

  document.getElementById('show-all-count-analysis').addEventListener('change', (e) => {
    statsConfig.showAllCountAnalysis = e.target.checked;
    saveStatsConfig();
  });

  document.getElementById('all-data-grouping').addEventListener('change', (e) => {
    statsConfig.allDataGrouping = e.target.value;
    saveStatsConfig();
  });

  document.getElementById('calendar-default-collapsed').addEventListener('change', (e) => {
    statsConfig.calendarDefaultCollapsed = e.target.checked;
    saveStatsConfig();
  });

  document.getElementById('sync-time').addEventListener('change', (e) => {
    statsConfig.syncTime = e.target.checked;
    saveStatsConfig();
  });
}

// ── 书架设置 ──
function renderBookshelfSettings() {
  const saveImages = uiConfig.bsSaveImages !== false; // default true
  const savePdf = uiConfig.bsSavePdf === true; // default false
  mainContent.innerHTML = `
    <div class="card">
      <div style="display: flex; align-items: center; margin-bottom: 16px;">
        <button class="btn btn-secondary" id="back-btn" style="margin-right: 12px;">← ${t('back')}</button>
        <h3 class="card-title" style="margin: 0;">📚 ${t('bs_settings')}</h3>
      </div>

      <div style="margin-bottom: 24px;">
        <h4 style="color: var(--text-primary); margin-bottom: 12px; font-size: 16px;">📱 ${t('bookshelf_display')}</h4>
        <div class="form-group">
          <label class="form-label">${t('bookshelf_display')}</label>
          <div style="display: flex; gap: 8px;">
            <button class="btn ${(!uiConfig.bsViewMode || uiConfig.bsViewMode === 'grid') ? 'btn-primary' : 'btn-secondary'}" id="bs-view-grid" style="flex: 1; padding: 10px;">${t('bs_view_grid')}</button>
            <button class="btn ${uiConfig.bsViewMode === 'list' ? 'btn-primary' : 'btn-secondary'}" id="bs-view-list" style="flex: 1; padding: 10px;">${t('bs_view_list')}</button>
          </div>
        </div>
        <div class="form-group" id="bs-columns-group" style="${uiConfig.bsViewMode === 'list' ? 'display:none' : ''}">
          <label class="form-label">${t('bs_columns')}</label>
          <div style="display: flex; gap: 8px;">
            <button class="btn ${(!uiConfig.bsGridCols || uiConfig.bsGridCols === 2) ? 'btn-primary' : 'btn-secondary'}" id="bs-col-2" style="flex: 1; padding: 10px;">2</button>
            <button class="btn ${uiConfig.bsGridCols === 3 ? 'btn-primary' : 'btn-secondary'}" id="bs-col-3" style="flex: 1; padding: 10px;">3</button>
          </div>
        </div>
      </div>

      <div style="margin-bottom: 24px;">
        <h4 style="color: var(--text-primary); margin-bottom: 12px; font-size: 16px;">💾 ${t('bs_download_format')}</h4>

        <div class="settings-item" style="flex-direction:column;align-items:flex-start;gap:4px;">
          <div style="display:flex;align-items:center;justify-content:space-between;width:100%;">
            <span class="settings-label">${t('bs_save_images')}</span>
            <label class="toggle-switch">
              <input type="checkbox" id="bs-save-images" ${saveImages ? 'checked' : ''}>
              <span class="toggle-slider"></span>
            </label>
          </div>
          <p style="font-size:12px;color:var(--text-secondary);margin:0;">${t('bs_save_images_desc')}</p>
        </div>

        <div class="settings-item" style="flex-direction:column;align-items:flex-start;gap:4px;margin-top:12px;">
          <div style="display:flex;align-items:center;justify-content:space-between;width:100%;">
            <span class="settings-label">${t('bs_save_pdf')}</span>
            <label class="toggle-switch">
              <input type="checkbox" id="bs-save-pdf" ${savePdf ? 'checked' : ''}>
              <span class="toggle-slider"></span>
            </label>
          </div>
          <p style="font-size:12px;color:var(--text-secondary);margin:0;">${t('bs_save_pdf_desc')}</p>
        </div>
      </div>
    </div>
  `;

  document.getElementById('back-btn').addEventListener('click', () => {
    settingsSubPage = null;
    renderSettingsTab();
  });

  document.getElementById('bs-view-grid').addEventListener('click', () => {
    uiConfig.bsViewMode = 'grid'; saveUIConfig(); renderBookshelfSettings();
  });
  document.getElementById('bs-view-list').addEventListener('click', () => {
    uiConfig.bsViewMode = 'list'; saveUIConfig(); renderBookshelfSettings();
  });
  document.getElementById('bs-col-2').addEventListener('click', () => {
    uiConfig.bsGridCols = 2; saveUIConfig(); renderBookshelfSettings();
  });
  document.getElementById('bs-col-3').addEventListener('click', () => {
    uiConfig.bsGridCols = 3; saveUIConfig(); renderBookshelfSettings();
  });

  document.getElementById('bs-save-images').addEventListener('change', (e) => {
    uiConfig.bsSaveImages = e.target.checked;
    saveUIConfig();
  });
  document.getElementById('bs-save-pdf').addEventListener('change', (e) => {
    uiConfig.bsSavePdf = e.target.checked;
    saveUIConfig();
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
          <span style="color: var(--primary-color); font-weight: 700;">1.0</span>
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
            <h5 style="color: var(--primary-color); margin-bottom: 8px; font-size: 15px;">${t('cl_v100_title')}</h5>
            <ul style="color: var(--text-secondary); margin: 0; padding-left: 20px; font-size: 14px;">
              <li>${t('cl_v100_1')}</li>
              <li>${t('cl_v100_2')}</li>
              <li>${t('cl_v100_3')}</li>
              <li>${t('cl_v100_4')}</li>
              <li>${t('cl_v100_5')}</li>
              <li>${t('cl_v100_6')}</li>
            </ul>
          </div>
          <div style="margin-bottom: 24px; padding-bottom: 16px; border-bottom: 1px solid var(--border-color);">
            <h5 style="color: var(--text-color); margin-bottom: 8px; font-size: 15px;">${t('cl_v0918_title')}</h5>
            <ul style="color: var(--text-secondary); margin: 0; padding-left: 20px; font-size: 14px;">
              <li>${t('cl_v0918_1')}</li>
              <li>${t('cl_v0918_2')}</li>
            </ul>
          </div>
          <div style="margin-bottom: 24px; padding-bottom: 16px; border-bottom: 1px solid var(--border-color);">
            <h5 style="color: var(--text-color); margin-bottom: 8px; font-size: 15px;">${t('cl_v0917_title')}</h5>
            <ul style="color: var(--text-secondary); margin: 0; padding-left: 20px; font-size: 14px;">
              <li>${t('cl_v0917_1')}</li>
              <li>${t('cl_v0917_5')}</li>
            </ul>
          </div>
        </div>
      </div>

      <div style="margin-bottom: 0;">
        <h4 style="color: var(--text-color); margin-bottom: 12px; font-size: 16px;">🙏 ${t('credits_title')}</h4>
        <div style="padding: 12px 16px; background: var(--border-color); border-radius: 10px; line-height: 1.6; color: var(--text-secondary); font-size: 14px;">
          ${t('credits_acheron')}
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
      <h4 style="color: var(--text-secondary); margin-bottom: 8px;">📥 导入方式</h4>
      <button class="btn btn-secondary" id="file-import-btn" style="width: 100%; margin-bottom: 8px;">📁 ${t('import_data')} (文件)</button>
      <div style="margin-bottom: 16px;">
        <h5 style="color: var(--text-secondary); margin-bottom: 8px;">粘贴导入</h5>
        <textarea id="paste-import-input" style="width: 100%; height: 150px; padding: 12px; border: 2px solid var(--border-color); border-radius: 12px; font-size: 14px; resize: none; overflow-y: auto; font-family: monospace;"></textarea>
        <button class="btn btn-primary" id="paste-import-btn" style="width: 100%; margin-top: 8px;">${t('confirm')}</button>
      </div>
      
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
        <div style="display: flex; gap: 8px; margin-bottom: 12px;">
          <button class="btn btn-secondary" id="export-records-clipboard" style="flex: 1;">📋 复制到剪贴板</button>
          <button class="btn btn-primary" id="export-records-excel" style="flex: 1;">${t('export_excel')}</button>
        </div>
      </div>
      
      <div style="margin-top: 24px;">
        <button class="btn btn-primary" id="receive-data-btn" style="width: 100%;">📥 ${t('receive_data')}</button>
      </div>
      <input type="file" id="import-file" accept=".json,.csv,.xlsx" style="display: none;">
    `;
  } else {
    dataManagementHTML = `
      <h4 style="color: var(--text-secondary); margin-bottom: 8px;">📥 导入方式</h4>
      <button class="btn btn-secondary" id="file-import-btn" style="width: 100%; margin-bottom: 8px;">📁 ${t('import_data')} (文件)</button>
      <div style="margin-bottom: 16px;">
        <h5 style="color: var(--text-secondary); margin-bottom: 8px;">粘贴导入</h5>
        <textarea id="paste-import-input" style="width: 100%; height: 150px; padding: 12px; border: 2px solid var(--border-color); border-radius: 12px; font-size: 14px; resize: none; overflow-y: auto; font-family: monospace;"></textarea>
        <button class="btn btn-primary" id="paste-import-btn" style="width: 100%; margin-top: 8px;">${t('confirm')}</button>
      </div>

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
        <div style="display: flex; gap: 8px; margin-bottom: 12px;">
          <button class="btn btn-secondary" id="export-records-clipboard" style="flex: 1;">📋 复制到剪贴板</button>
          <button class="btn btn-primary" id="export-records-excel" style="flex: 1;">${t('export_excel')}</button>
        </div>
      </div>

      <details style="margin-top: 16px; border: 1px solid var(--border-color); border-radius: 12px; padding: 12px;">
        <summary style="cursor: pointer; color: var(--text-secondary); font-size: 14px; font-weight: 600;">📋 ${t('split_share')}（剪贴板备用方案）</summary>
        <div style="margin-top: 12px;">
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
            <button class="btn btn-secondary" id="confirm-split-btn" style="width: 100%;">${t('confirm')}</button>
          </div>
          <div id="split-buttons-container"></div>
          <p style="color: var(--text-secondary); font-size: 12px; line-height: 1.6; margin-top: 12px;">
            <strong>说明：</strong>如果文件导出不工作，可以使用此功能将数据复制到剪贴板，手动粘贴保存。
          </p>
        </div>
      </details>

      <input type="file" id="import-file" accept=".json,.csv,.xlsx" style="display: none;">
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

  // 通用事件监听器
  document.getElementById('export-settings-copy').addEventListener('click', copySettingsToClipboard);
  
  // 文件导入按钮点击事件
  if (document.getElementById('file-import-btn')) {
    document.getElementById('file-import-btn').addEventListener('click', () => {
      document.getElementById('import-file').click();
    });
  }
  
  // 粘贴导入按钮点击事件
  if (document.getElementById('paste-import-btn')) {
    document.getElementById('paste-import-btn').addEventListener('click', () => {
      const pasteInput = document.getElementById('paste-import-input');
      const text = pasteInput.value.trim();
      
      if (!text) {
        alert('请先在文本框中粘贴数据');
        return;
      }
      
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
          pasteInput.value = '';
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
                  pasteInput.value = '';
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
                pasteInput.value = '';
                renderCurrentTab();
              } else {
                alert(`已收集 ${receivedCount}/${totalNeeded} 部分数据，请继续导入剩余部分`);
                pasteInput.value = '';
              }
            } else {
              if (!confirm(t('import_confirm'))) {
                pasteInput.value = '';
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
              pasteInput.value = '';
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
                pasteInput.value = '';
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
              pasteInput.value = '';
              renderCurrentTab();
            } else {
              alert(`已收集 ${receivedCount}/${totalNeeded} 部分数据，请继续导入剩余部分`);
              pasteInput.value = '';
            }
          }
        } else if (data.records && Array.isArray(data.records)) {
          if (!confirm(t('import_confirm'))) {
            pasteInput.value = '';
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
          pasteInput.value = '';
          renderCurrentTab();
        } else {
          alert(t('invalid_file'));
          pasteInput.value = '';
        }
      } catch (error) {
        alert(t('invalid_file'));
        pasteInput.value = '';
      }
    });
  }
  
  // 记录导出相关事件
  if (document.getElementById('export-records-json')) {
    document.getElementById('export-records-json').addEventListener('click', () => exportRecords('json'));
  }
  if (document.getElementById('export-records-csv')) {
    document.getElementById('export-records-csv').addEventListener('click', () => exportRecords('csv'));
  }
  if (document.getElementById('export-records-excel')) {
    document.getElementById('export-records-excel').addEventListener('click', () => exportRecords('excel'));
  }
  if (document.getElementById('export-records-clipboard')) {
    document.getElementById('export-records-clipboard').addEventListener('click', exportRecordsToClipboard);
  }
  if (document.getElementById('receive-data-btn')) {
    document.getElementById('receive-data-btn').addEventListener('click', receiveDataFromMobile);
  }
  
  // 分割分享相关事件
  if (document.getElementById('confirm-split-btn')) {
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
    
    document.getElementById('confirm-split-btn').addEventListener('click', () => {
      const select = document.getElementById('split-count-select');
      const value = parseInt(select.value) || 1;
      currentSplitCount = Math.max(1, Math.min(10, value));
      select.value = currentSplitCount;
      renderSplitButtons();
    });
    
    renderSplitButtons();
  }
  
  // 日期范围相关事件
  const dateFrom = document.getElementById('date-from');
  const dateTo = document.getElementById('date-to');
  
  if (dateFrom && dateTo && records.length > 0) {
    const sortedRecords = [...records].sort((a, b) => new Date(a.startTime) - new Date(b.startTime));
    const firstDate = getLocalDateStr(sortedRecords[0].startTime);
    const lastDate = getLocalDateStr(sortedRecords[sortedRecords.length - 1].startTime);
    dateFrom.value = firstDate;
    dateTo.value = lastDate;
  }
  
  if (document.getElementById('reset-date-btn')) {
    document.getElementById('reset-date-btn').addEventListener('click', () => {
      if (dateFrom && dateTo && records.length > 0) {
        const sortedRecords = [...records].sort((a, b) => new Date(a.startTime) - new Date(b.startTime));
        const firstDate = getLocalDateStr(sortedRecords[0].startTime);
        const lastDate = getLocalDateStr(sortedRecords[sortedRecords.length - 1].startTime);
        dateFrom.value = firstDate;
        dateTo.value = lastDate;
      }
    });
  }
  
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

function exportRecordsToClipboard() {
  const dateFrom = document.getElementById('date-from')?.value;
  const dateTo = document.getElementById('date-to')?.value;
  
  const data = getExportData(dateFrom, dateTo);
  const dataStr = JSON.stringify(data);
  
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

// CSV 字段转义：双引号包裹字段，内部双引号转为两个双引号
function escapeCSV(value) {
  const str = String(value == null ? '' : value);
  if (str.includes(',') || str.includes('"') || str.includes('\n') || str.includes('\r')) {
    return '"' + str.replace(/"/g, '""') + '"';
  }
  return str;
}

// 解析 CSV 文本为记录数组（含性癖/备注等完整字段）
function parseCSV(text) {
  const lines = text.replace(/\r\n/g, '\n').replace(/\r/g, '\n').split('\n').filter(l => l.trim());
  if (lines.length < 2) return [];

  // 解析表头
  const headers = parseCSVLine(lines[0]);

  const records = [];
  for (let i = 1; i < lines.length; i++) {
    const values = parseCSVLine(lines[i]);
    if (values.length === 0) continue;

    const row = {};
    headers.forEach((h, idx) => { row[h] = values[idx] || ''; });

    // 从各列重建记录对象
    const dateStr = row[t('date')] || row['日期'] || row['Date'] || '';
    const timeStr = row[t('start_time')] || row['开始时间'] || row['Start Time'] || '';
    const durationVal = row[t('duration')] || row['时长'] || row['Duration'] || '0';
    const mediumName = row[t('medium')] || row['方式'] || row['Medium'] || '';
    const fetishNames = row[t('fetish')] || row['性癖'] || row['Fetish'] || '';
    const notesVal = row[t('notes')] || row['备注'] || row['Notes'] || '';
    const satisfactionVal = row[t('satisfaction_rating')] || row['满意度'] || row['Satisfaction'] || '';

    // 解析时长：支持 "15:21" (MM:SS)、"2分30秒"、"2m30s"、纯秒数
    let duration = 0;
    const colonMatch = durationVal.match(/^(\d+):(\d+)$/);
    const cnMatch = durationVal.match(/(\d+)分(\d+)秒/);
    const enMatch = durationVal.match(/(\d+)m(\d+)s/);
    if (colonMatch) {
      duration = parseInt(colonMatch[1]) * 60 + parseInt(colonMatch[2]);
    } else if (cnMatch) {
      duration = parseInt(cnMatch[1]) * 60 + parseInt(cnMatch[2]);
    } else if (enMatch) {
      duration = parseInt(enMatch[1]) * 60 + parseInt(enMatch[2]);
    } else {
      duration = parseInt(durationVal) || 0;
    }

    // 解析日期时间
    let startTime = '';
    if (dateStr && timeStr) {
      startTime = new Date(`${dateStr} ${timeStr}`).toISOString();
    } else if (dateStr) {
      startTime = new Date(dateStr).toISOString();
    }

    // 查找或自动创建 medium
    let mediumId = null;
    if (mediumName) {
      const found = media.find(m => m.name === mediumName);
      if (found) {
        mediumId = found.id;
      } else {
        // 自动创建缺失的媒介
        const newId = media.length > 0 ? Math.max(...media.map(m => m.id)) + 1 : 1;
        media.push({ id: newId, name: mediumName });
        mediaCache[newId] = mediumName;
        mediumId = newId;
      }
    }

    // 查找或自动创建 fetishes
    let fetishIds = [];
    if (fetishNames) {
      const names = fetishNames.split(',').map(s => s.trim()).filter(Boolean);
      names.forEach(name => {
        const found = fetishes.find(f => f.name === name);
        if (found) {
          fetishIds.push(found.id);
        } else {
          // 自动创建缺失的性癖
          const newId = fetishes.length > 0 ? Math.max(...fetishes.map(f => f.id)) + 1 : 1;
          fetishes.push({ id: newId, name: name });
          fetishCache[newId] = name;
          fetishIds.push(newId);
        }
      });
    }

    const record = {
      id: Date.now() + i,
      startTime: startTime,
      duration: duration,
      medium: mediumId,
      fetishes: fetishIds,
      notes: notesVal || undefined,
      satisfaction: satisfactionVal ? parseInt(satisfactionVal) : undefined
    };
    records.push(record);
  }
  return records;
}

// 解析单行 CSV，正确处理引号内的逗号和转义双引号
function parseCSVLine(line) {
  const result = [];
  let current = '';
  let inQuotes = false;
  let i = 0;
  while (i < line.length) {
    const ch = line[i];
    if (inQuotes) {
      if (ch === '"') {
        if (i + 1 < line.length && line[i + 1] === '"') {
          current += '"';
          i += 2;
        } else {
          inQuotes = false;
          i++;
        }
      } else {
        current += ch;
        i++;
      }
    } else {
      if (ch === '"') {
        inQuotes = true;
        i++;
      } else if (ch === ',') {
        result.push(current);
        current = '';
        i++;
      } else {
        current += ch;
        i++;
      }
    }
  }
  result.push(current);
  return result;
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
    const headers = [t('id'), t('date'), t('start_time'), t('duration'), t('medium'), t('fetish'), t('notes'), t('satisfaction_rating')];
    let csvContent = headers.map(escapeCSV).join(',') + '\n';

    records.forEach((record, index) => {
      const fetishLabels = getFetishesLabels(record.fetishes) || getFetishLabel(record.fetish) || '';
      const row = [
        index + 1,
        new Date(record.startTime).toLocaleDateString(),
        new Date(record.startTime).toLocaleTimeString(),
        formatDuration(record.duration),
        getMediumLabel(record.medium),
        fetishLabels,
        record.notes || '',
        record.satisfaction != null ? record.satisfaction : ''
      ];
      csvContent += row.map(escapeCSV).join(',') + '\n';
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
    if (!isCapacitor()) alert(t('export_success'));
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
    if (!isCapacitor()) alert(t('export_success'));
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
    const headers = [t('id'), t('date'), t('start_time'), t('duration'), t('medium'), t('fetish'), t('notes'), t('satisfaction_rating')];
    let csvContent = headers.map(escapeCSV).join(',') + '\n';

    filteredRecords.forEach((record, index) => {
      const fetishLabels = getFetishesLabels(record.fetishes) || getFetishLabel(record.fetish) || '';
      const row = [
        index + 1,
        new Date(record.startTime).toLocaleDateString(),
        new Date(record.startTime).toLocaleTimeString(),
        formatDuration(record.duration),
        getMediumLabel(record.medium),
        fetishLabels,
        record.notes || '',
        record.satisfaction != null ? record.satisfaction : ''
      ];
      csvContent += row.map(escapeCSV).join(',') + '\n';
    });

    data = {
      blob: new Blob(['\ufeff' + csvContent], { type: 'text/csv;charset=utf-8;' }),
      ext: 'csv',
      mimeType: 'text/csv'
    };
  }
  
  if (data) {
    downloadFile(data.blob, `selfcare-records-${dateStr}.${data.ext}`);
    if (!isCapacitor()) alert(t('export_success'));
  }
}

function blobToBase64(blob) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onloadend = () => resolve(reader.result.split(',')[1]);
    reader.onerror = reject;
    reader.readAsDataURL(blob);
  });
}

async function downloadFile(blob, filename) {
  if (isCapacitor()) {
    try {
      const base64Data = await blobToBase64(blob);
      const mimeType = blob.type || 'application/octet-stream';
      const result = window.FileHelper.saveFile(base64Data, filename, mimeType);
      if (result === 'OK') {
        alert(t('export_success') + '\n\n📁 已保存到下载文件夹: ' + filename);
      } else {
        throw new Error(result);
      }
    } catch (e) {
      console.error('Native save failed, falling back to clipboard:', e);
      try {
        const text = await blob.text();
        await navigator.clipboard.writeText(text);
        alert('文件保存失败，已复制到剪贴板\n请手动粘贴保存');
      } catch {
        prompt('请手动复制数据:', await blob.text());
      }
    }
  } else {
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = filename;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  }
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
      const text = event.target.result;

      // CSV 文件导入
      const isCSV = file.name.endsWith('.csv') || (!text.trim().startsWith('{') && !text.trim().startsWith('['));
      if (isCSV) {
        const importedRecords = parseCSV(text);
        if (importedRecords.length === 0) {
          alert(t('invalid_file') + '（CSV 无有效记录）');
          if (e) e.target.value = '';
          return;
        }
        if (!confirm(`检测到 ${importedRecords.length} 条记录，确认导入？`)) {
          if (e) e.target.value = '';
          return;
        }
        // 合并记录，去重
        const existingRecords = [...records];
        const mergedRecords = [...existingRecords, ...importedRecords];
        const seenIds = new Set();
        const uniqueRecords = mergedRecords.filter(record => {
          if (seenIds.has(record.id)) return false;
          seenIds.add(record.id);
          return true;
        });
        uniqueRecords.sort((a, b) => new Date(b.startTime) - new Date(a.startTime));
        localStorage.setItem('records', JSON.stringify(uniqueRecords));
        records = uniqueRecords;
        saveMedia();
        saveFetishes();
        updateMediaCache();
        updateFetishCache();
        alert(t('import_success') + `\n\n导入 ${importedRecords.length} 条记录`);
        renderCurrentTab();
        if (e) e.target.value = '';
        return;
      }

      // JSON 文件导入
      const data = JSON.parse(text);

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

// ──────────────────────────────────────────────
//  JMComic 漫画下载器（纯 JS 实现）
// ──────────────────────────────────────────────

// JMComic API 配置
const JM_API_DOMAINS = [
  'www.cdnhjk.net',
  'www.cdngwc.cc',
  'www.cdngwc.net',
  'www.cdngwc.club',
  'www.cdnutc.me',
];
const JM_CDN_DOMAINS = [
  'cdn-msp.jmapiproxy1.cc',
  'cdn-msp.jmapiproxy2.cc',
  'cdn-msp2.jmapiproxy2.cc',
  'cdn-msp3.jmapiproxy2.cc',
  'cdn-msp.jmapinodeudzn.net',
  'cdn-msp3.jmapinodeudzn.net',
];
const JM_APP_VERSION = '2.0.26';
const JM_TOKEN_SECRET = '185Hcomic3PAPP7R';
const JM_TOKEN_SECRET_2 = '18comicAPPContent';
const JM_DATA_SECRET = '185Hcomic3PAPP7R';

// 检测是否需要本地服务器代理（Web 需要，Capacitor 不需要）
function jmNeedProxy() {
  // Capacitor 环境下 hostname 也是 localhost，必须优先判断
  if (window.Capacitor && window.Capacitor.isNativePlatform && window.Capacitor.isNativePlatform()) return false;
  if (window.Capacitor && window.Capacitor.isNative) return false;
  return location.protocol === 'file:' || location.hostname === 'localhost' || location.hostname === '127.0.0.1';
}

function jmProxyBase() {
  return `${location.protocol}//${location.hostname}:3001`;
}

// MD5
function jmMd5(str) {
  return CryptoJS.MD5(str).toString(CryptoJS.enc.Hex);
}

// 生成 token 头
function jmMakeToken(ts, secret) {
  secret = secret || JM_TOKEN_SECRET;
  return {
    token: jmMd5(ts + secret),
    tokenparam: `${ts},${JM_APP_VERSION}`,
  };
}

// AES-ECB 解密 API 响应数据
function jmDecryptData(encodedData, ts) {
  const key = CryptoJS.enc.Utf8.parse(jmMd5(ts + JM_DATA_SECRET));
  const decrypted = CryptoJS.AES.decrypt(encodedData, key, {
    mode: CryptoJS.mode.ECB,
    padding: CryptoJS.pad.Pkcs7,
  });
  return JSON.parse(decrypted.toString(CryptoJS.enc.Utf8));
}

// 通过代理调用 JMComic API
async function jmApiRequest(apiPath, params) {
  await ensureJMComicDeps();
  const ts = Math.floor(Date.now() / 1000).toString();
  const isScramble = apiPath.includes('chapter_view_template');
  const headers = jmMakeToken(ts, isScramble ? JM_TOKEN_SECRET_2 : undefined);

  const qs = new URLSearchParams(params).toString();
  const path = `/${apiPath.replace(/^\//, '')}${qs ? '?' + qs : ''}`;

  let lastErr;
  for (const domain of JM_API_DOMAINS) {
    const fullUrl = `https://${domain}${path}`;
    try {
      let respData;
      if (jmNeedProxy()) {
        // 通过 Node.js 服务器代理
        const proxyUrl = `${jmProxyBase()}/api/jm/proxy`;
        console.log('[JM] 请求代理:', proxyUrl, '→', fullUrl);
        const resp = await fetch(proxyUrl, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ url: fullUrl, headers }),
        });
        console.log('[JM] 代理响应 status:', resp.status, 'type:', resp.headers.get('content-type'));
        const text = await resp.text();
        console.log('[JM] 代理响应前100字符:', text.substring(0, 100));
        // 检查是否返回了 HTML（服务器未就绪或路由错误）
        if (text.startsWith('<') || text.startsWith('<!')) {
          throw new Error('服务器返回了 HTML 而非 JSON，请确认服务器已启动');
        }
        const result = JSON.parse(text);
        if (result.error) throw new Error(result.error);
        respData = typeof result.data === 'string' ? JSON.parse(result.data) : result.data;
      } else {
        // 直接请求（Capacitor 环境）
        const resp = await fetch(fullUrl, {
          headers: {
            'Accept-Encoding': 'gzip, deflate',
            'User-Agent': 'Mozilla/5.0 (Linux; Android 9) AppleWebKit/537.36',
            'X-Requested-With': 'com.JMComic3.app',
            ...headers,
          },
        });
        respData = await resp.json();
      }

      if (respData.code === 200) {
        return { json: respData, ts, domain };
      }
      if (respData.redirect_aid) {
        return { json: respData, ts, domain, redirect: respData.redirect_aid };
      }
      throw new Error(respData.errorMsg || `API code: ${respData.code}`);
    } catch (e) {
      lastErr = e;
      continue;
    }
  }
  throw lastErr || new Error('所有 API 域名均不可用');
}

// 获取漫画信息
async function jmGetAlbum(albumId) {
  const { json, ts } = await jmApiRequest('/album', { id: albumId });
  const data = jmDecryptData(json.data, ts);

  let chapters = [];
  if (data.series && data.series.length > 0) {
    chapters = data.series.map(ch => ({
      id: String(ch.id),
      title: ch.name || `章节 ${ch.sort}`,
      sort: parseInt(ch.sort) || 0,
    }));
    chapters.sort((a, b) => a.sort - b.sort);
  } else {
    chapters.push({ id: String(data.id), title: data.name || '完整版', sort: 1 });
  }

  return {
    id: String(data.id || albumId),
    title: data.name || `JM${albumId}`,
    author: (data.author || []).join(', '),
    tags: data.tags || [],
    chapters,
  };
}

// 获取章节图片列表 + scramble_id
async function jmGetChapter(photoId) {
  const { json, ts } = await jmApiRequest('/chapter', { id: photoId });
  const data = jmDecryptData(json.data, ts);

  const images = data.images || [];
  const albumId = data.series_id || photoId;

  // 获取 scramble_id（从 HTML 中提取，失败则不反混淆）
  let scrambleId = '999999';
  try {
    const ts2 = Math.floor(Date.now() / 1000).toString();
    const tokenHeaders = jmMakeToken(ts2, JM_TOKEN_SECRET_2);
    const scrambleUrl = `https://${JM_API_DOMAINS[0]}/chapter_view_template?id=${photoId}&mode=vertical&page=0&app_img_shunt=1&express=off&v=${ts2}`;
    let html = '';
    if (jmNeedProxy()) {
      const resp = await fetch(`${jmProxyBase()}/api/jm/proxy`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ url: scrambleUrl, headers: tokenHeaders }),
      });
      const result = await resp.json();
      html = result.data || '';
    } else {
      // Capacitor 环境：直接请求
      const resp = await fetch(scrambleUrl, {
        headers: {
          'Accept-Encoding': 'gzip, deflate',
          'User-Agent': 'Mozilla/5.0 (Linux; Android 9) AppleWebKit/537.36',
          'X-Requested-With': 'com.JMComic3.app',
          ...tokenHeaders,
        },
      });
      html = await resp.text();
    }
    const m = html.match(/var scramble_id\s*=\s*(\d+)\s*;/);
    if (m) {
      scrambleId = m[1];
      console.log('[JM] scramble_id:', scrambleId);
    }
  } catch (e) {
    console.log('[JM] 获取 scramble_id 失败，跳过反混淆:', e.message);
  }

  return { images, scrambleId, albumId };
}

// 下载章节图片 → 反混淆 → 生成 PDF
async function jmDownloadChapter(albumId, title, progressCb) {
  // 1. 获取章节信息
  progressCb(10, '正在获取章节信息...');
  const { json, ts } = await jmApiRequest('/album', { id: albumId });
  const albumData = jmDecryptData(json.data, ts);

  // 收集所有章节
  const photoIds = [];
  if (albumData.series && albumData.series.length > 0) {
    albumData.series.forEach(ch => photoIds.push(String(ch.id)));
  } else {
    photoIds.push(String(albumId));
  }

  // 2. 并发下载所有章节的图片（最多 3 个章节同时）
  const allImages = [];
  const CONCURRENT_CHAPTERS = 3;
  for (let pi = 0; pi < photoIds.length; pi += CONCURRENT_CHAPTERS) {
    const batch = photoIds.slice(pi, pi + CONCURRENT_CHAPTERS);
    progressCb(10 + (pi / photoIds.length) * 30, `正在获取章节 ${pi + 1}~${Math.min(pi + CONCURRENT_CHAPTERS, photoIds.length)}/${photoIds.length}...`);
    const results = await Promise.all(batch.map(async pid => {
      try { return { pid, chapter: await jmGetChapter(pid) }; }
      catch (e) { console.log(`[JM] 章节 ${pid} 失败:`, e.message); return null; }
    }));
    for (const item of results) {
      if (!item) continue;
      const { pid, chapter } = item;
      const cdnDomain = JM_CDN_DOMAINS[Math.floor(Math.random() * JM_CDN_DOMAINS.length)];
      chapter.images.forEach(imgName => {
        allImages.push({
          url: `https://${cdnDomain}/media/photos/${pid}/${imgName}`,
          filename: imgName,
          photoId: pid,
        });
      });
      allImages._scrambleId = chapter.scrambleId;
      allImages._albumId = chapter.albumId;
    }
  }

  if (allImages.length === 0) throw new Error('未找到图片');

  // 3. 下载图片
  let downloadedImages = [];

  if (jmNeedProxy()) {
    // 一次性下载 + SSE 实时进度
    progressCb(40, `正在下载 ${allImages.length} 张图片...`);
    const resp = await fetch(`${jmProxyBase()}/api/jm/images?stream=1`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        images: allImages,
        scrambleId: allImages._scrambleId || '999999',
        albumId: allImages._albumId || albumId,
      }),
    });

    // 读取 SSE 流
    const reader = resp.body.getReader();
    const decoder = new TextDecoder();
    let buffer = '';
    while (true) {
      const { done, value } = await reader.read();
      if (done) break;
      buffer += decoder.decode(value, { stream: true });
      const lines = buffer.split('\n');
      buffer = lines.pop(); // 保留不完整的行
      for (const line of lines) {
        if (!line.startsWith('data: ')) continue;
        try {
          const evt = JSON.parse(line.slice(6));
          if (evt.finished) {
            downloadedImages = evt.images || [];
          } else {
            const pct = 40 + Math.floor((evt.done / evt.total) * 40);
            progressCb(pct, `下载中 ${evt.done}/${evt.total}...`);
          }
        } catch (e) {}
      }
    }
  } else {
    // Capacitor 环境：并发下载 + Canvas 反混淆（最多 5 路）
    const scrambleId = allImages._scrambleId || '999999';
    const CONCURRENT_IMAGES = 5;
    downloadedImages = new Array(allImages.length);
    let done = 0;
    for (let i = 0; i < allImages.length; i += CONCURRENT_IMAGES) {
      const batch = allImages.slice(i, i + CONCURRENT_IMAGES);
      const results = await Promise.all(batch.map(async (img, j) => {
        try {
          const resp = await fetch(img.url, {
            headers: { 'X-Requested-With': 'com.JMComic3.app', Referer: 'https://www.cdnhjk.net/' },
          });
          let blob = await resp.blob();
          const nameNoExt = img.filename.replace(/\.\w+$/, '');
          const num = jmGetScrambleNum(scrambleId, img.photoId, nameNoExt);
          if (num > 0) blob = await jmDescrambleCanvas(blob, num);
          return await blobToBase64(blob);
        } catch (e) { console.log('[JM] 图片下载失败:', e.message); return null; }
      }));
      results.forEach((b64, j) => { if (b64) downloadedImages[i + j] = b64; });
      done += batch.length;
      progressCb(40 + Math.floor((done / allImages.length) * 40), `下载中 ${done}/${allImages.length}...`);
    }
    downloadedImages = downloadedImages.filter(Boolean);
  }

  if (downloadedImages.length === 0) throw new Error('图片下载失败');
  progressCb(80, '正在生成 PDF...');

  // 检查下载格式偏好
  const saveImages = uiConfig.bsSaveImages !== false;
  const savePdf = uiConfig.bsSavePdf === true;

  // 生成 PDF（客户端 PDFLib，不区分平台）
  let pdfBlob = null;
  if (savePdf) {
    progressCb(80, '正在生成 PDF...');
    try {
      if (!window.PDFLib) await ensureJMComicDeps();
      if (!window.PDFLib) throw new Error('PDFLib 加载失败');
      const pdfDoc = await PDFLib.PDFDocument.create();
      for (let i = 0; i < downloadedImages.length; i++) {
        try {
          const imgBytes = Uint8Array.from(atob(downloadedImages[i]), c => c.charCodeAt(0));
          const img = await pdfDoc.embedJpg(imgBytes);
          const page = pdfDoc.addPage([img.width, img.height]);
          page.drawImage(img, { x: 0, y: 0, width: img.width, height: img.height });
        } catch (e) { console.log('[JM] PDF 页面跳过:', e.message); }
        if (i % 10 === 0) progressCb(80 + Math.floor((i / downloadedImages.length) * 15), `生成 PDF ${i + 1}/${downloadedImages.length}...`);
      }
      const pdfBytes = await pdfDoc.save();
      pdfBlob = new Blob([pdfBytes], { type: 'application/pdf' });
    } catch (e) {
      console.log('[JM] PDF 生成失败:', e.message);
    }
  }

  // 手机端保存 PDF 文件到本地
  let localPdfName = null;
  if (pdfBlob && !jmNeedProxy() && window.FileHelper) {
    try {
      const b64 = await blobToBase64(pdfBlob);
      const safeName = (title || 'JMComic').replace(/[\/\\:*?"<>|]/g, '_').substring(0, 60) + '.pdf';
      window.FileHelper.saveFile(b64, safeName, 'application/pdf');
      localPdfName = safeName;
    } catch (e) { console.log('[JM] PDF 保存到本地失败:', e.message); }
  }

  progressCb(100, '下载完成');
  // pdf 模式不存图片，read 模式不存 PDF，both 模式都存
  return {
    pdfBlob: savePdf ? pdfBlob : null,
    pages: saveImages ? downloadedImages : null,
    localPdfName,
  };
}

function blobToBase64(blob) {
  return new Promise((resolve) => {
    const reader = new FileReader();
    reader.onload = () => resolve(reader.result.split(',')[1]);
    reader.readAsDataURL(blob);
  });
}

// 获取封面图（第一章第一张图）
async function jmFetchCover(albumId) {
  try {
    const albumData = await jmGetAlbum(albumId);
    const firstChapterId = albumData.chapters?.[0]?.id || albumId;
    const chapter = await jmGetChapter(firstChapterId);
    if (!chapter.images || chapter.images.length === 0) return null;

    const firstImg = chapter.images[0];
    const cdnDomain = JM_CDN_DOMAINS[Math.floor(Math.random() * JM_CDN_DOMAINS.length)];
    const imgUrl = `https://${cdnDomain}/media/photos/${firstChapterId}/${firstImg}`;

    if (jmNeedProxy()) {
      const resp = await fetch(`${jmProxyBase()}/api/jm/images`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          images: [{ url: imgUrl, filename: firstImg, photoId: firstChapterId }],
          scrambleId: chapter.scrambleId || '999999',
          albumId: chapter.albumId || albumId,
        }),
      });
      const result = await resp.json();
      if (result.images && result.images.length > 0) {
        const b64 = result.images[0];
        const bytes = Uint8Array.from(atob(b64), c => c.charCodeAt(0));
        return new Blob([bytes], { type: 'image/jpeg' });
      }
    } else {
      const resp = await fetch(imgUrl, {
        headers: { 'X-Requested-With': 'com.JMComic3.app', Referer: 'https://www.cdnhjk.net/' },
      });
      let blob = await resp.blob();
      const nameNoExt = firstImg.replace(/\.\w+$/, '');
      const num = jmGetScrambleNum(chapter.scrambleId || '999999', firstChapterId, nameNoExt);
      if (num > 0) blob = await jmDescrambleCanvas(blob, num);
      return blob;
    }
  } catch (e) {
    console.log('[JM] 获取封面失败:', e.message);
  }
  return null;
}

// 计算反混淆分割数（与 Python 完全一致）
function jmGetScrambleNum(scrambleId, aid, filename) {
  scrambleId = parseInt(scrambleId);
  aid = parseInt(aid);
  if (aid < scrambleId) return 0;
  if (aid < 268850) return 10;
  const x = aid < 421926 ? 10 : 8;
  const s = jmMd5(aid + filename);
  return (s.charCodeAt(s.length - 1) % x) * 2 + 2;
}

// Canvas 反混淆（手机端使用）
async function jmDescrambleCanvas(blob, num) {
  const img = await createImageBitmap(blob);
  const canvas = document.createElement('canvas');
  canvas.width = img.width;
  canvas.height = img.height;
  const ctx = canvas.getContext('2d');
  ctx.fillStyle = '#ffffff';
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  const over = img.height % num;
  for (let i = 0; i < num; i++) {
    const move = Math.floor(img.height / num);
    let ySrc = img.height - (move * (i + 1)) - over;
    let yDst = move * i;
    let sliceH = move;
    if (i === 0) sliceH += over; else yDst += over;
    ctx.drawImage(img, 0, ySrc, img.width, sliceH, 0, yDst, img.width, sliceH);
  }

  return new Promise(resolve => canvas.toBlob(resolve, 'image/jpeg', 0.9));
}

function parseJMCode(input) {
  const match = input.trim().match(/(?:JM\s*[-]?\s*)?(\d+)/i);
  return match ? match[1] : null;
}

// ──────────────────────────────────────────────
//  JMComic 书架 IndexedDB 持久化
// ──────────────────────────────────────────────

let _jmDb = null;
function jmDbOpen() {
  return new Promise((resolve, reject) => {
    if (_jmDb) { resolve(_jmDb); return; }
    const req = indexedDB.open('jm_comics', 1);
    req.onupgradeneeded = (e) => {
      const db = e.target.result;
      if (!db.objectStoreNames.contains('comics')) {
        db.createObjectStore('comics', { keyPath: 'albumId' });
      }
    };
    req.onsuccess = (e) => { _jmDb = e.target.result; resolve(_jmDb); };
    req.onerror = (e) => reject(e.target.error);
  });
}

async function jmDbSave(comic) {
  const db = await jmDbOpen();
  return new Promise((resolve, reject) => {
    const tx = db.transaction('comics', 'readwrite');
    tx.objectStore('comics').put(comic);
    tx.oncomplete = () => resolve();
    tx.onerror = (e) => reject(e.target.error);
  });
}

async function jmDbList() {
  const db = await jmDbOpen();
  return new Promise((resolve, reject) => {
    const tx = db.transaction('comics', 'readonly');
    const req = tx.objectStore('comics').getAll();
    req.onsuccess = () => resolve(req.result || []);
    req.onerror = (e) => reject(e.target.error);
  });
}

async function jmDbGet(albumId) {
  const db = await jmDbOpen();
  return new Promise((resolve, reject) => {
    const tx = db.transaction('comics', 'readonly');
    const req = tx.objectStore('comics').get(albumId);
    req.onsuccess = () => resolve(req.result || null);
    req.onerror = (e) => reject(e.target.error);
  });
}

async function jmDbDelete(albumId) {
  // 清理手机端本地 PDF 文件
  try {
    const comic = await jmDbGet(albumId);
    if (comic && comic.localPdfName && window.FileHelper) {
      window.FileHelper.deleteFile(comic.localPdfName);
    }
  } catch (e) { console.log('[JM] 清理本地文件失败:', e.message); }

  const db = await jmDbOpen();
  return new Promise((resolve, reject) => {
    const tx = db.transaction('comics', 'readwrite');
    tx.objectStore('comics').delete(albumId);
    tx.oncomplete = () => resolve();
    tx.onerror = (e) => reject(e.target.error);
  });
}

async function jmDbToggleFav(albumId) {
  const comic = await jmDbGet(albumId);
  if (!comic) return;
  comic.favorite = !comic.favorite;
  await jmDbSave(comic);
  return comic.favorite;
}

async function jmDbUpdateTags(albumId, tags) {
  const comic = await jmDbGet(albumId);
  if (!comic) return;
  comic.jmTags = tags;
  await jmDbSave(comic);
}

// 书架状态
let bookshelfSubPage = null; // null=主页, 'search'=搜索, 'reader'=阅读器, 'downloads'=下载管理
let bookshelfFilter = { type: 'all' }; // {type:'all'|'favorite'|'tag', tag?:string}
let bookshelfSelectMode = false;
let bookshelfSelected = new Set();
let jmDownloadingMap = {}; // {albumId: {code, title, progress, status, paused, cancelFlag}}
let batchAbortFlag = { cancelled: false, paused: false };

// ── 下载管理浮窗入口（右下角小按钮，点击进入下载页面）──
function updateDownloadPanel() {
  let btn = document.getElementById('jm-dl-fab');
  const entries = Object.entries(jmDownloadingMap);
  const hasActive = entries.length > 0;

  if (!hasActive) {
    if (btn) btn.remove();
    return;
  }

  if (!btn) {
    btn = document.createElement('div');
    btn.id = 'jm-dl-fab';
    btn.style.cssText = `
      position:fixed;bottom:80px;right:14px;z-index:200;
      width:50px;height:50px;border-radius:50%;
      background:var(--accent-color,#6366f1);color:#fff;
      display:flex;flex-direction:column;align-items:center;justify-content:center;
      font-size:11px;font-weight:700;cursor:pointer;
      box-shadow:0 3px 12px rgba(99,102,241,0.4);
      transition:transform 0.2s;
    `;
    btn.addEventListener('click', () => {
      bookshelfSubPage = 'downloads';
      renderBookshelfTab();
    });
    document.body.appendChild(btn);
  }

  const totalPct = entries.reduce((s, [, v]) => s + (v.progress || 0), 0) / entries.length;
  btn.innerHTML = `<span style="font-size:18px;">📥</span><span>${Math.round(totalPct)}%</span>`;

  // 如果当前在下载管理页面，同步刷新列表
  if (bookshelfSubPage === 'downloads') refreshDownloadList();
}

function renderBookshelfTab() {
  const mc = document.getElementById('main-content');
  if (bookshelfSubPage === 'search') { hideNav(); renderBookshelfSearch(mc); return; }
  if (bookshelfSubPage === 'reader') { renderBookshelfReader(mc); return; }
  if (bookshelfSubPage === 'downloads') { hideNav(); renderBookshelfDownloads(mc); return; }
  showNav();
  renderBookshelfMain(mc);
}

// ── 书架主页 ──
async function renderBookshelfMain(mc) {
  bookshelfSelectMode = false;
  bookshelfSelected.clear();

  mc.innerHTML = `
    <div style="max-width:600px;margin:0 auto;padding:16px;">
      <!-- 顶部栏 -->
      <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:16px;">
        <h2 style="margin:0;font-size:20px;">📚 ${t('tab_bookshelf')}</h2>
        <div style="display:flex;gap:8px;align-items:center;">
          <button id="bs-filter-btn" style="width:36px;height:36px;border-radius:50%;border:1px solid var(--border-color,#ddd);background:var(--bg-secondary,#fff);font-size:18px;cursor:pointer;">🔽</button>
          <button id="bs-add-btn" style="width:36px;height:36px;border-radius:50%;border:none;background:var(--accent-color,#6366f1);color:#fff;font-size:22px;cursor:pointer;line-height:1;">+</button>
        </div>
      </div>
      <!-- 多选操作栏 -->
      <div id="bs-select-bar" style="display:none;margin-bottom:12px;padding:8px 12px;border-radius:8px;background:var(--bg-secondary,#f5f5f5);align-items:center;gap:8px;">
        <button id="bs-sel-all" style="padding:4px 10px;border-radius:6px;border:1px solid var(--border-color,#ddd);background:var(--bg-secondary,#fff);font-size:13px;cursor:pointer;">${t('jm_select_all')}</button>
        <span id="bs-sel-count" style="flex:1;text-align:center;font-size:14px;color:var(--text-secondary,#888);">0</span>
        <button id="bs-sel-cancel" style="padding:4px 10px;border-radius:6px;border:1px solid var(--border-color,#ddd);background:var(--bg-secondary,#fff);font-size:13px;cursor:pointer;">${t('jm_cancel')}</button>
      </div>
      <!-- 网格/列表 -->
      <div id="bs-grid" style="${(!uiConfig.bsViewMode || uiConfig.bsViewMode === 'grid') ? `display:grid;grid-template-columns:repeat(${uiConfig.bsGridCols || 3},1fr);gap:10px;` : 'display:flex;flex-direction:column;gap:8px;'}"></div>
      <!-- 底部统计 -->
      <div id="bs-stats" style="text-align:center;padding:12px;font-size:13px;color:var(--text-secondary,#888);"></div>
      <!-- 多选操作按钮栏 -->
      <div id="bs-action-bar" style="display:none;position:fixed;bottom:70px;left:0;right:0;padding:10px 16px;background:var(--bg-primary,#fff);border-top:1px solid var(--border-color,#ddd);display:none;gap:8px;justify-content:center;z-index:100;">
        <button class="bs-act-btn" data-action="fav" style="padding:8px 14px;border-radius:8px;border:1px solid var(--border-color,#ddd);background:var(--bg-secondary,#fff);font-size:14px;cursor:pointer;">⭐</button>
        <button class="bs-act-btn" data-action="tag" style="padding:8px 14px;border-radius:8px;border:1px solid var(--border-color,#ddd);background:var(--bg-secondary,#fff);font-size:14px;cursor:pointer;">🏷️</button>
        <button class="bs-act-btn" data-action="export" style="padding:8px 14px;border-radius:8px;border:1px solid var(--border-color,#ddd);background:var(--bg-secondary,#fff);font-size:14px;cursor:pointer;">📋</button>
        <button class="bs-act-btn" data-action="delete" style="padding:8px 14px;border-radius:8px;border:1px solid var(--border-color,#ddd);background:var(--bg-secondary,#fff);font-size:14px;cursor:pointer;">🗑️</button>
      </div>
    </div>
  `;

  // 加载并渲染
  await refreshBookshelfGrid();

  // + 按钮
  document.getElementById('bs-add-btn').addEventListener('click', showBookshelfAddMenu);
  // 筛选按钮
  document.getElementById('bs-filter-btn').addEventListener('click', showBookshelfFilterMenu);

  // 多选操作栏事件
  bindSelectBarEvents();
}

let _bsRefreshSeq = 0;
let _bsCoverUrls = [];
async function refreshBookshelfGrid() {
  const seq = ++_bsRefreshSeq;
  const grid = document.getElementById('bs-grid');
  const statsEl = document.getElementById('bs-stats');
  if (!grid) return;

  // 清理上一轮的 Object URLs（防止并发泄漏）
  _bsCoverUrls.forEach(u => { try { URL.revokeObjectURL(u); } catch(e) {} });
  _bsCoverUrls = [];

  const isList = uiConfig.bsViewMode === 'list';
  const cols = uiConfig.bsGridCols || 3;
  grid.style.cssText = isList
    ? 'display:flex;flex-direction:column;gap:8px;'
    : `display:grid;grid-template-columns:repeat(${cols},1fr);gap:10px;`;

  let comics = await jmDbList();
  if (seq !== _bsRefreshSeq) return; // 并发保护：有更新的刷新已启动，放弃本次

  // 应用筛选
  if (bookshelfFilter.type === 'favorite') {
    comics = comics.filter(c => c.favorite);
  } else if (bookshelfFilter.type === 'tag' && bookshelfFilter.tag) {
    comics = comics.filter(c => c.jmTags && c.jmTags.includes(bookshelfFilter.tag));
  }

  // 合并下载中的漫画
  const dlEntries = Object.entries(jmDownloadingMap);

  grid.innerHTML = '';

  // 下载中卡片
  dlEntries.forEach(([aid, info]) => {
    if (comics.find(c => c.albumId === aid)) return;
    const card = document.createElement('div');
    const pct = Math.round(info.progress || 0);
    if (isList) {
      card.style.cssText = 'display:flex;align-items:center;gap:12px;padding:10px;border-radius:10px;background:var(--bg-secondary,#f5f5f5);';
      card.innerHTML = `
        <div style="width:50px;height:66px;border-radius:6px;background:var(--bg-tertiary,#e8e8e8);display:flex;align-items:center;justify-content:center;flex-shrink:0;">
          <svg width="36" height="36" viewBox="0 0 60 60">
            <circle cx="30" cy="30" r="26" fill="none" stroke="var(--border-color,#e0e0e0)" stroke-width="4"/>
            <circle cx="30" cy="30" r="26" fill="none" stroke="var(--accent-color,#6366f1)" stroke-width="4" stroke-dasharray="${pct * 1.63} ${163 - pct * 1.63}" stroke-linecap="round" transform="rotate(-90 30 30)" style="transition:stroke-dasharray 0.3s;"/>
            <text x="30" y="34" text-anchor="middle" font-size="12" fill="var(--text-primary,#333)">${pct}%</text>
          </svg>
        </div>
        <div style="flex:1;min-width:0;">
          <div style="font-size:14px;font-weight:600;color:var(--text-primary,#333);overflow:hidden;text-overflow:ellipsis;white-space:nowrap;">${info.title || `JM${info.code}`}</div>
          <div style="font-size:12px;color:var(--text-secondary,#888);margin-top:2px;">JM${info.code} · ${pct}%</div>
        </div>
      `;
    } else {
      card.style.cssText = 'position:relative;border-radius:10px;overflow:hidden;background:var(--bg-secondary,#f5f5f5);aspect-ratio:3/4;';
      card.innerHTML = `
        <div style="display:flex;flex-direction:column;align-items:center;justify-content:center;height:100%;padding:8px;">
          <svg width="60" height="60" viewBox="0 0 60 60" style="margin-bottom:8px;">
            <circle cx="30" cy="30" r="26" fill="none" stroke="var(--border-color,#e0e0e0)" stroke-width="4"/>
            <circle cx="30" cy="30" r="26" fill="none" stroke="var(--accent-color,#6366f1)" stroke-width="4" stroke-dasharray="${pct * 1.63} ${163 - pct * 1.63}" stroke-linecap="round" transform="rotate(-90 30 30)" style="transition:stroke-dasharray 0.3s;"/>
            <text x="30" y="34" text-anchor="middle" font-size="12" fill="var(--text-primary,#333)">${pct}%</text>
          </svg>
          <div style="font-size:16px;font-weight:700;color:var(--text-secondary,#888);">JM${info.code}</div>
          <div style="font-size:11px;color:var(--text-secondary,#888);margin-top:4px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;max-width:100%;">${info.title || ''}</div>
        </div>
      `;
    }
    grid.appendChild(card);
  });

  // 已下载卡片
  comics.forEach(comic => {
    const card = document.createElement('div');
    const isSelected = bookshelfSelected.has(comic.albumId);
    card.dataset.albumId = comic.albumId;
    const coverUrl = comic.coverBlob ? URL.createObjectURL(comic.coverBlob) : '';
    if (coverUrl) _bsCoverUrls.push(coverUrl);
    const chCount = comic.chapters ? comic.chapters.length : 0;
    const isFailed = comic.failed && !comic.pdfBlob && !(comic.pages && comic.pages.length);

    if (isList) {
      card.style.cssText = `display:flex;align-items:center;gap:12px;padding:10px;border-radius:10px;background:var(--bg-secondary,#f5f5f5);cursor:pointer;${isSelected ? 'outline:3px solid var(--accent-color,#6366f1);' : ''}`;
      card.innerHTML = `
        <div class="bs-sel-chk${bookshelfSelectMode ? '' : ' bs-sel-hidden'}${isSelected ? ' bs-selected' : ''}" style="width:22px;height:22px;border-radius:50%;border:2px solid ${isSelected ? 'var(--accent-color,#6366f1)' : 'var(--border-color,#ccc)'};background:${isSelected ? 'var(--accent-color,#6366f1)' : 'rgba(255,255,255,0.8)'};display:flex;align-items:center;justify-content:center;flex-shrink:0;">${isSelected ? '<span style="color:#fff;font-size:14px;">✓</span>' : ''}</div>
        <div style="width:50px;height:66px;border-radius:6px;overflow:hidden;flex-shrink:0;background:var(--bg-tertiary,#e8e8e8);">
          ${coverUrl ? `<img src="${coverUrl}" style="width:100%;height:100%;object-fit:cover;"/>` : `<div style="width:100%;height:100%;display:flex;align-items:center;justify-content:center;font-size:20px;color:var(--text-secondary,#aaa);">📖</div>`}
        </div>
        <div style="flex:1;min-width:0;">
          <div style="font-size:14px;font-weight:600;color:var(--text-primary,#333);overflow:hidden;text-overflow:ellipsis;white-space:nowrap;">${comic.favorite ? '⭐ ' : ''}${comic.title}</div>
          <div style="font-size:12px;color:var(--text-secondary,#888);margin-top:2px;">${isFailed ? '❌ 点击重试' : chCount + t('jm_chapter_count')}</div>
        </div>
      `;
    } else {
      card.style.cssText = `position:relative;border-radius:10px;overflow:hidden;background:var(--bg-secondary,#f5f5f5);aspect-ratio:3/4;cursor:pointer;${isSelected ? 'outline:3px solid var(--accent-color,#6366f1);' : ''}`;
      card.innerHTML = `
        <div class="bs-sel-chk${bookshelfSelectMode ? '' : ' bs-sel-hidden'}${isSelected ? ' bs-selected' : ''}" style="position:absolute;top:6px;left:6px;z-index:2;width:22px;height:22px;border-radius:50%;border:2px solid ${isSelected ? 'var(--accent-color,#6366f1)' : 'var(--border-color,#ccc)'};background:${isSelected ? 'var(--accent-color,#6366f1)' : 'rgba(255,255,255,0.8)'};display:flex;align-items:center;justify-content:center;">
          ${isSelected ? '<span style="color:#fff;font-size:14px;">✓</span>' : ''}
        </div>
        ${comic.favorite ? '<span style="position:absolute;top:6px;right:6px;z-index:2;font-size:16px;">⭐</span>' : ''}
        ${isFailed ? '<span style="position:absolute;top:6px;right:6px;z-index:2;font-size:14px;background:#dc3545;color:#fff;border-radius:4px;padding:1px 5px;">失败</span>' : ''}
        ${coverUrl
          ? `<img src="${coverUrl}" style="width:100%;height:100%;object-fit:cover;"/>`
          : `<div style="width:100%;height:100%;display:flex;align-items:center;justify-content:center;font-size:32px;color:${isFailed ? '#dc3545' : 'var(--text-secondary,#aaa)'};">${isFailed ? '⚠️' : '📖'}</div>`
        }
        <div style="position:absolute;bottom:0;left:0;right:0;padding:6px 8px;background:linear-gradient(transparent,rgba(0,0,0,0.7));">
          <div style="font-size:12px;font-weight:600;color:#fff;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;">${comic.title}</div>
          <div style="font-size:10px;color:rgba(255,255,255,0.8);">${isFailed ? '点击重试' : chCount + t('jm_chapter_count')}</div>
        </div>
      `;
    }

    // 点击事件
    let pressTimer = null;
    card.addEventListener('touchstart', (e) => {
      pressTimer = setTimeout(() => { pressTimer = null; enterSelectMode(comic.albumId); }, 500);
    }, { passive: true });
    card.addEventListener('touchend', () => { if (pressTimer) { clearTimeout(pressTimer); pressTimer = null; } });
    card.addEventListener('touchmove', () => { if (pressTimer) { clearTimeout(pressTimer); pressTimer = null; } });
    card.addEventListener('contextmenu', (e) => { e.preventDefault(); enterSelectMode(comic.albumId); });
    card.addEventListener('click', () => {
      if (bookshelfSelectMode) {
        toggleSelect(comic.albumId);
      } else if (comic.failed && !comic.pdfBlob && !(comic.pages && comic.pages.length)) {
        retryFailedComic(comic.albumId, comic.title);
      } else {
        openBookshelfReader(comic.albumId);
      }
    });

    grid.appendChild(card);
  });

  // 空状态
  if (comics.length === 0 && dlEntries.length === 0) {
    grid.innerHTML = `
      <div style="grid-column:1/-1;text-align:center;padding:60px 20px;color:var(--text-secondary,#888);">
        <div style="font-size:48px;margin-bottom:12px;">📚</div>
        <div style="font-size:15px;">${t('jm_no_comics')}</div>
      </div>
    `;
  }

  // 统计
  const allComics = await jmDbList();
  const favCount = allComics.filter(c => c.favorite).length;
  if (statsEl) {
    statsEl.textContent = t('jm_comic_count').replace('{n}', allComics.length) + (favCount ? ` / ⭐ ${favCount}` : '');
  }
}

// ── 多选模式 ──
function enterSelectMode(albumId) {
  bookshelfSelectMode = true;
  bookshelfSelected.clear();
  if (albumId) bookshelfSelected.add(albumId);
  // 轻量 DOM 操作：显示所有 checkbox，高亮选中项
  document.querySelectorAll('#bs-grid .bs-sel-chk').forEach(el => el.classList.remove('bs-sel-hidden'));
  document.querySelectorAll('#bs-grid > div[data-album-id]').forEach(card => {
    const aid = card.dataset.albumId;
    const chk = card.querySelector('.bs-sel-chk');
    if (!chk) return;
    if (bookshelfSelected.has(aid)) {
      chk.classList.add('bs-selected');
      chk.style.borderColor = 'var(--accent-color,#6366f1)';
      chk.style.background = 'var(--accent-color,#6366f1)';
      chk.innerHTML = '<span style="color:#fff;font-size:14px;">✓</span>';
      card.style.outline = '3px solid var(--accent-color,#6366f1)';
    } else {
      chk.classList.remove('bs-selected');
      chk.style.borderColor = 'var(--border-color,#ccc)';
      chk.style.background = 'rgba(255,255,255,0.8)';
      chk.innerHTML = '';
      card.style.outline = '';
    }
  });
  updateSelectBar();
}

function exitSelectMode() {
  bookshelfSelectMode = false;
  bookshelfSelected.clear();
  // 轻量 DOM 操作：隐藏所有 checkbox，移除高亮
  document.querySelectorAll('#bs-grid .bs-sel-chk').forEach(el => {
    el.classList.add('bs-sel-hidden');
    el.classList.remove('bs-selected');
    el.style.borderColor = 'var(--border-color,#ccc)';
    el.style.background = 'rgba(255,255,255,0.8)';
    el.innerHTML = '';
  });
  document.querySelectorAll('#bs-grid > div[data-album-id]').forEach(card => {
    card.style.outline = '';
  });
  updateSelectBar();
}

function toggleSelect(albumId) {
  const card = document.querySelector(`#bs-grid > div[data-album-id="${albumId}"]`);
  if (!card) return;
  const chk = card.querySelector('.bs-sel-chk');
  if (!chk) return;
  if (bookshelfSelected.has(albumId)) {
    bookshelfSelected.delete(albumId);
    chk.classList.remove('bs-selected');
    chk.style.borderColor = 'var(--border-color,#ccc)';
    chk.style.background = 'rgba(255,255,255,0.8)';
    chk.innerHTML = '';
    card.style.outline = '';
  } else {
    bookshelfSelected.add(albumId);
    chk.classList.add('bs-selected');
    chk.style.borderColor = 'var(--accent-color,#6366f1)';
    chk.style.background = 'var(--accent-color,#6366f1)';
    chk.innerHTML = '<span style="color:#fff;font-size:14px;">✓</span>';
    card.style.outline = '3px solid var(--accent-color,#6366f1)';
  }
  updateSelectBar();
}

function updateSelectBar() {
  const bar = document.getElementById('bs-select-bar');
  const actBar = document.getElementById('bs-action-bar');
  const countEl = document.getElementById('bs-sel-count');
  if (!bar) return;

  if (bookshelfSelectMode) {
    bar.style.display = 'flex';
    if (actBar) actBar.style.display = 'flex';
    if (countEl) countEl.textContent = `${bookshelfSelected.size} ${t('jm_select_mode')}`;
  } else {
    bar.style.display = 'none';
    if (actBar) actBar.style.display = 'none';
  }
}

function bindSelectBarEvents() {
  const selAll = document.getElementById('bs-sel-all');
  const selCancel = document.getElementById('bs-sel-cancel');
  if (selAll) selAll.addEventListener('click', async () => {
    const comics = await jmDbList();
    comics.forEach(c => bookshelfSelected.add(c.albumId));
    // 轻量更新所有卡片选中状态
    document.querySelectorAll('#bs-grid > div[data-album-id]').forEach(card => {
      const aid = card.dataset.albumId;
      const chk = card.querySelector('.bs-sel-chk');
      if (!chk || !bookshelfSelected.has(aid)) return;
      chk.classList.add('bs-selected');
      chk.style.borderColor = 'var(--accent-color,#6366f1)';
      chk.style.background = 'var(--accent-color,#6366f1)';
      chk.innerHTML = '<span style="color:#fff;font-size:14px;">✓</span>';
      card.style.outline = '3px solid var(--accent-color,#6366f1)';
    });
    updateSelectBar();
  });
  if (selCancel) selCancel.addEventListener('click', exitSelectMode);

  document.querySelectorAll('.bs-act-btn').forEach(btn => {
    btn.addEventListener('click', () => handleSelectAction(btn.dataset.action));
  });
}

async function handleSelectAction(action) {
  const ids = [...bookshelfSelected];
  if (ids.length === 0) return;

  if (action === 'fav') {
    for (const id of ids) await jmDbToggleFav(id);
    exitSelectMode();
    refreshBookshelfGrid(); // 需要更新 ⭐ 显示
  } else if (action === 'tag') {
    showTagPicker(ids);
  } else if (action === 'export') {
    const lines = [];
    for (const id of ids) {
      const c = await jmDbGet(id);
      if (c) lines.push(`jm${c.albumId}${c.title}`);
    }
    navigator.clipboard.writeText(lines.join('\n')).then(() => {
      alert(t('jm_export_done') + ` (${lines.length})`);
    }).catch(() => {
      prompt(t('jm_export_codes'), lines.join('\n'));
    });
  } else if (action === 'delete') {
    if (confirm(t('jm_delete_confirm'))) {
      for (const id of ids) await jmDbDelete(id);
      exitSelectMode();
      refreshBookshelfGrid(); // 需要移除已删除的卡片
    }
  }
}

function showTagPicker(albumIds) {
  const modal = document.createElement('div');
  modal.className = 'modal';
  const tagOptions = fetishes.map(f => {
    return `<label style="display:flex;align-items:center;gap:8px;padding:8px 12px;border-radius:6px;background:var(--bg-tertiary,#e8e8e8);cursor:pointer;">
      <input type="checkbox" class="jm-tag-cb" value="${f.name}" style="width:18px;height:18px;"> ${f.name}
    </label>`;
  }).join('');
  modal.innerHTML = `
    <div class="modal-content" style="max-width:400px;">
      <div class="modal-header"><h3>${t('jm_tag_comic')}</h3><button class="modal-close">&times;</button></div>
      <div class="modal-body" style="display:flex;flex-direction:column;gap:6px;max-height:50vh;overflow-y:auto;">${tagOptions}</div>
      <div style="padding:12px;display:flex;gap:8px;">
        <button class="btn btn-secondary" id="tag-cancel" style="flex:1;">${t('jm_cancel')}</button>
        <button class="btn btn-primary" id="tag-ok" style="flex:1;">OK</button>
      </div>
    </div>
  `;
  document.body.appendChild(modal);
  modal.querySelector('.modal-close').addEventListener('click', () => modal.remove());
  document.getElementById('tag-cancel').addEventListener('click', () => modal.remove());
  document.getElementById('tag-ok').addEventListener('click', async () => {
    const selected = [...modal.querySelectorAll('.jm-tag-cb:checked')].map(cb => cb.value);
    for (const id of albumIds) {
      const comic = await jmDbGet(id);
      if (!comic) continue;
      const existing = new Set(comic.jmTags || []);
      selected.forEach(t => existing.add(t));
      await jmDbUpdateTags(id, [...existing]);
    }
    modal.remove();
    exitSelectMode();
  });
  modal.addEventListener('click', (e) => { if (e.target === modal) modal.remove(); });
}

// ── 筛选菜单 ──
function showBookshelfFilterMenu() {
  const modal = document.createElement('div');
  modal.className = 'modal';
  const isActive = (type, tag) => bookshelfFilter.type === type && (!tag || bookshelfFilter.tag === tag);
  let items = `
    <button class="bs-filter-item" data-type="all" style="width:100%;padding:12px;text-align:left;border:none;background:${isActive('all') ? 'var(--bg-tertiary,#e8e8e8)' : 'transparent'};font-size:15px;cursor:pointer;border-radius:6px;">${t('jm_filter_all')}</button>
    <button class="bs-filter-item" data-type="favorite" style="width:100%;padding:12px;text-align:left;border:none;background:${isActive('favorite') ? 'var(--bg-tertiary,#e8e8e8)' : 'transparent'};font-size:15px;cursor:pointer;border-radius:6px;">${t('jm_filter_favorite')}</button>
  `;
  fetishes.forEach(f => {
    items += `<button class="bs-filter-item" data-type="tag" data-tag="${f.name}" style="width:100%;padding:12px;text-align:left;border:none;background:${isActive('tag', f.name) ? 'var(--bg-tertiary,#e8e8e8)' : 'transparent'};font-size:15px;cursor:pointer;border-radius:6px;">🏷️ ${f.name}</button>`;
  });
  modal.innerHTML = `
    <div class="modal-content" style="max-width:360px;">
      <div class="modal-header"><h3>${t('jm_filter')}</h3><button class="modal-close">&times;</button></div>
      <div class="modal-body" style="display:flex;flex-direction:column;gap:2px;">${items}</div>
    </div>
  `;
  document.body.appendChild(modal);
  modal.querySelector('.modal-close').addEventListener('click', () => modal.remove());
  modal.querySelectorAll('.bs-filter-item').forEach(btn => {
    btn.addEventListener('click', () => {
      bookshelfFilter = { type: btn.dataset.type, tag: btn.dataset.tag || undefined };
      modal.remove();
      refreshBookshelfGrid();
    });
  });
  modal.addEventListener('click', (e) => { if (e.target === modal) modal.remove(); });
}

// ── + 按钮菜单 ──
function showBookshelfAddMenu() {
  const modal = document.createElement('div');
  modal.className = 'modal';
  modal.innerHTML = `
    <div class="modal-content" style="max-width:360px;position:fixed;bottom:0;left:0;right:0;border-radius:16px 16px 0 0;">
      <div style="padding:20px;display:flex;flex-direction:column;gap:12px;">
        <button id="bs-menu-search" style="padding:14px;text-align:left;border:none;background:var(--bg-tertiary,#e8e8e8);font-size:16px;cursor:pointer;border-radius:10px;">🔍 ${t('jm_search_download')}</button>
        <button id="bs-menu-local" style="padding:14px;text-align:left;border:none;background:var(--bg-tertiary,#e8e8e8);font-size:16px;cursor:pointer;border-radius:10px;">📁 ${t('jm_local_import')}</button>
        <button id="bs-menu-batch" style="padding:14px;text-align:left;border:none;background:var(--bg-tertiary,#e8e8e8);font-size:16px;cursor:pointer;border-radius:10px;">📦 ${t('jm_batch_download')}</button>
        <button id="bs-menu-cancel" style="padding:14px;text-align:center;border:none;background:transparent;font-size:15px;cursor:pointer;color:var(--text-secondary,#888);">${t('jm_cancel')}</button>
      </div>
    </div>
  `;
  document.body.appendChild(modal);
  document.getElementById('bs-menu-cancel').addEventListener('click', () => modal.remove());
  document.getElementById('bs-menu-search').addEventListener('click', () => { modal.remove(); bookshelfSubPage = 'search'; renderBookshelfTab(); });
  document.getElementById('bs-menu-local').addEventListener('click', () => { modal.remove(); handleLocalImport(); });
  document.getElementById('bs-menu-batch').addEventListener('click', () => { modal.remove(); showBatchDownloadModal(); });
  modal.addEventListener('click', (e) => { if (e.target === modal) modal.remove(); });
}

// ── 重试失败的漫画 ──
async function retryFailedComic(albumId, title) {
  jmDownloadingMap[albumId] = { code: albumId, title: title || `JM${albumId}`, progress: 0, status: 'downloading', paused: false };
  updateDownloadPanel();
  try {
    const albumInfo = await jmGetAlbum(albumId);
    jmDownloadingMap[albumId].title = albumInfo.title;
    updateDownloadPanel();

    const dlResult = await jmDownloadChapter(albumId, albumInfo.title, (pct) => {
      jmDownloadingMap[albumId].progress = pct;
      updateDownloadPanel();
    });

    const cover = await jmFetchCover(albumId);
    await jmDbSave({
      albumId,
      title: albumInfo.title,
      author: albumInfo.author || '',
      tags: albumInfo.tags || [],
      chapters: albumInfo.chapters || [],
      coverBlob: cover,
      pdfBlob: dlResult.pdfBlob,
      pages: dlResult.pages,
      localPdfName: dlResult.localPdfName || null,
      favorite: false,
      jmTags: [],
      addedAt: new Date().toISOString(),
      source: 'jm',
    });

    delete jmDownloadingMap[albumId];
    updateDownloadPanel();
    renderBookshelfTab();
  } catch (err) {
    delete jmDownloadingMap[albumId];
    updateDownloadPanel();
    alert(`重试失败: ${err.message}`);
  }
}

// ── 本地导入 ──
function handleLocalImport() {
  const input = document.createElement('input');
  input.type = 'file';
  input.accept = '.pdf';
  input.multiple = true;
  input.addEventListener('change', async () => {
    const files = input.files;
    if (!files || files.length === 0) return;

    // 进度弹窗
    const modal = document.createElement('div');
    modal.className = 'modal';
    modal.innerHTML = `
      <div class="modal-content" style="max-width:360px;text-align:center;">
        <div class="modal-body" style="padding:24px;">
          <div id="import-status" style="font-size:15px;color:var(--text-primary);margin-bottom:12px;">准备导入...</div>
          <div style="width:100%;height:6px;background:var(--border-color,#e0e0e0);border-radius:3px;overflow:hidden;">
            <div id="import-bar" style="height:100%;width:0%;background:var(--accent-color,#6366f1);transition:width 0.3s;border-radius:3px;"></div>
          </div>
          <div id="import-detail" style="font-size:13px;color:var(--text-secondary,#888);margin-top:8px;"></div>
        </div>
      </div>
    `;
    document.body.appendChild(modal);
    const statusEl = document.getElementById('import-status');
    const barEl = document.getElementById('import-bar');
    const detailEl = document.getElementById('import-detail');

    // 确保 pdf.js 已加载
    if (!window.pdfjsLib) {
      statusEl.textContent = 'PDF 引擎未加载，请稍后重试';
      setTimeout(() => modal.remove(), 2000);
      return;
    }

    for (let fi = 0; fi < files.length; fi++) {
      const file = files[fi];
      const title = file.name.replace(/\.pdf$/i, '');
      statusEl.textContent = `正在导入: ${title} (${fi + 1}/${files.length})`;
      barEl.style.width = '0%';

      try {
        const arrayBuf = await file.arrayBuffer();
        const pdf = await pdfjsLib.getDocument({ data: arrayBuf }).promise;
        const totalPages = pdf.numPages;
        const pages = [];
        const containerWidth = window.innerWidth;
        const dpr = window.devicePixelRatio || 1;

        for (let i = 1; i <= totalPages; i++) {
          detailEl.textContent = `正在转换第 ${i}/${totalPages} 页...`;
          barEl.style.width = ((i / totalPages) * 100) + '%';

          const page = await pdf.getPage(i);
          const viewport = page.getViewport({ scale: 1 });
          const scale = (containerWidth / viewport.width) * dpr;
          const fitViewport = page.getViewport({ scale });
          const canvas = document.createElement('canvas');
          canvas.width = fitViewport.width;
          canvas.height = fitViewport.height;
          const ctx = canvas.getContext('2d');
          await page.render({ canvasContext: ctx, viewport: fitViewport }).promise;
          pages.push(canvas.toDataURL('image/jpeg', 0.8).split(',')[1]);
        }

        const albumId = 'local_' + Date.now() + '_' + Math.random().toString(36).slice(2, 6);
        await jmDbSave({
          albumId,
          title,
          author: '',
          tags: [],
          chapters: [{ id: albumId, title, sort: 1 }],
          coverBlob: null,
          pages,
          favorite: false,
          jmTags: [],
          addedAt: new Date().toISOString(),
          source: 'local',
        });
        detailEl.textContent = `${title} 导入完成 (${totalPages} 页)`;
      } catch (e) {
        console.error('[Import] PDF 转换失败:', e);
        detailEl.textContent = `${title} 导入失败: ${e.message}`;
      }
    }

    barEl.style.width = '100%';
    statusEl.textContent = '全部导入完成';
    setTimeout(() => { modal.remove(); renderBookshelfTab(); }, 1200);
  });
  input.click();
}

// ── 搜索子页面 ──
function renderBookshelfSearch(mc) {
  mc.innerHTML = `
    <div style="max-width:600px;margin:0 auto;padding:16px;">
      <div style="display:flex;align-items:center;gap:8px;margin-bottom:16px;">
        <button id="jm-back-btn" style="width:36px;height:36px;border-radius:50%;border:1px solid var(--border-color,#ddd);background:var(--bg-secondary,#fff);font-size:18px;cursor:pointer;">←</button>
        <h2 style="margin:0;font-size:18px;">🔍 ${t('jm_search_download')}</h2>
      </div>
      <div style="display:flex;gap:8px;margin-bottom:12px;">
        <input type="text" id="jm-code-input" placeholder="${t('jm_input_hint')}"
          style="flex:1;padding:10px 14px;border-radius:8px;border:1px solid var(--border-color,#ddd);background:var(--bg-secondary,#fff);color:var(--text-primary,#333);font-size:16px;outline:none;"/>
        <button id="jm-search-btn"
          style="padding:10px 20px;border-radius:8px;border:none;background:var(--accent-color,#6366f1);color:#fff;font-size:16px;cursor:pointer;white-space:nowrap;">${t('jm_search')}</button>
      </div>
      <div id="jm-status" style="text-align:center;padding:8px;color:var(--text-secondary,#888);font-size:14px;display:none;"></div>
      <div id="jm-album-info" style="display:none;">
        <div style="padding:12px;border-radius:10px;background:var(--bg-secondary,#f5f5f5);margin-bottom:12px;">
          <div style="font-size:12px;color:var(--text-secondary,#888);margin-bottom:4px;">${t('jm_title')}</div>
          <div id="jm-album-title" style="font-size:18px;font-weight:600;color:var(--text-primary,#333);"></div>
        </div>
        <div style="font-size:14px;font-weight:600;color:var(--text-secondary,#888);margin-bottom:8px;">${t('jm_chapters')}</div>
        <div id="jm-chapters-list" style="display:flex;flex-direction:column;gap:6px;max-height:50vh;overflow-y:auto;"></div>
      </div>
      <div id="jm-download-area" style="display:none;margin-top:16px;">
        <div style="padding:12px;border-radius:10px;background:var(--bg-secondary,#f5f5f5);">
          <div id="jm-dl-status" style="font-size:14px;margin-bottom:8px;color:var(--text-primary,#333);"></div>
          <div style="width:100%;height:6px;background:var(--border-color,#e0e0e0);border-radius:3px;overflow:hidden;">
            <div id="jm-dl-progress" style="height:100%;width:0%;background:var(--accent-color,#6366f1);transition:width 0.3s ease;border-radius:3px;"></div>
          </div>
        </div>
      </div>
      <div id="jm-scramble-warn" style="display:none;margin-top:12px;padding:10px;border-radius:8px;background:#fff3cd;color:#856404;font-size:13px;">⚠️ ${t('jm_scrambled_warn')}</div>
    </div>
  `;

  document.getElementById('jm-back-btn').addEventListener('click', () => { bookshelfSubPage = null; renderBookshelfTab(); });
  const codeInput = document.getElementById('jm-code-input');
  const searchBtn = document.getElementById('jm-search-btn');
  const statusEl = document.getElementById('jm-status');

  function showStatus(msg, color) { statusEl.style.display = 'block'; statusEl.textContent = msg; statusEl.style.color = color || 'var(--text-secondary,#888)'; }
  function hideStatus() { statusEl.style.display = 'none'; }

  searchBtn.addEventListener('click', () => doSearch());
  codeInput.addEventListener('keydown', (e) => { if (e.key === 'Enter') doSearch(); });
  setTimeout(() => codeInput.focus(), 100);

  let currentAlbumId = null;

  async function doSearch() {
    const raw = codeInput.value.trim();
    const albumId = parseJMCode(raw);
    if (!albumId) { showStatus(t('jm_input_empty'), '#dc3545'); return; }

    if (jmNeedProxy()) {
      try {
        const h = await fetch(`${jmProxyBase()}/api/jm/proxy`, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ url: `https://${JM_API_DOMAINS[0]}/album?id=1`, headers: { token: 't', tokenparam: 't' } }) });
        const ht = await h.text();
        if (ht.startsWith('<')) { showStatus(t('jm_server_error'), '#dc3545'); return; }
      } catch (e) { showStatus(t('jm_server_error'), '#dc3545'); return; }
    }

    currentAlbumId = albumId;
    hideStatus();
    showStatus(t('jm_searching'), 'var(--text-secondary,#888)');
    searchBtn.disabled = true;
    searchBtn.textContent = t('jm_searching');
    document.getElementById('jm-album-info').style.display = 'none';
    document.getElementById('jm-download-area').style.display = 'none';

    try {
      const data = await jmGetAlbum(albumId);
      document.getElementById('jm-album-title').textContent = data.title;
      const chaptersList = document.getElementById('jm-chapters-list');
      chaptersList.innerHTML = '';

      if (!data.chapters || data.chapters.length === 0 || (data.chapters.length === 1 && data.chapters[0].id === albumId)) {
        const div = document.createElement('div');
        div.style.cssText = 'display:flex;align-items:center;justify-content:space-between;padding:10px 12px;border-radius:8px;background:var(--bg-tertiary,#e8e8e8);';
        div.innerHTML = `<span style="color:var(--text-primary,#333);font-size:14px;">📄 ${data.title}</span>
          <button class="jm-dl-btn" data-id="${albumId}" data-title="${data.title}" style="padding:6px 16px;border-radius:6px;border:none;background:var(--accent-color,#6366f1);color:#fff;font-size:13px;cursor:pointer;">${t('jm_download')}</button>`;
        chaptersList.appendChild(div);
      } else {
        data.chapters.forEach(ch => {
          const div = document.createElement('div');
          div.style.cssText = 'display:flex;align-items:center;justify-content:space-between;padding:10px 12px;border-radius:8px;background:var(--bg-tertiary,#e8e8e8);';
          div.innerHTML = `<span style="color:var(--text-primary,#333);font-size:14px;flex:1;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;margin-right:8px;">📖 ${ch.title}</span>
            <button class="jm-dl-btn" data-id="${ch.id}" data-title="${data.title} - ${ch.title}" style="padding:6px 16px;border-radius:6px;border:none;background:var(--accent-color,#6366f1);color:#fff;font-size:13px;cursor:pointer;white-space:nowrap;">${t('jm_download')}</button>`;
          chaptersList.appendChild(div);
        });
      }

      chaptersList.querySelectorAll('.jm-dl-btn').forEach(btn => {
        btn.addEventListener('click', () => doDownload(btn.dataset.id, btn.dataset.title, btn));
      });
      document.getElementById('jm-album-info').style.display = 'block';
      hideStatus();
    } catch (err) {
      showStatus(`${t('jm_download_failed')}: ${err.message}`, '#dc3545');
    } finally {
      searchBtn.disabled = false;
      searchBtn.textContent = t('jm_search');
    }
  }

  async function doDownload(photoId, title, btn) {
    // 首次下载弹窗选择格式
    if (!uiConfig.bsSaveImages && !uiConfig.bsSavePdf) { uiConfig.bsSaveImages = true; saveUIConfig(); }

    const downloadArea = document.getElementById('jm-download-area');
    const dlStatus = document.getElementById('jm-dl-status');
    const dlProgress = document.getElementById('jm-dl-progress');
    downloadArea.style.display = 'block';
    btn.disabled = true;
    btn.textContent = t('jm_downloading');

    // 更新下载中状态
    jmDownloadingMap[currentAlbumId] = { code: currentAlbumId, title, progress: 0, status: 'downloading' };
    updateDownloadPanel();

    try {
      const dlResult = await jmDownloadChapter(currentAlbumId, title, (pct, msg) => {
        dlProgress.style.width = pct + '%';
        dlStatus.textContent = msg;
        jmDownloadingMap[currentAlbumId].progress = pct;
        updateDownloadPanel();
      });

      dlProgress.style.width = '100%';
      dlStatus.textContent = `✅ ${t('jm_download_complete')}`;

      // 保存到 IndexedDB
      dlStatus.textContent = '正在保存...';
      const albumInfo = await jmGetAlbum(currentAlbumId).catch(() => ({ title, chapters: [] }));
      const cover = await jmFetchCover(currentAlbumId);
      await jmDbSave({
        albumId: currentAlbumId,
        title: albumInfo.title || title,
        author: albumInfo.author || '',
        tags: albumInfo.tags || [],
        chapters: albumInfo.chapters || [{ id: currentAlbumId, title, sort: 1 }],
        coverBlob: cover,
        pdfBlob: dlResult.pdfBlob,
        pages: dlResult.pages,
        localPdfName: dlResult.localPdfName || null,
        favorite: false,
        jmTags: [],
        addedAt: new Date().toISOString(),
        source: 'jm',
      });

      delete jmDownloadingMap[currentAlbumId];
      updateDownloadPanel();

      // 自动返回书架
      bookshelfSubPage = null;
      renderBookshelfTab();

    } catch (err) {
      dlStatus.textContent = `❌ ${t('jm_download_failed')}: ${err.message}`;
      dlProgress.style.width = '0%';
      delete jmDownloadingMap[currentAlbumId];
      updateDownloadPanel();
    } finally {
      btn.disabled = false;
      btn.textContent = t('jm_download');
    }
  }
}

// ── PDF 阅读器子页面 ──
function openBookshelfReader(albumId) {
  bookshelfSubPage = 'reader';
  bookshelfReaderAlbumId = albumId;
  renderBookshelfTab();
}
let bookshelfReaderAlbumId = null;

// ── 下载管理页面 ──
function renderBookshelfDownloads(mc) {
  const entries = Object.entries(jmDownloadingMap);

  mc.innerHTML = `
    <div style="max-width:600px;margin:0 auto;padding:16px;">
      <div style="display:flex;align-items:center;gap:8px;margin-bottom:16px;">
        <button id="dl-back" style="width:36px;height:36px;border-radius:50%;border:1px solid var(--border-color,#ddd);background:var(--bg-secondary,#fff);font-size:18px;cursor:pointer;">←</button>
        <h2 style="margin:0;font-size:18px;">📥 下载管理</h2>
        <span style="flex:1;"></span>
        <button id="dl-pause-all" style="padding:6px 12px;border-radius:6px;border:1px solid var(--border-color,#ddd);background:var(--bg-secondary,#fff);font-size:13px;cursor:pointer;">${batchAbortFlag.paused ? '▶ 继续全部' : '⏸ 暂停全部'}</button>
        <button id="dl-cancel-all" style="padding:6px 12px;border-radius:6px;border:1px solid #dc3545;background:transparent;color:#dc3545;font-size:13px;cursor:pointer;">✕ 取消全部</button>
      </div>
      <div id="dl-list" style="display:flex;flex-direction:column;gap:8px;"></div>
      <div id="dl-empty" style="text-align:center;padding:60px 20px;color:var(--text-secondary,#888);display:none;">
        <div style="font-size:48px;margin-bottom:12px;">📥</div>
        <div>没有正在下载的任务</div>
      </div>
    </div>
  `;

  document.getElementById('dl-back').addEventListener('click', () => { bookshelfSubPage = null; renderBookshelfTab(); });
  document.getElementById('dl-pause-all').addEventListener('click', () => {
    batchAbortFlag.paused = !batchAbortFlag.paused;
    renderBookshelfDownloads(mc);
  });
  document.getElementById('dl-cancel-all').addEventListener('click', () => {
    if (confirm('确认取消所有下载？')) {
      batchAbortFlag.cancelled = true;
      // 清空下载中
      Object.keys(jmDownloadingMap).forEach(k => delete jmDownloadingMap[k]);
      updateDownloadPanel();
      renderBookshelfDownloads(mc);
    }
  });

  refreshDownloadList();
}

function refreshDownloadList() {
  const list = document.getElementById('dl-list');
  const empty = document.getElementById('dl-empty');
  if (!list) return;

  const entries = Object.entries(jmDownloadingMap);
  if (entries.length === 0) {
    list.innerHTML = '';
    if (empty) empty.style.display = 'block';
    return;
  }
  if (empty) empty.style.display = 'none';

  list.innerHTML = entries.map(([aid, info]) => {
    const pct = Math.round(info.progress || 0);
    const title = info.title || `JM${info.code}`;
    const isWaiting = info.status === 'waiting';
    const isPaused = info.paused || batchAbortFlag.paused;
    const icon = isWaiting ? '⏳' : isPaused ? '⏸' : '⬇️';
    const statusText = isWaiting ? '等待中' : isPaused ? '已暂停' : `${pct}%`;
    const barColor = isWaiting ? 'var(--border-color,#ccc)' : isPaused ? 'var(--text-secondary,#888)' : 'var(--accent-color,#6366f1)';
    return `
      <div style="padding:12px;border-radius:10px;background:var(--bg-secondary,#f5f5f5);opacity:${isWaiting ? 0.6 : 1};">
        <div style="display:flex;align-items:center;gap:8px;margin-bottom:8px;">
          <span style="font-size:20px;">${icon}</span>
          <div style="flex:1;min-width:0;">
            <div style="font-size:14px;font-weight:600;color:var(--text-primary,#333);overflow:hidden;text-overflow:ellipsis;white-space:nowrap;">${title}</div>
            <div style="font-size:12px;color:var(--text-secondary,#888);">JM${info.code}</div>
          </div>
          <span style="font-size:12px;color:var(--text-secondary,#888);min-width:50px;text-align:right;">${statusText}</span>
          <button class="dl-item-cancel" data-id="${aid}" style="width:28px;height:28px;border-radius:50%;border:1px solid #dc3545;background:transparent;color:#dc3545;font-size:13px;cursor:pointer;">✕</button>
        </div>
        <div style="height:5px;background:var(--border-color,#e0e0e0);border-radius:3px;overflow:hidden;">
          <div style="height:100%;width:${isWaiting ? 0 : pct}%;background:${barColor};border-radius:3px;transition:width 0.3s;"></div>
        </div>
      </div>
    `;
  }).join('');

  list.querySelectorAll('.dl-item-cancel').forEach(btn => {
    btn.addEventListener('click', () => {
      const id = btn.dataset.id;
      delete jmDownloadingMap[id];
      updateDownloadPanel();
      refreshDownloadList();
    });
  });
}

async function renderBookshelfReader(mc) {
  const comic = await jmDbGet(bookshelfReaderAlbumId);
  if (!comic) { bookshelfSubPage = null; renderBookshelfTab(); return; }

  hideNav();
  let _readerFullscreen = false;

  mc.innerHTML = `
    <div style="display:flex;flex-direction:column;height:100%;">
      <div id="reader-toolbar" style="display:flex;align-items:center;gap:8px;padding:10px 16px;border-bottom:1px solid var(--border-color,#ddd);flex-shrink:0;">
        <button id="reader-back" style="width:36px;height:36px;border-radius:50%;border:1px solid var(--border-color,#ddd);background:var(--bg-secondary,#fff);font-size:18px;cursor:pointer;">←</button>
        <span style="flex:1;font-size:15px;font-weight:600;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;color:var(--text-primary,#333);">${comic.title}</span>
        <span id="reader-page-info" style="font-size:13px;color:var(--text-secondary,#888);"></span>
        <button id="reader-fullscreen" style="width:36px;height:36px;border-radius:50%;border:1px solid var(--border-color,#ddd);background:var(--bg-secondary,#fff);font-size:16px;cursor:pointer;">⛶</button>
      </div>
      <div id="reader-container" style="flex:1;overflow:auto;background:#525659;-webkit-overflow-scrolling:touch;"></div>
    </div>
  `;

  const goBack = () => {
    if (document.fullscreenElement) document.exitFullscreen();
    bookshelfSubPage = null;
    showNav();
    renderBookshelfTab();
  };
  document.getElementById('reader-back').addEventListener('click', goBack);

  const container = document.getElementById('reader-container');
  const pageInfo = document.getElementById('reader-page-info');

  // 全屏切换
  const fsBtn = document.getElementById('reader-fullscreen');
  const readerRoot = mc.firstElementChild;
  fsBtn.addEventListener('click', () => {
    if (document.fullscreenElement) document.exitFullscreen();
    else if (readerRoot.requestFullscreen) readerRoot.requestFullscreen().catch(() => {});
  });
  document.addEventListener('fullscreenchange', function onFS() {
    _readerFullscreen = !!document.fullscreenElement;
    fsBtn.textContent = _readerFullscreen ? '✕' : '⛶';
    if (!_readerFullscreen && bookshelfSubPage !== 'reader') {
      document.removeEventListener('fullscreenchange', onFS);
    }
  });

  // ── PDF 渲染（全部渲染） ──
  async function renderPdf(pdfBlob) {
    if (!window.pdfjsLib) {
      container.innerHTML = `<div style="display:flex;align-items:center;justify-content:center;height:100%;color:#fff;font-size:16px;padding:20px;text-align:center;">PDF 引擎加载失败</div>`;
      return;
    }
    const arrayBuf = await pdfBlob.arrayBuffer();
    const pdf = await pdfjsLib.getDocument({ data: arrayBuf }).promise;
    const totalPages = pdf.numPages;
    pageInfo.textContent = `${totalPages} 页`;
    const containerWidth = container.clientWidth || window.innerWidth;
    const dpr = window.devicePixelRatio || 1;

    for (let i = 1; i <= totalPages; i++) {
      const page = await pdf.getPage(i);
      const viewport = page.getViewport({ scale: 1 });
      const fitScale = containerWidth / viewport.width;
      const fitViewport = page.getViewport({ scale: fitScale * dpr });
      const canvas = document.createElement('canvas');
      const ctx = canvas.getContext('2d');
      canvas.width = fitViewport.width;
      canvas.height = fitViewport.height;
      canvas.style.width = containerWidth + 'px';
      canvas.style.height = (fitViewport.height / dpr) + 'px';
      canvas.style.display = 'block';
      canvas.style.margin = '0 auto';
      container.appendChild(canvas);
      await page.render({ canvasContext: ctx, viewport: fitViewport }).promise;
    }
  }

  // ── 图片数组渲染（兼容 pages 格式）──
  function renderImagePages(pages) {
    pageInfo.textContent = `${pages.length} 页`;
    const w = (container.clientWidth || window.innerWidth) + 'px';
    for (let i = 0; i < pages.length; i++) {
      const img = document.createElement('img');
      img.src = 'data:image/jpeg;base64,' + pages[i];
      img.style.cssText = `display:block;width:${w};height:auto;margin:0 auto;`;
      img.loading = 'lazy';
      container.appendChild(img);
    }
  }

  // 主逻辑
  const pages = comic.pages;
  const pdfBlob = comic.pdfBlob;
  if (pages && pages.length > 0) {
    renderImagePages(pages);
  } else if (pdfBlob) {
    try {
      await renderPdf(pdfBlob);
    } catch (e) {
      console.error('[Reader] PDF 渲染失败:', e);
      container.innerHTML = `<div style="display:flex;flex-direction:column;align-items:center;justify-content:center;height:100%;color:#fff;font-size:16px;padding:20px;text-align:center;gap:12px;">
        <div>PDF 渲染失败</div>
        <div style="font-size:13px;color:#aaa;">${e.message || '未知错误'}</div>
      </div>`;
    }
  } else {
    container.innerHTML = `<div style="display:flex;align-items:center;justify-content:center;height:100%;color:#fff;font-size:16px;">无可用数据</div>`;
  }
}

// ── 批量下载模态框 ──
function showBatchDownloadModal() {
  const modal = document.createElement('div');
  modal.className = 'modal';
  modal.innerHTML = `
    <div class="modal-content" style="max-width:500px;max-height:85vh;display:flex;flex-direction:column;">
      <div class="modal-header"><h3>📦 ${t('jm_batch_download')}</h3><button class="modal-close">&times;</button></div>
      <div class="modal-body" style="flex:1;overflow-y:auto;">
        <textarea id="batch-codes" placeholder="${t('jm_batch_hint')}"
          style="width:100%;height:180px;padding:12px;border:2px solid var(--border-color,#ddd);border-radius:10px;font-size:14px;resize:vertical;background:var(--bg-secondary,#fff);color:var(--text-primary,#333);"></textarea>
        <div id="batch-preview" style="margin-top:12px;font-size:13px;color:var(--text-secondary,#888);"></div>
        <div id="batch-progress-area" style="display:none;margin-top:12px;">
          <div id="batch-status" style="font-size:14px;margin-bottom:8px;color:var(--text-primary,#333);"></div>
          <div style="width:100%;height:6px;background:var(--border-color,#e0e0e0);border-radius:3px;overflow:hidden;">
            <div id="batch-bar" style="height:100%;width:0%;background:var(--accent-color,#6366f1);transition:width 0.3s;border-radius:3px;"></div>
          </div>
        </div>
      </div>
      <div style="padding:12px;display:flex;gap:8px;flex-shrink:0;">
        <button id="batch-cancel" class="btn btn-secondary" style="flex:1;">${t('jm_cancel')}</button>
        <button id="batch-start" class="btn btn-primary" style="flex:1;">${t('jm_batch_start')}</button>
        <button id="batch-pause" class="btn btn-secondary" style="display:none;flex:1;">${t('jm_batch_pause')}</button>
      </div>
    </div>
  `;
  document.body.appendChild(modal);
  modal.querySelector('.modal-close').addEventListener('click', () => { batchAbortFlag.cancelled = true; modal.remove(); });
  document.getElementById('batch-cancel').addEventListener('click', () => { batchAbortFlag.cancelled = true; modal.remove(); });
  modal.addEventListener('click', (e) => { if (e.target === modal) { batchAbortFlag.cancelled = true; modal.remove(); } });

  const textarea = document.getElementById('batch-codes');
  const previewEl = document.getElementById('batch-preview');
  textarea.addEventListener('input', () => {
    const codes = parseBatchCodes(textarea.value);
    previewEl.textContent = codes.length ? `${codes.length} 个代码` : '';
  });

  // batchAbortFlag is global

  document.getElementById('batch-start').addEventListener('click', async () => {
    const codes = parseBatchCodes(textarea.value);
    if (codes.length === 0) return;

    // 首次下载弹窗选择格式
    if (!uiConfig.bsSaveImages && !uiConfig.bsSavePdf) { uiConfig.bsSaveImages = true; saveUIConfig(); }

    // 关闭模态框，跳转到下载管理页面
    modal.remove();
    bookshelfSubPage = 'downloads';
    renderBookshelfTab();

    batchAbortFlag = { cancelled: false, paused: false };

    // 预填所有代码到下载列表（跳过已下载的）
    const toDownload = [];
    for (const code of codes) {
      const existing = await jmDbGet(code);
      if (existing && existing.pdfBlob) continue;
      toDownload.push(code);
      jmDownloadingMap[code] = { code, title: `JM${code}`, progress: 0, status: 'waiting', paused: false };
    }
    updateDownloadPanel();

    // 后台并发下载（最多 2 本同时下载）
    const CONCURRENT_COMICS = 2;
    let idx = 0;
    async function downloadNext() {
      while (idx < toDownload.length) {
        while (batchAbortFlag.paused && !batchAbortFlag.cancelled) {
          await new Promise(r => setTimeout(r, 500));
        }
        if (batchAbortFlag.cancelled) return;
        const code = toDownload[idx++];
        jmDownloadingMap[code].status = 'downloading';
        updateDownloadPanel();
        try {
          const albumInfo = await jmGetAlbum(code);
          jmDownloadingMap[code].title = albumInfo.title;
          updateDownloadPanel();

          const dlResult = await jmDownloadChapter(code, albumInfo.title, (pct) => {
            jmDownloadingMap[code].progress = pct;
            updateDownloadPanel();
          });

          const cover = await jmFetchCover(code);
          await jmDbSave({
            albumId: code,
            title: albumInfo.title,
            author: albumInfo.author || '',
            tags: albumInfo.tags || [],
            chapters: albumInfo.chapters || [],
            coverBlob: cover,
            pdfBlob: dlResult.pdfBlob,
            pages: dlResult.pages,
            localPdfName: dlResult.localPdfName || null,
            favorite: false,
            jmTags: [],
            addedAt: new Date().toISOString(),
            source: 'jm',
          });

          delete jmDownloadingMap[code];
          updateDownloadPanel();
          refreshBookshelfGrid();
        } catch (err) {
          const failTitle = jmDownloadingMap[code]?.title || `JM${code}`;
          await jmDbSave({
            albumId: code,
            title: failTitle,
            author: '',
            tags: [],
            chapters: [],
            coverBlob: null,
            pdfBlob: null,
            favorite: false,
            jmTags: [],
            addedAt: new Date().toISOString(),
            source: 'jm',
            failed: true,
            errorMsg: err.message,
          }).catch(() => {});
          delete jmDownloadingMap[code];
          updateDownloadPanel();
          refreshBookshelfGrid();
        }
      }
    }
    const workers = Array.from({ length: Math.min(CONCURRENT_COMICS, toDownload.length) }, () => downloadNext());
    await Promise.all(workers);

    // 下载完成，刷新书架
    updateDownloadPanel();
    refreshBookshelfGrid();
  });

  document.getElementById('batch-pause').addEventListener('click', () => {
    batchAbortFlag.paused = !batchAbortFlag.paused;
    document.getElementById('batch-pause').textContent = batchAbortFlag.paused ? t('jm_batch_resume') : t('jm_batch_pause');
  });
}

function parseBatchCodes(text) {
  return text.split(/[\n,，\s]+/)
    .map(s => parseJMCode(s))
    .filter(Boolean);
}

function renderCurrentTab() {
  // 记录 tab 需要特殊布局：日历固定顶部，记录独立滚动
  if (currentTab === 'records') {
    mainContent.style.display = 'flex';
    mainContent.style.flexDirection = 'column';
    mainContent.style.overflowY = 'hidden';
    mainContent.style.paddingBottom = '0';
  } else {
    mainContent.style.display = '';
    mainContent.style.flexDirection = '';
    mainContent.style.overflowY = '';
    mainContent.style.paddingBottom = '';
  }

  switch (currentTab) {
    case 'add':
      renderAddTab();
      break;
    case 'records':
      editingRecordId = null;
      calendarCollapsed = statsConfig.calendarDefaultCollapsed;
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
    case 'tools':
    case 'bookshelf':
      renderBookshelfTab();
      break;
  }
}

function initNavigation() {
  renderNavigation();
}

// ── 导航栏显隐（子页面隐藏） ──
function hideNav() {
  bottomNav.style.display = 'none';
  mainContent.style.paddingBottom = '16px';
}
function showNav() {
  bottomNav.style.display = '';
  if (uiConfig.navPosition === 'top') {
    mainContent.style.paddingTop = '80px';
    mainContent.style.paddingBottom = '16px';
  } else {
    mainContent.style.paddingTop = '16px';
    mainContent.style.paddingBottom = '90px';
  }
}

function renderNavigation() {
  const navIcons = {
    add: '➕',
    records: '📋',
    stats: '📊',
    settings: '⚙️',
    bookshelf: '📚',
    tools: '📚'
  };
  
  let navHTML = '';
  uiConfig.navOrder.forEach((tab, index) => {
    navHTML += `
      <button class="nav-item ${currentTab === tab ? 'active' : ''}" data-tab="${tab}">
        <span class="nav-icon">${navIcons[tab]}</span>
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
        // 显示自定义的输入界面，而不是使用prompt()
        text = await showCustomPrompt(t('paste_data_here') + ':');
      }
      
      if (!text || !text.trim()) {
        alert(t('clipboard_empty'));
        return;
      }
      
      // 验证输入内容
      if (text.length < 10) {
        alert('输入数据过短，请检查是否正确复制了完整的数据');
        return;
      }
      
      if (!confirm(t('import_confirm'))) {
        return;
      }
      
      try {
        // 优化JSON解析，添加错误处理和性能优化
        const startTime = performance.now();
        
        // 移除可能的BOM字符和多余空格
        text = text.trim().replace(/^\ufeff/, '');
        
        const data = JSON.parse(text);
        const parseTime = performance.now() - startTime;
        console.log(`JSON解析耗时: ${parseTime.toFixed(2)}ms`);
        
        // 验证数据结构
        if (!data || typeof data !== 'object') {
          alert('无效的数据格式，请检查复制的数据是否完整');
          return;
        }
        
        if (!data.records || !Array.isArray(data.records)) {
          alert('数据中缺少记录信息，请检查复制的数据是否完整');
          return;
        }
        
        // 验证记录格式并过滤无效记录
        const validRecords = [];
        const invalidRecords = [];
        
        data.records.forEach((record, index) => {
          if (record && record.id && record.startTime && typeof record.duration === 'number') {
            // 验证日期格式
            if (!isNaN(new Date(record.startTime).getTime())) {
              validRecords.push(record);
            } else {
              invalidRecords.push(index + 1);
            }
          } else {
            invalidRecords.push(index + 1);
          }
        });
        
        if (invalidRecords.length > 0) {
          alert(`发现 ${invalidRecords.length} 条无效记录（编号：${invalidRecords.join(', ')}），导入可能会出现问题`);
        }
        
        // 导入数据
        const importStartTime = performance.now();
        
        if (validRecords.length > 0) {
          localStorage.setItem('records', JSON.stringify(validRecords));
        }
        
        if (data.media && Array.isArray(data.media)) {
          localStorage.setItem('media', JSON.stringify(data.media));
          media = data.media;
        }
        if (data.fetishes && Array.isArray(data.fetishes)) {
          localStorage.setItem('fetishes', JSON.stringify(data.fetishes));
          fetishes = data.fetishes;
        }
        
        // 更新缓存
        updateMediaCache();
        updateFetishCache();
        
        const importTime = performance.now() - importStartTime;
        console.log(`数据导入耗时: ${importTime.toFixed(2)}ms`);
        
        alert(t('import_success') + `\n导入记录数: ${validRecords.length}\n无效记录数: ${invalidRecords.length}`);
        renderCurrentTab();
      } catch (error) {
        if (error instanceof SyntaxError) {
          // 尝试修复常见的JSON格式问题
          try {
            // 修复可能的单引号问题
            text = text.replace(/'/g, '"');
            // 修复可能的尾随逗号问题
            text = text.replace(/,\s*}/g, '}').replace(/,\s*\]/g, ']');
            const data = JSON.parse(text);
            alert('数据格式有轻微问题，但已自动修复并导入成功');
            // 重新处理修复后的数据
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
              updateMediaCache();
              updateFetishCache();
              renderCurrentTab();
            }
            return;
          } catch (e) {
            alert('数据格式错误，无法解析JSON。请检查复制的数据是否完整且格式正确');
          }
        } else {
          alert(t('invalid_file'));
        }
        console.error('Import error:', error);
      }
    } catch (error) {
      alert(t('cannot_read_clipboard'));
      console.error('Clipboard error:', error);
    }
  }
  doImport();
}

// 自定义prompt函数，避免虚拟键盘遮挡问题
function showCustomPrompt(message) {
  return new Promise((resolve) => {
    // 创建模态框
    const modal = document.createElement('div');
    modal.className = 'modal';
    modal.innerHTML = `
      <div class="modal-content">
        <div class="modal-header">
          <h3>${message}</h3>
          <button class="modal-close">&times;</button>
        </div>
        <div class="modal-body">
          <textarea id="custom-prompt-input" style="width: 100%; height: 150px; padding: 12px; border: 2px solid var(--border-color); border-radius: 12px; font-size: 16px; resize: none; overflow-y: auto;"></textarea>
          <div style="margin-top: 16px; display: flex; gap: 12px;">
            <button class="btn btn-secondary" id="custom-prompt-cancel" style="flex: 1;">取消</button>
            <button class="btn btn-primary" id="custom-prompt-ok" style="flex: 1;">确定</button>
          </div>
        </div>
      </div>
      <style>
        @media (max-width: 768px) {
          .modal-content {
            max-height: 85vh;
          }
          #custom-prompt-input {
            height: 120px;
            font-size: 14px;
          }
        }
      </style>
    `;
    
    document.body.appendChild(modal);
    
    // 聚焦输入框
    const input = document.getElementById('custom-prompt-input');
    input.focus();
    
    // 关闭模态框
    function closeModal(value = null) {
      modal.remove();
      resolve(value);
    }
    
    // 绑定事件
    modal.querySelector('.modal-close').addEventListener('click', () => closeModal(null));
    document.getElementById('custom-prompt-cancel').addEventListener('click', () => closeModal(null));
    document.getElementById('custom-prompt-ok').addEventListener('click', () => closeModal(input.value));
    
    // 点击模态框外部关闭
    modal.addEventListener('click', (e) => {
      if (e.target === modal) {
        closeModal(null);
      }
    });
  });
}

if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('sw.js').catch(() => {});
  });
}

initApp();