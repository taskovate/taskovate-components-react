import React, { useEffect, useState } from 'react';
import styled, { useTheme } from 'styled-components';
// import { colors, gridSize, borderRadius, gradients }
// type User = {
//   name: string;
// };

// interface HeaderProps {
//   borderWidth: string;
//   height: number;
//   offset: string;
// }

const Container = styled.div`
  ${({ theme }) => `
    z-index: ${theme.layers.navigation()};

    ::after {
      display: flex;
      content: '';
      position: sticky;
      height: ${theme.gridSize() * 7}px;
      background-color: ${theme.colors.red[500]};
      margin-top: ${theme.gridSize() * 1}px;
      top: ${theme.gridSize() * 1}px;
      width: calc(100% - ${theme.gridSize() * 2.5}px);
      border-radius: ${theme.borderRadius() * 0.75}px;
    }

    ::before {
      display: flex;
      content: '';
      position: absolute;
      background: ${theme.gradients.primary()};
      width: calc(100% - ${theme.gridSize() * 2}px);
      height: ${theme.gridSize() * 8}px;
      margin-top: -${theme.gridSize() * 0.5}px;
      border-radius: ${theme.borderRadius() * 1}px;
    }
  `}
`;

const Border = styled.div`
  ${({ theme }) => `
      display: block;
      position: fixed;
      content: '';
      background-color: green;
      width: 100%;
      height: ${theme.gridSize() * 8}px;
      z-index: 0;
  `}
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
      <Container />
      {/* <Border /> */}
    </>
  );
};

export default Header;