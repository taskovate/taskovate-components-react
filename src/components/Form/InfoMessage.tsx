import React, { useEffect, cloneElement, useState  } from 'react';
import styled from 'styled-components';
import { colors, gridSize, layers, animation, fontSize, borderRadius, gradients, fontSizeSmall } from '@theme/constants';
import { BsFillInfoSquareFill } from 'react-icons/bs';

const Styled = styled.div`
  color: ${colors.b[200]};
  display: inline-flex;
  flex-direction: row;
  align-content: center;
  align-items: start;
  justify-content: start;
  line-height: 20px;
  margin-top: ${gridSize() * 0.75}px;
  svg {
    height: ${gridSize() * 2.5 / fontSize()}em;
    width: ${gridSize() * 2.5 / fontSize()}em;
  }
`;

const InfoMessage = ({
  disableIcon,
  children
}: any) => {
  return (
    <Styled>
      {!disableIcon && <BsFillInfoSquareFill />}
      <span style={{ marginLeft: gridSize() * 0.125 }} />
      {children}
    </Styled>
  );
};

export default InfoMessage;