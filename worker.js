const urlsToCache = ["","index.html","manifest.json","img/icon.svg","js/app.js?v=abacc29cfc91e210f90ecae84cd2309ca645f5d6","css/styles.css?v=c13090ab37e42f362b73350f6e716083778c1742"];

self.addEventListener('install', event => {
    event.waitUntil(caches.open('resources').then(cache => cache.addAll(urlsToCache)));
});

self.addEventListener('fetch', event => {
    event.respondWith(caches.open('resources')
                      .then(cache => cache.match(event.request))
                      .then(response => response ?? fetch(event.request)));
});

