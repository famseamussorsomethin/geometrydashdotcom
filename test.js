self.addEventListener('install', event => {
  console.log('success installing');
  self.skipWaiting();
});

self.addEventListener('fetch', event => {
  const url = new URL(event.request.url);
  console.log('request:', url.pathname);
});

self.addEventListener('fetch', event => {
  const url = new URL(event.request.url);

  if (url.pathname.includes('.txt')) {
    event.respondWith(
      fetch('/geometrydashdotcom/assets/2.txt')
    );
  }
});
