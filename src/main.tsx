import React from "react";
import ReactDOM from "react-dom/client";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import { RouterProvider } from "react-router-dom";

import "./index.css";

import { RouterPaths } from "./app/routing/routes/routes.app.tsx";

const client = new ApolloClient({
  cache: new InMemoryCache(),
  uri: "https://countries.trevorblades.com/graphql",
});
export const MemoChild = () => {
  return <RouterProvider router={RouterPaths} />;
};

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <MemoChild />
    </ApolloProvider>
  </React.StrictMode>
);
