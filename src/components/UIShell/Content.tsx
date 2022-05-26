import React, { FC } from 'react';
import styled from 'styled-components';
import { gridSize, layers, animation, borderRadius, gradients, fontSize, headerFontFamily } from '@theme/constants';

const Container = styled.div`
  display: inline-flex;
  flex-direction: column;
  overflow-x: hidden;
  min-width: 0;
  flex-grow: 1;
  // width: 80rem;
  max-width: 80rem;
  align-items: start;
  overflow: visible;
  margin: 0 auto;
  // background-color: rgba(0,0,255, 0.5)
`;

const SideBar = ({ children }: any) => {
  return (
    <Container>
      {children}
    </Container>
  )
};

export default SideBar;
