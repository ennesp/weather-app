import React, {Component} from 'react';
import {connect} from 'react-redux';

class WeatherInfo extends Component{
    renderWeather(){
        if(this.props.weather.length !== 0){
            const unit = this.props.celsius;
            
            const iconURL = `http://openweathermap.org/img/w/${this.props.weather.weather[0].icon}.png`;
            var today = new Date();
            var day = today.getDay();
            var dd = today.getDate();
            var mm = today.getMonth()+1;
            
            var hours = today.getHours();
            var mins = today.getMinutes();
            

            if(mm<10) {
                mm = '0'+mm
            } 
            
            if(hours<10)
                hours = '0'+hours;
            
            if(mins<10)
                mins = '0'+mins;
            
            var months = ["January", "February", "March", "April", "May", "June",
              "July", "August", "September", "October", "November", "December"
            ];

            const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
            
            today = days[day] + ', ' + dd + ' ' + months[mm-1];
            
            var time = hours + ':' + mins;
            
            let currentTemp = (this.props.weather.main.temp).toFixed();
            let tempMax = (this.props.weather.main.temp_max).toFixed();
            let tempMin = (this.props.weather.main.temp_min).toFixed();
            
            if(unit === true){
                currentTemp = toFahrenheit(this.props.weather.main.temp).toFixed();
                tempMax = toFahrenheit(this.props.weather.main.temp_max).toFixed();
                tempMin = toFahrenheit(this.props.weather.main.temp_min).toFixed();
            }
            
            
            return (
                <div className="weather-details">
                   <div className="city-info">
                        <h3 className="city-name">{this.props.weather.name}, <span className="country">{this.props.weather.sys.country}</span></h3>
                        <time>{time}<p className="date">{today}</p></time>
                    </div>
                    
                    <div className="weather-info">
                        <div className="weather-icon"><img src={iconURL} alt="Weather type"/></div>
                        <span className="current-temp">{currentTemp}<sup>°</sup></span>
                        <div className="more-info">
                            <p className="weather-desc">{this.props.weather.weather[0].description}</p>
                            <p className="min-max"> 
                                <span><i className="ion-ios-arrow-thin-up"></i>{tempMax}°</span>
                                <span><i className="ion-ios-arrow-thin-down"></i>{tempMin}°</span>
                            </p>
                            
                        </div>
                        
                    </div>
                </div>
            );
        }else{
            return;
        }
    }
    
    render(){
        return <div>{this.renderWeather()}</div>;
    }
}

function toFahrenheit(temp){
    return temp*1.8+32;
}

function mapStateToProps(state){
    return {
        weather: state.weather,
        celsius: state.celsius
    };
}

export default connect(mapStateToProps)(WeatherInfo);