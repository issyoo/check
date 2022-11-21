self.addEventListener("install", function (event) {
  console.log('Service worker install event!');
  const cacheName = 'static-shell-v1';
  const resourcesToPrecache = [
   
    '/index.html',
    '/chat.html',
    '/proposal.html',
    '/dashboard.html',
    'signin.html'
    ];
  event.waitUntil(
    caches.open(cacheName) 
  .then(function (cache) {
    return cache.addAll(resourcesToPrecache);
    })
  );
  });

self.addEventListener('fetch', event => {
  event.respondWith(
    fetch(event.request).catch(() => caches.match(event.request))
    );
  });
