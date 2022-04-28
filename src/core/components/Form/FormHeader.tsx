import React, { useEffect, cloneElement, useState  } from 'react';
import styled from 'styled-components';
import { gridSize, layers, animation, fontSize, borderRadius, gradients, fontSizeSmall } from '@theme/constants';

const Styled = styled.div`
`;

const HeaderTitle = styled.h1`
  line-height: initial;
  margin-top: -3px !important;
  text-overflow: ellipsis;
  white-space: nowrap;
  margin-bottom: ${gridSize() * 0.5}px;
  margin-right: ${gridSize() * 0.25}px;
  width: 100%;
  min-width: 0;
  overflow: hidden;
  
  small {
    vertical-align: super;
  }
`;

const HeaderDescription = styled.h4`
  margin-top: 0;
  margin-bottom: ${gridSize() * 0.5}px;
  margin-right: ${gridSize() * 0.25}px;
  width: 100%;
`;

const HeaderChildren = styled.div`
`;

const FormHeader = ({
  title,
  description,
  children,
  wrap
}: any) => {
  return (
      <Styled>
        {title && <HeaderTitle style={wrap && { whiteSpace: 'break-spaces' }}>{title}</HeaderTitle>}
        {description && <HeaderDescription>{description}</HeaderDescription>}
        {children && <HeaderChildren>{children}</HeaderChildren>}
      </Styled>
  );
};

export default FormHeader;