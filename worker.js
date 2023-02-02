const urlsToCache = ["","index.html","manifest.json","img/icon.svg","js/app.js?v=fe47f5731049c9fa84cfee83b6cb2ef14fd69d27","css/styles.css?v=e3867300d940b66cabbf7c4a78703bf5d882e941"];

self.addEventListener('install', event => {
    event.waitUntil(caches.open('resources').then(cache => cache.addAll(urlsToCache)));
});

self.addEventListener('fetch', event => {
    event.respondWith(caches.open('resources')
                      .then(cache => cache.match(event.request))
                      .then(response => response ?? fetch(event.request)));
});

