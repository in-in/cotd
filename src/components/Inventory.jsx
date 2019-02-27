import React from "react";
import PropTypes from "prop-types";
import AddForm from "./AddForm";

const Inventory = ({ addFish }) => (
  <div>
    <AddForm addFish={addFish} />
  </div>
);

Inventory.propTypes = {
  addFish: PropTypes.func.isRequired
};

export default Inventory;
