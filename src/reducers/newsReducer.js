import { SET_NEWS } from '../actions/actionTypes';

const news = (state = { articles: [] }, action) => {
  switch (action.type) {
    case SET_NEWS:
      return Object.assign({}, state, { articles: action.payload });
    default:
      return state;
  }
};

export default news;