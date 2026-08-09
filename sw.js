const CACHE_NAVN = "mwb-forberedelse-v9";
const KJERNEFILER = [
  "./",
  "index.html",
  "style.css",
  "script.js",
  "manifest.json",
  "icon-192.png",
  "icon-512.png",
  "uker/indeks.json",
];

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAVN).then((cache) => cache.addAll(KJERNEFILER))
  );
  self.skipWaiting();
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys().then((navn) =>
      Promise.all(navn.filter((n) => n !== CACHE_NAVN).map((n) => caches.delete(n)))
    )
  );
  self.clients.claim();
});

self.addEventListener("fetch", (event) => {
  if (event.request.method !== "GET" || !event.request.url.startsWith(self.location.origin)) return;

  event.respondWith(
    caches.match(event.request).then((cached) => {
      const nettverk = fetch(event.request)
        .then((resp) => {
          if (resp.ok) {
            const kopi = resp.clone();
            caches.open(CACHE_NAVN).then((cache) => cache.put(event.request, kopi));
          }
          return resp;
        })
        .catch(() => cached);
      return cached || nettverk;
    })
  );
});
