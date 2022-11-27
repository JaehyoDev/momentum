// Download the JSONView extension from the Chrome web store.
// Sign in openweathermap.org

const API_KEY = "5a1d8bffe278cada59f9fdd5a384d65a";

function onGeoOk(position) {
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  console.log("You live in", lat, lon);
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      const weather = document.querySelector("#weather span:first-child");
      const city = document.querySelector("#weather span:last-child");
      weather.innerText = `${data.weather[0].main} / ${data.main.temp}`;
      city.innerText = data.name;
    });
}

function onGeoError() {
  alert("Can't find your location. No weather for you.");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
