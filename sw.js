// const cache_name = 'v1_cache_awp'

// var urlToCache = [
//     './',
//     './styles/style.css',
//     './js/main.js',
//     './images/ardilla.png',
//     './images/halo.jpg',
//     './images/default-image-620x600.jpg'
// ]

// self.addEventListener('install', e=>{
//     e.waitUntil( 
//         caches.open(cache_name)
//         .then(cache=>{
//             return cache.addAll(urlToCache)
//             .then(()=>{
//                 self.skipWaiting()
//                 console.log('Ya se pudo');
//             })
//         })
//         .catch(err=>{
//             console.log('No se ha asegurado el cache', err);
//         })
//     )
// })

// self.addEventListener('active',e=>{
//     const cacheWhiteList = [cache_name]
//     e.waitUntil(
//         caches.keys()
//         .then(cacheNames=>{
//             return Promise.all(
//                 cacheNames.map(cacheName => {
//                     if(cacheWhiteList.indexOf(cacheName) === -1){
//                         return caches.delete(cacheName)
//                     }
//                 })
//             )
//         })
//         .then( () => {
//             self.clients.claim()
//         })
//     )
// })

// self.addEventListener('fetch',e=>{
//     e.respondWith(
//         caches.match(e.request)
//         .then(res=>{
//             if(res){
//                 //devuelvo los datos
//                 console.log('si se pudo', res);
//                 return res;
//             }
//             return fetch(e.request);
//         })
//     );
// })
