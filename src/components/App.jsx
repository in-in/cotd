import React, { Fragment, useState } from "react";
import GlobalStyle from "./GlobalStyle";
import Header from "./Header";
import Order from "./Order";
import Inventory from "./Inventory";
import sampleFishes from "../sample-fishes";

const App = () => {
  const [fishes, setFishes] = useState({});

  const addFish = fish => {
    const newFishes = { ...fishes };
    newFishes[`fish${Date.now}`] = fish;
    setFishes(newFishes);
  };

  const loadSampleFishes = () => {
    setFishes(sampleFishes);
  };

  return (
    <Fragment>
      <div className="cotd">
        <div className="menu">
          <Header tagline="Fresh Seafood Market" />
          <Order />
          <Inventory addFish={addFish} loadSampleFishes={loadSampleFishes} />
        </div>
      </div>
      <GlobalStyle />
    </Fragment>
  );
};

export default App;
