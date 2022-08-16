import React, { FC } from 'react';
import styled from 'styled-components';
import { gridSize, layers, animation, borderRadius, gradients, fontSize, headerFontFamily } from '@theme/constants';

const Styled = styled.div`
  display: flex;
  height: 100%;
  grid-area: content / content / content;
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
