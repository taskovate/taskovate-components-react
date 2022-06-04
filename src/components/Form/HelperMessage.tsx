import React, { useEffect, cloneElement, useState  } from 'react';
import styled from 'styled-components';
import { colors, gridSize, layers, animation, fontSize, borderRadius, gradients, fontSizeSmall } from '@theme/constants';
import { BsFillExclamationSquareFill } from 'react-icons/bs';

const Styled = styled.p`
  margin-top: ${gridSize() * 0.75}px;
`;

const HelperMessage = ({
  children
}: any) => {
  return (
    <Styled>
      {children}
    </Styled>
  );
};

export default HelperMessage;