import React from "react";
import PropTypes from "prop-types";
import AddForm from "./AddForm";

const Inventory = ({ addFish, loadSampleFishes }) => (
  <div>
    <AddForm addFish={addFish} />
    <button type="button" onClick={loadSampleFishes}>
      Load Sample
    </button>
  </div>
);

Inventory.propTypes = {
  addFish: PropTypes.func.isRequired,
  loadSampleFishes: PropTypes.func.isRequired
};

export default Inventory;
