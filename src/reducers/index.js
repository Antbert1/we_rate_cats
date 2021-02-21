import { combineReducers } from 'redux';
import {
    CAT_LIST
} from '../actions';

const dataState = {
    catList: []
}

const dataReducer = (state = dataState, action) => {
    switch (action.type) {
        case CAT_LIST:
            state = Object.assign({}, state, {catList: action.catList});
            return state;
        default:
            return state;
    }
}

const rootReducer = combineReducers({
    dataReducer
});

export default rootReducer;
