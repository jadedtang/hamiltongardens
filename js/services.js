var zooIcon = L.icon({
    iconUrl: 'img/elephant.svg',
    iconSize: [60, 60],
    iconAnchor: [22, 94],
    popupAnchor: [-3, -76],

});
L.marker([-36.863938, 174.722348], {icon: zooIcon}).addTo(mymap);