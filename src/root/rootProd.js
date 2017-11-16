import React, { Component } from 'react';
import { Provider } from 'react-redux';
import App from '../containers/app/App';
import { BrowserRouter, browserHistory } from 'react-router-dom'

export default class Root extends Component {
  render() {
    const { store } = this.props;
    return (
      <Provider store={store}>
        <BrowserRouter history={browserHistory}>
          <App />
        </BrowserRouter>
      </Provider>
    );
  }
}