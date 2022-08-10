import React, { useEffect, useState } from 'react';
import styled, { useTheme } from 'styled-components';
import { gridSize, layers, animation, borderRadius, gradients, fontSize } from '@theme/constants';
import { Link } from 'react-resource-router';
const logo = '/images/logo.svg';

// type User = {
//   name: string;
// };

// interface HeaderProps {
//   borderWidth: string;
//   height: number;
//   offset: string;
// }
const Container = styled.div<any>`
  display: flex;
  // margin-left: ${gridSize() * 1.5}px;
  margin-right: ${gridSize() * 2}px;
`;

const Logo = styled.img<any>`
  display: flex;
  align-self: center;
  width: ${fontSize() * 3}px;
`;


const HeaderDesignation: React.FC<any> = (props: any) => {
  return (
    <Container>
      <Link href="/">
        <Logo src={logo} />
      </Link>
    </Container>
  );
};

export default HeaderDesignation;