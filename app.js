var map = L.map('map').setView([48.856614, 2.3522219], 13);

var Stadia_OSMBright = L.tileLayer('https://tiles.stadiamaps.com/tiles/osm_bright/{z}/{x}/{y}{r}.png', {
    maxZoom: 20,
    attribution: '&copy; <a href="https://stadiamaps.com/">Stadia Maps</a>, &copy; <a href="https://openmaptiles.org/">OpenMapTiles</a> &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors'
});

Stadia_OSMBright.addTo(map);

var popup = L.popup()
    .setLatLng([48.856614, 2.3522219])
    .setContent("Nous sommes basé sur Paris")
    .openOn(map);

var circle = L.circle([48.856614, 2.3522219], {
    color: 'red',
    fillColor: '#f03',
    fillOpacity: 0.5,
    radius: 1500
}).addTo(map);