const CACHE_NAME = 'selfcare-v4';
const urlsToCache = [
  './',
  './index.html',
  './styles.css',
  './app.js',
  './pdf.min.js',
  './manifest.json'
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => cache.addAll(urlsToCache))
  );
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then(names =>
      Promise.all(names.filter(n => n !== CACHE_NAME).map(n => caches.delete(n)))
    )
  );
});

self.addEventListener('fetch', (event) => {
  // 不缓存 API 请求和非 GET 请求
  if (event.request.method !== 'GET' || event.request.url.includes('/api/jm/')) {
    event.respondWith(fetch(event.request));
    return;
  }
  event.respondWith(
    caches.match(event.request)
      .then((response) => response || fetch(event.request))
  );
});
