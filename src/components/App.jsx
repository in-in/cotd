import React, { Fragment, useState, useEffect } from "react";
import PropTypes from "prop-types";
import GlobalStyle from "./GlobalStyle";
import Header from "./Header";
import Order from "./Order";
import Inventory from "./Inventory";
import Fish from "./Fish";
import sampleFishes from "../sample-fishes";
import database from "../database";

const App = ({
  match: {
    params: { storeId }
  }
}) => {
  const [fishes, setFishes] = useState({});
  const [order, setOrder] = useState(
    JSON.parse(localStorage.getItem(storeId)) || {}
  );

  const databaseRef = database.ref(`${storeId}/fishes`);

  useEffect(() => {
    databaseRef.on("value", snap => {
      if (snap.val()) {
        setFishes(snap.val());
      }
    });
    return () => {
      databaseRef.off();
    };
  }, []);

  useEffect(() => {
    localStorage.setItem(storeId, JSON.stringify(order));
  });

  const addFish = fish => {
    const newFishKey = database
      .ref(storeId)
      .child("fishes")
      .push().key;
    const fishObject = {};
    fishObject[newFishKey] = fish;
    databaseRef.update(fishObject);
  };

  const loadSampleFishes = () => {
    sampleFishes.map(fish => addFish(fish));
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

App.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      storeId: PropTypes.string
    })
  }).isRequired
};

export default App;
