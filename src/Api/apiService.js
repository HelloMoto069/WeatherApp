import axios from 'axios';

const API_KEY = 'f340d1552d884dc11a1066ddd23850e7';
const BASE_URL = 'https://api.openweathermap.org/data/2.5';
const BASE_URL_MAPS = 'https://tile.openweathermap.org/map';

export async function apiServiceSearchData(value) {
  const resp = await axios.get(
    `${BASE_URL}/weather?q=${value}&appid=${API_KEY}&units=metric`
  );

  return resp.data;
}

export async function apiServiceWeatherData(lat, lon) {
  const resp = await axios.get(
    `${BASE_URL}/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
  );

  return resp.data;
}

export async function apiServiceForecastData(lat, lon) {
  const resp = await axios.get(
    `${BASE_URL}/forecast?lat=${lat}&lon=${lon}&units=metric&appid=${API_KEY}`
  );

  return resp.data;
}
// !!!! WeatherMap
// export async function apiServiceWeatherMaps() {
//   const layer = 'precipitation_new';
//   const resp = await axios.get(
//     `${BASE_URL_MAPS}/${layer}/3/1/1.png?appid=${API_KEY}`
//   );

//   return resp.data;
// }
