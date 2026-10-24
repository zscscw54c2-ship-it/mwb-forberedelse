const CACHE_NAVN = "mwb-forberedelse-v15";
const KJERNEFILER = [
  "./",
  "index.html",
  "style.css",
  "script.js",
  "manifest.json",
  "icon-192.png",
  "icon-512.png",
  "uker/indeks.json",
  "kapitler/indeks.json",
];

// "reload" omgår nettleserens HTTP-cache, så ny versjon ikke får gammelt innhold.
const friskt = (urler) => urler.map((u) => new Request(u, { cache: "reload" }));

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAVN).then(async (cache) => {
      await cache.addAll(friskt(KJERNEFILER));
      try {
        // Alle uker og kapitler forhåndslastes, så appen virker uten nett fra første åpning.
        const uker = await (await cache.match("uker/indeks.json")).json();
        const kapitler = await (await cache.match("kapitler/indeks.json")).json();
        await cache.addAll(friskt([
          ...uker.map((u) => `uker/${u.id}.json`),
          ...kapitler.map((k) => `kapitler/${k.id}.json`),
        ]));
      } catch (e) {
        // En manglende fil skal ikke hindre installasjonen – de hentes ved behov.
      }
    })
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
