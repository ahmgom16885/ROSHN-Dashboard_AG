// Minimal service worker — only exists so Chrome/Edge offer "Install app".
// Deliberately does NOT cache anything, so the dashboard always loads the
// latest version from GitHub Pages instead of risking a stale cached copy.
self.addEventListener("install", () => {
  self.skipWaiting();
});
self.addEventListener("activate", (event) => {
  event.waitUntil(self.clients.claim());
});
self.addEventListener("fetch", (event) => {
  event.respondWith(fetch(event.request));
});
