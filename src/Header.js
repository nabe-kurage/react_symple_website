import React from "react";
import styled from "styled-components";

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

const Title = styled.h1`
  font-weight: bold;
  font-size: 20px;
  letter-spacing: 1.5px;
`;

const Nav = styled.nav`
  margin-left: auto;
`;

const NavItem = styled.a`
  color: #fff;
  text-decoration: none;
`;

const Header = () => {
  return (
    <Base>
      <Title>Portfolio</Title>
      <Nav>
        <NavItem href="#about">About</NavItem>
        <NavItem href="#works">Works</NavItem>
      </Nav>
    </Base>
  );
};

export default Header;
