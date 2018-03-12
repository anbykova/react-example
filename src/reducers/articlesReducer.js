import { GET_ARTICLES_SUCCEEDED, PUT_ARTICLE_SUCCEEDED, TOGGLE_ARTICLE_MODAL, SUBSCRIBE_CREATED_ARTICLE_SUCCEEDED } from '../actions/actionTypes';

const articles = (state = { all: [] }, action) => {
  switch (action.type) {
    case GET_ARTICLES_SUCCEEDED:
      return Object.assign({}, state, { all: action.payload });
    case PUT_ARTICLE_SUCCEEDED:
      const allArticles = [...state.all];
      allArticles.push(action.payload);
      return Object.assign({}, state, { all: allArticles });
    case TOGGLE_ARTICLE_MODAL:
      return Object.assign({}, state, { isArticleModalOpened: !state.isArticleModalOpened });
    case SUBSCRIBE_CREATED_ARTICLE_SUCCEEDED:
      return Object.assign({}, state, { new: action.payload });
    default:
      return state;
  }
};

export default articles;