
importScripts('https://storage.googleapis.com/workbox-cdn/releases/6.2.0/workbox-sw.js')

workbox.precaching.precacheAndRoute([
  'index.html',
  'archivosPdfs.js',
  'openPdf.html',
  'pdfs.html',
  'ajax.js',
  'css/bootstrap.css',
  'css/bootstrap.min.css',
  'css/nav.css',
  'css/style.css'
]);

workbox.routing.registerRoute(
  new RegExp('\\.*'),
  new workbox.strategies.CacheFirst({
    cacheName: 'CacheHTML',
  })
);

workbox.routing.registerRoute(
  new RegExp('\\.json'),
  new workbox.strategies.NetworkFirst()
);

// // Files to cache
// const cacheName = 'appCacheV1';
// const contentToCache = [
//     'index.html',
//     'archivosPdfs.js',
//     'openPdf.html',
//     'pdfs.html',
//     'viewPdf.js',
//     'ajax.js',
//     'css/bootstrap.css',
//     'css/bootstrap.min.css',
//     'css/nav.css',
//     'css/style.css'

// ];



// // Installing Service Worker
// self.addEventListener('install', (e) => {
//   console.log('[Service Worker] Install');
//   e.waitUntil((async () => {
//     const cache = await caches.open(cacheName);
//     // console.log('[Service Worker] Caching all: app shell and content');
//     await cache.addAll(contentToCache);
//   })());
// });

// // Fetching content using Service Worker
// self.addEventListener('fetch', (e) => {
//   e.respondWith((async () => {
//     const r = await caches.match(e.request);
//     // console.log(`[Service Worker] Fetching resource: ${e.request.url}`);
//     if (r) return r;
//     const response = await fetch(e.request);
//     const cache = await caches.open(cacheName);
//     // console.log(`[Service Worker] Caching new resource: ${e.request.url}`);
//     cache.put(e.request, response.clone());
//     return response;
//   })());
// });