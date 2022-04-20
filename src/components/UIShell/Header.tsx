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

const HeaderWrapper = styled.div<any>`
  z-index: ${layers.navigation()};
  transition: ${animation.normal()};

  ::after {
    display: flex;
    content: '';
    position: sticky;
    height: ${gridSize() * 7}px;
    background-color: ${({ theme }) => theme.background()};
    margin-top: ${gridSize() * 1}px;
    top: ${gridSize() * 1}px;
    width: calc(100% - ${gridSize() * 6.5}px);
    border-top-right-radius: ${borderRadius() * 0.6}px;
    border-bottom-right-radius: ${borderRadius() * 0.6}px;
    padding: 0 ${gridSize() * 2}px;
  }

  ::before {
    display: flex;
    content: '';
    position: absolute;
    background: ${gradients.primary()};
    width: calc(100% - ${gridSize() * 2}px - ${gridSize() / 4}px);
    height: calc(${gridSize() * 7}px + ${gridSize() / 2}px);
    top: calc(${gridSize() * 1}px - ${gridSize() / 8}px);
    margin-top: -${gridSize() / 8}px;
    border-top-right-radius: ${borderRadius() * 1}px;
    border-bottom-right-radius: ${borderRadius() * 1}px;
    opacity: ${({ mode }) => mode === 'scroll' ? 0 : 1};
  }
`;


const Header: React.FC<any> = (props: any) => {
  const theme = useTheme();
  const [mode, setMode] = useState('noscroll');

  const onScroll = () => {
    const yScrolling = window.pageYOffset >= 18;
    setMode(yScrolling ? 'scroll' : 'noscroll');
  };

  useEffect(() => {
    window.addEventListener('scroll', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
    };
  }, []);
  
  return (
    <>
      <HeaderWrapper mode={mode}/>
      {/* <Border /> */}
    </>
  );
};

export default Header;