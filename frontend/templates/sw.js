var CACHE_NAME = 'seclea-cache-v1';
var urlsToCache = [
    '/'
];

self.addEventListener('install', function (event) {
    // Perform install steps
    event.waitUntil(
            caches.open(CACHE_NAME)
                    .then(function (cache) {
                        console.log('Opened cache');
                        return cache.addAll(urlsToCache);
                    })
    );
});
// self.addEventListener('fetch', function (event) {
//     event.respondWith(
//             caches.open('seclea-cache-v1').then(function (cache) {
//                 return fetch(event.request).then(function (response) {
//                     cache.put(event.request, response.clone());
//                     return response;
//                 });
//             })
//     );
// });
self.addEventListener('activate', function (event) {
    event.waitUntil(
            caches.keys().then(function (cacheNames) {
                return Promise.all(
                        cacheNames.filter(function (cacheName) {
                            // Return true if you want to remove this cache,
                            // but remember that caches are shared across
                            // the whole origin
                        }).map(function (cacheName) {
                            return caches.delete(cacheName);
                        })
                );
            })
    );
});