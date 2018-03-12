const { execute, subscribe } = require( "graphql");
const { SubscriptionServer } = require( "subscriptions-transport-ws");

const schema = require( "./graphql");
const { SUBSCRIPTION_ENDPOINT } = require( "./config");

const createSubscriptionServer = (server) =>
  new SubscriptionServer(
    {
      schema,
      execute,
      subscribe
    },
    {
      server,
      path: SUBSCRIPTION_ENDPOINT
    }
  );

module.exports = createSubscriptionServer;
