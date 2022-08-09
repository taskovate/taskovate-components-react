import React, { FC } from 'react';
import styled from 'styled-components';
import { gridSize, layers, animation, borderRadius, gradients, fontSize, headerFontFamily } from '@theme/constants';

const Styled = styled.div`
  display: grid;
  height: 100%;

  grid-template-areas: "header" "content" "footer";

  grid-template-columns: auto;
  grid-template-rows: ${gridSize() * 8}px auto minmax(min-content, max-content);
`;

const Layout = ({ 
  children 
}: any) => {
  return (
    <Styled>
      {children}
    </Styled>
  )
};

export default Layout;
