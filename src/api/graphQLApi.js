import client from '../apollo';

let graphQlApiInstance = null;

class GraphQlApi {
  /*
  * Method for requesting graphQL query from server
  * @param: OPTIONS
      context :any
      errorPolicy: "none" | "ignore" | "all"
      fetchPolicy: "cache-first" | "cache-and-network" | "network-only" | "cache-only" | "standby"
      fetchResults: any
      metadata: any
      notifyOnNetworkStatusChange: any
      pollInterval: any
      query: DocumentNode
      variables: any
  * @return: Promise<ApolloQueryResult>
   */
  query(options) {
    return client.query(options);
  }

  /*
  * Method for requesting graphQL mutation from server
  * @param: OPTIONS (GraphQL query object)
  *   context: any
      errorPolicy: "none" | "ignore" | "all"
      mutation: DocumentNode
      optimisticResponse: Object | Function
      refetchQueries: any
      update: (DataProxy, FetchResult<>) => any<>
      updateQueries: [queryName:undefined]:(Record<,>, any) => Record<,><><>
      variables: any
  * @return: Promise<FetchResult>
   */
  mutation(options) {
    return client.mutate(options);
  }

  subscribe(options) {
    return client.subscribe(options);
  }
}

function getGraphQlApiInstance() {
  if (!graphQlApiInstance) {
    graphQlApiInstance = new GraphQlApi();
  }
  return graphQlApiInstance;
}

export default getGraphQlApiInstance();
