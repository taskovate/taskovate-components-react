import React, { useEffect, useState } from 'react';
import styled, { css, useTheme } from 'styled-components';
import { colors, gridSize, layers, animation, borderRadius, gradients } from '@theme/constants';
import { hex2rgba } from '@theme/helpers';

const Styled = styled.div`
  display: grid;
  grid-template-columns: repeat(100%, 1fr);
  background-color: ${({ theme }) => theme.background()};
  height: calc(100% - ${gridSize() * 0.25}px);
  width: calc(100% - ${gridSize() * 1}px);
  // padding-top: ${gridSize() * 0.5}px;
  z-index: ${layers.navigation()};
  // max-width: ${gridSize() * 144}px;
  width: 100%;
  margin: 0;
  // box-shadow: ${({ theme }) =>theme.elevation[300]}; 

`;

const Border = styled.div<any>`
  display: flex;
  grid-column: 1;
  grid-row: 1;
  
  background: ${gradients.secondary()};

  opacity: ${({ mode }) => mode === 'scroll' ? 1 : 0};
  box-shadow: ${({ theme, mode }) => mode === 'scroll' ? theme.elevation[200] : 'none'}; 
  // margin: ${({ mode }) => mode === 'scroll' ? 0 : gridSize() * 0.25}px;
  // margin-left: 0;

  // border-top-right-radius: ${borderRadius() * 1}px;
  // border-bottom-right-radius: ${borderRadius() * 1}px;
  // border-top-left-radius: ${borderRadius() * 1}px;
  // border-bottom-left-radius: ${borderRadius() * 1}px;
  
  transition: all ${animation.slow()}, opacity ${animation.slow()}-out, top ${animation.slow()}-out;
  will-change: top, transform, margin, opacity, box-shadow;
  
  z-index: ${layers.navigation() - 1};
`;

const Content = styled.div<any>`
  display: flex;
  grid-column: 1;
  grid-row: 1;
  overflow: visible;
  align-items: center;
  
  background-color: ${({ theme, mode }) => hex2rgba(mode === 'scroll' ? colors.d[900] : theme.background(), 1)};
  // background-color: ${({ theme }) => theme.background()};

  // margin-bottom: ${gridSize() * 0.25}px;
  // margin-left: 0;
  
  // border-top-right-radius: ${borderRadius() * 0.875}px;
  // border-bottom-right-radius: ${borderRadius() * 0.875}px;
  // border-top-left-radius: ${borderRadius() * 0.875}px;
  // border-bottom-left-radius: ${borderRadius() * 0.875}px;

  padding: ${gridSize() * 0}px ${gridSize() * 1.5}px;
  padding-right: ${gridSize() * 1.5}px;
  padding-left: ${gridSize() * 3.75}px;
 
  z-index: ${layers.navigation() + 1};

  
  transition: all ${animation.slow()};
  will-change: background-color;
`;

const Header: React.FC<any> = ({
  children
}) => {
  const [mode, setMode] = useState('noscroll');

  const onScroll = () => {
    setMode(window.pageYOffset >= gridSize() * 2 ? 'scroll' : 'noscroll');
  };

  useEffect(() => {
    window.addEventListener('scroll', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
    };
  }, []);
  
  return (
    <Styled>
      <Border mode={mode} />
      <Content mode={mode}>
        {children}
      </Content>
    </Styled>
  );
};

export default Header;