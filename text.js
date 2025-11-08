const apiKey = "2b65c442f95ea58aec44f0aad2c88fa1";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric";
const airPollutionUrl = "https://api.openweathermap.org/data/2.5/air_pollution";

const searchBox = document.getElementById("searchInput");
const searchBtn = document.getElementById("searchBtn");
const locationBtn = document.getElementById("locationBtn");
const weatherIcon = document.querySelector(".weather-icon");

const loadingEl = document.querySelector(".loading");
const errorEl = document.querySelector(".error");
const weatherEl = document.querySelector(".weather");
const errorMsg = document.getElementById("errorMsg");

// Get AQI data
async function getAQI(lat, lon) {
    try {
        const response = await fetch(`${airPollutionUrl}?lat=${lat}&lon=${lon}&appid=${apiKey}`);
        if (response.ok) {
            const data = await response.json();
            return data.list[0].main.aqi;
        }
    } catch (error) {
        console.log("AQI data unavailable");
    }
    return null;
}

// Display AQI
function displayAQI(aqi) {
    const aqiElement = document.querySelector(".aqi");
    const aqiLabels = ["Good", "Fair", "Moderate", "Poor", "Very Poor"];
    const aqiClasses = ["aqi-good", "aqi-fair", "aqi-moderate", "aqi-poor", "aqi-very-poor"];
    
    if (aqi && aqi >= 1 && aqi <= 5) {
        aqiElement.textContent = aqiLabels[aqi - 1];
        aqiElement.className = "aqi " + aqiClasses[aqi - 1];
    } else {
        aqiElement.textContent = "N/A";
        aqiElement.className = "aqi";
    }
}

// Get weather by city name
async function getWeatherByCity(city) {
    if (!city.trim()) return;
    
    showLoading();
    try {
        const response = await fetch(`${apiUrl}&q=${city}&appid=${apiKey}`);
        
        if (response.status === 404) {
            showError("City not found. Please try again.");
            return;
        }
        
        if (!response.ok) {
            showError("Unable to fetch weather data.");
            return;
        }
        
        const data = await response.json();
        const aqi = await getAQI(data.coord.lat, data.coord.lon);
        displayWeather(data);
        displayAQI(aqi);
    } catch (error) {
        showError("Network error. Check your connection.");
    }
}

// Get weather by coordinates
async function getWeatherByCoords(lat, lon) {
    showLoading();
    try {
        const response = await fetch(`${apiUrl}&lat=${lat}&lon=${lon}&appid=${apiKey}`);
        
        if (!response.ok) {
            showError("Unable to fetch weather data.");
            return;
        }
        
        const data = await response.json();
        const aqi = await getAQI(lat, lon);
        displayWeather(data);
        displayAQI(aqi);
    } catch (error) {
        showError("Network error. Check your connection.");
    }
}

// Display weather data
function displayWeather(data) {
    hideLoading();
    hideError();
    
    document.querySelector(".city").textContent = data.name;
    document.querySelector(".temp").textContent = Math.round(data.main.temp) + "°C";
    document.querySelector(".description").textContent = data.weather[0].description;
    document.querySelector(".humidity").textContent = data.main.humidity + "%";
    document.querySelector(".wind").textContent = Math.round(data.wind.speed * 3.6) + " km/h";
    document.querySelector(".feels-like").textContent = Math.round(data.main.feels_like) + "°C";
    document.querySelector(".pressure").textContent = data.main.pressure + " hPa";
    
    // Update weather icon
    const weatherCondition = data.weather[0].main;
    switch(weatherCondition) {
        case "Clouds":
            weatherIcon.src = "clouds.png";
            break;
        case "Clear":
            weatherIcon.src = "clear.png";
            break;
        case "Rain":
            weatherIcon.src = "rain.png";
            break;
        case "Drizzle":
            weatherIcon.src = "drizzle.png";
            break;
        case "Mist":
        case "Fog":
        case "Haze":
            weatherIcon.src = "mist.png";
            break;
        case "Snow":
            weatherIcon.src = "snow.png";
            break;
        default:
            weatherIcon.src = "clear.png";
    }
    
    weatherEl.style.display = "block";
}

// UI state functions
function showLoading() {
    loadingEl.style.display = "block";
    weatherEl.style.display = "none";
    errorEl.style.display = "none";
}

function hideLoading() {
    loadingEl.style.display = "none";
}

function showError(message) {
    hideLoading();
    errorMsg.textContent = message;
    errorEl.style.display = "block";
    weatherEl.style.display = "none";
}

function hideError() {
    errorEl.style.display = "none";
}

// Get user's current location
function getCurrentLocation() {
    if (navigator.geolocation) {
        showLoading();
        navigator.geolocation.getCurrentPosition(
            (position) => {
                const { latitude, longitude } = position.coords;
                getWeatherByCoords(latitude, longitude);
            },
            (error) => {
                hideLoading();
                showError("Unable to get location. Please search manually.");
            }
        );
    } else {
        showError("Geolocation not supported by your browser.");
    }
}

// Event listeners
searchBtn.addEventListener("click", () => {
    getWeatherByCity(searchBox.value);
});

searchBox.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
        getWeatherByCity(searchBox.value);
    }
});

locationBtn.addEventListener("click", getCurrentLocation);

// Check time and set theme
function setThemeBasedOnTime() {
    const hour = new Date().getHours();
    const body = document.body;
    
    // Night mode: 6 PM (18:00) to 6 AM (6:00)
    if (hour >= 18 || hour < 6) {
        body.classList.add('night-mode');
    } else {
        body.classList.remove('night-mode');
    }
}

// Auto-load weather for current location on page load
window.addEventListener("load", () => {
    setThemeBasedOnTime();
    getCurrentLocation();
    
    // Update theme every minute
    setInterval(setThemeBasedOnTime, 60000);
});
