import React, { useState } from 'react';
import styled from 'styled-components';
import { gridSize, borderRadius, colors, animation } from '@theme/constants';
import { Button } from '@components/core';

const Container = styled.button<any>`
  display: flex;
  // width: ${gridSize() * 8}px;
  box-sizing: border-box;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  text-align: center;
  vertical-align: center;
  line-height: 1em;
  padding: ${gridSize() * 0.53125}px ${gridSize() * 1}px;
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
  }
  border: ${gridSize() * 0.25}px solid ${({ theme: { toggleButtonStyles }, isEnabled }) => !isEnabled ? toggleButtonStyles.background['unset'].active() : 'transparent' };

  background-color: ${({ theme: { toggleButtonStyles }, isEnabled }) => 
    !isEnabled ? toggleButtonStyles.background['unset'].default() : toggleButtonStyles.background['unset'].active()
  };

  color: ${({ theme: { toggleButtonStyles }, isEnabled }) => 
    !isEnabled ? toggleButtonStyles.color['unset'].default() : toggleButtonStyles.color['unset'].active()
  };

  :hover { 
    background-color: ${({ theme: { toggleButtonStyles }, isEnabled }) => 
      isEnabled ? 'auto' : toggleButtonStyles.background['unset'].hover()
    };

    color: ${({ theme: { toggleButtonStyles }, isEnabled }) => 
      isEnabled ? 'auto' : toggleButtonStyles.color['unset'].hover()
    };
  }
`;


const ToggleButton = ({
  iconBefore,
  iconAfter,
  children,
  onClick,
  isEnabled,
  ...rest
}: any) => {

  return (
    <Container
      isEnabled={isEnabled}
      onClick={onClick}
      {...rest}
    >
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
    </Container>
  );
};

export default ToggleButton;