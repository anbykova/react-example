import {createStore, applyMiddleware, compose} from 'redux';  
import rootReducer from '../reducers/rootReducer';  
import thunk from 'redux-thunk';

// if (__DEV__) {
//   createStore = compose(
//       require('redux-devtools').devTools(),
//       require('redux-devtools').persistState(
//       window.location.href.match(/[?&]debug_session=([^&]+)\b/)
//       ),
//       createStore
//   );
// }

export default function configureStore() {  
  return createStore(
    rootReducer,
    applyMiddleware(thunk)
  );
}