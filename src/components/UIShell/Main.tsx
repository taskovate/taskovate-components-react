import React, { FC } from 'react';
import styled from 'styled-components';
import { gridSize, layers, animation, borderRadius, gradients, fontSize, headerFontFamily } from '@theme/constants';

const Styled = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: ${gridSize() * (7.0 + 0.375)}px;
  min-width: 0;
  flex-grow: 1;
  @media only screen and (min-device-width: 740px) {
    margin-left: ${gridSize() * 2.25}px;
  }
  // background-color: rgba(0,0,255, 0.5);
  z-index: 10 !important;
`;

const Main = ({ children }: any) => {
  return (
    <Styled>
      {children}
    </Styled>
  )
};

export default Main;
