import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const StyledContainer = styled.main`
  background-color: tan;
  display: grid;
  grid-template-columns: [menu] 2fr [order] 1fr [inventory] 2fr;
  grid-column-gap: 1em;
  height: calc(100vh - 2rem);
  padding: 1em;
`;

const ContainerItem = styled.section`
  padding: 1em;
  border: 0.5em double var(--color_dark);
  overflow-x: hidden;
`;

const Menu = styled(ContainerItem)`
  background-color: lightblue;
  grid-column: menu;
`;

const Order = styled(ContainerItem)`
  background-color: lightcoral;
  grid-column: order;
`;

const Inventory = styled(ContainerItem)`
  background-color: lightgreen;
  grid-column: inventory;
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
