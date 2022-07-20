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
  // align-content: center;
  // align-items: center;
`;

const HeaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: ${gridSize() * 2}px;
`;

const ControlBar = styled.div`
  display: flex;
  flex-direction: row;
  gap: ${gridSize() * 1.5}px;
  align-items: center;
  border-radius: ${borderRadius() * 1}px;
  padding: ${gridSize() * 1}px ${gridSize() * 0}px;
  background-color: ${colors.d[900]};
  // border-top: ${gridSize() * 0.25}px solid ${colors.d[800]};
  // border-bottom: ${gridSize() * 0.25}px solid ${colors.d[800]};
  // & :first-child {
  //   border-bottom-left-radius: ${borderRadius() * 1}px;
  //   border-top-left-radius: ${borderRadius() * 1}px;
  // }
  // & :not(& :last-child) {
  //   border-right-width: ${gridSize() * 0}px;
  // }
  // & :not(& :first-child) {
  //   border-left-width: ${gridSize() * 0}px;
  // }
  // & :last-child {
  //   border-bottom-right-radius: ${borderRadius() * 1}px;
  //   border-top-right-radius: ${borderRadius() * 1}px;
  // }
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
      {children && 
        <HeaderContainer>
          <Row>
            <h2>{children}</h2>
            {actions && <ButtonGroup>{actions}</ButtonGroup>}
          </Row>
          {description && <p>{description}</p>}
        </HeaderContainer>
      }
      {controls && (
        <ControlBar>{controls}</ControlBar>
      )}
    </Container>
  )
};

export default PageHeader;
