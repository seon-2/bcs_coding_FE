const API_KEY = "678eedb9316b9f801bce5335de3ff6f1";

const weatherIcon = document.querySelector(".weatherIcon");
const weatherTemp = document.querySelector(".weatherTemp");

navigator.geolocation.getCurrentPosition(
  (position) => {
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${API_KEY}`;

    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        weatherTemp.innerText =
          data.name + ", " + parseInt(data.main.temp) + "℃";
      });
  },
  () => {
    alert("Not allowed");
  }
);
//
