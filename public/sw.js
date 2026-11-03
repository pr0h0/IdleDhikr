// Network-first with cache fallback, so the app keeps working offline
// after its pages and assets have been visited once. Navigations ignore the
// query string, so ?id= pages work offline for any id once the page was seen.
const CACHE = "idledhikr-v2";

self.addEventListener("install", () => self.skipWaiting());

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches
      .keys()
      .then((keys) => Promise.all(keys.filter((k) => k !== CACHE).map((k) => caches.delete(k))))
      .then(() => self.clients.claim()),
  );
});

self.addEventListener("fetch", (event) => {
  const { request } = event;
  if (request.method !== "GET" || !request.url.startsWith(self.location.origin)) return;

  event.respondWith(
    fetch(request)
      .then((res) => {
        if (res.ok) {
          const copy = res.clone();
          caches.open(CACHE).then((c) => c.put(request, copy));
        }
        return res;
      })
      .catch(() =>
        caches.match(request, { ignoreSearch: request.mode === "navigate" }).then(async (hit) => hit || (await (request.mode === "navigate" ? caches.match("/dhikr") : null)) || Response.error()),
      ),
  );
});
