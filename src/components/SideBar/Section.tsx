import React, { FC } from 'react';
import styled from 'styled-components';
import { colors, gridSize, layers, animation, borderRadius, gradients, fontSize, headerFontFamily } from '@theme/constants';

const Styled = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: ${gridSize() * 0.5}px;
`;

const SectionTitle = styled.small`
  text-transform: uppercase;
`;

const SidebarSection = ({ 
  children,
  title
 }: any) => {
  return (
    <Styled>
      {title && <SectionTitle>{title}</SectionTitle>}
      {children}
    </Styled>
  )
};

export default SidebarSection;
