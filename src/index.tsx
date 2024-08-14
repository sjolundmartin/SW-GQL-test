import React, { useContext, useEffect } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, useLocation, useNavigate } from "react-router-dom";
import "./index.css";

import { createTheme } from "@mui/material";
import { ThemeProvider } from "@emotion/react";

import Main from "./Main/Main";
import Layout from "./Layout";

import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import UserProvider, { UserContext } from "./contexts/user";

const client = new ApolloClient({
  uri: "https://swapi-graphql.netlify.app/.netlify/functions/index",
  cache: new InMemoryCache(),
});

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

function App() {
  const { username, password } = useContext(UserContext);
  const userProps = { username, password };
  const location = useLocation();
  const navigate = useNavigate();

  const loginPage = location.pathname === "";

  useEffect(() => {
    if (!username) navigate("");
  }, [location, username, navigate]);

  return (
    <UserProvider {...userProps}>
      <Layout disabled={loginPage}>
        <Main />
      </Layout>
    </UserProvider>
  );
}

const theme = createTheme();
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <ApolloProvider client={client}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </ApolloProvider>
    </ThemeProvider>
  </React.StrictMode>
);
