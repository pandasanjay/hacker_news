/* eslint-disable  no-undef */
importScripts(
    'https://storage.googleapis.com/workbox-cdn/releases/5.0.0/workbox-sw.js'
)
/* eslint-disable  no-undef */
workbox.core.skipWaiting()
workbox.core.clientsClaim()
const CACHE_NAME = 'hacker_news_v1'
const wb_manifest = self.__WB_MANIFEST
const staticUrlsToCache = wb_manifest.map((data) => {
    return `/${data.url}`
})

const shellUrlsToCache = ['/']
const urlsToCache = [
    ...staticUrlsToCache,
    shellUrlsToCache.map((url) => `${url}?shell`),
]

self.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open(CACHE_NAME).then((cache) => cache.addAll(urlsToCache))
    )
})
self.addEventListener('activate', (event) => {
    var cacheKeeplist = ['catch-token']

    event.waitUntil(
        caches.keys().then((keyList) => {
            return Promise.all(
                keyList.map((key) => {
                    if (cacheKeeplist.indexOf(key) === -1) {
                        return caches.delete(key)
                    }
                })
            )
        })
    )
})

self.addEventListener('fetch', (event) => {
    if (
        !(
            event.request.url.indexOf('https') === 0 ||
            event.request.url.indexOf('http') === 0
        )
    ) {
        return
    }
    event.respondWith(
        caches
            .match(event.request)
            .then((resp) => {
                return (
                    resp ||
                    fetch(event.request).then((response) => {
                        return caches.open(CACHE_NAME).then((cache) => {
                            cache.put(event.request, response.clone())
                            return response
                        })
                    })
                )
            })
            .catch(() => {
                return new Response(
                    `<h1>Hello! Sorry this might happen for two resions </h1>
                    <ul>
                     <li> You are offline! </li>
                     <li> Or Our server down</li> 
                    </ul>
                    `,
                    {
                        headers: { 'Content-Type': 'text/html' },
                    }
                )
            })
    )
})
workbox.precaching.precacheAndRoute(wb_manifest)
