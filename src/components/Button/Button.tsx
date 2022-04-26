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

interface ButtonProps {
  href: string;
  tooltip: TooltipProps;
  appearance: string;
  isLoading: boolean;
  isDisabled: boolean;
  children: any;
}

const Button: React.FC<any> = ({
  href,
  tooltip,
  appearance,
  isLoading,
  isDisabled,
  children
}: ButtonProps) => {

  const renderComponent = (
    <Tooltip label={tooltip?.label} placement={tooltip?.placement}>
      <Container appearance={themedOrNull(appearance)} disabled={isDisabled} loading={isLoading}>
        {isLoading && <Spinner />}
        {!isLoading && children}
      </Container>
    </Tooltip>
  );

  if (href) return (
    <Link to={href}>
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
  
  cursor: ${({ disabled, loading }) => disabled && 'not-allowed' || loading ? 'wait' : 'pointer'};
  box-shadow: ${({ theme, appearance }) => appearance === 'special' ? theme.elevation[200] : 'auto'};

  background-color: ${({ theme: { buttonStyles }, appearance, disabled, loading}) => 
    (disabled||loading) ? buttonStyles.background[appearance ?? 'unset'].disabled() : buttonStyles.background[appearance ?? 'unset'].default()
  };

  color: ${({ theme: { buttonStyles }, appearance, disabled, loading }) => 
    (disabled||loading) ? buttonStyles.color[appearance ?? 'unset'].disabled() : buttonStyles.color[appearance ?? 'unset'].default()
  };

  :hover { 
    box-shadow: ${({ theme, appearance, disabled }) => disabled ? 'auto' : appearance === 'special' && theme.elevation[300]};

    background-color: ${({ theme: { buttonStyles }, appearance, disabled, loading }) => 
      (disabled||loading) ? 'auto' : buttonStyles.background[appearance ?? 'unset'].hover()
    };

    color: ${({ theme: { buttonStyles }, appearance, disabled, loading }) => 
      (disabled||loading) ? 'auto' : buttonStyles.color[appearance ?? 'unset'].hover()
    };
  }

  :active {
    background-color: ${({ theme: { buttonStyles }, appearance, disabled, loading }) => 
      (disabled||loading) ? 'auto' : buttonStyles.background[appearance ?? 'unset'].active()
    };

    color: ${({ theme: { buttonStyles }, appearance, disabled, loading }) => 
      (disabled||loading) ? 'auto' : buttonStyles.color[appearance ?? 'unset'].active()
    };
  }

`;

export default Button;