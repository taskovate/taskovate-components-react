import React, { useState } from 'react';
import styled from 'styled-components';
import { gridSize, borderRadius, colors, animation } from '@theme/constants';
import { Button } from '@components/core';

const Container = styled.div<any>`
  display: flex;
  flex-grow: 1;
  background-color: transparent;
  align-self: center;
  margin: auto;
`;

const AvatarImage = styled.img`
  display: flex;
  align-self: center;
  width: calc(100% - ${gridSize() * 1}px);
  height: calc(100% - ${gridSize() * 1}px);
  border-radius: ${borderRadius() * 0.25}px; 
  margin: auto;
`;

const Avatar = ({
  name = 'John Dow',
}: any) => {

  return (
    <Container>
      <AvatarImage src={`https://ui-avatars.com/api/?name=${encodeURIComponent(name)}&bold=true&size=128&font-size=0.5&background=${colors.p[100].replace('#', '')}&color=${colors.d[900].replace('#', '')}`} />
    </Container>
  );
};

export default Avatar;