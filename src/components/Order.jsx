import React from "react";
import PropTypes from "prop-types";
import Title from "./Title";
import { formatPrice } from "../helpers";

const Order = ({ order, fishes, removeFromOrder }) => {
  const orderIds = Object.keys(order);

  const total = orderIds.reduce((prevTotal, key) => {
    const fish = fishes[key];
    const count = order[key];
    const isAvailable = fish && fish.available;
    if (isAvailable) {
      return prevTotal + count * fish.price;
    }
    return prevTotal;
  }, 0);

  const renderOrderItem = key => {
    const fish = fishes[key];
    const count = order[key];

    if (!fish) return null;

    if (!fish.available) {
      return <li>Sorry {fish ? fish.name : "fish"} is no longer available</li>;
    }
    return (
      <li key={key}>
        <span>
          {count}
          lbs {fish.name}
        </span>
        <span>{formatPrice(count * fish.price)}</span>
        <button type="button" onClick={() => removeFromOrder(key)}>
          ⨯
        </button>
      </li>
    );
  };

  return (
    <div className="order-wrap">
      <Title>Order</Title>
      <ul>{orderIds.map(renderOrderItem)}</ul>
      <div className="total">
        <strong>{formatPrice(total)}</strong>
      </div>
    </div>
  );
};

Order.propTypes = {
  order: PropTypes.objectOf(PropTypes.number).isRequired,
  fishes: PropTypes.objectOf(PropTypes.object).isRequired,
  removeFromOrder: PropTypes.func.isRequired
};

export default Order;
