This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).

react + redux + graphql + apollo

# prepare

1. npm i

2. cd server

3. npm i

# start project

to start json-server: 
1. cd server

2. npm run json:server

to start server:

1. cd server

2. npm start

to start client:

1. npm start

# possibilities
## use graphql editor

go to http://localhost:9002/graphiql

write
```
 subscription {
  createdArticles {
    article {
      id
      title
    }
  }
}
```
run

![Alt text](subscription1.png?raw=true "Subscription")

open http://localhost:9002/graphiql on another tab 

write
```
  mutation {
   createArticle (username:"sophia" title:"title" description:"") {
      id
      title
    }
  }
```
run

![Alt text](mutation.png?raw=true "Mutation")

move to previous tab, see results

![Alt text](subscription2.png?raw=true "Subscription results")





