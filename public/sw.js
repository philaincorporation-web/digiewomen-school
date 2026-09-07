const CACHE_NAME = "digie-portal-cache-v1";
const OFFLINE_URL = "/offline";

const PRECACHE_ASSETS = [
  "/",
  "/offline",
  "/manifest.json",
  "/favicon.ico",
  "/logoDigie.png",
  "/android-chrome-192x192.png",
  "/android-chrome-512x512.png"
];

// Installation du Service Worker
self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      console.log("[PWA Service Worker] Pre-caching offline assets");
      return cache.addAll(PRECACHE_ASSETS);
    }).then(() => self.skipWaiting())
  );
});

// Activation et nettoyage des anciens caches
self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cache) => {
          if (cache !== CACHE_NAME) {
            console.log("[PWA Service Worker] Cleaning old cache:", cache);
            return caches.delete(cache);
          }
        })
      );
    }).then(() => self.clients.claim())
  );
});

// Interception des requêtes réseau (Cache-First pour les assets, Network-First pour la navigation)
self.addEventListener("fetch", (event) => {
  // Ignorer les requêtes non GET ou les requêtes vers d'autres origines/extensions
  if (event.request.method !== "GET" || !event.request.url.startsWith(self.location.origin)) {
    return;
  }

  const url = new URL(event.request.url);

  // Requêtes de navigation HTML
  if (event.request.mode === "navigate") {
    event.respondWith(
      fetch(event.request)
        .then((networkResponse) => {
          // Sauvegarder la page en cache pour le mode hors-ligne
          if (networkResponse && networkResponse.status === 200) {
            const responseClone = networkResponse.clone();
            caches.open(CACHE_NAME).then((cache) => cache.put(event.request, responseClone));
          }
          return networkResponse;
        })
        .catch(async () => {
          const cachedResponse = await caches.match(event.request);
          if (cachedResponse) return cachedResponse;
          const offlineFallback = await caches.match(OFFLINE_URL);
          return offlineFallback || new Response("Hors ligne", { status: 503, headers: { "Content-Type": "text/html" } });
        })
    );
    return;
  }

  // Requêtes statiques (Images, Fonts, CSS, JS) : Cache First avec mise à jour en arrière-plan
  event.respondWith(
    caches.match(event.request).then((cachedResponse) => {
      if (cachedResponse) {
        // Fetch en arrière-plan pour rafraîchir le cache
        fetch(event.request).then((networkResponse) => {
          if (networkResponse && networkResponse.status === 200) {
            caches.open(CACHE_NAME).then((cache) => cache.put(event.request, networkResponse));
          }
        }).catch(() => {/* Ignorer l'erreur réseau silencieusement */});
        return cachedResponse;
      }

      return fetch(event.request).then((networkResponse) => {
        if (networkResponse && networkResponse.status === 200) {
          const responseClone = networkResponse.clone();
          caches.open(CACHE_NAME).then((cache) => cache.put(event.request, responseClone));
        }
        return networkResponse;
      });
    })
  );
});

// Écouteur des Notifications Push
self.addEventListener("push", (event) => {
  const data = event.data ? event.data.json() : {};
  const title = data.title || "DigieWomen School";
  const options = {
    body: data.body || "Une nouvelle actualité ou formation est disponible !",
    icon: data.icon || "/android-chrome-192x192.png",
    badge: "/favicon-32x32.png",
    data: { url: data.url || "/" },
    vibrate: [100, 50, 100],
  };

  event.waitUntil(self.registration.showNotification(title, options));
});

// Clic sur une notification
self.addEventListener("notificationclick", (event) => {
  event.notification.close();
  const targetUrl = event.notification.data?.url || "/";

  event.waitUntil(
    clients.matchAll({ type: "window", includeUncontrolled: true }).then((clientList) => {
      for (const client of clientList) {
        if (client.url === targetUrl && "focus" in client) {
          return client.focus();
        }
      }
      if (clients.openWindow) {
        return clients.openWindow(targetUrl);
      }
    })
  );
});
