const { GraphQLSchema, GraphQLObjectType, GraphQLString, GraphQLList, GraphQLNonNull, GraphQLInt } = require( "graphql");

const pubsub = require( "./pubsub");
const axios = require('axios');

const NEW_POST_EVENT = "newPost";


const CREATED_ARTICLES = 'createdArticles';

const AuthorType = new GraphQLObjectType({
  name: 'Author',
  fields: () => ({
    id: { type: GraphQLString },
    firstName: { type: GraphQLString },
    secondName: { type: GraphQLString },
    age: { type: GraphQLInt },
    username: { type: GraphQLString },
    articles: {
      type: new GraphQLList(ArticleType),
      resolve(parentValue, args) {
        return axios.get(`http://localhost:9001/authors/${parentValue.id}/articles`)
          .then(r => r.data)
      }
    }
  })
})

const ArticleType = new GraphQLObjectType({
  name: 'Article',
  fields: {
    id: { type: GraphQLString },
    title: { type: GraphQLString },
    description: { type: GraphQLString },
    imageURL: { type: GraphQLString },
    author: {
      type: AuthorType,
      resolve(parentValue, args) {
        return axios.get(`http://localhost:9001/authors/${parentValue.authorId}`)
          .then(r => r.data)
      }
    }
  }
})

const PostType = new GraphQLObjectType({
  name: "Post",
  fields: {
    from : { type: GraphQLString },
    subject: { type: GraphQLString },
    message: { type: GraphQLString }
  }
});

const ArticleEventType = new GraphQLObjectType({
  name: "ArticleEvent",
  fields: {
    article: {
      type: ArticleType
    }
  }
});


const QueryType = new GraphQLObjectType({
  name: "Query",
  fields: {
    viewer: {
      type: GraphQLString,
      resolve: () => "John GraphQL"
    }
  }
});

const RootQuery = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: {
    authors: {
      type: new GraphQLList(AuthorType),
      resolve(parentValue, args) {
        return axios.get(`http://localhost:9001/authors/`)
          .then(r => r.data)
      }
    },
    articles: {
      type: new GraphQLList(ArticleType),
      resolve(parentValue, args) {
        return axios.get(`http://localhost:9001/articles/`)
          .then(r => r.data)
      }
    },
    author: {
      type: AuthorType,
      args: { id: { type: GraphQLString } },
      resolve(parentValue, args) {
        return axios.get(`http://localhost:9001/authors/${args.id}`)
          .then(r => r.data)
      }
    },
    article: {
      type: ArticleType,
      args: { id: { type: GraphQLString } },
      resolve(parentValue, args) {
        return axios.get(`http://localhost:9001/articles/${args.id}`)
          .then(r => r.data)
      }
    }
  }
})

const MutationType = new GraphQLObjectType({
  name: 'Mutation',
  fields: {
    addAuthor: {
      type: AuthorType,
      args: {
        firstName: { type: new GraphQLNonNull(GraphQLString) }
      },
      resolve(parentValue, { firstName }) {
        return axios.post(`http://localhost:9001/authors`, { firstName })
          .then(r => r.data)
      }
    },
    createArticle: {
      type: ArticleType,
      args: {
        title: { type: new GraphQLNonNull(GraphQLString) },
        description: { type: GraphQLString },
        username: { type: new GraphQLNonNull(GraphQLString) }
      },
      resolve(parentValue, { title, description, username }) {
        return new Promise((resolve, reject) => {
          axios.get(`http://localhost:9001/authors?username=${username}`)
            .then(r => {
              const authorId = r.data[0].id;
              return axios.post(`http://localhost:9001/articles`, { title, description, authorId })
                .then(r => {
                  pubsub.publish(CREATED_ARTICLES, {
                    createdArticles: {
                      article: r.data
                    }
                  });
                  console.log(pubsub, r.data );
                  resolve(r.data)
                })
            });
        });
      }
    }
  }
})

const SubscriptionType = new GraphQLObjectType({
  name: "Subscription",
  fields: {
    createdArticles: {
      type: ArticleEventType,
      subscribe: () => pubsub.asyncIterator(CREATED_ARTICLES)
    }
  }
});

const schema = new GraphQLSchema({
  query: RootQuery,
  mutation: MutationType,
  subscription: SubscriptionType
});


module.exports = schema;
