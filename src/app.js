function updateWeather(response) {
  let temperature = document.querySelector("#temperature-value");
  let city = document.querySelector("#weather-app-city");
  city.innerHTML = response.data.city;
  temperature.innerHTML = Math.round(response.data.temperature.current);
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
