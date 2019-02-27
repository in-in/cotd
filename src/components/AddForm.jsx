import React from "react";
import PropTypes from "prop-types";

const AddForm = ({ addFish }) => {
  const nameRef = React.createRef();
  const priceRef = React.createRef();
  const statusRef = React.createRef();
  const descRef = React.createRef();
  const imageRef = React.createRef();

  const createFish = e => {
    e.preventDefault();
    const fish = {
      name: nameRef.current.value,
      price: parseFloat(priceRef.current.value),
      status: statusRef.current.value,
      desc: descRef.current.value,
      image: imageRef.current.value
    };
    addFish(fish);
    e.currentTarget.reset();
  };

  return (
    <form onSubmit={createFish} className="fish-edit">
      <input name="name" ref={nameRef} type="text" placeholder="Name" />
      <input name="price" ref={priceRef} type="text" placeholder="Price" />
      <select name="status" ref={statusRef}>
        <option value="available">Fresh!</option>
        <option value="unavailable">Sold Out!</option>
      </select>
      <textarea name="desc" ref={descRef} placeholder="Desc" />
      <input name="image" ref={imageRef} type="text" placeholder="Image" />
      <button type="submit">Add Fish</button>
    </form>
  );
};

AddForm.propTypes = {
  addFish: PropTypes.func.isRequired
};

export default AddForm;
