import React, { useEffect, useState } from 'react';
import styled, { useTheme } from 'styled-components';
import { gridSize, layers, animation, borderRadius, gradients } from '@theme/constants';

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
  flex-direction: row;
  justify-content: flex-start;
  flex: 0 1 auto;
  align-items: center;
`;

const HeaderMenuBar: React.FC<any> = ({ children }: any) => {
  return (
    <Container>
      {children}
    </Container>
  );
};

export default HeaderMenuBar;