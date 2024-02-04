function updateWeather(response) {
  let temperature = document.querySelector("#temperature-value");
  let city = document.querySelector("#weather-app-city");
  let weatherDescription = document.querySelector("#weather-description");
  let country = document.querySelector("#country");
  let humidity = document.querySelector("#humidity");
  let windSpeed = document.querySelector("#wind-speed");
  let feelsLikeTemp = document.querySelector("#feels-like");
  let timeElement = document.querySelector("#time");
  let date = new Date(response.data.time * 1000);
  let icon = document.querySelector("#icon");
  city.innerHTML = response.data.city;

  timeElement.innerHTML = formatDate(date);
  icon.innerHTML = `<img src="${response.data.condition.icon_url}" class="icon" />`;
  temperature.innerHTML = Math.round(response.data.temperature.current);
  weatherDescription.innerHTML = response.data.condition.description;
  country.innerHTML = response.data.country;
  humidity.innerHTML = response.data.temperature.humidity;
  windSpeed.innerHTML = Math.round(response.data.wind.speed);
  feelsLikeTemp.innerHTML = Math.round(response.data.temperature.feels_like);
}
function formatDate(date) {
  let minutes = date.getMinutes();
  let hours = date.getHours();
  if (hours < 10) {
    hours = `0${hours}`;
  }
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let day = days[date.getDay()];
  return `${day} ${hours}:${minutes}`;
}
function searchWeatherCity(city) {
  let apiKey = "e3b5tabo33a51804d1f4de7a47bd9d3f";
  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
  axios.get(apiUrl).then(updateWeather);
}
function searchCity(event) {
  event.preventDefault();
  let searchInput = document.querySelector("#search-input");

  searchWeatherCity(searchInput.value);
}
let searchForm = document.querySelector("#search-form");
searchForm.addEventListener("submit", searchCity);
searchWeatherCity("Berlin");
