const API_KEY = "678eedb9316b9f801bce5335de3ff6f1";

navigator.geolocation.getCurrentPosition(
  (position) => {
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}`;

    fetch(url)
      .then((response) => response.json())
      .then((data) => console.log(data));
  },
  () => {
    alert("Not allowed");
  }
);
//
