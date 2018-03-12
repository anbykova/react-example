const server = require( "./server");
const { PORT } = require( "./config");
const createSubscriptionServer = require( "./subscriptionServer");

server.listen(PORT, () => {
  createSubscriptionServer(server);
  console.log(`Server running on port ${PORT}.`);
});
