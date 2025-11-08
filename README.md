# 🌤️ Weather App

A beautiful, modern weather application that provides real-time weather information with automatic location detection. Built with vanilla JavaScript, HTML, and CSS.

![Weather App](https://img.shields.io/badge/version-1.0.0-blue.svg)
![License](https://img.shields.io/badge/license-MIT-green.svg)

## ✨ Features

- 🌍 **Auto-location Detection** - Automatically shows weather for your current location on load
- 🔍 **City Search** - Search for weather in any city worldwide
- 🎨 **Modern UI** - Glassmorphic design with smooth animations
- 📱 **Fully Responsive** - Works perfectly on desktop, tablet, and mobile devices
- 🌡️ **Comprehensive Weather Data**:
  - Current temperature
  - Weather description
  - Humidity levels
  - Wind speed
  - Feels like temperature
  - Atmospheric pressure
  - Air Quality Index (AQI)
- 🎭 **Dynamic Weather Icons** - Icons change based on weather conditions
- 🌈 **Beautiful Gradients** - Eye-catching gradient backgrounds
- ⚡ **Fast & Lightweight** - No frameworks, pure vanilla JavaScript

## 🚀 Demo

Simply open `index.html` in your browser to see the app in action!

## 📸 Screenshots

The app features:
- Clean, modern interface with glassmorphic design
- Real-time weather updates
- Color-coded Air Quality Index
- Smooth animations and transitions

## 🛠️ Technologies Used

- **HTML5** - Structure
- **CSS3** - Styling with glassmorphism and animations
- **JavaScript (ES6+)** - Functionality and API calls
- **OpenWeatherMap API** - Weather and air pollution data

## 📦 Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/weather-app.git
```

2. Navigate to the project directory:
```bash
cd weather-app
```

3. Open `index.html` in your browser or use a local server:
```bash
# Using Python
python -m http.server 8000

# Using Node.js
npx serve
```

## 🔑 API Key Setup

This app uses the OpenWeatherMap API. The current API key is included for demo purposes, but you should get your own:

1. Sign up at [OpenWeatherMap](https://openweathermap.org/api)
2. Get your free API key
3. Replace the API key in `text.js`:
```javascript
const apiKey = "YOUR_API_KEY_HERE";
```

## 💻 Usage

1. **Automatic Location**: 
   - Allow location access when prompted
   - Weather data loads automatically

2. **Manual Search**:
   - Type a city name in the search box
   - Press Enter or click the search button

3. **Location Button**:
   - Click the location icon to refresh your current location weather

## 🎨 Features Breakdown

### Weather Information
- **Temperature**: Displayed in Celsius
- **City Name**: Current location
- **Description**: Weather condition (e.g., clear sky, light rain)
- **Humidity**: Percentage of moisture in the air
- **Wind Speed**: In km/h
- **Feels Like**: Perceived temperature
- **Pressure**: Atmospheric pressure in hPa
- **AQI**: Air Quality Index with color coding

### Air Quality Index (AQI)
- 🟢 **Good** - Air quality is satisfactory
- 🟡 **Fair** - Acceptable air quality
- 🟠 **Moderate** - Sensitive groups may experience effects
- 🔴 **Poor** - Everyone may begin to experience effects
- 🔴 **Very Poor** - Health warnings of emergency conditions

## 📱 Responsive Design

The app is fully responsive and optimized for:
- 💻 Desktop (>768px)
- 📱 Tablet (≤768px)
- 📱 Mobile (≤480px)
- 📱 Small Mobile (≤360px)

## 🎯 Browser Support

- ✅ Chrome (recommended)
- ✅ Firefox
- ✅ Safari
- ✅ Edge
- ✅ Opera

## 🤝 Contributing

Contributions are welcome! Feel free to:

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👨‍💻 Author

Your Name
- GitHub: [@yourusername](https://github.com/yourusername)

## 🙏 Acknowledgments

- Weather data provided by [OpenWeatherMap](https://openweathermap.org/)
- Icons from the project assets
- Inspired by modern weather app designs

## 📧 Contact

For any questions or suggestions, feel free to reach out!

---

⭐ Star this repo if you found it helpful!
