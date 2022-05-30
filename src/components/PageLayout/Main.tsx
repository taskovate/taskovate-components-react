import React, { FC } from 'react';
import styled from 'styled-components';
import { colors, gridSize, layers, animation, borderRadius, gradients, fontSize, headerFontFamily } from '@theme/constants';

const Styled = styled.div`
  display: flex;
  height: auto;
  flex-grow: 1;
  padding: ${gridSize() * 1}px;
`;

const Main = ({ children }: any) => {
  return (
    <Styled>
      {children}
    </Styled>
  )
};

export default Main;
