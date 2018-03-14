import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {toggleUnits} from '../actions/index';

class UnitsToggle extends Component{
    constructor(props){
        super(props);
        this.onUnitChange = this.onUnitChange.bind(this);
    }
    
    render(){
        return(
            <div className="units-toggle">
                <input type="checkbox" id="units" onChange={this.onUnitChange}/>
                <label htmlFor="units">
                    <span>°C</span>
                    <span>°F</span>
                </label>
            </div>
        );
    }
    
    onUnitChange(e){
        this.props.toggleUnits(e.target.checked);
    }
}

function mapDispatchToProps(dispatch){
    return bindActionCreators({toggleUnits}, dispatch);
}

export default connect(null, mapDispatchToProps)(UnitsToggle);