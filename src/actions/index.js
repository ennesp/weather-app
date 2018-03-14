import axios from 'axios';

const API_KEY = 'b537ce6ecfc2965298c33fa7efc9b883';
const ROOT_URL_WEATHER = `http://api.openweathermap.org/data/2.5/weather?appid=${API_KEY}&units=metric`;
const ROOT_URL_FORECAST = `http://api.openweathermap.org/data/2.5/forecast/daily?appid=${API_KEY}&units=metric&cnt=7`;
export const FETCH_WEATHER = 'FETCH_WEATHER';
export const FETCH_FORECAST = 'FETCH_FORECAST';
export const TOGGLE_UNITS = 'TOGGLE_UNITS';

export function fetchWeather(city){
    const url = `${ROOT_URL_WEATHER}&q=${city}`;
    const request = axios.get(url);

    return {
        type: FETCH_WEATHER,
        payload: request
    }
}

export function fetchForecast(city){
    const url = `${ROOT_URL_FORECAST}&q=${city}`;
    const request = axios.get(url);

    return {
        type: FETCH_FORECAST,
        payload: request
    }
}

export function toggleUnits(unit){
    return {
        type: TOGGLE_UNITS,
        payload: unit
    }
}