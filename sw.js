// Minimal service worker — its only job is to make this site installable
// as an app. It doesn't cache anything, so the app always loads fresh data
// from Firestore rather than showing stale content.
self.addEventListener('install', () => {
  self.skipWaiting();
});
self.addEventListener('activate', (event) => {
  event.waitUntil(self.clients.claim());
});
self.addEventListener('fetch', () => {
  // Deliberately pass-through: always hit the network.
});
