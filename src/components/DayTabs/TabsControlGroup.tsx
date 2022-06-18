import React, { FC, useState, useEffect } from 'react';
import { gridSize, borderRadius, colors } from '@theme/constants';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: stretch;
  align-content: center;
  gap: ${gridSize() * 1}px;
  height: ${gridSize() * 4}px;
  // background-color: rgba(0, 255, 0, 0.1);
`;

const TabsControlGroup: FC<any> = ({
  children
}) => {

  return  (
    <>
      <Container>
        {children}
      </Container>
    </>
  );
};

export default TabsControlGroup;
