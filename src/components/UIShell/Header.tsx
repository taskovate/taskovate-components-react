import React, { useEffect, useState } from 'react';
import styled, { css, useTheme } from 'styled-components';
import { colors, gridSize, layers, animation, borderRadius, gradients } from '@theme/constants';
import { hex2rgba } from '@theme/helpers';

const Styled = styled.div`
`;

interface HeaderStyleProps {
  height?: number;
  offset?: number;
  borderWidth?: number;
  paddingX?: number;
  paddingY?: number;
}

const baseHeaderStyle = ({
  height = gridSize() * 6.375,
  offset = 0.625,
  borderWidth = 0,
  paddingX = gridSize() * 3,
  paddingY = gridSize() * 0,
}: HeaderStyleProps = {}) => css<any>`
  display: flex;
  flex-direction: row;
  position: fixed;
  align-items: center;
  z-index: ${layers.navigation()};
  padding: ${paddingY}px ${paddingX}px ${paddingY}px ${paddingX}px;
  width: calc(100% - ${gridSize() * 1 + paddingX * 2 - borderWidth / 2}px);
  top: ${({ mode }) => gridSize() * (mode === 'scroll' ? 0.625 : offset) - borderWidth / 2}px;
  height: ${height + borderWidth - paddingY * 2}px;
  border-top-right-radius: ${borderWidth ? borderRadius() * 1 : borderRadius() * 0.75}px;
  border-bottom-right-radius: ${borderWidth ? borderRadius() * 1 : borderRadius() * 0.75}px;
  transition: all ${animation.normal()}, opacity ${animation.slow()}-out, top ${animation.slow()}-out;
  will-change: top, transform;
`;

const Border = styled.div<any>`
  ${({ mode }) => baseHeaderStyle({ borderWidth: mode === 'scroll' ? gridSize() * 0.5 : -1 })}
  background: ${hex2rgba(colors.n[900], 0.25)};
  background: ${gradients.secondary()};
  opacity: 0;
  
  ${({ theme, mode }) => `
    opacity: ${mode === 'scroll' ? 1 : 0};
    box-shadow: ${mode === 'scroll' ? theme.elevation[200] : 'none'}; 
  `}
`;

const Content = styled.div<any>`
  ${baseHeaderStyle()}
  background-color: ${({ theme }) => theme.background()};
`;

const Header: React.FC<any> = ({
  children
}) => {
  const [mode, setMode] = useState('noscroll');

  const onScroll = () => {
    setMode(window.pageYOffset >= gridSize() * 4 ? 'scroll' : 'noscroll');
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