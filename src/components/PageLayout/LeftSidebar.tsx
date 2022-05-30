import React, { FC } from 'react';
import styled from 'styled-components';
import { colors, gridSize, layers, animation, borderRadius, gradients, fontSize, headerFontFamily } from '@theme/constants';

const Styled = styled.div`
  display: flex;
  height: auto;
  width: ${gridSize() * 26}px;
  padding: ${gridSize() * 1}px ${gridSize() * 3}px;
`;

const LeftSidebar = ({ children }: any) => {
  return (
    <Styled>
      {children}
    </Styled>
  )
};

export default LeftSidebar;
