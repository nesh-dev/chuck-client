import React from "react";
import ReactDOM from "react-dom";
import {
  ApolloClient,
  InMemoryCache,
  NormalizedCacheObject,
  HttpLink,
} from "@apollo/client";
import { ApolloProvider } from "@apollo/react-hooks";
import App from "./App";

const createApolloClient = () => {
  return new ApolloClient<NormalizedCacheObject>({
    link: new HttpLink({
      uri: "https://chucku-api-graphql.herokuapp.com/",
    }),
    cache: new InMemoryCache(),
  });
};

const client = createApolloClient();

ReactDOM.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,
  document.getElementById("root")
);
