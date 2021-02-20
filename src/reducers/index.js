import { combineReducers } from 'redux';
import {
    DATA
} from '../actions';

const dataState = {
    data: []
}

const dataReducer = (state = dataState, action) => {
    switch (action.type) {
        case DATA:
            state = Object.assign({}, state, {data: action.data});
            return state;
        default:
            return state;
    }
}

const rootReducer = combineReducers({
    dataReducer
});

export default rootReducer;
