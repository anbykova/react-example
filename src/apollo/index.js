import gql from 'graphql-tag';
import ApolloClient, { createNetworkInterface } from 'apollo-client';
import { ApolloLink, split } from 'apollo-link';
import { createHttpLink } from 'apollo-link-http';
import { setContext } from 'apollo-link-context';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { SubscriptionClient, addGraphQLSubscriptions } from 'subscriptions-transport-ws';
import { getMainDefinition } from 'apollo-utilities';
import { WebSocketLink } from "apollo-link-ws";

import fetch from 'node-fetch';
global.fetch = fetch;

const PORT = 9002;
const HOST = '127.0.0.1';

const GRAPHCOOL_URI = process.env.GRAPHCOOL_URI || `http://${HOST}:${PORT}/graphql`;
const wsClient = new SubscriptionClient(`ws://${HOST}:${PORT}/subscriptions`, { reconnect: true });
// connectionParams: {
//   authToken: localStorage.getItem(AUTH_TOKEN),
// }

const WSLink = new WebSocketLink({
  uri: `ws://${HOST}:${PORT}/subscriptions`,
  options: {
    reconnect: true
  }
});

const httpLink = createHttpLink({
  uri: GRAPHCOOL_URI,
});

const authLink = setContext((_, { headers }) => {
  const token = 'fcb86a41b0b18ac6ba482120d578061b40e04d44';
  return {
    headers: {
      //...headers,
      authorization: token ? `bearer ${token}` : null,
    }
  }
});

const client = new ApolloClient({
  link: split(
    ({ query }) => {
      const { kind, operation } = getMainDefinition(query);
      return kind === 'OperationDefinition' && operation === 'subscription';
    },
    WSLink,
    authLink.concat(httpLink)
  ),
  cache: new InMemoryCache()
});
// if exchange WSLink and authLink then it will not work
export default client;
