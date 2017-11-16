import React, { Component } from 'react';
import { Provider } from 'react-redux';
import DevTools from '../devTools/DevTools';
import App from '../containers/app/App';
import { BrowserRouter } from 'react-router-dom'

export default class Root extends Component {
  returnApp() {
    if (__REDUX_TOOLS__) {
      return (
        <BrowserRouter>
          <App />
          <DevTools />
        </BrowserRouter>
      ); 
    } else {
      return (
        <BrowserRouter>
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