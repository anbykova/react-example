import React, { Component } from 'react';
import { Provider } from 'react-redux';
import App from '../containers/app/App';
import { BrowserRouter, browserHistory } from 'react-router-dom'
import { ApolloProvider } from 'react-apollo';
import client from '../apollo';

export default class Root extends Component {
  render() {
    const { store } = this.props;
    return (
      <Provider store={store}>
        <ApolloProvider client={client}>
          <BrowserRouter history={browserHistory}>
            <App />
          </BrowserRouter>
        </ApolloProvider>
      </Provider>
    );
  }
}