import React, { Component } from 'react';
import { Provider } from 'react-redux';
import DevTools from '../devTools/DevTools';
import App from '../containers/app/App';
import { BrowserRouter, browserHistory } from 'react-router-dom'

export default class Root extends Component {
  returnApp() {
    if (__REDUX_TOOLS__) {
      return (
        <BrowserRouter history={browserHistory}>
          <App />
          <DevTools />
        </BrowserRouter>
      ); 
    } else {
      return (
        <BrowserRouter history={browserHistory}>
          <App />
        </BrowserRouter>
      )
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