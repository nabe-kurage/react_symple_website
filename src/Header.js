import React from "react";
import styled from "styled-components";

import { Link } from "react-router-dom";

const Base = styled.header`
  display: flex;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  width: 100%;
  max-width: 630px;
  align-items: center;
  /* ↓これ便利 */
  margin: auto;
  padding: 8px;
  color: #fff;
  font-weight: bold;
  font-family: "Poppins", sans-serif;
`;

const Title = styled(Link)`
  font-weight: bold;
  font-size: 20px;
  letter-spacing: 1.5px;
  text-decoration: none;
  color: #fff;
`;

const Nav = styled.nav`
  margin-left: auto;
`;

const NavItem = styled(Link)`
  color: #fff;
  text-decoration: none;
  padding: 4px;
`;

const Header = () => {
  return (
    <Base>
      <Title>Portfolio</Title>
      <Nav>
        <NavItem to="/">About</NavItem>
        <NavItem to="/">Works</NavItem>
        <NavItem to="/contact">Contact</NavItem>
      </Nav>
    </Base>
  );
};

export default Header;
