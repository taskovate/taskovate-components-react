import React, { useEffect, cloneElement, useState  } from 'react';
import styled from 'styled-components';
import { colors, gridSize, layers, animation, fontSize, borderRadius, gradients, fontSizeSmall } from '@theme/constants';

const Styled = styled.div`
  display: flex;
`;

const Input = styled.input`
  display: flex;
  padding: ${gridSize() * 0.75}px ${gridSize() * 1.25}px;
  border-radius: ${borderRadius() * 1}px;
  border: ${gridSize() * 0.25}px solid transparent;
  background-color: ${colors.d[600]};
  color: ${({ theme }) => theme.text()};
  outline: none;
  :hover {
    border-color: ${colors.p[500]};
  }
  :focus {
    border-color: ${colors.p[400]};
  }
`;

const TextField = ({
  children
}: any) => {

  return (
    <Styled>
      <Input />
    </Styled>
  );
};

export default TextField;