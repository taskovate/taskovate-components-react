import React, { FC } from 'react';
import styled from 'styled-components';
import { colors, gridSize, layers, animation, borderRadius, gradients, fontSize, headerFontFamily } from '@theme/constants';

const Styled = styled.div`
  display: flex;
  flex-direction: column;
  height: auto;
  flex-grow: 1;
  align-items: center;
  // text-align: center;
  // max-width: ${gridSize() * 144}px;
  margin: 0 auto;
  padding: ${gridSize() * 0}px ${gridSize() * 3}px;
  margin-left: ${gridSize() * 2.35}px;
  // background-color: green;
`;

const Main = ({ children }: any) => {
  return (
    <Styled>
      {children}
    </Styled>
  )
};

Main.prototype.name = "Main";

export default Main;
