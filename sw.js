const cache_name = 'v1_cache_awp'

var urlToCache = [
    './',
    './styles/style.css',
    './js/main.js',
    './images/1.jpg',
    './images/2.jpg',
    './images/3.jpg',
    './images/4.jpg',
    './images/5.jpg',
    './images/6.jpg',
    './images/7.jpg',
    './images/8.jpg',
    './images/9.jpg',
    './images/10.jpg',
    './images/11.jpg',
    './images/12.jpg',
    './images/default-image-620x600.jpg',
    './images/descargar.png',
    './images/halo.jpg',
    './images/Master-Chief-icon.png',
    './images/slide.jpg',
    './videos/video0.mp4',
    './videos/video1.mp4',
    './videos/video2.mp4',
    'https://fonts.googleapis.com/css2?family=Roboto&display=swap',
    
]

self.addEventListener('install', e=>{
    e.waitUntil( 
        caches.open(cache_name)
        .then(cache=>{
            return cache.addAll(urlToCache)
            .then(()=>{
                self.skipWaiting()
                console.log('Ya se pudo');
            })
        })
        .catch(err=>{
            console.log('No se ha asegurado el cache', err);
        })
    )
})

self.addEventListener('active',e=>{
    const cacheWhiteList = [cache_name]
    e.waitUntil(
        caches.keys()
        .then(cacheNames=>{
            return Promise.all(
                cacheNames.map(cacheName => {
                    if(cacheWhiteList.indexOf(cacheName) === -1){
                        return caches.delete(cacheName)
                    }
                })
            )
        })
        .then( () => {
            self.clients.claim()
        })
    )
})

self.addEventListener('fetch',e=>{
    const respuesta = caches.match(e.request)
    .then(res=>{
        if(res) return res
        console.log('No existe ', e.request.url);
        return fetch(e.request).then(newRes =>{
            caches.open('v1_cache_awp')
                .then(cache =>{
                    cache.put(e.request, newRes)
                })
                return newRes.clone
        })
    })
    e.respondWith(respuesta)
})