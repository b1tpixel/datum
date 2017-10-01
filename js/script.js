var mymap = L.map('map').setView([47.2408, 39.7106], 17);

L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
}).addTo(mymap);

L.control.mousePosition().addTo(mymap);
L.Control.measureControl().addTo(mymap);

var pine = L.icon({
    iconUrl: 'img/pine-icon.png',
    iconRetinaUrl: 'img/pine-icon.png',
    iconSize: [38, 38],
    iconAnchor: [24, 22],
    popupAnchor: [-4, -20],
});

L.marker([47.24187, 39.71069], {icon:pine}).addTo(mymap)
    .bindPopup('Центр парка');

var athlete = L.icon({
    iconUrl: 'img/athlete-icon.png',
    iconRetinaUrl: 'img/athlete-icon.png',
    iconSize: [38, 38],
    iconAnchor: [24, 22],
    popupAnchor: [2, -18],
});

L.marker([47.24097, 39.70927], {icon:athlete}).addTo(mymap)
    .bindPopup('Атлетический манеж ДГТУ.');
    
var cross = L.icon({
    iconUrl: 'img/cross-icon.png',
    iconRetinaUrl: 'img/cross-icon.png',
    iconSize: [38, 38],
    iconAnchor: [24, 22],
    popupAnchor: [-6, -20],
});

L.marker([47.23928, 39.71106], {icon:cross}).addTo(mymap)
    .bindPopup('Храм святой великомученницы Татианы');

var football = L.icon({
    iconUrl: 'img/football-icon.png',
    iconRetinaUrl: 'img/football-icon.png',
    iconSize: [38, 38],
    iconAnchor: [24, 22],
    popupAnchor: [-6, -22],
});

L.marker([47.23945, 39.70915], {icon:football}).addTo(mymap)
	.bindPopup('Футбольный стадион.');