import React, { useEffect, cloneElement, useState  } from 'react';
import styled from 'styled-components';
import { gridSize, layers, animation, fontSize, borderRadius, gradients, fontSizeSmall } from '@theme/constants';

type Mode = 'default' | 'display' | 'brimming';

interface PlateProps {
  children: React.ReactNode,
  mode?: Mode;
  isLoading?: boolean;
}

const Styled = styled.div`
  display: flex;
  z-index: ${layers.plate()};
`;

const Border = styled.div<any>`
  display: flex;
  background: ${gradients.secondary()};
  border-radius: ${borderRadius() * 1}px;
  border: ${gridSize() * 0.25}px solid transparent;

  ${({ theme, mode }) => {
    if(mode === 'display') return `
      background-color: ${theme.background()};
      border: none;
    `;
    if(mode === 'default' || mode === 'brimming') return `
      box-shadow: ${theme.elevation[300]};
    `;
    return ``;
  }}
`;

const Content = styled.div<any>`
  display: flex;
  flex-grow: 1;
  background-color: ${({ theme }) => theme.background()};
  padding: ${gridSize() * 5}px ${gridSize() * 5}px;

  ${({ mode }) => {
    if(mode === 'display') return `
      padding: 0;
    `;
    if(mode === 'brimming') return `
      background-color: transparent;
    `;
    return ``;
  }}
`;

const Plate = ({
  mode = 'default',
  isLoading,
  children
}: PlateProps) => {

  return (
    <Styled>
      <Border mode={mode}>
        <Content mode={mode}>
          {children}
        </Content>
      </Border>
    </Styled>
  )
};

export default Plate;