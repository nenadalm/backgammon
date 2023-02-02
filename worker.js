const urlsToCache = ["","index.html","manifest.json","img/icon.svg","js/app.js?v=fe47f5731049c9fa84cfee83b6cb2ef14fd69d27","css/styles.css?v=edce5ee8d799c4e998541382c65627f051a2c94f"];

self.addEventListener('install', event => {
    event.waitUntil(caches.open('resources').then(cache => cache.addAll(urlsToCache)));
});

self.addEventListener('fetch', event => {
    event.respondWith(caches.open('resources')
                      .then(cache => cache.match(event.request))
                      .then(response => response ?? fetch(event.request)));
});

