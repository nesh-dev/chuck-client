import React from "react";
import ReactDOM from "react-dom";
import {
  ApolloClient,
  InMemoryCache,
  NormalizedCacheObject,
  HttpLink,
} from "@apollo/client";
import { BrowserRouter } from "react-router-dom";

import { ApolloProvider } from "@apollo/react-hooks";
import { debugContextDevtool } from 'react-context-devtool';

import App from "./App";

const container = document.getElementById("root");
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
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </ApolloProvider>,
  document.getElementById("root")
);

debugContextDevtool(container);
