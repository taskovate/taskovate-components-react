import React, { useEffect, cloneElement, useState  } from 'react';
import styled from 'styled-components';
import { colors, gridSize, layers, animation, fontSize, borderRadius, gradients, fontSizeSmall } from '@theme/constants';
import { BsFillCheckSquareFill } from 'react-icons/bs';

const Styled = styled.div`
  color: ${colors.g[200]};
  display: inline-flex;
  flex-direction: row;
  align-content: start;
  align-items: center;
  justify-content: start;
  line-height: 20px;
  margin-top: ${gridSize() * 0.75}px;
  gap: ${gridSize() * 0.75}px;
  svg {
    height: ${fontSize() * 1.5}px;
    width: ${fontSize() * 1.5}px;
    margin-top: ${gridSize() * 0.375}px;
  }
`;

const ValidMessage = ({
  disableIcon,
  children
}: any) => {
  return (
    <Styled>
      {!disableIcon && <BsFillCheckSquareFill />}
      {children}
    </Styled>
  );
};

export default ValidMessage;