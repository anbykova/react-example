import { fetchGetArticles, fetchCreateArticle, fetchSubscribeCreatedArticles } from './articles';
import { fetchGetAuthors, fetchChangeAuthor } from './authors';
import { GET_ARTICLES, GET_AUTHORS, PUT_AUTHOR, PUT_ARTICLE, SUBSCRIBE_CREATED_ARTICLE } from '../actions/actionTypes'
import { takeEvery } from 'redux-saga/effects'

function* mySaga() {
    yield takeEvery(GET_ARTICLES, fetchGetArticles);
    yield takeEvery(GET_AUTHORS, fetchGetAuthors);
    yield takeEvery(PUT_AUTHOR, fetchChangeAuthor);
    yield takeEvery(PUT_ARTICLE, fetchCreateArticle);
    yield takeEvery(SUBSCRIBE_CREATED_ARTICLE, fetchSubscribeCreatedArticles);
}

export default mySaga;