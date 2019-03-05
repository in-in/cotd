import React, { Fragment } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import StorePicker from "./StorePicker";
import App from "./App";
import NotFound from "./NotFound";
import GlobalStyle from "./globalstyle/GlobalStyle";

const Router = () => (
  <BrowserRouter basename={process.env.PUBLIC_URL}>
    <Fragment>
      <GlobalStyle />
      <Switch>
        <Route exact path="/" component={StorePicker} />
        <Route path="/store/:storeId" component={App} />
        <Route component={NotFound} />
      </Switch>
    </Fragment>
  </BrowserRouter>
);

export default Router;
