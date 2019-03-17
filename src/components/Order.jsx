import React, { Fragment } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { between } from "polished";
import Title from "./Title";
import { formatPrice, breakpoints, mq } from "../helpers";

const Item = styled.li`
  display: flex;
  align-items: baseline;
  padding-top: 1em;
  padding-bottom: 0.8em;
  list-style: none;
  font-size: ${between(
    "16px",
    "20px",
    `${breakpoints.xs}px`,
    `${breakpoints.l}px`
  )};
  border-bottom: 1px solid;

  ${mq.l`
    font-size: ${between(
      "14px",
      "16px",
      `${breakpoints.l}px`,
      `${breakpoints.xxl}px`
    )};
  `}
`;

const Count = styled.span`
  margin-right: 1em;
  font-weight: 700;
`;

const Price = styled.span`
  max-width: 30%;
  min-width: 23%;
  margin-left: auto;
  font-size: 1.1em;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  text-align: right;
`;

const Name = styled.span`
  margin-right: 0.5em;
  text-transform: uppercase;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const Button = styled.button`
  display: none;
  margin-right: 0.5em;
  padding: 0;
  background: none;
  appearance: none;
  border: 0;
  cursor: pointer;
  font-weight: 700;
  color: ${props => props.theme.primary.redVivid};

  ${Item}:hover & {
    display: block;
  }
`;

const Total = styled.div`
  display: flex;
  justify-content: space-between;
  padding-top: 1em;
  padding-bottom: 0.8em;
  font-size: ${between(
    "20px",
    "24px",
    `${breakpoints.xs}px`,
    `${breakpoints.xxl}px`
  )};
  font-weight: 700;
  border-bottom: 3px solid;
  border-top: 3px double;
`;

const Order = ({ order, fishes, removeFromOrder }) => {
  const orderIds = Object.keys(order);

  const total = orderIds.reduce((prevTotal, key) => {
    const fish = fishes[key];
    const count = order[key];
    const isAvailable = fish && fish.available;
    if (isAvailable) {
      return prevTotal + count * fish.price;
    }
    return prevTotal;
  }, 0);

  const renderOrderItem = key => {
    const fish = fishes[key];
    const count = order[key];

    if (!fish) return null;

    if (!fish.available) {
      return (
        <Item>Sorry {fish ? fish.name : "fish"} is no longer available</Item>
      );
    }
    return (
      <Item key={key}>
        <Count>{count}lbs </Count>
        <Name title={fish.name}>{fish.name}</Name>
        <Button type="button" onClick={() => removeFromOrder(key)}>
          ⨯
        </Button>
        <Price title={formatPrice(count * fish.price)}>
          {formatPrice(count * fish.price)}
        </Price>
      </Item>
    );
  };

  return (
    <Fragment>
      <Title>Order</Title>
      <ul>{orderIds.map(renderOrderItem)}</ul>
      <Total>
        <span>Total: </span>
        <strong>{formatPrice(total)}</strong>
      </Total>
    </Fragment>
  );
};

Order.propTypes = {
  order: PropTypes.objectOf(PropTypes.number).isRequired,
  fishes: PropTypes.objectOf(PropTypes.object).isRequired,
  removeFromOrder: PropTypes.func.isRequired
};

export default Order;
