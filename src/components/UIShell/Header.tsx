import React, { useEffect, useState } from 'react';
import styled, { useTheme } from 'styled-components';

// type User = {
//   name: string;
// };

// interface HeaderProps {
// }

const HeaderWrapper = styled.div`${({ theme }) => `
  display: flex;
  position: sticky;
  height: 56px;
  width: 100%;
  background-color: ${theme.colors.D500};
`}`;

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
    <HeaderWrapper />
  );
};

Header.defaultProps = {
};

export default Header;