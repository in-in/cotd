import React from "react";
import PropTypes from "prop-types";
import AddForm from "./AddForm";
import EditForm from "./EditForm";
import Title from "./Title";

const Inventory = ({
  addFish,
  updateFish,
  deleteFish,
  loadSampleFishes,
  fishes
}) => (
  <div className="inventory">
    <Title>Inventory</Title>
    {Object.keys(fishes).map(key => (
      <EditForm
        fish={fishes[key]}
        key={key}
        itemID={key}
        updateFish={updateFish}
        deleteFish={deleteFish}
      />
    ))}

    <AddForm addFish={addFish} />
    <button type="button" onClick={loadSampleFishes}>
      Load Sample
    </button>
  </div>
);

Inventory.propTypes = {
  addFish: PropTypes.func.isRequired,
  updateFish: PropTypes.func.isRequired,
  deleteFish: PropTypes.func.isRequired,
  loadSampleFishes: PropTypes.func.isRequired,
  fishes: PropTypes.objectOf(PropTypes.object).isRequired
};

export default Inventory;
