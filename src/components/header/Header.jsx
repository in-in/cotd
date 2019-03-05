import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { ReactComponent as Logo } from "./anchor.svg";

const StyledHeader = styled.header`
  background-color: tan;
`;

const Title = styled.h1`
  margin: 0;
  font-family: "Source Serif Pro", serif;
  text-transform: uppercase;
`;

const Header = ({ tagline }) => (
  <StyledHeader>
    <Title>
      Catch
      <span className="ofThe">
        <span className="of"> Of </span>
        <span className="the">The </span>
      </span>
      Day
    </Title>
    <Logo />
    <h3 className="tagline">
      <span>{tagline}</span>
    </h3>
  </StyledHeader>
);

Header.propTypes = {
  tagline: PropTypes.string.isRequired
};

export default Header;
