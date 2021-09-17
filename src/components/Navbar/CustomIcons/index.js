import React from "react";
import { Container, Span } from "./MenuElements";

const MenuIcon = ({ openClass }) => {
  return (
    <Container className={openClass}>
      <Span />
      <Span />
      <Span />
    </Container>
  );
};

export default MenuIcon;
