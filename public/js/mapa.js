let animdata ={}

var animation = bodymovin.loadAnimation({
    container: document.getElementById('mapa_desarrollo'),
    renderer: 'svg',
    loop: true,
    autoplay: true,
    path: 'mapanavetec.json'
})  