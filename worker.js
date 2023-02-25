const urlsToCache = ["","index.html","manifest.json","img/icon.svg","js/app.js?v=3e7e22a3dc8baeccb3e205e864f3cfd8515b90eb","css/styles.css?v=db66a53c8904774df80ed2dacb765b8191c11396"];

self.addEventListener('install', event => {
    event.waitUntil(caches.open('resources').then(cache => cache.addAll(urlsToCache)));
});

self.addEventListener('fetch', event => {
    event.respondWith(caches.open('resources')
                      .then(cache => cache.match(event.request))
                      .then(response => response ?? fetch(event.request)));
});

