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
    video: '黄片',
    comic: '黄漫',
    text: '黄文',
    other: '其他',
    notes: '备注',
    edit_record: '编辑记录',
    save_changes: '保存修改',
    favorite_medium: '最喜欢的媒介',
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
    medium: '媒介',
    notes: '备注',
    github: 'GitHub 仓库',
    share_screenshot: '分享截图',
    screenshot_saved: '截图已保存！'
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
    video: 'Video',
    comic: 'Comic',
    text: 'Text',
    other: 'Other',
    notes: 'Notes',
    edit_record: 'Edit Record',
    save_changes: 'Save Changes',
    favorite_medium: 'Favorite Medium',
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
    medium: 'Medium',
    notes: 'Notes',
    github: 'GitHub Repo',
    share_screenshot: 'Share Screenshot',
    screenshot_saved: 'Screenshot saved!'
  }
};

let currentLang = localStorage.getItem('lang') || 'zh';
let currentTheme = localStorage.getItem('theme') || 'light';

function t(key) {
  return i18n[currentLang][key] || key;
}

function applyTheme() {
  document.body.classList.remove('light-theme', 'dark-theme');
  document.body.classList.add(currentTheme + '-theme');
}

applyTheme();

let records = JSON.parse(localStorage.getItem('records') || '[]');
let currentTab = 'add';
let timerRunning = false;
let timerStartTime = null;
let timerInterval = null;
let timerElapsed = 0;

const mainContent = document.getElementById('main-content');
const bottomNav = document.getElementById('bottom-nav');

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

function getMediumLabel(medium) {
  const labels = {
    video: t('video'),
    comic: t('comic'),
    text: t('text'),
    other: t('other')
  };
  return labels[medium] || t('other');
}

let editingRecordId = null;

function saveRecords() {
  localStorage.setItem('records', JSON.stringify(records));
}

function renderAddTab() {
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
            <option value="video" selected>${t('video')}</option>
            <option value="comic">${t('comic')}</option>
            <option value="text">${t('text')}</option>
            <option value="other">${t('other')}</option>
          </select>
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
            <option value="video" selected>${t('video')}</option>
            <option value="comic">${t('comic')}</option>
            <option value="text">${t('text')}</option>
            <option value="other">${t('other')}</option>
          </select>
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
    
    const record = {
      id: Date.now(),
      startTime: new Date(timerStartTime).toISOString(),
      duration: timerElapsed,
      medium: document.getElementById('timer-medium').value,
      notes: document.getElementById('timer-notes').value
    };
    records.unshift(record);
    saveRecords();
    showToast(t('record_saved'));
    
    timerElapsed = 0;
    timerDisplay.textContent = '00:00';
    document.getElementById('timer-notes').value = '';
  }

  document.getElementById('save-manual-btn').addEventListener('click', () => {
    const datetime = document.getElementById('manual-datetime').value;
    const mins = parseInt(document.getElementById('manual-min').value) || 0;
    const secs = parseInt(document.getElementById('manual-sec').value) || 0;
    
    if (!datetime) {
      showToast('请选择开始时间');
      return;
    }
    
    const record = {
      id: Date.now(),
      startTime: new Date(datetime).toISOString(),
      duration: mins * 60 + secs,
      medium: document.getElementById('manual-medium').value,
      notes: document.getElementById('manual-notes').value
    };
    records.unshift(record);
    records.sort((a, b) => new Date(b.startTime) - new Date(a.startTime));
    saveRecords();
    showToast(t('record_saved'));
    
    document.getElementById('manual-min').value = '0';
    document.getElementById('manual-sec').value = '0';
    document.getElementById('manual-notes').value = '';
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
      html += `
        <div class="record-group">
          <div class="group-header">${formatMonth(grouped[month][0].startTime)}</div>
          ${grouped[month].map(record => `
            <div class="record-item" data-record-id="${record.id}">
              <div class="record-info">
                <div class="record-time">${formatDate(record.startTime)}</div>
                <div class="record-duration">${formatDuration(record.duration)}</div>
                ${record.medium ? `<div class="record-medium">${getMediumLabel(record.medium)}</div>` : ''}
                ${record.notes ? `<div class="record-notes">${record.notes}</div>` : ''}
              </div>
              <div style="display: flex; gap: 8px;">
                <button class="record-edit" data-id="${record.id}">✏️</button>
                <button class="record-delete" data-id="${record.id}">🗑️</button>
              </div>
            </div>
          `).join('')}
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
          <option value="video" ${record.medium === 'video' ? 'selected' : ''}>${t('video')}</option>
          <option value="comic" ${record.medium === 'comic' ? 'selected' : ''}>${t('comic')}</option>
          <option value="text" ${record.medium === 'text' ? 'selected' : ''}>${t('text')}</option>
          <option value="other" ${record.medium === 'other' ? 'selected' : ''}>${t('other')}</option>
        </select>
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
        notes: notes
      };
      records.sort((a, b) => new Date(b.startTime) - new Date(a.startTime));
      saveRecords();
      showToast(t('record_saved'));
      editingRecordId = null;
      renderRecordsTab();
    }
  });
}

function renderStatsTab() {
  const now = new Date();
  const firstDay = new Date(now.getFullYear(), now.getMonth(), 1);
  const lastMonthFirst = new Date(now.getFullYear(), now.getMonth() - 1, 1);
  const lastMonthLast = new Date(now.getFullYear(), now.getMonth(), 0);
  const oneYearAgo = new Date(now.getFullYear() - 1, now.getMonth(), now.getDate());

  mainContent.innerHTML = `
    <div class="card">
      <h3 class="card-title">${t('stats_title')}</h3>
      <div style="margin-bottom: 16px;">
        <button class="btn btn-secondary" id="screenshot-btn" style="width: 100%; padding: 12px 16px;">
          <span style="margin-right: 8px;">📸</span>${t('share_screenshot')}
        </button>
      </div>
      <div class="tab-buttons" style="margin-bottom: 16px;">
        <button class="tab-btn active" data-preset="thisMonth">${t('preset_this_month')}</button>
        <button class="tab-btn" data-preset="lastMonth">${t('preset_last_month')}</button>
        <button class="tab-btn" data-preset="oneYear">${t('preset_one_year')}</button>
        <button class="tab-btn" data-preset="custom">${t('preset_custom')}</button>
      </div>
      <div class="date-range" id="custom-date-range">
        <input type="date" class="form-input" id="stat-from" value="${firstDay.toISOString().slice(0, 10)}">
        <input type="date" class="form-input" id="stat-to" value="${now.toISOString().slice(0, 10)}">
      </div>
      <div id="stats-result"></div>
    </div>
  `;

  let currentPreset = 'thisMonth';

  function setDateRange(from, to) {
    document.getElementById('stat-from').value = from.toISOString().slice(0, 10);
    document.getElementById('stat-to').value = to.toISOString().slice(0, 10);
  }

  function applyPreset(preset) {
    currentPreset = preset;
    const customDateRange = document.getElementById('custom-date-range');
    
    switch (preset) {
      case 'thisMonth':
        setDateRange(firstDay, now);
        customDateRange.classList.add('hidden');
        break;
      case 'lastMonth':
        setDateRange(lastMonthFirst, lastMonthLast);
        customDateRange.classList.add('hidden');
        break;
      case 'oneYear':
        setDateRange(oneYearAgo, now);
        customDateRange.classList.add('hidden');
        break;
      case 'custom':
        customDateRange.classList.remove('hidden');
        break;
    }
    calculateStats();
  }

  function calculateStats() {
    const from = new Date(document.getElementById('stat-from').value);
    const to = new Date(document.getElementById('stat-to').value);
    to.setHours(23, 59, 59, 999);

    const filtered = records.filter(r => {
      const d = new Date(r.startTime);
      return d >= from && d <= to;
    });

    let lastMonthAvg = 0;
    let diff = 0;
    let diffPercent = 0;
    
    if (currentPreset === 'thisMonth') {
      const lastMonthFiltered = records.filter(r => {
        const d = new Date(r.startTime);
        return d >= lastMonthFirst && d <= lastMonthLast;
      });
      lastMonthAvg = lastMonthFiltered.length > 0 ? Math.round(lastMonthFiltered.reduce((sum, r) => sum + r.duration, 0) / lastMonthFiltered.length) : 0;
    }

    const count = filtered.length;
    const avgDuration = count > 0 ? Math.round(filtered.reduce((sum, r) => sum + r.duration, 0) / count) : 0;
    const minDuration = count > 0 ? Math.min(...filtered.map(r => r.duration)) : 0;
    const maxDuration = count > 0 ? Math.max(...filtered.map(r => r.duration)) : 0;
    
    if (lastMonthAvg > 0) {
      diff = avgDuration - lastMonthAvg;
      diffPercent = Math.round((diff / lastMonthAvg) * 100);
    }

    const mediumCounts = {};
    filtered.forEach(record => {
      const medium = record.medium || 'other';
      mediumCounts[medium] = (mediumCounts[medium] || 0) + 1;
    });

    let favoriteMedium = null;
    let maxCount = 0;
    Object.keys(mediumCounts).forEach(medium => {
      if (mediumCounts[medium] > maxCount) {
        maxCount = mediumCounts[medium];
        favoriteMedium = medium;
      }
    });

    document.getElementById('stats-result').innerHTML = `
      <div class="stats-grid">
        <div class="stat-card">
          <div class="stat-value">${count}</div>
          <div class="stat-label">${t('total_count')}</div>
        </div>
        <div class="stat-card">
          <div class="stat-value">${formatDuration(avgDuration)}</div>
          <div class="stat-label">${t('avg_duration')}</div>
          ${currentPreset === 'thisMonth' && lastMonthAvg > 0 ? `<div class="stat-change ${diff >= 0 ? 'positive' : 'negative'}">${diff >= 0 ? '+' : ''}${diffPercent}% ${t(diff >= 0 ? 'increase' : 'decrease')}</div>` : ''}
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
      ${favoriteMedium ? `
      <div class="card" style="margin-top: 16px;">
        <div style="text-align: center; padding: 16px;">
          <div style="font-size: 14px; color: var(--text-secondary); margin-bottom: 8px;">${t('favorite_medium')}</div>
          <div style="font-size: 24px; font-weight: 700; color: var(--primary-color);">${getMediumLabel(favoriteMedium)}</div>
          <div style="font-size: 14px; color: var(--text-secondary); margin-top: 4px;">${maxCount} 次</div>
        </div>
      </div>
      ` : ''}
    `;
  }

  applyPreset('thisMonth');
  
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

  document.getElementById('screenshot-btn').addEventListener('click', takeScreenshot);
}

function takeScreenshot() {
  if (typeof html2canvas === 'undefined') {
    alert('截图功能需要加载 html2canvas 库，请确保网络连接正常！');
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
    alert('截图失败，请刷新页面重试！');
  });
}

function renderSettingsTab() {
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
        <span class="settings-label">版本</span>
        <span class="settings-value">1.2</span>
      </div>
      <a href="https://github.com/Alfred5779/Self-Pleasure-Tracker?tab=readme-ov-file#mit-license" target="_blank" style="display: flex; align-items: center; justify-content: center; gap: 8px; padding: 12px; background: var(--card-bg); border-radius: 12px; text-decoration: none; color: var(--text-color); margin-top: 12px;">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
        </svg>
        <span>${t('github')}</span>
      </a>
    </div>
    <div class="card" style="margin-top: 16px;">
      <h3 class="card-title">数据管理</h3>
      <div style="display: flex; gap: 8px; margin-bottom: 12px;">
        <button class="btn btn-primary" id="export-json" style="flex: 1;">${t('export_json')}</button>
        <button class="btn btn-primary" id="export-csv" style="flex: 1;">${t('export_csv')}</button>
      </div>
      <button class="btn btn-primary" id="export-excel" style="width: 100%; margin-bottom: 12px;">${t('export_excel')}</button>
      <button class="btn btn-secondary" id="import-btn" style="width: 100%;">${t('import_data')}</button>
      <input type="file" id="import-file" accept=".json" style="display: none;">
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

  document.getElementById('export-json').addEventListener('click', () => exportData('json'));
  document.getElementById('export-csv').addEventListener('click', () => exportData('csv'));
  document.getElementById('export-excel').addEventListener('click', () => exportData('excel'));
  document.getElementById('import-btn').addEventListener('click', () => {
    document.getElementById('import-file').click();
  });
  document.getElementById('import-file').addEventListener('change', importData);
}

function exportData(format = 'json') {
  const records = JSON.parse(localStorage.getItem('records') || '[]');
  const dateStr = new Date().toISOString().slice(0,10);
  
  if (format === 'json') {
    const data = {
      version: '1.0',
      exportDate: new Date().toISOString(),
      records: records
    };
    const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
    downloadFile(blob, `selfcare-data-${dateStr}.json`);
  } else if (format === 'csv' || format === 'excel') {
    const headers = [t('id'), t('date'), t('start_time'), t('duration'), t('medium'), t('notes')];
    let csvContent = headers.join(',') + '\n';
    
    records.forEach((record, index) => {
      const row = [
        index + 1,
        new Date(record.startTime).toLocaleDateString(),
        new Date(record.startTime).toLocaleTimeString(),
        record.duration,
        getMediumLabel(record.medium || 'other'),
        (record.notes || '').replace(/"/g, '""')
      ];
      csvContent += row.map(field => `"${field}"`).join(',') + '\n';
    });
    
    const blob = new Blob(['\ufeff' + csvContent], { type: 'text/csv;charset=utf-8;' });
    const ext = format === 'excel' ? 'csv' : 'csv';
    downloadFile(blob, `selfcare-data-${dateStr}.${ext}`);
  }
  
  alert(t('export_success'));
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
  if (!file) return;
  
  if (!confirm(t('import_confirm'))) {
    e.target.value = '';
    return;
  }

  const reader = new FileReader();
  reader.onload = (event) => {
    try {
      const data = JSON.parse(event.target.result);
      if (data.records && Array.isArray(data.records)) {
        localStorage.setItem('records', JSON.stringify(data.records));
        alert(t('import_success'));
        renderCurrentTab();
      } else {
        alert(t('invalid_file'));
      }
    } catch (error) {
      alert(t('invalid_file'));
    }
    e.target.value = '';
  };
  reader.readAsText(file);
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
      renderRecordsTab();
      break;
    case 'stats':
      renderStatsTab();
      break;
    case 'settings':
      renderSettingsTab();
      break;
  }
}

bottomNav.querySelectorAll('.nav-item').forEach(btn => {
  btn.addEventListener('click', () => {
    bottomNav.querySelectorAll('.nav-item').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    currentTab = btn.dataset.tab;
    renderCurrentTab();
  });
});

if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('sw.js').catch(() => {});
  });
}

renderCurrentTab();