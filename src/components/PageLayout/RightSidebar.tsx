import React, { FC } from 'react';
import styled from 'styled-components';
import { colors, gridSize, layers, animation, borderRadius, gradients, fontSize, headerFontFamily } from '@theme/constants';

const Styled = styled.div`
  display: flex;
  height: auto;
  // background-color: purple;
  width: ${gridSize() * 25}px;

  outline: 2px dashed ${colors.y[500]};
  outline-offset: -4px;

`;

const RightSidebar = ({ children }: any) => {
  return (
    <Styled>
      {children}
    </Styled>
  )
};

export default RightSidebar;
