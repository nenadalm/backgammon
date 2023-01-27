const urlsToCache = ["","index.html","manifest.json","img/icon.svg","js/app.js?v=9f77a116dc7273e60d26f7fdae02309686f4cdbd","css/styles.css?v=773dea31f64f3cacc46ce7966e15fd9eacea7782"];

self.addEventListener('install', event => {
    event.waitUntil(caches.open('resources').then(cache => cache.addAll(urlsToCache)));
});

self.addEventListener('fetch', event => {
    event.respondWith(caches.open('resources')
                      .then(cache => cache.match(event.request))
                      .then(response => response ?? fetch(event.request)));
});

