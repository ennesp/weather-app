import React, { Component } from 'react';
import SearchBar from '../containers/search-bar';
import WeatherInfo from '../containers/weather-info';
import WeatherForecast from '../containers/weather-forecast';
import UnitsToggle from '../containers/units-toggle';

export default class App extends Component {
  render() {
    const bg = Math.floor(Math.random() * 11) + 1;
    document.body.style.backgroundImage = 'url(img/'+bg+'.jpg)';
      
    return (
      <div>
          <UnitsToggle />
          <SearchBar />
          <div className="weather-box">
              <WeatherInfo />
              <WeatherForecast />
          </div>
      </div>
    );
  }
}
