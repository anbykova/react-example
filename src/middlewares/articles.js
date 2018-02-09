import { call, put, takeEvery, takeLatest } from 'redux-saga/effects'
import { getArticlesSuccesed, getArticlesFailed, putArticleSuccesed, putArticleFailed, subscribeCreatedArticlesSuccesed, subscribeCreatedArticlesFailed } from '../actions/articlesActions'
import { queries, mutations, subscriptions } from '../api'
import * as graphQLApiModule from '../api/graphQLApi'

const graphQLApi = graphQLApiModule.default;


// worker Saga: will be fired on USER_FETCH_REQUESTED actions
export function* fetchGetArticles(action) {
   try {
      const response = yield call(graphQLApi.query, { query: queries.getAllArticles});  //second parameter params
      yield put(getArticlesSuccesed(response.data.articles));
   } catch (e) {
       console.log(e);
      yield put(getArticlesFailed());
   }
}

export function* fetchCreateArticle(action) {
    try {
       const response = yield call(graphQLApi.mutation, 
            { 
                mutation: mutations.createArticle,
                variables: action.payload
            });
        const newArticle = Object.assign({id: response.data.createArticle.id}, action.payload);
       yield put(putArticleSuccesed(newArticle));
    } catch (e) {
        console.log(e);
       yield put(putArticleFailed());
    }
 }


 export function* fetchSubscribeCreatedArticles(action) {
    try {
        const allArticlesQuery = yield graphQLApi.watchQuery({
            query: queries.getAllArticles
        });

        allArticlesQuery.subscribeToMore({
          document: subscriptions.createdArticles,
          updateQuery: (prev, next) => {
            console.log('prev', prev, next);
            return prev;
          }
        });

        console.log(allArticlesQuery.valueChanges);

        const querySubscription = allArticlesQuery.valueChanges.subscribe((response) => {
            console.log('querySubscription', response);
        });

        yield put(subscribeCreatedArticlesSuccesed());
    } catch (e) {
        console.log(e);
       yield put(subscribeCreatedArticlesFailed());
    }
 }