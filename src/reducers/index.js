import { combineReducers } from 'redux';
import WeatherReducer from './reducer-weather';
import ForecastReducer from './reducer-forecast';
import UnitsReducer from './reducer-unit';

const rootReducer = combineReducers({
  weather: WeatherReducer,
  forecast: ForecastReducer,
  celsius: UnitsReducer
});

export default rootReducer;
