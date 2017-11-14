import { createStore, compose, applyMiddleware } from 'redux';
import rootReducer from '../reducers/rootReducer';
import DevTools from '../devTools/DevTools';
import { persistState } from 'redux-devtools';
import thunk from 'redux-thunk';
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
let enhancer;
if (__REDUX_TOOLS__) {
    enhancer = compose(
        DevTools.instrument(),
        persistState(
            window.location.href.match(
                /[?&]debug_session=([^&#]+)\b/
            )
        ),
        applyMiddleware(thunk)
    );
} else {
    enhancer = compose(
        composeEnhancers(
            applyMiddleware(thunk)
        )
    );
}

export default function configureStore(initialState) {
  const store = createStore(rootReducer, initialState, enhancer);

  if (module.hot && __REDUX_TOOLS__) {
    module.hot.accept('../reducers/rootReducer', () =>
      store.replaceReducer(require('../reducers/rootReducer').default)
    );
  }

  return store;
}