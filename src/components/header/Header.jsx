import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { between } from "polished";
import { ReactComponent as Logo } from "./anchor.svg";
import { breakpoints } from "../../helpers";

const StyledHeader = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Title = styled.h1`
  display: flex;
  align-items: flex-start;
  margin: 0;
  font-family: "Source Serif Pro", serif;
  font-size: ${between(
    "35px",
    "65px",
    `${breakpoints.xs}px`,
    `${breakpoints.xxl}px`
  )};
  line-height: 1.3;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--color_dark);
`;

const TitleCenter = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  width: 0.7em;
`;

const StyledLogo = styled(Logo)`
  width: 100%;
  fill: var(--color_dark);
`;

const TitleSideText = styled.span`
  position: absolute;
  ${props => (props.right ? "right: 0" : "left: 0")};
  box-sizing: border-box;
  width: 50%;
  ${props => (props.right ? "padding-left: 0.3em" : "padding-right: 0.3em")};
  font-size: 0.15em;
  text-align: center;
  letter-spacing: normal;
  color: var(--color_accent);
`;

const Tagline = styled.h3`
  margin: 0;
  display: flex;
  align-items: center;
  font-family: "Source Sans Pro", sans-serif;
  font-size: ${between(
    "17px",
    "28px",
    `${breakpoints.xs}px`,
    `${breakpoints.xxl}px`
  )};
  font-weight: 200;
  text-transform: uppercase;
  line-height: 1.3;
  color: var(--color_accent);

  ::before,
  ::after {
    content: "";
    width: 1em;
    height: 0.1em;
    margin-top: -0.1em;
    border-top: 0.05em solid var(--color_dark);
    border-bottom: 0.05em solid var(--color_dark);
  }
`;

const Header = ({ tagline }) => (
  <StyledHeader>
    <Title>
      Catch
      <TitleCenter>
        <TitleSideText>of</TitleSideText>
        <StyledLogo />
        <TitleSideText right>the</TitleSideText>
      </TitleCenter>
      day
    </Title>
    <Tagline>{tagline}</Tagline>
  </StyledHeader>
);

Header.propTypes = {
  tagline: PropTypes.string.isRequired
};

export default Header;
