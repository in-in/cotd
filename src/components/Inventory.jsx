import React from "react";
import PropTypes from "prop-types";
import FormAdd from "./FormAdd";
import FormEdit from "./FormEdit";
import Title from "./Title";
import ButtonDefault from "./ButtonDefault";

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
      <FormEdit
        fish={fishes[key]}
        key={key}
        itemID={key}
        updateFish={updateFish}
        deleteFish={deleteFish}
      />
    ))}

    <FormAdd addFish={addFish} />

    <ButtonDefault onClick={loadSampleFishes}>Load Sample</ButtonDefault>
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
