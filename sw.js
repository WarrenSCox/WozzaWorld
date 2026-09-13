const CACHE='wozzaworld-v09';
const LOCAL=['./','./index.html','./styles.css?v=0.9','./app.js?v=0.9','./manifest.webmanifest?v=0.9','./icon.svg?v=0.9','./icon-192.png?v=0.9','./icon-512.png?v=0.9','./wozzaworld-logo.png?v=0.9'];
self.addEventListener('install',e=>e.waitUntil(caches.open(CACHE).then(c=>c.addAll(LOCAL)).then(()=>self.skipWaiting())));
self.addEventListener('activate',e=>e.waitUntil(caches.keys().then(keys=>Promise.all(keys.filter(k=>k!==CACHE).map(k=>caches.delete(k)))).then(()=>self.clients.claim())));
self.addEventListener('fetch',e=>{if(e.request.method!=='GET')return;e.respondWith(fetch(e.request,{cache:'no-store'}).then(r=>{const copy=r.clone();caches.open(CACHE).then(c=>c.put(e.request,copy));return r}).catch(()=>caches.match(e.request).then(r=>r||caches.match('./index.html'))))});
