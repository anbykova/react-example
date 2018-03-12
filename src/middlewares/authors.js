import { call, put, takeEvery, takeLatest } from 'redux-saga/effects'
import { getAuthorsSuccesed, getAuthorsFailed } from '../actions/authorsActions'
import { queries, mutations } from '../api'
import * as graphQLApiModule from '../api/graphQLApi'

const graphQLApi = graphQLApiModule.default;

// worker Saga: will be fired on USER_FETCH_REQUESTED actions
export function* fetchGetAuthors(action) {
   try {
      const response = yield call(graphQLApi.query, { query: queries.getAllAuthors});  //second parameter params
      yield put(getAuthorsSuccesed(response.data.authors));
   } catch (e) {
       console.log(e);
      yield put(getAuthorsFailed());
   }
}

export function* fetchChangeAuthor(action) {
    try {
       const response = yield call(graphQLApi.mutation, 
            { 
                mutation: mutations.createUser,
                variables: action.payload
            });
       yield put(getAuthorsSuccesed(response.data.authors));
    } catch (e) {
        console.log(e);
       yield put(getAuthorsFailed());
    }
 }