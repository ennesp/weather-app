import React, {Component} from 'react';
import {connect} from 'react-redux';

class WeatherForecast extends Component{
    constructor(props){
        super(props);
        
        this.renderForecast = this.renderForecast.bind(this);
    }
    
    renderForecast(day){
        const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
        const iconURL = `http://openweathermap.org/img/w/${day.weather[0].icon}.png`;
        const date = new Date(day.dt*1000);
        const dayName = date.getDay();
        
        let temp = day.temp.day.toFixed();
        const unit = this.props.celsius;
        
        if(unit === true){
            temp = toFahrenheit(day.temp.day).toFixed();
        }
        
        return(
            <li key={day.dt}>
                <div className="day-name">
                    {days[dayName]}
                </div>
                
                <img src={iconURL} alt="Icon"/>
                
                <p className="temp">{temp}°</p>
            </li>
        );
    }
    
    render(){
        if(!this.props.forecast.list){
            return null;
        }
        
        return(
            <div className="forecast">
                <ul className="list-inline unstyled-list">
                    {this.props.forecast.list.map(this.renderForecast)}
                </ul>
            </div>
        );
    }
}

function toFahrenheit(temp){
    return temp*1.8+32;
}

function mapStateToProps(state){
    return {
        forecast: state.forecast,
        celsius: state.celsius
    };
}

export default connect(mapStateToProps)(WeatherForecast);