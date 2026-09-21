// Service worker minimo - necessario para o Chrome permitir instalar como app.
// Nao faz cache agressivo: sempre busca da rede, so cai pro cache se offline.
const CACHE = "radarplaca-v1";
self.addEventListener("install", e => { self.skipWaiting(); });
self.addEventListener("activate", e => { self.clients.claim(); });
self.addEventListener("fetch", e => {
  e.respondWith(
    fetch(e.request).catch(() => caches.match(e.request))
  );
});
