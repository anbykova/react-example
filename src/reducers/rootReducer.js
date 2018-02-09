import { combineReducers } from 'redux';
import articles from './articlesReducer';
import authors from './authorsReducer';

const rootReducer = combineReducers({ articles, authors });

export default rootReducer;
