// Service worker de T-EN
// Permite abrir la app sin conexión. IMPORTANTE: sube el número de VERSION
// cada vez que publiques cambios, o los móviles seguirán viendo la versión vieja.
const VERSION = "ten-v4";

const ASSETS = [
  "./", "./index.html", "./app.js",
  "./react.min.js", "./react-dom.min.js",
  "./anton.woff2", "./mono-400.woff2", "./mono-700.woff2",
  "./manifest.json",
  "./icon-192.png", "./icon-512.png", "./icon-maskable-512.png", "./apple-touch-icon.png",
];

self.addEventListener("install", (event) => {
  event.waitUntil((async () => {
    const cache = await caches.open(VERSION);
    await Promise.allSettled(ASSETS.map((u) => cache.add(u)));
    self.skipWaiting();
  })());
});

self.addEventListener("activate", (event) => {
  event.waitUntil((async () => {
    const keys = await caches.keys();
    await Promise.all(keys.filter((k) => k !== VERSION).map((k) => caches.delete(k)));
    await self.clients.claim();
  })());
});

self.addEventListener("fetch", (event) => {
  const req = event.request;
  if (req.method !== "GET") return;

  event.respondWith((async () => {
    const cache = await caches.open(VERSION);

    if (req.mode === "navigate") {
      try {
        const fresh = await fetch(req);
        cache.put("./index.html", fresh.clone());
        return fresh;
      } catch (e) {
        const cached = await cache.match("./index.html");
        if (cached) return cached;
        throw e;
      }
    }

    const cached = await cache.match(req);
    if (cached) return cached;

    try {
      const fresh = await fetch(req);
      if (fresh && fresh.ok && req.url.startsWith(self.location.origin)) cache.put(req, fresh.clone());
      return fresh;
    } catch (e) {
      return new Response("", { status: 504, statusText: "Sin conexión" });
    }
  })());
});
