import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { between } from "polished";
import { breakpoints, mq } from "../helpers";
import DefaultButton from "./DefaultButton";

const Form = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 1em;
  border: 1px solid;
  font-size: ${between(
    "16px",
    "20px",
    `${breakpoints.xs}px`,
    `${breakpoints.xl}px`
  )};

  ${mq.l`
    flex-direction: row;
    flex-wrap: wrap;
  `}

  ${mq.xxl`
    font-size: 1em;
  `}
`;

const StyledInput = styled.input`
  padding: 0.5em;
  box-sizing: border-box;
  background-color: var(--bg_white);
  border: 1px solid;
  color: var(--color_dark);
  font-size: inherit;

  :focus {
    background-color: #d8f3f3;
  }

  ${mq.l`
    width: 25%;
  `}
`;

const Input = styled(StyledInput).attrs(({ placeholder }) => ({
  type: "text",
  placeholder,
  name: placeholder.toLowerCase()
}))``;

const Select = styled(StyledInput)`
  appearance: none;
`;

const Textarea = styled(StyledInput)`
  resize: none;

  ${mq.l`
    width: 100%;
  `}
`;

const Button = styled(DefaultButton)`
  ${mq.l`
    width: 100%;
  `}
`;

const EditForm = ({ fish, updateFish, deleteFish, itemID }) => {
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

      <Select
        as="select"
        name="status"
        onChange={handleChange}
        value={available}
      >
        <option value="available">Fresh!</option>
        <option value="unavailable">Sold Out!</option>
      </Select>

      <Textarea
        as="textarea"
        rows="3"
        name="desc"
        onChange={handleChange}
        value={desc}
        placeholder="Description"
      />

      <Button onClick={() => deleteFish(itemID)}>Remove Fish</Button>
    </Form>
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
  deleteFish: PropTypes.func.isRequired,
  itemID: PropTypes.string.isRequired
};

export default EditForm;
