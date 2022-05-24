import React, { FC } from 'react';
import styled from 'styled-components';
import { gridSize, layers, animation, borderRadius, gradients, fontSize, headerFontFamily } from '@theme/constants';

const Container = styled.div`
  display: block;
  overflow-x: hidden;
  // width: ;
  min-width: 0;
  flex-grow: 1;
  max-width: 80rem;
  // background-color: rgba(255,0,255,0.25);
  margin: 0 auto;
  overflow: visible !important;
  background-color: rgba(0,0,255, 0.5)
`;

const SideBar = ({ children }: any) => {
  return (
    <Container>
      {children}
    </Container>
  )
};

export default SideBar;
