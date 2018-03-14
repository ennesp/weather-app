import {TOGGLE_UNITS} from '../actions/index';

export default function (state = [], action){
    switch(action.type){
        case TOGGLE_UNITS:
            return action.payload;
            
        default:
            return state;
    }
}