import React, { FC } from 'react';
import styled from 'styled-components';
import { colors, gridSize, layers, animation, borderRadius, gradients, fontSize, headerFontFamily } from '@theme/constants';

const Styled = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  justify-content: start;
  align-items: start;
  align-content: start;
  gap: ${gridSize() * 2}px;
`;

const SideBar = ({ 
  children
 }: any) => {
  return (
    <Styled>
      {children}
    </Styled>
  )
};

export default SideBar;
