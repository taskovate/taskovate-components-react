import React, { FC } from 'react';
import styled from 'styled-components';
import { colors, gridSize, layers, animation, borderRadius, gradients, fontSize, headerFontFamily } from '@theme/constants';

const Styled = styled.div`
  display: flex;
  grid-area: "top-navigation";
`;

const TopNavigation = ({ children }: any) => {
  return (
    <Styled>
      {children}
    </Styled>
  )
};

export default TopNavigation;
