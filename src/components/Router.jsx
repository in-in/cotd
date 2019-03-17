import React, { Fragment } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import StorePicker from "./StorePicker";
import App from "./App";
import NotFound from "./NotFound";
import GlobalStyle from "./GlobalStyle/GlobalStyle";
import theme from "../theme";

const Router = () => (
  <BrowserRouter basename={process.env.PUBLIC_URL}>
    <ThemeProvider theme={theme}>
      <Fragment>
        <GlobalStyle />
        <Switch>
          <Route exact path="/" component={StorePicker} />
          <Route path="/store/:storeId" component={App} />
          <Route component={NotFound} />
        </Switch>
      </Fragment>
    </ThemeProvider>
  </BrowserRouter>
);

export default Router;
