import React, { useEffect, cloneElement, useState  } from 'react';
import styled from 'styled-components';
import { colors, gridSize, layers, animation, fontSize, borderRadius, gradients, fontSizeSmall } from '@theme/constants';
import { hex2rgba } from '@theme/helpers';

type Mode = 'default' | 'display' | 'brimming';

interface PlateProps {
  children: React.ReactNode,
  appearance?: Mode;
  isLoading?: boolean;
}

const Styled = styled.div<any>`
  display: block;
  z-index: ${layers.plate()};
  // margin: ${gridSize() * 3.5}px 0;
  // :before {
  //   content: '';
  //   display: flex;
  //   flex-grow: 1;
  //   position: relative;
  //   height: ${gridSize() * 1}px;
  //   margin-left: -${gridSize() * 0.4}px;
  //   margin-bottom: -${gridSize() * 0.6}px;
  //   transform: rotate(180deg);
  //   width: calc(100% + ${gridSize() * 0.75}px);
  //   background: ${({ appearance }) => appearance !== 'display' && gradients.secondary()};
  //   clip-path: polygon(0% 0%, 0% 100%, ${gridSize() * 1}px 100%, ${gridSize() * 1}px 0, calc(100% - ${gridSize() * 1}px) 0, calc(100% - ${gridSize() * 1}px) 100%, 25% 100%, 25% 100%, 100% 100%, 100% 0%);
  // }
  // :after {
  //   content: '';
  //   display: flex;
  //   flex-grow: 1;
  //   position: relative;
  //   height: ${gridSize() * 1}px;
  //   margin-left: -${gridSize() * 0.4}px;
  //   margin-top: -${gridSize() * 0.6}px;
  //   width: calc(100% + ${gridSize() * 0.75}px);
  //   background: ${({ appearance }) => appearance !== 'display' && gradients.secondary()};
  //   clip-path: polygon(0% 0%, 0% 100%, ${gridSize() * 1}px 100%, ${gridSize() * 1}px 0, calc(100% - ${gridSize() * 1}px) 0, calc(100% - ${gridSize() * 1}px) 100%, 25% 100%, 25% 100%, 100% 100%, 100% 0%);
  // }
  text-align: initial;
  max-width: ${gridSize() * 48}px;
  min-width: ${gridSize() * 48}px;
`;

const Border = styled.div<any>`
  display: grid;
  grid-template-columns: repeat(100%, 1fr);
  grid-template-rows: 100%;
  background: ${gradients.secondary()};
  border-radius: ${borderRadius() * 1}px;
  box-shadow: ${({ theme }) => theme.elevation[200]}; 

  ${({ appearance}) => {
    if(appearance === 'display') return `
      box-shadow: none;
    `;
    return ``;
  }}
`;

const Container = styled.div<any>`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  grid-auto-rows: minmax(min-content, max-content);
  grid-column-gap: ${gridSize() * 1}px;
  grid-row-gap: ${gridSize() * 1}px;
  padding: ${gridSize() * 3.5}px ${gridSize() * 4}px;
  padding-bottom: ${gridSize() * 3.5}px;
  border-radius: ${borderRadius() * 0.75}px;
  border-radius: ${borderRadius() * 0.75}px;
  margin: ${gridSize() * 0.25}px;
  background-color: ${({ theme }) => theme.background()};

  ${({ appearance, theme }) => {
    if(appearance === 'display') return `
      padding: 0;
      margin: 0;
    `;
    if(appearance === 'brimming') return `
      background-color: ${hex2rgba(theme.background(), 0.3)};
    `;
    return ``;
  }}
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
        <Container appearance={appearance}>
          {children}
        </Container>
      </Border>
    </Styled>
  )
};

export default Plate;