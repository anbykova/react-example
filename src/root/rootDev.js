import React, { Component } from 'react';
import { Provider } from 'react-redux';
import DevTools from '../devTools/DevTools';
import App from '../containers/app/App';

export default class Root extends Component {
  returnApp() {
    if (__REDUX_TOOLS__) {
      return (
        <div>
          <App />
          <DevTools />
        </div>
      ); 
    } else {
      return <App />
    }
  }
  render() {
    const { store } = this.props;
    return (
      <Provider store={store}>
        {this.returnApp()}
      </Provider>
    );
  }
}