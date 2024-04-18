//asignar un nombre y versión al caché
const CACHE_NAME='v1_cache_artvier_tattoo',
urlsToCache= [
    '/',
    'index.html',
    'assets/css/material-kit-pro.min.css?v=3.0.4',
    'assets/css/Material+Icons+Round.css',
    'assets/js/fontawesome.js',
    'assets/js/material-kit-pro.min.js?v=3.0.4',
    'assets/js/core/bootstrap.min.js',
    'pages/error-404.html',
    'pages/sobre_mi.html'
]

// Instalación del service worker
self.addEventListener('install', function(event) {
    event.waitUntil(
      caches.open(CACHE_NAME)
        .then(function(cache) {
          console.log('Cache abierta');
          return cache.addAll(urlsToCache);
        })
    );
  });
  // Fetch del service worker
self.addEventListener('fetch', function(event) {
    event.respondWith(
      caches.match(event.request)
        .then(function(response) {
          if (response) {
            return response;
          }
          return fetch(event.request);
        })
    );
  });