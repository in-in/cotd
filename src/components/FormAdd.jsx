import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import ButtonDefault from "./ButtonDefault";
import { Form, Input, Select, Textarea } from "./FormDefault";
import { mq } from "../helpers";

const FormAdd = ({ addFish }) => {
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

  const Button = styled(ButtonDefault)`
    ${mq.l`
    width: 100%;
  `}
  `;

  return (
    <Form onSubmit={createFish}>
      <Input placeholder="Name" ref={nameRef} />
      <Input placeholder="Price" ref={priceRef} />
      <Input placeholder="Image" ref={imageRef} />
      <Select name="status" ref={statusRef}>
        <option value="available">Fresh!</option>
        <option value="unavailable">Sold Out!</option>
      </Select>
      <Textarea name="desc" ref={descRef} placeholder="Description" />
      <Button type="submit">Add Fish</Button>
    </Form>
  );
};

FormAdd.propTypes = {
  addFish: PropTypes.func.isRequired
};

export default FormAdd;
