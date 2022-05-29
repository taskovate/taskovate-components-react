import React, { FC } from 'react';
import styled from 'styled-components';
import { gridSize, layers, animation, borderRadius, gradients, fontSize, headerFontFamily } from '@theme/constants';

const Styled = styled.div`
  display: flex;
  height: 100%;
  // background-color: red;
  grid-area: "content" / "content" / "content";
`;

const Content = ({ children }: any) => {
  return (
    <Styled>
      {children}
    </Styled>
  )
};

export default Content;
