if('serviceWorker' in navigator){
    console.log('Puedes usar los service worker en tu navegador');
    navigator.serviceWorker.register('./sw.js')
    .then(res=>console.log('serviceWorker cargado correctamente', res))
    .catch(err=>console.log('Caca', err))
}else{
    console.log('No se puede naco prieto esclavo del sistema');
}