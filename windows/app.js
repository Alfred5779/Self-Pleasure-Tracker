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
    app_description: '起飞助手是一款用于记录和分析个人行为的开源应用。'
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
    app_description: 'Takeoff Assistant is an open-source app for tracking and analyzing personal behavior.'
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
    storage.records = JSON.parse(localStorage.getItem('records') || '[]');
    storage.media = JSON.parse(localStorage.getItem('media') || '[]');
    storage.fetishes = JSON.parse(localStorage.getItem('fetishes') || '[]');
  } catch (e) {
    storage.lang = 'zh';
    storage.theme = 'light';
    storage.records = [];
    storage.media = [];
    storage.fetishes = [];
  }

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
let records = [];
let media = [];
let fetishes = [];

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

const mainContent = document.getElementById('main-content');
const bottomNav = document.getElementById('bottom-nav');

function t(key) {
  return i18n[currentLang][key] || key;
}

function applyTheme() {
  document.body.classList.remove('light-theme', 'dark-theme');
  document.body.classList.add(currentTheme + '-theme');
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
    records = storage.records;
    media = storage.media;
    fetishes = storage.fetishes;
    
    updateMediaCache();
    updateFetishCache();
    
    applyTheme();
    updateNavigationLabels();
    
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

  const grouped = {};
  records.forEach(record => {
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
      const recordsHTML = grouped[month].map(record => {
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
  const padding = 50;
  const chartWidth = canvas.width - padding * 2;
  const chartHeight = canvas.height - padding * 2;
  
  const isDarkMode = currentTheme === 'dark';
  const textColor = isDarkMode ? '#ffffff' : '#333333';
  const barColor = '#6366f1';
  
  const maxValue = Math.max(...data.map(d => d.value), 1);
  const barWidth = Math.max(15, Math.min(80, chartWidth / data.length - 8));
  
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  
  data.forEach((item, index) => {
    const barHeight = (item.value / maxValue) * chartHeight;
    const x = padding + index * (chartWidth / data.length) + (chartWidth / data.length - barWidth) / 2;
    const y = padding + chartHeight - barHeight;
    
    ctx.fillStyle = barColor;
    ctx.fillRect(x, y, barWidth, barHeight);
    
    ctx.fillStyle = textColor;
    ctx.font = 'bold 12px Arial';
    ctx.textAlign = 'center';
    
    if (item.value > 0) {
      ctx.fillText(item.value.toString(), x + barWidth / 2, y - 8);
    }
    
    ctx.font = '10px Arial';
    const label = item.label;
    
    if (data.length > 12) {
      if (index % 2 === 0) {
        ctx.fillText(label, x + barWidth / 2, canvas.height - 12);
      }
    } else {
      ctx.fillText(label, x + barWidth / 2, canvas.height - 12);
    }
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

function getWeekKey(date) {
  const d = new Date(date);
  d.setHours(0, 0, 0, 0);
  const day = d.getDay();
  const diff = d.getDate() - day + (day === 0 ? -6 : 1);
  const monday = new Date(d.setDate(diff));
  return `${monday.getFullYear()}-${String(monday.getMonth() + 1).padStart(2, '0')}-${String(monday.getDate()).padStart(2, '0')}`;
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
  const diff = current.getDate() - day + (day === 0 ? -6 : 1);
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
      const diff = from.getDate() - day + (day === 0 ? -6 : 1);
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

  mainContent.innerHTML = `
    <div class="card">
      <h3 class="card-title">${t('stats_title')}</h3>
      ${screenshotButtonHTML}
      <div class="tab-buttons" style="margin-bottom: 16px;">
        <button class="tab-btn active" data-preset="thisWeek">${t('preset_this_week')}</button>
        <button class="tab-btn" data-preset="thisMonth">${t('preset_this_month')}</button>
        <button class="tab-btn" data-preset="lastMonth">${t('preset_last_month')}</button>
        <button class="tab-btn" data-preset="thisYear">${t('preset_this_year')}</button>
        <button class="tab-btn" data-preset="custom">${t('preset_custom')}</button>
      </div>
      <div class="date-range" id="custom-date-range" style="display: none;">
        <input type="date" class="form-input" id="stat-from" value="${defaultRange.from.toISOString().slice(0, 10)}">
        <input type="date" class="form-input" id="stat-to" value="${defaultRange.to.toISOString().slice(0, 10)}">
      </div>
      <div id="stats-result"></div>
    </div>
  `;

  let currentPreset = 'thisWeek';
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
          if (currentPreset === 'thisYear') {
            key = getMonthKey(record.startTime);
          } else if (currentPreset === 'custom') {
            const totalDays = Math.ceil((to - from) / (1000 * 60 * 60 * 24));
            if (totalDays > 90) {
              key = getMonthKey(record.startTime);
            } else {
              key = getWeekKey(record.startTime);
            }
          } else {
            key = getWeekKey(record.startTime);
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

    const mediumChartData = Object.keys(mediumCounts).map(key => ({
      label: getMediumLabel(key),
      value: mediumCounts[key]
    })).sort((a, b) => b.value - a.value);

    const fetishChartData = Object.keys(fetishCounts).map(key => ({
      label: getFetishLabel(key),
      value: fetishCounts[key]
    })).sort((a, b) => b.value - a.value);

    let allKeys;
    let formatLabel;
    if (currentPreset === 'thisYear') {
      allKeys = generateMonthKeys(from, to);
      formatLabel = formatMonthLabelShort;
    } else if (currentPreset === 'custom') {
      const totalDays = Math.ceil((to - from) / (1000 * 60 * 60 * 24));
      if (totalDays > 90) {
        allKeys = generateMonthKeys(from, to);
        formatLabel = formatMonthLabelShort;
      } else {
        allKeys = generateWeekKeys(from, to);
        formatLabel = formatWeekLabel;
      }
    } else {
      allKeys = generateWeekKeys(from, to);
      formatLabel = formatWeekLabel;
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

    document.getElementById('stats-result').innerHTML = `
      <div class="card" style="margin-bottom: 16px;">
        <h3 class="card-title">${t('duration_stats')}</h3>
        <div class="stats-grid">
          <div class="stat-card">
            <div class="stat-value">${count}</div>
            <div class="stat-label">${t('total_count')}</div>
            ${changeHTML}
          </div>
          <div class="stat-card">
            <div class="stat-value">${frequency}</div>
            <div class="stat-label">${t('frequency')} (${t('times_per_week')})</div>
          </div>
          <div class="stat-card">
            <div class="stat-value">${longestAbstinence}</div>
            <div class="stat-label">${t('longest_abstinence')} (${t('days')})</div>
          </div>
          <div class="stat-card">
            <div class="stat-value">${formatDuration(avgDuration)}</div>
            <div class="stat-label">${t('avg_duration')}</div>
          </div>
          <div class="stat-card">
            <div class="stat-value">${formatDuration(minDuration)}</div>
            <div class="stat-label">${t('min_duration')}</div>
          </div>
          <div class="stat-card">
            <div class="stat-value">${formatDuration(maxDuration)}</div>
            <div class="stat-label">${t('max_duration')}</div>
          </div>
        </div>
        <div style="margin-top: 16px;">
          <h4 style="margin-bottom: 12px;">${t('count_trend')}</h4>
          <canvas id="count-bar" width="500" height="250" style="width: 100%; max-width: 600px; display: block; margin: 0 auto;"></canvas>
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
      drawBarChart('count-bar', barChartData, currentPreset === 'thisWeek' || currentPreset === 'lastMonth' ? 'week' : 'month');
      
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

  applyPreset('thisWeek');
  
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
        <span class="settings-value">0.91</span>
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
        <button class="btn btn-secondary" id="data-management-btn" style="width: 100%; margin-bottom: 8px;">${t('data_management')}</button>
        <button class="btn btn-secondary" id="medium-management-btn" style="width: 100%; margin-bottom: 8px;">${t('medium_management')}</button>
        <button class="btn btn-secondary" id="fetish-management-btn" style="width: 100%; margin-bottom: 8px;">${t('fetish_management')}</button>
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
          <span style="color: var(--primary-color); font-weight: 700;">0.91</span>
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
            <h5 style="color: var(--primary-color); margin-bottom: 8px; font-size: 15px;">${t('cl_v091_title')}</h5>
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
      <div style="display: flex; gap: 8px; margin-bottom: 12px;">
        <button class="btn btn-primary" id="export-json" style="flex: 1;">${t('export_json')}</button>
        <button class="btn btn-primary" id="export-csv" style="flex: 1;">${t('export_csv')}</button>
      </div>
      <button class="btn btn-primary" id="export-excel" style="width: 100%; margin-bottom: 12px;">${t('export_excel')}</button>
      <button class="btn btn-primary" id="receive-data-btn" style="width: 100%;">📥 ${t('receive_data')}</button>
      <input type="file" id="import-file" accept=".json" style="display: none;">
    `;
  } else {
    dataManagementHTML = `
      <button class="btn btn-secondary" id="import-btn" style="width: 100%; margin-bottom: 16px;">📥 ${t('import_data')}</button>
      <div class="form-group">
        <label class="form-label">选择日期范围</label>
        <div style="display: flex; gap: 8px; margin-bottom: 8px;">
          <input type="date" class="form-input" id="date-from" style="flex: 1;">
          <input type="date" class="form-input" id="date-to" style="flex: 1;">
        </div>
        <button class="btn btn-secondary" id="reset-date-btn" style="width: 100%; margin-bottom: 16px;">重置为全部记录</button>
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
    document.getElementById('export-json').addEventListener('click', () => exportData('json'));
    document.getElementById('export-csv').addEventListener('click', () => exportData('csv'));
    document.getElementById('export-excel').addEventListener('click', () => exportData('excel'));
    document.getElementById('receive-data-btn').addEventListener('click', receiveDataFromMobile);
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

const navItems = bottomNav.querySelectorAll('.nav-item');
navItems.forEach(btn => {
  btn.addEventListener('click', () => {
    navItems.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    currentTab = btn.dataset.tab;
    renderCurrentTab();
  });
});

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