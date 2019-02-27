import React from "react";
import PropTypes from "prop-types";
import { formatPrice } from "../helpers";

const Fish = ({ details, addToOrder, index }) => {
  const { available, desc, image, name, price } = details;

  return (
    <li className="menu-fish">
      <img src={image} alt={name} />
      <h3 className="fish-name">
        {name}
        <span className="price">{formatPrice(price)}</span>
      </h3>
      <p>{desc}</p>
      <button
        type="button"
        disabled={!available}
        onClick={() => addToOrder(index)}
      >
        {available ? "Add to Order" : "Sold Out!"}
      </button>
    </li>
  );
};

Fish.propTypes = {
  details: PropTypes.shape({
    desc: PropTypes.string,
    image: PropTypes.string,
    name: PropTypes.string,
    price: PropTypes.number
  }).isRequired,
  addToOrder: PropTypes.func.isRequired,
  index: PropTypes.string.isRequired
};

export default Fish;
