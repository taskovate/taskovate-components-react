import React, { useEffect, useState } from 'react';
import styled, { DefaultTheme, useTheme } from 'styled-components';
import { gridSize, fontSize, layers, animation, borderRadius } from '@theme/constants';
import { hex2rgba, themedOrNull } from '@theme/helpers';
import { Link } from 'react-resource-router';
import { Tooltip, Spinner } from '..';

type Appearance = 'unset' | 'primary' | 'special' | 'warning' | 'danger' | 'subtle' | 'sublte-link' | 'link' | 'starred';
type Spacing = 'none' | 'compact' | 'default' | 'pleasant';

interface ButtonProps {
  href?: string;
  to?: string;
  tooltip?: any;
  appearance?: Appearance;
  spacing?: Spacing;
  iconBefore?: () => React.ReactNode,
  iconAfter?: () => React.ReactNode,
  isLoading?: boolean;
  isDisabled?: boolean;
  children?: () => React.ReactNode;
  target?: any;
}

const Button: React.FC<any> = ({
  tooltip,
  appearance = 'unset',
  spacing = 'default',
  iconBefore,
  iconAfter,
  isLoading = false,
  isDisabled,
  children,
  ...rest
}: ButtonProps) => {
  const renderComponent = (
    <Tooltip label={tooltip?.label} placement={tooltip?.placement}>
      <Container appearance={themedOrNull(appearance)} spacing={spacing} isDisabled={isDisabled} isLoading={isLoading} {...rest}>
        {isLoading && 
          <span style={children && { marginTop: -gridSize() * 0.125, marginBottom: -gridSize() * 0.375 }}>
            <Spinner />
          </span>
        }
        {!isLoading && (
          <>
            {iconBefore && 
              <span style={children && { marginLeft: gridSize() * -0.5, marginRight: gridSize() * 0.5 }}>
                {typeof iconBefore === 'function' ? iconBefore() : iconBefore}
              </span>
            }
            {children}
            {iconAfter && 
              <span style={children && { marginRight: gridSize() * -0.5, marginLeft: gridSize() * 0.5 }}>
                {typeof iconAfter === 'function' ? iconAfter() : iconAfter}
              </span>
            }
          </>
        )}
      </Container>
    </Tooltip>
  );

  return renderComponent;
};

const Container = styled.button<any>`
  display: flex;
  box-sizing: border-box;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  text-align: center;
  vertical-align: center;
  font-size: ${fontSize() * 1}px;
  line-height: 1em;
  padding: ${({ spacing }) => {
    switch(spacing) {
      case 'none': return 0;
      case 'compact': return  `${gridSize() * 0.625}px ${gridSize() * 1.25}px`;
      case 'default': return  `${gridSize() * 1.125}px ${gridSize() * 1.5}px`;
      case 'pleasant': return `${gridSize() * 1.625}px ${gridSize() * 2}px`;
      default: return ``;
    }
  }};
  border-radius: ${borderRadius() * 1}px;
  cursor: pointer;
  font-weight: 500;
  transition: ${animation.normal()};
  border: none;
  user-select: none;
  
  svg {
    display: flex;
    align-content: center;
    width: ${gridSize() * 2.5}px;
    height: ${gridSize() * 2.5}px;
    margin: -${gridSize() * 1}px 0;
  }

  cursor: ${({ isDisabled, isLoading }) => {
    if(isDisabled) return 'not-allowed';
    if(isLoading) return 'wait';
    return 'pointer'
  }};
  
  // box-shadow: ${({ theme, appearance }) => appearance === 'special' ? theme.elevation[200] : 'auto'};

  background-color: ${({ theme: { buttonStyles }, appearance, isDisabled, isLoading}) => 
    (isDisabled||isLoading) ? buttonStyles.background[appearance].disabled() : buttonStyles.background[appearance].default()
  };

  color: ${({ theme: { buttonStyles }, appearance, isDisabled, isLoading }) => 
    (isDisabled||isLoading) ? buttonStyles.color[appearance].disabled() : buttonStyles.color[appearance].default()
  };

  :hover { 
    // box-shadow: ${({ theme, appearance, isDisabled }) => isDisabled ? 'auto' : appearance === 'special' && theme.elevation[300]};

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