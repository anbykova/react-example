import * as types from './actionTypes';

export function getArticlesSuccesed(articles) {
  return {
    type: types.GET_ARTICLES_SUCCEEDED,
    payload: articles
  };
}

export function getArticlesFailed() { //error?
  return {
    type: types.GET_ARTICLES_FAILED
  };
}

export function getArticles() {
  return {
    type: types.GET_ARTICLES
  };
}

export function putArticleSuccesed(article) {
  return {
    type: types.PUT_ARTICLE_SUCCEEDED,
    payload: article
  };
}

export function putArticleFailed() { //error?
  return {
    type: types.PUT_ARTICLE_FAILED
  };
}

export function putArticle(article) {
  return {
    type: types.PUT_ARTICLE,
    payload: article
  };
}

export function subscribeCreatedArticlesSuccesed(articles) {
  return {
    type: types.SUBSCRIBE_CREATED_ARTICLE_FAILED,
    payload: articles
  };
}

export function subscribeCreatedArticlesFailed() { //error?
  return {
    type: types.SUBSCRIBE_CREATED_ARTICLE_SUCCEEDED
  };
}

export function subscribeCreatedArticles() {
  return {
    type: types.SUBSCRIBE_CREATED_ARTICLE
  };
}
