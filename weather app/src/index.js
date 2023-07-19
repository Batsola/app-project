let now = new Date();
let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
let day = days[now.getDay()];
let hour = now.getHours().toString().padStart(2, "0");
let minutes = now.getMinutes().toString().padStart(2, "0");

let time = `${day} ${hour}:${minutes}`;
let currentDate = document.querySelector(".currentDay");
currentDate.innerHTML = time;

function myRequest(response) {
  let temperature = document.querySelector(".temp");
  temperature.innerHTML = Math.round(response.data.main.temp);
  let newContent = document.querySelector(".currentCity");
  newContent.innerHTML = response.data.name;
}
function userCity(city) {
  let apiKey = "bd5b4461863eddaa6ced0a0a67989e0a";
  let units = "metric";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${units}`;
  axios.get(apiUrl).then(myRequest);
}

function typedCity(event) {
  event.preventDefault();
  let city = document.querySelector("#search-input").value;
  userCity(city);
}
function myPosition(position) {
  let lat = position.coords.latitude;
  let lon = position.coords.longitude;
  console.log(lat);
  console.log(lon);
  let apiKey = "bd5b4461863eddaa6ced0a0a67989e0a";
  let units = "metric";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=${units}`;
  axios.get(apiUrl).then(myRequest);
}
function getMyPosition(event) {
  event.preventDefault();
  navigator.geolocation.getCurrentPosition(myPosition);
}
let cityName = document.querySelector("#search-form");
cityName.addEventListener("submit", typedCity);
let searchButton = document.querySelector("#button-addon1");
searchButton.addEventListener("click", typedCity);
let currentLocationButton = document.querySelector("#current-position");
currentLocationButton.addEventListener("click", getMyPosition);
userCity("Antananarivo");
function celsiusValue(event) {
  event.preventDefault();
  let contentCelsius = document.querySelector(".temp");
  contentCelsius.innerHTML = "17";
}

function fahrenheitValue(event) {
  event.preventDefault();
  let contentCelsius = document.querySelector(".temp");
  contentCelsius.innerHTML = "66";
}
ceLink.addEventListener("click", celsiusValue);
faLink.addEventListener("click", fahrenheitValue);
