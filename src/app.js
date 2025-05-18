
function updateWeather(response){
  let temperatureElement = document.querySelector("#temperature");
  let temperature = response.data.temperature.current;
  let cityElement = document.querySelector("#city-name");
  let descriptionElement = document.querySelector("#description");
  let humidityElement = document.querySelector("#humidity");
  let windSpeedElement = document.querySelector("#windspeed");
  let timeElement = document.querySelector("#current-time");
  let date = new Date(response.data.time * 1000);
  let iconElement = document.querySelector("#icon");

  cityElement.innerHTML = response.data.city;
  timeElement.innerHTML = formatDate(date);
  descriptionElement.innerHTML = response.data.condition.description;
  humidityElement.innerHTML = `${response.data.temperature.humidity}%`;
  windSpeedElement.innerHTML = `${response.data.wind.speed}km/h`;
  temperatureElement.innerHTML = Math.round(temperature);
  iconElement.innerHTML = `<img src="${response.data.condition.icon_url}" class="weather-app-icon" />`;
}

function formatDate(date) {
  let minutes = date.getMinutes();
  let hours = date.getHours();
  let days = [
         "Sunday",
         "Monday",
         "Tuesday",
         "Wednesday",
         "Thursday",
         "Friday",
         "Saturday"
     ]
     let day = days[date.getDay()];
     if (minutes < 10 ){
         minutes = `0${minutes}`;
     }
     return `${day} ${hours}:${minutes}`;
 }
 function search(city){
 let apiKey = `fa0d396f3af7cta73o6fb5a74235503f`;
 let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}`;
     axios.get(apiUrl).then(updateWeather);
 };
 function searchInput(event){
              event.preventDefault();
              let inputElement = document.querySelector("#city");
              search(inputElement.value);
          }
          let searchForm = document.querySelector("#city-search");
 searchForm.addEventListener("submit", searchInput);
 search("Abuja");
