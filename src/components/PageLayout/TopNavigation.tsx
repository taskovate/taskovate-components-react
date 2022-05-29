import React, { FC } from 'react';
import styled from 'styled-components';
import { colors, gridSize, layers, animation, borderRadius, gradients, fontSize, headerFontFamily } from '@theme/constants';

const Styled = styled.div`
  display: flex;
  grid-area: "top-navigation";

  // outline: 2px dashed ${colors.b[500]};
  // outline-offset: -4px;

  // padding: ${gridSize() * 1}px;
  background: red;
`;

const TopNavigation = ({ children }: any) => {
  return (
    <Styled>
      {children}
    </Styled>
  )
};

export default TopNavigation;
