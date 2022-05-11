import React, { useEffect, cloneElement, useState  } from 'react';
import styled from 'styled-components';
import { colors, gridSize, layers, animation, fontSize, borderRadius, gradients, fontSizeSmall } from '@theme/constants';

type Mode = 'default' | 'display' | 'brimming';

interface PlateProps {
  children: React.ReactNode,
  mode?: Mode;
  isLoading?: boolean;
}

const Styled = styled.div<any>`
  display: flex;
  flex-direction: column;
  z-index: ${layers.plate()};
  :before {
    content: '';
    display: flex;
    flex-grow: 1;
    position: relative;
    height: ${gridSize() * 1}px;
    margin-left: -${gridSize() * 0.4}px;
    margin-bottom: -${gridSize() * 0.6}px;
    width: calc(100% + ${gridSize() * 0.75}px);
    ${({ mode }) => {
      if(mode === 'display') return `
        background: ${gradients.subtle()};
      `;
      return `
        background: ${gradients.primary()};
      `;
    }}
    clip-path: polygon(0% 0%, 0% 100%, ${gridSize() * 1}px 100%, ${gridSize() * 1}px 0, calc(100% - ${gridSize() * 1}px) 0, calc(100% - ${gridSize() * 1}px) 100%, 25% 100%, 25% 100%, 100% 100%, 100% 0%);
  }
  :after {
    content: '';
    display: flex;
    transform: rotate(180deg);
    flex-grow: 1;
    position: relative;
    height: ${gridSize() * 1}px;
    margin-left: -${gridSize() * 0.4}px;
    margin-top: -${gridSize() * 0.6}px;
    width: calc(100% + ${gridSize() * 0.75}px);
    ${({ mode }) => {
      if(mode === 'display') return `
        background: ${gradients.subtle()};
      `;
      return `
        background: ${gradients.primary()};
      `;
    }}
    clip-path: polygon(0% 0%, 0% 100%, ${gridSize() * 1}px 100%, ${gridSize() * 1}px 0, calc(100% - ${gridSize() * 1}px) 0, calc(100% - ${gridSize() * 1}px) 100%, 25% 100%, 25% 100%, 100% 100%, 100% 0%);
  }
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
  padding: ${gridSize() * 4}px ${gridSize() * 4.5}px;

  ${({ mode }) => {
    if(mode === 'display') return `
      padding: 0;
    `;
    if(mode === 'brimming') return `
      background-color: transparent;
    `;
    return ``;
  }}

  form {
    padding-right: ${gridSize() * 2.5}px;
  }
`;

const Plate = ({
  mode = 'default',
  isLoading,
  children
}: PlateProps) => {

  return (
    <Styled mode={mode}>
      <Border mode={mode}>
        <Content mode={mode}>
          {children}
        </Content>
      </Border>
    </Styled>
  )
};

export default Plate;