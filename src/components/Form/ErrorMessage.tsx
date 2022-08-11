import React, { useEffect, cloneElement, useState  } from 'react';
import styled from 'styled-components';
import { colors, gridSize, layers, animation, fontSize, borderRadius, gradients, fontSizeSmall } from '@theme/constants';
import { BsFillExclamationSquareFill } from 'react-icons/bs';

const Styled = styled.div`
  color: ${colors.r[500]};
  display: inline-flex;
  flex-direction: row;
  align-content: center;
  align-items: start;
  line-height: 20px;
  justify-content: start;
  margin-top: ${gridSize() * 0.75}px;
  gap: ${gridSize() * 0.75}px;
  svg {
    height: ${fontSize() * 1.5}px;
    width: ${fontSize() * 1.5}px;
    margin-top: ${gridSize() * 0.01}px;
  }
`;

const ErrorMessage = ({
  disableIcon,
  style,
  children
}: any) => {
  return (
    <Styled style={style}>
      {!disableIcon && <BsFillExclamationSquareFill />}
      {children}
    </Styled>
  );
};

export default ErrorMessage;