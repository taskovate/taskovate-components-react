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
  margin-top: ${gridSize() * 0.25}px;
  svg {
    height: ${gridSize() * 2.5 / fontSize()}em;
    width: ${gridSize() * 2.5 / fontSize()}em;
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
      <span style={{ marginLeft: gridSize() * 0.25 }} />
      {children}
    </Styled>
  );
};

export default ErrorMessage;