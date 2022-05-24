import React, { useEffect, useState } from 'react';
import styled, { DefaultTheme, useTheme } from 'styled-components';
import { gridSize, fontSize, layers, animation, borderRadius } from '@theme/constants';
import { hex2rgba, themedOrNull } from '@theme/helpers';
import { Link } from 'react-resource-router';

const Container = styled.div<any>`
  display: flex;
  flex-direction: row;
  gap: ${gridSize() * 0.75}px;
  align-items: center;
`;

const Button: React.FC<any> = ({
  children,
  ...rest
}: any) => {

  return (
    <Container {...rest}>
      {children}
    </Container>
  );
};

export default Button;