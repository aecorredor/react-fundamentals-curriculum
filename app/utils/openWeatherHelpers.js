var axios = require('axios');

// Those two endpoints are:
// Current Weather: http://api.openweathermap.org/data/2.5/weather?q=CITY-NAME&type=accurate&APPID=YOUR-API-KEY
// 5 Day Forecast: http://api.openweathermap.org/data/2.5/forecast/daily?q=CITY-NAME&type=accurate&APPID=YOUR-API-KEY&cnt=5

var key = "389c8c46b4715e23d5f2c527e0c0b8ac";

// displays format like: Thursday, June 16
function convertTime(unixTimestamp) {
  var date = new Date(unixTimestamp * 1000);
  var week_days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August',
                'September', 'October', 'November', 'December'];
  var week_day = date.getDay();
  var month = date.getMonth();
  var month_day = date.getDate();
  return week_days[week_day] + ', ' + months[month] + ' ' + month_day;
}

function kelvToFahr(kelvin) {
  var result = 1.8 * (kelvin - 273) + 32;
  return parseInt(result, 10);
}

var helpers = {
  // returns a parsed object with the current weather with time, temperature,
  // and humidity already converted and properly formatted.
  getCurrentWeather: function(city, apiKey = key) {
    return axios.get('http://api.openweathermap.org/data/2.5/weather?q=' + city +
                     '&type=accurate&APPID=' + apiKey)
                     .then(function(results){
                       var finalResult = {
                         date: convertTime(results.data.dt),
                         city: results.data.name,
                         weather: results.data.weather[0].description,
                         icon: results.data.weather[0].icon,
                         minTemp: kelvToFahr(results.data.main.temp_min),
                         maxTemp: kelvToFahr(results.data.main.temp_max),
                         humidity: results.data.main.humidity + '%'
                       };
                       return finalResult;
                     });
  },
  // returns a parsed object with the 5 day forecast, with time, temperature,
  // and humidity already converted and properly formatted.
  getFiveDayForecast: function(city, apiKey = key) {
    return axios.get('http://api.openweathermap.org/data/2.5/forecast/daily?q=' + city +
                     '&type=accurate&APPID=' + apiKey + '&cnt=5')
                     .then(function(results){
                       var finalResult = {
                         city: results.data.city.name,
                         days: []
                       };
                       for (var i = 0; i < results.data.cnt; i++) {
                         currentDay = results.data.list[i];
                         finalResult.days[i] = {
                           date: convertTime(currentDay.dt),
                           weather: currentDay.weather[0].description,
                           icon: currentDay.weather[0].icon,
                           minTemp: kelvToFahr(currentDay.temp.min),
                           maxTemp: kelvToFahr(currentDay.temp.max),
                           humidity: currentDay.humidity + '%'
                         };
                       }
                       return finalResult;
                     });
  },
};

module.exports = helpers;
