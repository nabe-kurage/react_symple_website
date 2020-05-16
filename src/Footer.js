import React from "react";
import styled from "styled-components";
import { colors, poppins } from "./styleHelper";

const FooterArea = styled.footer`
  background: ${colors.black};
  color: #fff;
  font-size: 12px;
  text-align: center;
  padding: 12px 0;
`;

const Footer = () => {
  return (
    <FooterArea>copyright &copy; nabekura. All Rights Reserved.</FooterArea>
  );
};

export default Footer;
