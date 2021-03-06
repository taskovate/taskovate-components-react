import React, { FC } from 'react';
import styled from 'styled-components';
import { colors, gridSize, layers, animation, borderRadius, gradients, fontSize, headerFontFamily } from '@theme/constants';

const Styled = styled.div`
  display: flex;
  flex-direction: column;
  height: auto;
  flex-grow: 1;
  // align-items: center;
  // text-align: center;
  max-width: ${gridSize() * 96}px;
  margin: 0 auto;
  padding: ${gridSize() * 1}px ${gridSize() * 4}px;
  padding-bottom: ${gridSize() * 6}px
`;

const Main = ({ children }: any) => {
  return (
    <Styled>
      {children}
    </Styled>
  )
};

export default Main;
