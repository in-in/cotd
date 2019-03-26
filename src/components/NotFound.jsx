import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components/macro";
import Title from "./Title";
import Wrapper from "./Wrapper";

const Background = styled.div`
  max-width: 500px;
  padding: 1em;
  text-align: center;
  background-color: ${props => props.theme.primary.whiteSmoke};
`;

const Code = styled.p`
  color: ${props => props.theme.primary.redVivid};
  text-overflow: ellipsis;
  overflow: hidden;
  font-family: monospace;
  font-size: 1.3em;
`;

const NotFound = ({ location }) => (
  <Wrapper>
    <Background>
      <Title>Not found </Title>
      <Code>{location.pathname}</Code>
    </Background>
  </Wrapper>
);

NotFound.propTypes = {
  location: PropTypes.shape({
    pathname: PropTypes.string
  }).isRequired
};

export default NotFound;
