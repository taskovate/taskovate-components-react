import React, { useEffect, useState } from 'react';
import styled, { useTheme } from 'styled-components';
import { gridSize, layers, animation, borderRadius, gradients, fontSize } from '@theme/constants';

const logo = '/images/logo.svg';

// type User = {
//   name: string;
// };

// interface HeaderProps {
//   borderWidth: string;
//   height: number;
//   offset: string;
// }

const Logo = styled.img<any>`
  display: flex;
  align-self: center;
  height: ${fontSize() * 2.875}px;
  width: ${fontSize() * 2.875}px;
  margin-right: ${gridSize() * 2}px;
`;


const HeaderDesignation: React.FC<any> = (props: any) => {
  return (
    <Logo src={logo} />
  );
};

export default HeaderDesignation;