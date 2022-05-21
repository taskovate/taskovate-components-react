import React, { useEffect, cloneElement, useState  } from 'react';
import styled from 'styled-components';
import { colors, gridSize, layers, animation, fontSize, borderRadius, gradients, fontSizeSmall } from '@theme/constants';
import { BsFillCheckSquareFill } from 'react-icons/bs';

const Styled = styled.div`
  color: ${colors.g[200]};
  display: inline-flex;
  flex-direction: row;
  align-content: center;
  align-items: start;
  justify-content: start;
  line-height: 20px;
  margin-top: ${gridSize() * 0.125}px;
  svg {
    height: ${gridSize() * 2.5 / fontSize()}em;
    width: ${gridSize() * 2.5 / fontSize()}em;
  }
`;

const ValidMessage = ({
  disableIcon,
  children
}: any) => {
  return (
    <Styled>
      {!disableIcon && <BsFillCheckSquareFill />}
      <span style={{ marginLeft: gridSize() * 0.125 }} />
      {children}
    </Styled>
  );
};

export default ValidMessage;