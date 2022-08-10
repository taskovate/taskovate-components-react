import React, { useState } from 'react';
import styled from 'styled-components';
import { gridSize, borderRadius, colors, animation } from '@theme/constants';
import { Button } from '@components/core';

const Container = styled.div<any>`
  display: flex;
  flex-grow: 1;
  background-color: transparent;
  ${({size}) => `
    height: ${size}px !important;
    width: ${size}px !important;
  `}
`;

const AvatarImage = styled.img<any>`
  display: flex;
  ${({ size }) => `
    height: ${size}px !important;
    width: ${size}px !important;
  `}
  border-radius: ${borderRadius() * 0.5}px; 
  border: ${borderRadius() * 0.25}px solid ${colors.n[100]};
  background: ${colors.n[100]};
`;

const Avatar = ({
  name = 'John Dow',
  size = 20
}: any) => {

  return (
    <AvatarImage size={size} src={`https://ui-avatars.com/api/?name=${encodeURIComponent(name)}`}/>
  );
};

export default Avatar;