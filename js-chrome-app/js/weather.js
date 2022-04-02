const API_KEY = 'c3767e4a66c74d2dff1f04eec2f6c149';

function onGeoOk(position) {
  console.log(position);
  const latitude = position.coords.latitude; // 위도
  const longitude = position.coords.longitude; // 경도
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric`;
  console.log(url);
  fetch(url)
    .then(Response => Response.json())
    .then(data => {
      const weatherBox = document.getElementById('weatherBox');
      const weather = weatherBox.querySelector('.weather');
      const city = weatherBox.querySelector('.city');

      city.innerText = data.name;
      weather.innerText = `${data.weather[0].main} / ${data.main.temp}`;
      // console.log(data.name, data.weather[0].main)
    });
}

function onGeoError() {
  alert("Can't find you. No weather for you.")
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
