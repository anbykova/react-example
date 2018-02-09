import { createStore, applyMiddleware } from 'redux';
import rootReducer from '../reducers/rootReducer';
import createSagaMiddleware from 'redux-saga'
import mySaga from '../middlewares'

export default function configureStore(initialState) {
  const store = createStore(rootReducer, initialState, applyMiddleware(sagaMiddleware));
  sagaMiddleware.run(mySaga);
  return store;
}