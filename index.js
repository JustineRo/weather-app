function formatDate(date) {
  let hours = currentTime.getHours();
  if (hours < 10) {
    hours = "0${hours}";
  }
  let minutes = currentTime.getMinutes();
  if (minutes < 5) {
    minutes = "0${hours}";
  }
  let dayIndex = date.getDay();

  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
  ];
  let day = days[dayIndex];

  return "${days[dayIndex]} ${hours}:${minutes}";
}

function displayWeatherCondition(response) {
  document.querySelector("#city").innerHTML = response.data.name;
  document.querySelector("#temperature").innerHTML = Math.round(
    response.data.main.temp
  );
}

function search(city) {
  let apiKey = "07b678c78262155054be1ca1531160b3";
  let apiUrl =
    "https//api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}";
}

function search(event) {
  event.preventDefault();
  let cityElement = document.querySelector("#city");
  let city = document.querySelector("#city-input").value;
}

function convertToFahrenheit(event) {
  event.preventDefault();
  let temperatureElement = document.querySelector("#temperature");
  let temperature = temperatureElement.innerHTML;
  temperature = number(temperature);
  temperatureElement.innerHTML = (temperature * 9) / 5 + 32;
}

function convertToCelsius(event) {
  event.preventDefault();
}

let dateElement = document.querySelector("#date");
let currentTime = new date();
dateElement.innerHTML = formatDate(currentTime);

let searchForm = document.querySelector("#search-form");
searchForm.addEventListener("submit", search);

let temperatureElement = document.querySelector("#temperature");
let celsiustemperature = temperatureElement.innerHTML;
let fahrenheitLink = document.querySelector("fahrenheit-link");
fahrenheitLink.addEventListener("click", convertToFahrenheit);

let celsiusLink = document.querySelector("#celsius-link");
celsiusLink.addEventListener("click,convertToFahrenheit");
