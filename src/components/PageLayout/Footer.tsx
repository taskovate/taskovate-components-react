import React, { FC } from 'react';
import styled from 'styled-components';
import { colors, gridSize, layers, animation, borderRadius, gradients, fontSize, headerFontFamily } from '@theme/constants';

const Styled = styled.div`
  display: flex;
  grid-area: "footer";
  padding: ${gridSize() * 1}px;
`;

const Footer = ({ children }: any) => {
  return (
    <Styled>
      {children}
    </Styled>
  )
};

Footer.prototype.name = "Footer";

export default Footer;
