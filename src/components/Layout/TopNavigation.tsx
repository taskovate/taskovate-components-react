import React, { FC } from 'react';
import styled from 'styled-components';
import { colors, gridSize, layers, animation, borderRadius, gradients, fontSize, headerFontFamily } from '@theme/constants';

const Styled = styled.div`
  display: flex;
  grid-area: header;
  position: sticky;
  top: 0;
  z-index: ${layers.navigation()};
`;

const TopNavigation = ({ children }: any) => {
  return (
    <Styled>
      {children}
    </Styled>
  )
};

TopNavigation.prototype.name = "TopNavigation";

export default TopNavigation;
