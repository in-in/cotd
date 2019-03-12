import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { between } from "polished";
import { formatPrice, breakpoints, mq, imagePath } from "../helpers";

const StyledCard = styled.li`
  list-style: none;
  margin-bottom: 2em;
  font-size: ${between(
    "16px",
    "20px",
    `${breakpoints.xs}px`,
    `${breakpoints.s}px`
  )};

  :last-child {
    margin-bottom: 0;
  }

  ${mq.s`
    display: flex;
    font-size: ${between(
      "16px",
      "20px",
      `${breakpoints.s}px`,
      `${breakpoints.l}px`
    )};
  `}

  ${mq.l`
    font-size: ${between(
      "16px",
      "18px",
      `${breakpoints.l}px`,
      `${breakpoints.xxl}px`
    )};
  `}
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 0.5em;
  font-size: 1.3em;
`;

const Content = styled.div`
  position: relative;
  width: 100%;
`;

const Name = styled.h3`
  max-width: 75%;
  font-size: inherit;
  text-transform: uppercase;
  letter-spacing: 0.02em;
`;

const Price = styled.span`
  max-width: 25%;
  font-size: 0.8em;
  font-weight: 200;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const Description = styled.p`
  line-height: 1.5;
  margin-bottom: 1em;
`;

const Picture = styled.picture`
  display: flex;
  margin-bottom: 1em;

  ${mq.s`
    margin-bottom: 0;
    margin-right: 1em;
  `}

  img {
    --image-width: 15em;
    min-width: var(--image-width);
    min-height: calc(var(--image-width) / 4 * 3);
    max-width: var(--image-width);
    max-height: calc(var(--image-width) / 4 * 3);

    ${mq.s`
      --image-width: 9.063em;
    `}

    ${mq.xl`
      --image-width: 15em;
    `}

    ${mq.xxl`
      --image-width: 9.063em;
    `}
  }
`;

const Button = styled.button`
  position: ${props => (props.disabled ? "absolute" : "relative")};
  ${props => (props.disabled ? "top: 50%" : "")};
  ${props => (props.disabled ? "left: 50%" : "")};
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 0.3em;
  padding-bottom: 0.1em;
  padding-left: 0.6em;
  padding-right: 0.6em;
  background: none;
  appearance: none;
  cursor: ${props => (props.disabled ? "not-allowed" : "pointer")};
  font-weight: 700;
  color: ${props =>
    props.disabled ? "var(--color_accent)" : "var(--color_dark)"};
  border: 1px solid;
  border-color: ${props =>
    props.disabled ? "var(--color_accent)" : "var(--color_dark)"};
  background-color: var(--bg_white);
  text-transform: uppercase;
  transform: ${props =>
    props.disabled
      ? "translate(-50%, -50%) scale(1.5) rotate(-15deg)"
      : "perspective(1px) translateZ(0)"};
  overflow: hidden;
  line-height: 1;

  ${mq.s`
    margin-left: auto
  `}

  ::before {
    ${props => (props.disabled ? "" : "content: ''")};
    position: absolute;
    z-index: -1;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: var(--bg_main);
    transform: scaleX(0) skewX(-45deg);
    transition-property: transform;
    transition-duration: 0.3s;
    transition-timing-function: ease-out;
  }

  :hover::before {
    transform: scaleX(1.5) skewX(-45deg);
  }
`;

const Card = ({ details, addToOrder, index }) => {
  const { available, desc, image, name, price } = details;

  return (
    <StyledCard>
      <Picture>
        <source
          srcSet={`
            ${imagePath(image, "s")} 1x,
            ${imagePath(image, "s", 2)} 2x,
            ${imagePath(image, "s", 3)} 3x
          `}
          media={`(min-width: ${breakpoints.xxl}px)`}
        />
        <source
          srcSet={`
            ${imagePath(image, "m")} 1x,
            ${imagePath(image, "m", 2)} 2x,
            ${imagePath(image, "m", 3)} 3x
          `}
          media={`(min-width: ${breakpoints.xl}px)`}
        />
        <source
          srcSet={`
            ${imagePath(image, "s")} 1x,
            ${imagePath(image, "s", 2)} 2x,
            ${imagePath(image, "s", 3)} 3x
          `}
          media={`(min-width: ${breakpoints.s}px)`}
        />
        <source
          srcSet={`
            ${imagePath(image, "m")} 1x,
            ${imagePath(image, "m", 2)} 2x,
            ${imagePath(image, "m", 3)} 3x
          `}
          media={`(min-width: ${breakpoints.xs}px)`}
        />
        <img src={imagePath(image, "m")} alt={name} />
      </Picture>
      <Content>
        <Header>
          <Name>{name}</Name>
          <Price title={formatPrice(price)}>{formatPrice(price)}</Price>
        </Header>
        <Description>{desc}</Description>
        <Button
          type="button"
          disabled={!available}
          onClick={() => addToOrder(index)}
        >
          {available ? "Add to Order" : "Sold Out!"}
        </Button>
      </Content>
    </StyledCard>
  );
};

Card.propTypes = {
  details: PropTypes.shape({
    desc: PropTypes.string,
    image: PropTypes.string,
    name: PropTypes.string,
    price: PropTypes.number
  }).isRequired,
  addToOrder: PropTypes.func.isRequired,
  index: PropTypes.string.isRequired
};

export default Card;
