import React, { useEffect, cloneElement, useState  } from 'react';
import styled from 'styled-components';
import { colors, gridSize, layers, animation, fontSize, borderRadius, gradients, fontSizeSmall } from '@theme/constants';

const Styled = styled.div`
  margin-top: ${gridSize() * 0.5}px;
`;

const SectionTitle = styled.h4`
  display: inline-flex;
  align-items: center;
  margin-right: ${gridSize() * 1.5}px;
  line-height: initial;
  margin-top: -1px !important;
  // overflow: hidden;
  overflow: visible;
  text-overflow: ellipsis;
  white-space: wrap;
  margin-bottom: ${gridSize() * 0.25}px;
  &::after {
    display: block;
    content: "";
    height: 3px;
    background-color: ${colors.d[100]};
    background: ${gradients.primary()};
    opacity: 0;
  }
`;

const SectionDescription = styled.h4`
  margin-top: 0;
  margin-bottom: ${gridSize() * 0.5}px;
  margin-right: ${gridSize() * 0.25}px;
  width: 100%;
`;

const SectionChildren = styled.div`
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