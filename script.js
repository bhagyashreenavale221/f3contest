let map = document.getElementById('map');
let get = document.getElementById('get');

function getLocation() {
    if (localStorage.getItem("lat")) {
        get.disabled = true;
    }
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition)
        get.disabled = true;
    } else {
        map.innerText = "Your browser doesn't support geolocation.";
    }
}

function showPosition(position) {
    long.innerHTML = "Latitude: " + position.coords.latitude + 
    "<br><br>Longitude: " + position.coords.longitude;

    localStorage.setItem("lat", position.coords.latitude);
    localStorage.setItem("long", position.coords.longitude);
    map.innerHTML = `<iframe src="https://maps.google.com/maps?q=${position.coords.latitude}, ${position.coords.longitude}&output=embed"></iframe>`;
}

function removeLocation() {
    long.innerHTML = "Latitude is removed form  localStorage & "+
    "<br><br>Longitude is removed form  localStorage.";
    get.disabled = false;
    localStorage.removeItem("lat")
    localStorage.removeItem("long")
}