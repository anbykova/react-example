const express = require("express");
const bodyParser = require("body-parser");
const url = require("url");
const { graphqlExpress, graphiqlExpress } = require("graphql-server-express");
const { createServer } = require("http");
const cors = require('cors');

const schema = require("./graphql");
const { SUBSCRIPTION_ENDPOINT, GRAPHQL_ENDPOINT } = require("./config");

const app = express();

app.use(cors())

app.use(
  GRAPHQL_ENDPOINT,
  bodyParser.json(),
  graphqlExpress(req => ({
    schema
  }))
);

var router = express.Router();

router.post('/auth/google', authCallback);

app.use(
  "/graphiql",
  graphiqlExpress(req => {
    const protocol = req.headers["x-forwarded-proto"] || "http";
    return {
      endpointURL: GRAPHQL_ENDPOINT,
      subscriptionsEndpoint: url.format({
        host: req.get("host"),
        protocol: protocol === "https" ? "wss" : "ws",
        pathname: SUBSCRIPTION_ENDPOINT
      })
    };
  })
);

function authCallback(req, res, next) {
  console.log('callback');
  var params = {
      code: req.body.code,
      client_id: req.body.clientId,
      client_secret: OAUTH2.clientSecret,
      redirect_uri: req.body.redirectUri,
      grant_type: 'authorization_code'
  };

  // Exchange authorization code for access token.
  request.post(OAUTH2.accessTokenUrl, {json: true, form: params}, function (err, response, token) {
      var accessToken = token.access_token;
      var headers = {Authorization: 'Bearer ' + accessToken};

      request.get({url: OAUTH2.peopleApiUrl, headers: headers, json: true}, function (err, response, profile) {
          if (profile.error) {
              return res.status(500).send({message: profile.error.message});
          }

          var user = {};
          user.id = profile.sub;
          user.email = profile.email;
          user.avatarUrl = profile.picture.replace('sz=50', 'sz=200');
          user.fullName = profile.given_name + ' ' + profile.family_name;
          user.displayName = profile.name;
          console.log(user);

          //var token = createJWT(user);
          res.send({
              data: {
                  token: req.body.code,
                  user: user,
                  profile: profile
              }
          });
      });
  });
}

const server = createServer(app);

module.exports = server;
