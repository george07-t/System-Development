//-------------------------------------map-----------------------------------------//
let request; 
function initMap() {
  const map = new google.maps.Map(document.getElementById('map'), {
    center: { lat: 22.89840025, lng: 89.5041355 },
    zoom: 25,
  });
  const directionsService = new google.maps.DirectionsService();
  const directionsRenderer = new google.maps.DirectionsRenderer();
  directionsRenderer.setMap(map);
  const pointA = new google.maps.LatLng(window.deslati,window.deslongi);
  const pointB = new google.maps.LatLng(22.897111,89.502159);

  // Create markers for both points
  const markerA = new google.maps.Marker({
    position: pointA,
    map: map,
    title: 'Point A',
  });

  const markerB = new google.maps.Marker({
    position: pointB,
    map: map,
    title: 'Point B',
  });

  request = {
    origin: pointA,
    destination: pointB,
    travelMode: google.maps.TravelMode.DRIVING,
  };

  directionsService.route(request, function (result, status) {
    if (status == google.maps.DirectionsStatus.OK) {
      directionsRenderer.setDirections(result);
    } else {
      console.error('Directions request failed due to ' + status);
    }
  });
}
