import * as types from './actionTypes';

export function getAuthorsSuccesed(authors) {
  return {
    type: types.GET_AUTHORS_SUCCEEDED,
    payload: authors
  };
}

export function getAuthorsFailed() { //error?
  return {
    type: types.GET_AUTHORS_FAILED
  };
}

export function getAuthors() {
  return {
    type: types.GET_AUTHORS
  };
}

export function putAuthor() {
  return {
    type: types.PUT_AUTHOR
  };
}
