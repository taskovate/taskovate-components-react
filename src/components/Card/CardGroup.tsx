import React, { useEffect, useState } from 'react';
import styled, { DefaultTheme, useTheme } from 'styled-components';
import { gridSize, colors, fontSize, layers, animation, borderRadius } from '@theme/constants';
import { hex2rgba, themedOrNull } from '@theme/helpers';
import { Link } from 'react-resource-router';

const Container = styled.div<any>`
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: start;
  flex-wrap: wrap;
  // overflow: hidden;
  background-color: ${colors.d[800]};
  padding: ${gridSize() * 1}px;
  border-radius: ${borderRadius() * 2}px;
  gap: ${gridSize() * 1}px;
  box-shadow: ${({ theme }) => theme.elevation[200]};
`;

const Title = styled.h5`
  display: flex;
  color: ${colors.n[400]};
  padding: ${gridSize() * 1}px;
`;

const Row = styled.div<any>`
  display: flex;
  flex-direction: row;
  gap: ${gridSize() * 1}px;
  align-items: start;
  justify-content: start;
  flex-wrap: wrap;
  // overflow: hidden;
`;

const CardGroup: React.FC<any> = ({
  children,
  title,
  ...rest
}: any) => {

  return (
    <Container {...rest}>
      {title && <Title>{title}</Title>}
      <Row>{children}</Row>
    </Container>
  );
};

export default CardGroup;