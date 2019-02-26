import React, { Fragment } from "react";
import GlobalStyle from "./GlobalStyle";
import Header from "./Header";
import Order from "./Order";
import Inventory from "./Inventory";

const App = () => (
  <Fragment>
    <div className="cotd">
      <div className="menu">
        <Header tagline="Fresh Seafood Market" />
        <Order />
        <Inventory />
      </div>
    </div>
    <GlobalStyle />
  </Fragment>
);

export default App;
