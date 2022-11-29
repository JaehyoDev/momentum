// Download the JSONView extension from the Chrome web store.
// Sign in openweathermap.org

const API_KEY = "5a1d8bffe278cada59f9fdd5a384d65a";

function onGeoOk(position) {
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      const cityName = data.name;
      const weatherIcon = data.weather[0].icon;
      const weatherTemp = data.main.temp;

      console.log(cityName);
      const city = document.querySelector("#weather__city");
      const icon = document.querySelector("#weather__icon");
      const temp = document.querySelector("#weather__temp");
      icon.src = `http://openweathermap.org/img/wn/${weatherIcon}@2x.png`;

      console.log(city);
      city.innerText = cityName;
      //icon.innerText = weatherIcon;
      temp.innerText = `${weatherTemp}°C`;

      //weather.innerText = `${data.weather[0].main} / ${data.main.temp}`;
    });
}

function onGeoError() {
  alert("Can't find your location. No weather for you.");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
