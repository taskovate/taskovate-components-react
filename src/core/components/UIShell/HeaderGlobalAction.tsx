import React, { useEffect, useState } from 'react';
import styled, { useTheme } from 'styled-components';
import { Placement } from '@floating-ui/react-dom-interactions';
import { themedOrNull } from '@theme/helpers';
import { Link } from 'react-resource-router';
import { gridSize, layers, animation, borderRadius, gradients, fontSize, headerFontFamily } from '@theme/constants';
import { Tooltip, Spinner } from '..';

type TooltipProps = {
  label: any;
  placement?: Placement;
}

interface HeaderGlobalActionProps {
  href?: string;
  tooltip?: TooltipProps;
  appearance?: any;
  isLoading?: boolean;
  isDisabled?: boolean;
  children: any;
}

const HeaderGlobalAction: React.FC<any> = ({ 
  href,
  tooltip,
  appearance,
  isLoading,
  isDisabled,
  children
}: HeaderGlobalActionProps) => {

  const renderComponent = (
    <Tooltip label={typeof tooltip === 'string' ? tooltip : tooltip?.label} placement={tooltip?.placement}>
      <Container 
        appearance={themedOrNull(appearance)} 
        disabled={isDisabled} 
        loading={isLoading} 
        style={{ padding: typeof children === 'object' && `0 ${gridSize() * 0.75}px`}}
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

const Container = styled.button<any>`
  display: flex;
  flex-direction: row;
  justify-content: start;
  align-items: center;
  padding: ${gridSize() * 1}px ${gridSize() * 1.25}px;
  border-radius: ${borderRadius()}px;
  margin-left: ${gridSize() * 0.75}px;
  font-size: ${fontSize()}px;
  cursor: pointer;
  font-weight: 500;
  transition: ${animation.fast()};
  border: none;
  line-height: ${gridSize() * 2 / fontSize()}em;
  text-align: center;
  overflow: hidden;
  user-select: none;

  svg {
    height: ${gridSize() * 2.5 / fontSize()}em;
    width: ${gridSize() * 2.5 / fontSize()}em;
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

export default HeaderGlobalAction;