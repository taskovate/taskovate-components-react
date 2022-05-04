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
type Spacing = 'none' | 'compact' | 'default' | 'pleasant';

interface ButtonProps {
  href?: string;
  to?: string;
  tooltip?: any;
  appearance?: Appearance;
  spacing?: Spacing;
  isLoading?: boolean;
  isDisabled?: boolean;
  children: () => React.ReactNode;
}

const Button: React.FC<any> = ({
  href,
  to,
  tooltip,
  appearance = 'unset',
  spacing = 'default',
  isLoading = false,
  isDisabled,
  children
}: ButtonProps) => {

  const renderComponent = (
    <Tooltip label={tooltip?.label} placement={tooltip?.placement}>
      <Container appearance={themedOrNull(appearance)} spacing={spacing} isDisabled={isDisabled} isLoading={isLoading}>
        {isLoading && <Spinner />}
        {!isLoading && children}
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
  justify-content: start;
  align-items: center;
  text-align: center;
  vertical-align: middle;
  font-size: ${fontSize() * 1}px;
  padding: ${({ spacing }) => {
    switch(spacing) {
      case 'none': return 0;
      case 'compact': return `${gridSize() * 0.4375}px ${gridSize() * 1}px`;
      case 'default': return `${gridSize() * 0.9375}px ${gridSize() * 1.25}px`;
      case 'pleasant': return `${gridSize() * 1.4375}px ${gridSize() * 1.5}px`;
      default: return ``;
    }
  }};
  border-radius: ${borderRadius() * 1}px;
  margin-right: ${gridSize() * 2}px;
  cursor: pointer;
  font-weight: 500;
  transition: ${animation.normal()};
  border: none;
  user-select: none;
  
  cursor: ${({ isDisabled, isLoading }) => {
    if(isDisabled) return 'not-allowed';
    if(isLoading) return 'wait';
    return 'pointer'
  }};
  
  box-shadow: ${({ theme, appearance }) => appearance === 'special' ? theme.elevation[200] : 'auto'};

  background-color: ${({ theme: { buttonStyles }, appearance, isDisabled, isLoading}) => 
    (isDisabled||isLoading) ? buttonStyles.background[appearance].disabled() : buttonStyles.background[appearance].default()
  };

  color: ${({ theme: { buttonStyles }, appearance, isDisabled, isLoading }) => 
    (isDisabled||isLoading) ? buttonStyles.color[appearance].disabled() : buttonStyles.color[appearance].default()
  };

  :hover { 
    box-shadow: ${({ theme, appearance, isDisabled }) => isDisabled ? 'auto' : appearance === 'special' && theme.elevation[300]};

    background-color: ${({ theme: { buttonStyles }, appearance, isDisabled, isLoading }) => 
      (isDisabled||isLoading) ? 'auto' : buttonStyles.background[appearance].hover()
    };

    color: ${({ theme: { buttonStyles }, appearance, isDisabled, isLoading }) => 
      (isDisabled||isLoading) ? 'auto' : buttonStyles.color[appearance].hover()
    };
  }

  :active {
    background-color: ${({ theme: { buttonStyles }, appearance, isDisabled, isLoading }) => 
      (isDisabled||isLoading) ? 'auto' : buttonStyles.background[appearance].active()
    };

    color: ${({ theme: { buttonStyles }, appearance, isDisabled, isLoading }) => 
      (isDisabled||isLoading) ? 'auto' : buttonStyles.color[appearance].active()
    };
  }

`;

export default Button;