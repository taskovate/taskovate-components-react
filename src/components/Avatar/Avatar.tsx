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
  width: ${gridSize()  * 2.75}px;
  height: ${gridSize() * 2.75}px;
  border-radius: ${borderRadius() * 0.625}px; 
  margin: auto;
`;

const Avatar = ({
  name = 'John Dow',
}: any) => {

  return (
    <Container>
      <AvatarImage src={`https://ui-avatars.com/api/?name=${encodeURIComponent(name)}&bold=true&size=128`} />
    </Container>
  );
};

export default Avatar;