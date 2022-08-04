import React, { FC } from 'react';
import styled from 'styled-components';
import { colors, gridSize, layers, animation, borderRadius, gradients, fontSize, headerFontFamily } from '@theme/constants';
import { hex2rgba } from '@theme/helpers';

// TODO: Restructure Footer into BottomNavigation component, then have Footer with grid as Footer component (like how Header and TopNavigation are setup).
const Styled = styled.div`
  display: flex;
  grid-area: footer;
  flex-grow: 1;
  padding: ${gridSize() * 1}px ${gridSize() * 1}px;
  padding-bottom: 0;
`;

const BottomNavigation = ({ children }: any) => {
  return (
    <Styled>
      {children}
    </Styled>
  )
};

BottomNavigation.prototype.name = "BottomNavigation";

export default BottomNavigation;
