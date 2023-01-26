const urlsToCache = ["","index.html","manifest.json","img/icon.svg","js/app.js?v=cb15bee92b7e9fcd7c8b9d883034596152fd621e","css/styles.css?v=3874cab5ce0692ca54e2506eed3fc19d73962d50"];

self.addEventListener('install', event => {
    event.waitUntil(caches.open('resources').then(cache => cache.addAll(urlsToCache)));
});

self.addEventListener('fetch', event => {
    event.respondWith(caches.open('resources')
                      .then(cache => cache.match(event.request))
                      .then(response => response ?? fetch(event.request)));
});

