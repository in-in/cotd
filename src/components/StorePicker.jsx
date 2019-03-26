import React from "react";
import styled from "styled-components/macro";
import PropTypes from "prop-types";
import { getFunName, mq } from "../helpers";
import Title from "./Title";
import Wrapper from "./Wrapper";
import { Form, Input } from "./FormDefault";
import ButtonDefault from "./ButtonDefault";

const StyledForm = styled(Form)`
  max-width: 500px;
  border: 1em solid transparent;
  padding: 1em;
  background-clip: padding-box;
  background-color: ${props => props.theme.primary.whiteSmoke};

  ${mq.l`
    flex-direction: column;
  `}
`;

const StyledInput = styled(Input)`
  text-align: center;

  ${mq.l`
    width: 100%

    &:nth-child(-n+3) {
      border-right: 1px solid;
    }
  `}
`;

const StorePicker = props => {
  const textInput = React.createRef();

  const handleSubmit = e => {
    e.preventDefault();
    props.history.push(`/store/${textInput.current.value}`);
  };

  return (
    <Wrapper>
      <StyledForm onSubmit={handleSubmit}>
        <Title>Please Enter A Store Name</Title>
        <StyledInput
          placeholder="Store Name"
          ref={textInput}
          defaultValue={getFunName()}
          required
        />
        <ButtonDefault type="submit">Visit Store</ButtonDefault>
      </StyledForm>
    </Wrapper>
  );
};

StorePicker.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func
  }).isRequired
};

export default StorePicker;
