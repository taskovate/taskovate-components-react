import React, { FC } from 'react';
import styled from 'styled-components';
import { colors, gridSize, layers, animation, borderRadius, gradients, fontSize, headerFontFamily } from '@theme/constants';
import { themedOrNull } from '@theme/helpers';
import { ButtonGroup } from '@components/core';

const Container = styled.div<any>`
  h2 {
    display: inline-block;
    align-self: center;
  }
  h6 {
    margin-bottom: ${gridSize() * 1}px;
  }
  margin-bottom: ${gridSize() * 2}px;
`;

const Row = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-content: center;
  align-items: center;
`;

const HeaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: ${gridSize() * 2}px;
`;

interface Props {
  breadcrumbs?: any;
  controls?: any;
  actions?: any;
  children?: any;
  description?: any;
}
const PageHeader = ({ 
  breadcrumbs,
  controls,
  actions,
  children,
  description
 }: Props) => {
  return (
    <Container>
      {breadcrumbs && <h6>{breadcrumbs}</h6>}
      <HeaderContainer>
        <Row>
          <h2>{children}</h2>
          {actions && <ButtonGroup>{actions}</ButtonGroup>}
        </Row>
        {description && <p>{description}</p>}
      </HeaderContainer>
      {controls && (
        <ButtonGroup>{controls}</ButtonGroup>
      )}
    </Container>
  )
};

export default PageHeader;
