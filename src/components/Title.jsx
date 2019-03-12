import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { between } from "polished";
import { breakpoints } from "../helpers";

const StyledTitle = styled.h2`
  margin-bottom: 0.5em;
  font-family: "Source Serif Pro", serif;
  text-transform: uppercase;
  text-align: center;
  font-size: ${between(
    "24px",
    "30px",
    `${breakpoints.xs}px`,
    `${breakpoints.xxl}px`
  )};
`;

const Title = ({ children }) => <StyledTitle>{children}</StyledTitle>;

Title.propTypes = {
  children: PropTypes.string.isRequired
};

export default Title;
