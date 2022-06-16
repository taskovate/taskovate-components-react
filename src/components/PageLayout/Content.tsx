import React, { FC } from 'react';
import styled from 'styled-components';
import { gridSize, layers, animation, borderRadius, gradients, fontSize, headerFontFamily } from '@theme/constants';

const Styled = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  grid-area: "content" / "content" / "content";
`;

const Content = ({ children }: any) => {
  return (
    <Styled>
      {children}
    </Styled>
  )
};

Content.prototype.name = "Content";

export default Content;
