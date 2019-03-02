import React from "react";
import PropTypes from "prop-types";

const editForm = {
  backgroundColor: "dodgerblue"
};

const EditForm = ({ fish, updateFish, itemID }) => {
  const { available, desc, image, name, price } = fish;

  const handleChange = e => {
    e.preventDefault();
    const updatedFish = {
      ...fish,
      [e.currentTarget.name]:
        e.currentTarget.name === "price"
          ? parseFloat(e.currentTarget.value)
          : e.currentTarget.value
    };
    updateFish(itemID, updatedFish);
  };

  return (
    <div className="edit-form" style={editForm}>
      <input
        name="name"
        onChange={handleChange}
        value={name}
        type="text"
        placeholder="Name"
      />
      <input
        name="price"
        onChange={handleChange}
        value={price}
        type="text"
        placeholder="Price"
      />
      <select name="status" onChange={handleChange} value={available}>
        <option value="available">Fresh!</option>
        <option value="unavailable">Sold Out!</option>
      </select>
      <textarea
        name="desc"
        onChange={handleChange}
        value={desc}
        placeholder="Desc"
      />
      <input
        name="image"
        onChange={handleChange}
        value={image}
        type="text"
        placeholder="Image"
      />
    </div>
  );
};

EditForm.propTypes = {
  fish: PropTypes.shape({
    available: PropTypes.bool,
    desc: PropTypes.string,
    image: PropTypes.string,
    name: PropTypes.string,
    price: PropTypes.number
  }).isRequired,
  updateFish: PropTypes.func.isRequired,
  itemID: PropTypes.string.isRequired
};

export default EditForm;
