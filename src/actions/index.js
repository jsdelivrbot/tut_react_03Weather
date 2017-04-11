// contains all ActionCreator

import axios from 'axios';

// OpenWeatherMap Key
const API_KEY = '604c73c7a227598c971475bc364f89c1';

// original= http://samples.openweathermap.org/data/2.5/forecast?q=London,us&mode=xml&appid=b1b15e88fa797225412429c1c50c122a1
// ES6 Syntax --> optional --> not "" or '' ==> use ``
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;


export const FETCH_WEATHER = 'FETCH_WEATHER';

// ActionCreator to fetch Weather data
export function fetchWeather(city) {

  // ES6 Syntax --> add query of city and country code to URL
  const url = `${ROOT_URL}&q=${city},de`;
  // returns a "promise"
  const request = axios.get(url);
  // promise = contains data --> returned as payload

  console.log('Request: ', request)

  // an ActionCreator has to return an Object
  // this Object has to have an "type"
  return {
    type: FETCH_WEATHER,
    payload: request
  };
}
