import React, { FC } from 'react';
import styled from 'styled-components';
import { gridSize, layers, animation, borderRadius, gradients, fontSize, headerFontFamily } from '@theme/constants';

const Styled = styled.div`
  display: flex;
  flex-grow: 1;
  background-color: rgba(0,255,255,0.25);
  padding: ${gridSize() * 0.75}px;
  overflow: visible !important;
`;

const SideBar = ({ children }: any) => {
  return (
    <Styled>
      {children}
    </Styled>
  )
};

export default SideBar;
