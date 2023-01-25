const urlsToCache = ["/", "index.html", "js/app.js", "css/styles.css", "img/icon.svg", "manifest.json"]; // prop:urlsToCache

self.addEventListener('install', event => {
    event.waitUntil(caches.open('resources').then(cache => cache.addAll(urlsToCache)));
});

self.addEventListener('fetch', event => {
    event.respondWith(caches.open('resources')
                      .then(cache => cache.match(event.request))
                      .then(response => response ?? fetch(event.request)));
});
