import React, { useEffect, useState } from 'react';
import styled, { useTheme } from 'styled-components';
import { gridSize, layers, animation, borderRadius, gradients } from '@theme/constants';

// type User = {
//   name: string;
// };

// interface HeaderProps {
//   borderWidth: string;
//   height: number;
//   offset: string;
// }

const Border = styled.header<any>`
  display: flex;
  position: sticky;
  z-index: ${layers.navigation()};
  transition: ${animation.normal()};
  background: ${gradients.primary()};
  border-top-right-radius: ${borderRadius() * 0.75}px;
  border-bottom-right-radius: ${borderRadius() * 0.75}px;
  flex-grow: 1;
  margin-right: ${gridSize() * 1}px;
  height: calc(${gridSize() * 6.5}px);
  top: calc(${gridSize() * 0.375}px + ${gridSize() * 0.25}px);
  margin-top: calc(${gridSize() * 0.375}px - ${gridSize() * 0.5}px + ${gridSize() * 0.25}px);

  ${({ theme, mode }) => mode === 'scroll' && `
    height: calc(${gridSize() * 6.5}px + ${gridSize() * 0.5}px);
    top: ${gridSize() * 0.375}px;
    margin-top: calc(${gridSize() * 0.375}px - ${gridSize() / 2}px);
    margin-right: ${gridSize() * 0.75}px;
    border-top-right-radius: ${borderRadius() * 1}px;
    border-bottom-right-radius: ${borderRadius() * 1}px;
    box-shadow: ${theme.elevation[200]};
    transition: ${animation.fast()};
  `}
`;

const Content = styled.div<any>`
  display: flex;
  position: sticky;
  flex-direction: row;
  border-top-right-radius: ${borderRadius() * 0.75}px;
  border-bottom-right-radius: ${borderRadius() * 0.75}px;
  padding: 0 ${gridSize() * 3}px;
  justify-content: start;
  align-items: center;
  align-content: center;
  background-color: ${({ theme }) => theme.background()};
  flex-grow: 1;
  height: ${gridSize() * 6.5}px;
  margin: auto 0;
  transition: ${animation.normal()};
  box-shadow: 0 0 0 0.5px ${({ theme }) => theme.background()};

  ${({ mode }) => mode === 'scroll' && `
    transition: ${animation.fast()};
    margin-right: ${gridSize() * 0.25}px;
    box-shadow: none;
  `}
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
    <Border mode={mode}>
      <Content mode={mode}>
        {children}
      </Content>
    </Border>
  );
};

export default Header;