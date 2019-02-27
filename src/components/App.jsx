import React, { Fragment, useState } from "react";
import GlobalStyle from "./GlobalStyle";
import Header from "./Header";
import Order from "./Order";
import Inventory from "./Inventory";
import Fish from "./Fish";
import sampleFishes from "../sample-fishes";

const App = () => {
  const [fishes, setFishes] = useState({});
  const [order, setOrder] = useState({});

  const addFish = fish => {
    const newFishes = { ...fishes };
    newFishes[`fish${Date.now}`] = fish;
    setFishes(newFishes);
  };

  const loadSampleFishes = () => {
    setFishes(sampleFishes);
  };

  const addToOrder = key => {
    const newOrder = { ...order };
    newOrder[key] = newOrder[key] + 1 || 1;
    setOrder(newOrder);
  };

  return (
    <Fragment>
      <div className="cotd">
        <div className="menu">
          <Header tagline="Fresh Seafood Market" />
          {Object.keys(fishes).map(key => (
            <Fish
              key={key}
              index={key}
              details={fishes[key]}
              addToOrder={addToOrder}
            />
          ))}
          <Order fishes={fishes} order={order} />
          <Inventory addFish={addFish} loadSampleFishes={loadSampleFishes} />
        </div>
      </div>
      <GlobalStyle />
    </Fragment>
  );
};

export default App;
