import { GET_AUTHORS_SUCCEEDED } from '../actions/actionTypes';

const authors = (state = { all: [] }, action) => {
  switch (action.type) {
    case GET_AUTHORS_SUCCEEDED:
      return Object.assign({}, state, { all: action.payload });
    default:
      return state;
  }
};

export default authors;