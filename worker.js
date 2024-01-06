const relatedAppVersion = "e53a2d422d87a5b6b046ba818f7c604fd23aefcd";
const urlsToCache = ["","index.html","manifest.json","img/icon.svg","js/app.57C0EE03D68039FF5C3BFCDD552374FC.js","css/styles.db66a53c8904774df80ed2dacb765b8191c11396.css"];

const cacheKey = `resources.${relatedAppVersion}`;

function ensureHtmlVersionMatches(cache) {
    return cache.match(new Request('/index.html'))
        .then(response => response.text())
        .then(html => html.match(/<meta name="app-version" content="(.*?)">/)[1])
        .then(version => {
            if (version !== relatedAppVersion) {
                return Promise.reject(`Incorrect index.html version ${version} doesn't match worker.js version ${relatedAppVersion}`);
            }
        })
}

self.addEventListener('install', event => {
    event.waitUntil(caches.open(cacheKey).then(
        cache => cache.addAll(urlsToCache)
            .then(() => ensureHtmlVersionMatches(cache))));
});

self.addEventListener('activate', event => {
    event.waitUntil(
        caches.keys()
            .then(keys => keys.filter(key => key !== cacheKey))
            .then(oldKeys => Promise.all(oldKeys.map(key => caches.delete(key))))
    );
});

self.addEventListener('fetch', event => {
    event.respondWith(caches.open(cacheKey)
                      .then(cache => cache.match(event.request))
                      .then(response => response ?? fetch(event.request)));
});
