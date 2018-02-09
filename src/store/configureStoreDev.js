import { createStore, compose, applyMiddleware } from 'redux'
import rootReducer from '../reducers/rootReducer'
import DevTools from '../devTools/DevTools'
import { persistState } from 'redux-devtools'
import createSagaMiddleware from 'redux-saga'
import mySaga from '../middlewares'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
let enhancer;
const sagaMiddleware = createSagaMiddleware()
if (__REDUX_TOOLS__) {
    enhancer = compose(
        DevTools.instrument(),
        persistState(
            window.location.href.match(
                /[?&]debug_session=([^&#]+)\b/
            )
        ),
        applyMiddleware(sagaMiddleware) //composeEnhancers
    );
} else {
    enhancer = composeEnhancers(applyMiddleware(sagaMiddleware));
}

export default function configureStore(initialState) {
  const store = createStore(rootReducer, initialState, enhancer);
  sagaMiddleware.run(mySaga);

  if (module.hot && __REDUX_TOOLS__) {
    module.hot.accept('../reducers/rootReducer', () =>
      store.replaceReducer(require('../reducers/rootReducer').default)
    );
  }

  return store;
}