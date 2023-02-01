const urlsToCache = ["","index.html","manifest.json","img/icon.svg","js/app.js?v=ab0a117333817636b9d1f2e594ecb8e26ae5dd14","css/styles.css?v=8ab70584952711f53058695b7b0d5e55a1135569"];

self.addEventListener('install', event => {
    event.waitUntil(caches.open('resources').then(cache => cache.addAll(urlsToCache)));
});

self.addEventListener('fetch', event => {
    event.respondWith(caches.open('resources')
                      .then(cache => cache.match(event.request))
                      .then(response => response ?? fetch(event.request)));
});

