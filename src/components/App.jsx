import React, { Fragment, useState } from "react";
import GlobalStyle from "./GlobalStyle";
import Header from "./Header";
import Order from "./Order";
import Inventory from "./Inventory";

const App = () => {
  const [fishes, setFishes] = useState({});

  const addFish = fish => {
    const newFishes = { ...fishes };
    newFishes[`fish${Date.now}`] = fish;
    setFishes(newFishes);
  };

  return (
    <Fragment>
      <div className="cotd">
        <div className="menu">
          <Header tagline="Fresh Seafood Market" />
          <Order />
          <Inventory addFish={addFish} />
        </div>
      </div>
      <GlobalStyle />
    </Fragment>
  );
};

export default App;
