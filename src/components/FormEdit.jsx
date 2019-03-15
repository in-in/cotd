import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import ButtonDefault from "./ButtonDefault";
import { Form, Input, Select, Textarea } from "./FormDefault";
import { mq } from "../helpers";

const Button = styled(ButtonDefault)`
  ${mq.l`
    width: 100%;
  `}
`;

const FormEdit = ({ fish, updateFish, deleteFish, itemID }) => {
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
    <Form>
      <Input placeholder="Name" value={name} onChange={handleChange} />
      <Input placeholder="Price" value={price} onChange={handleChange} />
      <Input placeholder="Image" value={image} onChange={handleChange} />

      <Select name="status" onChange={handleChange} value={available}>
        <option value="available">Fresh!</option>
        <option value="unavailable">Sold Out!</option>
      </Select>

      <Textarea
        name="desc"
        onChange={handleChange}
        value={desc}
        placeholder="Description"
      />

      <Button onClick={() => deleteFish(itemID)}>Remove Fish</Button>
    </Form>
  );
};

FormEdit.propTypes = {
  fish: PropTypes.shape({
    available: PropTypes.bool,
    desc: PropTypes.string,
    image: PropTypes.string,
    name: PropTypes.string,
    price: PropTypes.number
  }).isRequired,
  updateFish: PropTypes.func.isRequired,
  deleteFish: PropTypes.func.isRequired,
  itemID: PropTypes.string.isRequired
};

export default FormEdit;
