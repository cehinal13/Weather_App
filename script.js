// script.js
// JavaScript functionality for weather forecasts

// Function to fetch weather data based on city name
async function getWeather(city) {
    const API_KEY = 'YOUR_API_KEY'; // Replace with your actual API key
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`);
    if (!response.ok) {
        throw new Error('Weather data not found');
    }
    const data = await response.json();
    return data;
}

// Function to display weather data
function displayWeather(data) {
    const weatherContainer = document.getElementById('weather');
    weatherContainer.innerHTML = `<h2>Weather in ${data.name}</h2>\n` +
                                 `<p>Temperature: ${data.main.temp} °C</p>\n` +
                                 `<p>Weather: ${data.weather[0].description}</p>`;
}

// Example usage:
getWeather('London')
    .then(displayWeather)
    .catch(err => console.error(err));