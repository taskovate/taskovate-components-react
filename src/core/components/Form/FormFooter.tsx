import React, { useEffect, cloneElement, useState  } from 'react';
import styled from 'styled-components';
import { gridSize, layers, animation, fontSize, borderRadius, gradients, fontSizeSmall } from '@theme/constants';

const Styled = styled.div<any>`
  display: flex;
  justify-content: ${props => props.align || 'flex-start'};
  margin-top: ${gridSize() * 5}px;
`;

const FormFooter = ({
  children,
  align
}: any) => {
  return (
    <Styled align={align}>
      {children}
    </Styled>
  );
};

export default FormFooter;