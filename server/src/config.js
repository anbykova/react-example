let PORT;

if (process.env.NODE_ENV === "production") {
  PORT = 80;
} else {
  PORT = 9002;
}

const SUBSCRIPTION_ENDPOINT = "/subscriptions";
const GRAPHQL_ENDPOINT = "/graphql";

module.exports = { PORT, SUBSCRIPTION_ENDPOINT, GRAPHQL_ENDPOINT };
