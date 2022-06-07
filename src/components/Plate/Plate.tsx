import React, { useEffect, cloneElement, useState  } from 'react';
import styled from 'styled-components';
import { colors, gridSize, layers, animation, fontSize, borderRadius, gradients, fontSizeSmall } from '@theme/constants';

type Mode = 'default' | 'display' | 'brimming';

interface PlateProps {
  children: React.ReactNode,
  appearance?: Mode;
  isLoading?: boolean;
}

const Styled = styled.div<any>`
  display: block;
  z-index: ${layers.plate()};
  margin-top: ${gridSize() * 1}px;
  margin-bottom: ${gridSize() * 1}px;
  margin-left: ${gridSize() * 0.4}px;
  margin-right: ${gridSize() * 0.35}px;
  :before {
    content: '';
    display: flex;
    flex-grow: 1;
    position: relative;
    height: ${gridSize() * 1}px;
    margin-left: -${gridSize() * 0.4}px;
    margin-bottom: -${gridSize() * 0.6}px;
    transform: rotate(180deg);
    width: calc(100% + ${gridSize() * 0.75}px);
    background: ${({ appearance }) => appearance !== 'display' && gradients.primary()};
    clip-path: polygon(0% 0%, 0% 100%, ${gridSize() * 1}px 100%, ${gridSize() * 1}px 0, calc(100% - ${gridSize() * 1}px) 0, calc(100% - ${gridSize() * 1}px) 100%, 25% 100%, 25% 100%, 100% 100%, 100% 0%);
  }
  :after {
    content: '';
    display: flex;
    flex-grow: 1;
    position: relative;
    height: ${gridSize() * 1}px;
    margin-left: -${gridSize() * 0.4}px;
    margin-top: -${gridSize() * 0.6}px;
    width: calc(100% + ${gridSize() * 0.75}px);
    background: ${({ appearance }) => appearance !== 'display' && gradients.primary()};
    clip-path: polygon(0% 0%, 0% 100%, ${gridSize() * 1}px 100%, ${gridSize() * 1}px 0, calc(100% - ${gridSize() * 1}px) 0, calc(100% - ${gridSize() * 1}px) 100%, 25% 100%, 25% 100%, 100% 100%, 100% 0%);
  }
`;

const Border = styled.div<any>`
  display: flex;
  flex: 1 1 100%;
  // height: calc(100% - ${gridSize() * 5}px);
  background: ${gradients.primary()};
  border-radius: ${borderRadius() * 1}px;
  border: ${gridSize() * 0.25}px solid transparent;

  ${({ theme, appearance }) => {
    if(appearance === 'display') return `
      background-color: ${theme.background()};
      border: none;
    `;
    if(appearance === 'default' || appearance === 'brimming') return `
      box-shadow: ${theme.elevation[300]};
    `;
    return ``;
  }}
`;

const Content = styled.div<any>`
  display: flex;
  flex: 1 1 100%;
  // height: calc(100% - ${gridSize() * 5}px);
  background-color: ${({ theme }) => theme.background()};
  padding: ${gridSize() * 4}px ${gridSize() * 4.5}px;

  ${({ appearance }) => {
    if(appearance === 'display') return `
      padding: 0;
    `;
    if(appearance === 'brimming') return `
      background-color: transparent;
    `;
    return ``;
  }}

  form {
    padding-right: ${gridSize() * 2.5}px;
  }
`;

const Plate = ({
  appearance = 'default',
  isLoading,
  children,
  ...rest
}: PlateProps) => {

  return (
    <Styled {...rest} appearance={appearance}>
      <Border appearance={appearance}>
        <Content appearance={appearance}>
          {children}
        </Content>
      </Border>
    </Styled>
  )
};

export default Plate;