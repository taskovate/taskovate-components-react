import React, { useEffect, useState } from 'react';
import styled, { css, useTheme } from 'styled-components';
import { Placement } from '@floating-ui/react-dom-interactions';
import { themedOrNull } from '@theme/helpers';
import { Link } from 'react-resource-router';
import { gridSize, layers, animation, borderRadius, gradients, fontSize, headerFontFamily } from '@theme/constants';
import { Tooltip, Spinner } from '..';

type TooltipProps = {
  label: any;
  placement: Placement;
}

interface HeaderMenuItemProps {
  href?: string;
  tooltip?: TooltipProps;
  appearance?: any;
  isLoading?: boolean;
  isDisabled?: boolean;
  children: any;
}

const HeaderMenuItem: React.FC<any> = ({ 
  href,
  tooltip,
  appearance,
  isLoading,
  isDisabled,
  children
}: HeaderMenuItemProps) => {
  const renderComponent = (
    <Tooltip label={tooltip?.label} placement={tooltip?.placement}>
      <Container 
        appearance={themedOrNull(appearance)} 
        disabled={isDisabled} 
        loading={isLoading} 
        style={{ padding: typeof children === 'object' && `0 ${gridSize() * 0.75}px`}}
        type={typeof children}
      >
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

const menuItemStyles = () => css<any>`
  align-items: center;
  vertical-align: middle;
  text-align: center;
  font-size: ${fontSize() * 1}px;
  padding: ${gridSize() * 0.75}px ${gridSize() * 0.75}px;
  border-radius: ${borderRadius()}px;
  // line-height: 1.5rem;
  margin-right: ${gridSize() * 0.75}px;
  cursor: pointer;
  font-weight: 500;
  transition: ${animation.normal()};
  border: none;
  // overflow: hidden;
  user-select: none;
  max-height: ${gridSize() * 4}px;

  svg {
    height: ${fontSize() * 1.3}px;
    width: ${fontSize() * 1.3}px;
  }

  cursor: ${({ disabled, loading }) => disabled && 'not-allowed' || loading ? 'wait' : 'pointer'};

  background-color: ${({ theme: { navigationStyles }, appearance, disabled, loading }) => 
    (disabled||loading) ? navigationStyles.background[appearance ?? 'unset'].disabled() : navigationStyles.background[appearance ?? 'unset'].default()
  };

  color: ${({ theme: { navigationStyles }, appearance, disabled, loading }) => 
    (disabled||loading) ? navigationStyles.color[appearance ?? 'unset'].disabled() : navigationStyles.color[appearance ?? 'unset'].default()
  };

  :hover { 
    box-shadow: ${({ theme, appearance, disabled }) => disabled ? 'auto' : appearance === 'special' && theme.elevation[300]};

    background-color: ${({ theme: { navigationStyles }, appearance, disabled, loading }) => 
      (disabled||loading) ? 'auto' : navigationStyles.background[appearance ?? 'unset'].hover()
    };

    color: ${({ theme: { navigationStyles }, appearance, disabled, loading }) => 
      (disabled||loading) ? 'auto' : navigationStyles.color[appearance ?? 'unset'].hover()
    };
  }

  :active {
    background-color: ${({ theme: { navigationStyles }, appearance, disabled, loading }) => 
      (disabled||loading) ? 'auto' : navigationStyles.background[appearance ?? 'unset'].active()
    };

    color: ${({ theme: { navigationStyles }, appearance, disabled, loading }) => 
      (disabled||loading) ? 'auto' : navigationStyles.color[appearance ?? 'unset'].active()
    };
  }
`;

const Container = styled.div<any>`
  display: flex;
  flex-direction: row;
  justify-content: start;
 
  ${({ type }) => type === 'string' && menuItemStyles()}
`;

export default HeaderMenuItem;