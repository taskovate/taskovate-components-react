import React, { useEffect, cloneElement, useState  } from 'react';
import styled from 'styled-components';
import { colors, gridSize, layers, animation, fontSize, borderRadius, gradients, fontSizeSmall } from '@theme/constants';

const Styled = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: ${gridSize() * 4.5}px;
`;

const SectionTitle = styled.h4`
  display: flex;
`;

const SectionDescription = styled.h4`
`;

const SectionChildren = styled.div`
  margin-top: ${gridSize() * 1.5}px;
    
  & > :last-child {
    margin-bottom: 0 !important;
  }
`;

const FormSection = ({
  title,
  description,
  children
}: any) => {
  return (
    <Styled>
      {title && <SectionTitle>{title}</SectionTitle>}
      {description && <SectionDescription>{description}</SectionDescription>}
      {children && <SectionChildren>{children}</SectionChildren>}
    </Styled>
  );
};

export default FormSection;