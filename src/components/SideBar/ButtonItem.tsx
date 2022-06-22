import React, { FC } from 'react';
import styled from 'styled-components';
import { colors, gridSize, layers, animation, borderRadius, gradients, fontSize, headerFontFamily } from '@theme/constants';
import { themedOrNull } from '@theme/helpers';

const Styled = styled.button<any>`
  display: flex;
  box-sizing: border-box;
  flex-direction: row;
  justify-content: start;
  align-items: center;
  // text-align: center;
  vertical-align: center;
  font-size: ${fontSize() * 1}px;
  line-height: 1em;
  padding:  ${gridSize() * 1.125}px ${gridSize() * 1.5}px;
  border-radius: ${borderRadius() * 1}px;
  cursor: pointer;
  font-weight: 500;
  transition: ${animation.normal()};
  border: none;
  user-select: none;
  width: 100%;

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

  background-color: ${({ theme: { buttonStyles }, appearance, isDisabled, isLoading}) => 
    (isDisabled||isLoading) ? buttonStyles.background[appearance].disabled() : buttonStyles.background[appearance].default()
  };

  color: ${({ theme: { buttonStyles }, appearance, isDisabled, isLoading }) => 
    (isDisabled||isLoading) ? buttonStyles.color[appearance].disabled() : buttonStyles.color[appearance].default()
  };

  :hover { 
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

const SidebarButtonItem = ({ 
  tooltip,
  appearance = 'subtle',
  iconBefore,
  iconAfter,
  isLoading = false,
  isDisabled,
  children,
  ...rest
 }: any) => {
  return (
    <Styled
      appearance={themedOrNull(appearance)}
      isDisabled={isDisabled}
      isLoading={isLoading}
      {...rest}
    >
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
    </Styled>
  )
};

export default SidebarButtonItem;
