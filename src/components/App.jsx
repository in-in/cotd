import React, { Fragment, useState, useEffect } from "react";
import PropTypes from "prop-types";
import Container from "./Container";
import Header from "./header/Header";
import Order from "./Order";
import Inventory from "./Inventory";
import Card from "./Card";
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

  const updateFish = (key, updatedFish) => {
    const updateFishes = { ...fishes };
    updateFishes[key] = updatedFish;
    databaseRef.update(updateFishes);
  };

  const deleteFish = key => {
    databaseRef.child(key).remove();
  };

  const loadSampleFishes = () => {
    sampleFishes.map(fish => addFish(fish));
  };

  const addToOrder = key => {
    const addOrder = { ...order };
    addOrder[key] = addOrder[key] + 1 || 1;
    setOrder(addOrder);
  };

  const removeFromOrder = key => {
    const removeOrder = { ...order };
    delete removeOrder[key];
    setOrder(removeOrder);
  };

  return (
    <Container
      menu={
        <Fragment>
          <Header tagline="Fresh Seafood Market" />
          <ul>
            {Object.keys(fishes).map(key => (
              <Card
                key={key}
                index={key}
                details={fishes[key]}
                addToOrder={addToOrder}
              />
            ))}
          </ul>
        </Fragment>
      }
      order={
        <Order
          fishes={fishes}
          order={order}
          removeFromOrder={removeFromOrder}
        />
      }
      inventory={
        <Inventory
          addFish={addFish}
          updateFish={updateFish}
          deleteFish={deleteFish}
          loadSampleFishes={loadSampleFishes}
          fishes={fishes}
        />
      }
    />
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
