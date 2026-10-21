let x = document.getElementById("geolocation");

function getGeolocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showGeolocation);
  } else {
    x.innerHTML = "Geolocation is not supported by this browser.";
  }
}

function showGeolocation(position) {
  let lat = position.coords.latitude;
  let lng = position.coords.longitude;
  x.innerHTML = "Latitude: " + lat + "<br>Longitude: " + lng;
}
