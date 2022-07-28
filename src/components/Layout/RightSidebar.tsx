import React, { FC } from 'react';
import styled from 'styled-components';
import { colors, gridSize, layers, animation, borderRadius, gradients, fontSize, headerFontFamily } from '@theme/constants';

const Styled = styled.div`
  display: flex;
  height: auto;
  width: ${gridSize() * 48}px;
  padding-top: ${gridSize() * 2}px;
  padding-right: ${gridSize() * 4}px;
`;

const RightSidebar = ({ children }: any) => {
  return (
    <Styled>
      {children}
    </Styled>
  )
};

RightSidebar.prototype.name = "RightSidebar";

export default RightSidebar;
