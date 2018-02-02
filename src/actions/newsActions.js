import * as types from './actionTypes';

export function setNews(articles) {
  return {
    type: types.SET_NEWS,
    payload: articles
  };
}