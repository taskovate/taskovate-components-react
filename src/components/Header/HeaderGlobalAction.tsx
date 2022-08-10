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
  to?: string;
  target?: any;
  tooltip?: TooltipProps;
  appearance?: any;
  isLoading?: boolean;
  isDisabled?: boolean;
  iconBefore?: (props?: any) => React.ReactNode;
  iconAfter?: (props?: any) => React.ReactNode;
  isAvatar?: (props?: any) => React.ReactNode;
  children: any;
}

const HeaderGlobalAction: React.FC<any> = ({ 
  href,
  to,
  tooltip,
  appearance,
  isLoading,
  isDisabled,
  iconBefore,
  iconAfter,
  isAvatar,
  children
}: HeaderGlobalActionProps) => {

  const renderComponent = (
    <Tooltip label={typeof tooltip === 'string' ? tooltip : tooltip?.label} placement={tooltip?.placement}>
      <Container
        appearance={themedOrNull(appearance)} 
        disabled={isDisabled} 
        loading={isLoading} 
        style={{ padding: typeof children === 'object' && `0 ${gridSize() * 0.75}px`}}
        hasIcon={(iconAfter||iconBefore)}
        isAvatar={isAvatar}
      >
        
        {isLoading && <Spinner />}
        {!isLoading && (
          <>
            {iconBefore && <span style={children && { marginLeft: gridSize() * -0.5, marginRight: gridSize() * 0.5 }}>{iconBefore()}</span>}
            {children}
            {iconAfter && <span style={children && { marginRight: gridSize() * -0.5, marginLeft: gridSize() * 0.5 }}>{iconAfter()}</span>}
          </>
        )}
      </Container>
    </Tooltip>
  );

  return href || to ? (
    <Link to={to} href={href}>
      {renderComponent}
    </Link>
  ) : renderComponent;
};

const Container = styled.div<any>`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  align-content: center;
  vertical-align: middle;
  text-align: center;
  font-size: ${fontSize() * 1}px;
  padding: ${({ hasIcon }) => hasIcon ? gridSize() * 0.75 : gridSize() * 0.75}px 
           ${({ hasIcon }) => hasIcon ? gridSize() * 0.75 : gridSize() * 1.5}px;
  ${({ isAvatar }) => isAvatar && `padding: 0 !important;`}
  // line-height: 1.5em;
  border-radius: ${borderRadius()}px; 
  margin-left: ${gridSize() * 0.75}px;
  cursor: pointer;
  font-weight: 500;
  transition: ${animation.normal()};
  border: none;
  overflow: hidden;
  user-select: none;
  max-height: ${gridSize() * 4}px;
  ${({ isAvatar }) => isAvatar && `width: ${gridSize() * 4}px !important;`}
  ${({ isAvatar }) => isAvatar && `height: ${gridSize() * 4}px !important;`}

  & > span {
    display: flex;
    flex-grow: 1;
  }
  span > svg {
    height: ${gridSize() * 2.5}px;
    width: ${gridSize() * 2.5}px;
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