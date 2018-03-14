import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {fetchWeather} from '../actions/index';
import {fetchForecast} from '../actions/index';

class SearchBar extends Component{
    constructor(props){
        super(props);
        
        this.state = {term: ''};
        
        this.onInputChange = this.onInputChange.bind(this);
        this.onFormSubmit = this.onFormSubmit.bind(this);
    }
    
    onInputChange(e){
        e.preventDefault();
        this.setState({term: e.target.value});
    }
    
    onFormSubmit(e){
        e.preventDefault();
        if(this.state.term !== ''){
            this.props.fetchWeather(this.state.term);
            this.props.fetchForecast(this.state.term);
            this.setState({term: ''});
        }
    }
    
    render(){
        return(
            <div className="search-bar">
                <form className="input-group" onSubmit={this.onFormSubmit}>
                    <input 
                        placeholder="Enter a city"
                        value={this.state.term}
                        onChange={this.onInputChange}
                        type="text" 
                        className="form-control" />

                    <span className="input-group-btn">
                        <button type="submit" className="btn btn-secondary"><i className="ion-ios-search-strong"></i></button>
                    </span>
                </form>
            </div>
        );
    }
}

function mapDispatchToProps(dispatch){
    return bindActionCreators({fetchWeather, fetchForecast}, dispatch);
}

export default connect(null, mapDispatchToProps)(SearchBar);