import React, { useState } from 'react';
import styled from 'styled-components';
import { gridSize, borderRadius, colors, animation } from '@theme/constants';
import { Button } from '@components/core';

const Container = styled.div<any>`
  display: flex;
  flex-grow: 1;
  background-color: transparent;
  border-radius: 100%;
  align-self: center;
  margin: auto;
`;

const AvatarImage = styled.img`
  display: flex;
  align-self: center;
  width: ${gridSize() * 3}px;
  height: ${gridSize() * 3}px;
  border-radius: ${borderRadius() * 0.5}px; 
  margin: auto;
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