import React, { useEffect, useState } from 'react';
import styled, { DefaultTheme, useTheme } from 'styled-components';
import { gridSize, fontSize, layers, animation, borderRadius } from '@theme/constants';
import { hex2rgba, themedOrNull } from '@theme/helpers';
import { Link } from 'react-resource-router';
import { Placement } from '@floating-ui/react-dom-interactions';
import { Tooltip, Spinner } from '..';

type TooltipProps = {
  label: string;
  placement: Placement;
}

type Appearance = 'unset' | 'primary' | 'special' | 'warning' | 'danger' | 'subtle' | 'sublte-link' | 'link';

interface ButtonProps {
  href: string;
  to: string;
  tooltip: TooltipProps;
  appearance: Appearance;
  isisLoading: boolean;
  isisDisabled: boolean;
  children: any;
}

const Button: React.FC<any> = ({
  href,
  to,
  tooltip,
  appearance,
  isisLoading = false,
  isisDisabled,
  children
}: ButtonProps) => {

  const renderComponent = (
    <Tooltip label={tooltip?.label} placement={tooltip?.placement}>
      <Container appearance={themedOrNull(appearance)} isisDisabled={isisDisabled} isisLoading={isisLoading}>
        {isisLoading && <Spinner />}
        {!isisLoading && children}
      </Container>
    </Tooltip>
  );

  if (href||to) return (
    <Link href={href} to={to} style={{ textDecoration: 'none' }}>
      {renderComponent}
    </Link>
  );

  return renderComponent;
};

const Container = styled.button<any>`
  display: flex;
  flex-direction: row;
  // flex-grow: 1;
  justify-content: start;
  align-items: center;
  padding: ${gridSize() * 1}px ${gridSize() * 1.25}px;
  border-radius: ${borderRadius()}px;
  margin-right: ${gridSize() * 2}px;
  font-size: ${fontSize()}px;
  cursor: pointer;
  font-weight: 500;
  transition: ${animation.normal()};
  border: none;
  line-height: ${gridSize() * 2 / fontSize()}em;
  text-align: center;
  user-select: none;
  
  cursor: ${({ isDisabled, isLoading }) => {
    if(isDisabled) return 'not-allowed';
    if(isLoading) return 'wait';
    return 'pointer'
  }};
  
  box-shadow: ${({ theme, appearance }) => appearance === 'special' ? theme.elevation[200] : 'auto'};

  background-color: ${({ theme: { buttonStyles }, appearance, isDisabled, isLoading}) => 
    (isDisabled||isLoading) ? buttonStyles.background[appearance ?? 'unset'].disabled() : buttonStyles.background[appearance ?? 'unset'].default()
  };

  color: ${({ theme: { buttonStyles }, appearance, isDisabled, isLoading }) => 
    (isDisabled||isLoading) ? buttonStyles.color[appearance ?? 'unset'].disabled() : buttonStyles.color[appearance ?? 'unset'].default()
  };

  :hover { 
    box-shadow: ${({ theme, appearance, isDisabled }) => isDisabled ? 'auto' : appearance === 'special' && theme.elevation[300]};

    background-color: ${({ theme: { buttonStyles }, appearance, isDisabled, isLoading }) => 
      (isDisabled||isLoading) ? 'auto' : buttonStyles.background[appearance ?? 'unset'].hover()
    };

    color: ${({ theme: { buttonStyles }, appearance, isDisabled, isLoading }) => 
      (isDisabled||isLoading) ? 'auto' : buttonStyles.color[appearance ?? 'unset'].hover()
    };
  }

  :active {
    background-color: ${({ theme: { buttonStyles }, appearance, isDisabled, isLoading }) => 
      (isDisabled||isLoading) ? 'auto' : buttonStyles.background[appearance ?? 'unset'].active()
    };

    color: ${({ theme: { buttonStyles }, appearance, isDisabled, isLoading }) => 
      (isDisabled||isLoading) ? 'auto' : buttonStyles.color[appearance ?? 'unset'].active()
    };
  }

`;

export default Button;