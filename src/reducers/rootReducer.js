import { combineReducers } from 'redux';
import menu from './menuReducer';
import news from './newsReducer';

const rootReducer = combineReducers({ menu, news });

export default rootReducer;