import React, { useEffect, cloneElement, useState  } from 'react';
import styled from 'styled-components';
import { gridSize, layers, animation, fontSize, borderRadius, gradients, fontSizeSmall } from '@theme/constants';

const Styled = styled.div<any>`
  margin-top: ${gridSize() * 1.25};
  display: flex;
  width: 100%;
  justify-content: ${props => props.align || 'flex-start'};
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