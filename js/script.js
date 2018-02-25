var mymap = L.map('mapid').setView([-37.805003, 175.302508], 17);

L.tileLayer('https://api.mapbox.com/styles/v1/jadetang/cjdp1jkx905792ro44hg64m6f/tiles/256/{z}/{x}/{y}?access_token=pk.eyJ1IjoiamFkZXRhbmciLCJhIjoiY2pkcDFodHh5MGhlMjMzanZybWYwY3ZjaSJ9.V8xEOXVOc8sux4iI8-XF0A', {
    attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
    zoom: 18,
    minZoom: 17,
    maxZoom: 19,
    id: 'mapbox.light',
    accessToken: 'pk.eyJ1IjoiamFkZXRhbmciLCJhIjoiY2pkcDFodHh5MGhlMjMzanZybWYwY3ZjaSJ9.V8xEOXVOc8sux4iI8-XF0A'
}).addTo(mymap);

var marker = L.marker([-37.805015, 175.305168]).addTo(mymap);

marker.bindPopup("<b>Hamilton Gardens</b><br>Flowers...flowers everywhere").openPopup();

// Add a marker to the map
function addMarker() {
        
    // Create the marker (#MarkerOptions)  
    var marker = new google.maps.Marker ({

        // Yoobee Coordinates
        position: new google.maps.LatLng(-36.856967,174.764428),
        map: map,

        // Free Icon reference - https://www.flaticon.com/packs/wildlife-14
        icon: {
            url:        '../img/elephant.png',                        
            size:       new google.maps.Size(64,64),
            origin:     new google.maps.Point(0,0),
            anchor:     new google.maps.Point(38,42),
            scaledSize: new google.maps.Size(64,64)
        }
        
    });

    return marker;
}

// Load the map!
google.maps.event.addDomListener(window, 'load', loadMap());

       