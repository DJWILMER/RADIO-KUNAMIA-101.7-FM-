
self.addEventListener('install', function(e) {
  e.waitUntil(
    caches.open('radio-fama-cache').then(function(cache) {
      return cache.addAll([
        '/',
        '/index.html',
        '/manifest.json',
        'https://i.ibb.co/bjrs0Y63/cover-logo.png'
      ]);
    })
  );
});

self.addEventListener('fetch', function(e) {
  e.respondWith(
    caches.match(e.request).then(function(response) {
      return response || fetch(e.request);
    })
  );
});
