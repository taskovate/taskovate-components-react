import React, { useEffect, cloneElement, useState  } from 'react';
import styled from 'styled-components';
import { gridSize, layers, animation, fontSize, borderRadius, gradients, fontSizeSmall } from '@theme/constants';

const Styled = styled.div`
`;

const HeaderTitle = styled.h1`

`;

const HeaderDescription = styled.h4`
`;

const HeaderChildren = styled.div`
`;

const FormHeader = ({
  title,
  description,
  children
}: any) => {
  return (
      <Styled>
        {title && <HeaderTitle>{title}</HeaderTitle>}
        {description && <HeaderDescription>{description}</HeaderDescription>}
        {children && <HeaderChildren>{children}</HeaderChildren>}
      </Styled>
  );
};

export default FormHeader;