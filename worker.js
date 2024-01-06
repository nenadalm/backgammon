const relatedAppVersion = "2b3f3baca58df679e9c2274b997c8eb2987b190b";
const urlsToCache = ["index.html","manifest.json","img/icon.svg","js/app.57C0EE03D68039FF5C3BFCDD552374FC.js","css/styles.db66a53c8904774df80ed2dacb765b8191c11396.css"];

const cacheKeyPrefix = 'nenadalm.backgammon.';
const cacheKey = `${cacheKeyPrefix}resources.${relatedAppVersion}`;

function ensureHtmlVersionMatches(cache) {
    return cache.match(new Request('index.html'))
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
            .then(keys => keys.filter(key => key.startsWith(cacheKeyPrefix)))
            .then(keys => keys.filter(key => key !== cacheKey))
            .then(oldKeys => Promise.all(oldKeys.map(key => caches.delete(key))))
    );
});

self.addEventListener('fetch', event => {
    event.respondWith(caches.open(cacheKey)
                      .then(cache => cache.match(event.request))
                      .then(response => response ?? fetch(event.request)));
});
