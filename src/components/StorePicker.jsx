import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import { getFunName } from "../helpers";

const Title = styled.h2`
  font-style: italic;
`;

const StorePicker = props => {
  const textInput = React.createRef();

  const handleSubmit = e => {
    e.preventDefault();
    props.history.push(`/store/${textInput.current.value}`);
  };

  return (
    <form className="store__picker" onSubmit={handleSubmit}>
      <Title>Please Enter A Store</Title>
      <input
        type="text"
        required
        ref={textInput}
        placeholder="Store Name"
        className="store__input"
        defaultValue={getFunName()}
      />
      <button type="submit" className="store__submit">
        Visit Store →
      </button>
    </form>
  );
};

StorePicker.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func
  }).isRequired
};

export default StorePicker;
