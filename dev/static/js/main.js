
function initMap() {
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 7,
        center: {lat: 38.224831, lng: 36.813773}
    });

    new google.maps.Marker({
        position: {lat: 38.043360, lng: 34.297904},
        map: map,
        icon : "./static/img/general/point.png"
    });

    new google.maps.Marker({
        position: {lat: 39.795480, lng: 34.649466},
        map: map,
        icon : "./static/img/general/point.png"
    });
    new google.maps.Marker({
        position: {lat: 38.637925, lng: 30.903128},
        map: map,
        icon : "./static/img/general/point.png"
    });
    new google.maps.Marker({
        position: {lat: 39.533306, lng: 37.352103},
        map: map,
        icon : "./static/img/general/point.png"
    });
    new google.maps.Marker({
        position: {lat: 38.466090, lng: 37.879447},
        map: map,
        icon : "./static/img/general/point.png"
    });
}
