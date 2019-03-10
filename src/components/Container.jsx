import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { mq } from "../helpers";

const StyledContainer = styled.main`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-areas:
    "menu"
    "order"
    "inventory";
  grid-gap: 1em;
  padding: 1em;

  ${mq.l`
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-areas:
      "menu menu order"
      "inventory inventory inventory";
  `}

  ${mq.xxl`
    grid-template-columns: 2fr 1fr 2fr;
    grid-template-areas: "menu order inventory";
  `}
`;

const ContainerItem = styled.section`
  max-height: calc(100vh - 5em);
  padding: 1em;
  border: 0.5em double var(--color_dark);
  overflow-x: hidden;
  background-color: rgba(244, 244, 244, 0.8);
`;

const Menu = styled(ContainerItem)`
  grid-area: menu;
`;

const Order = styled(ContainerItem)`
  grid-area: order;
`;

const Inventory = styled(ContainerItem)`
  grid-area: inventory;
`;

const Container = ({ menu, order, inventory }) => (
  <StyledContainer>
    <Menu>{menu}</Menu>
    <Order>{order}</Order>
    <Inventory>{inventory}</Inventory>
  </StyledContainer>
);

Container.propTypes = {
  menu: PropTypes.element.isRequired,
  order: PropTypes.element.isRequired,
  inventory: PropTypes.element.isRequired
};

export default Container;
