import React, { useState } from 'react';
import styled from 'styled-components';
import { gridSize, borderRadius, colors, animation } from '@theme/constants';
import { Button } from '@components/core';

const Container = styled.div<any>`
  display: flex;
  flex-grow: 0;
  padding: ${gridSize() * 0.375}px;
  background-color: transparent;
  border-radius: 100%;
`;

const AvatarImage = styled.img`
  display: flex;
  border-radius: ${borderRadius() * 0.5}px; 
  width: ${gridSize() * 3.3125}px;
  height: ${gridSize() * 3.3125}px;
  margin: auto auto;
`;

const Avatar = ({
  children,
}: any) => {

  return (
    <Container>
      <AvatarImage src="https://picsum.photos/96/96" />
    </Container>
  );
};

export default Avatar;