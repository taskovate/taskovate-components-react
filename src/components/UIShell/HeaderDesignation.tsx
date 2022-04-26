import React, { useEffect, useState } from 'react';
import styled, { useTheme } from 'styled-components';
import { gridSize, layers, animation, borderRadius, gradients } from '@theme/constants';

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
  height: ${gridSize() * 5}px;
  width: ${gridSize() * 5}px;
  margin-right: ${gridSize() * 3}px;
`;


const HeaderDesignation: React.FC<any> = (props: any) => {
  return (
    <Logo src={logo} />
  );
};

export default HeaderDesignation;