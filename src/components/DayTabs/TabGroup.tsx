import React, { FC, useState, useEffect } from 'react';
import { gridSize, borderRadius, colors } from '@theme/constants';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-grow: 1;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: start;
  align-content: center;
  gap: ${gridSize() * 1}px;
  // background-color: rgba(255, 0, 0, 0.1);
`;

const TabGroup: FC<any> = ({
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

export default TabGroup;
