import React, { FC } from 'react';
import styled from 'styled-components';
import { gridSize, layers, animation, borderRadius, gradients, fontSize, headerFontFamily } from '@theme/constants';

const Styled = styled.div`
  display: grid;
  height: 100%;

  grid-template-areas: 
    "top-navigation"
    "content"
    "footer"
  ;

  grid-template-rows: ${gridSize() * 7.5}px auto ${gridSize() * 16}px;
  grid-template-columns: auto;

  // background-color: rgba(255 0 0 / 10%);
`;

const PageLayout = ({ 
  children 
}: any) => {
  return (
    <Styled>
      {children}
    </Styled>
  )
};

export default PageLayout;
