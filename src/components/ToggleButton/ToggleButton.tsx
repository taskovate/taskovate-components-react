import React, { useState } from 'react';
import styled from 'styled-components';
import { gridSize, fontSize, borderRadius, colors, animation } from '@theme/constants';
import { Button } from '@components/core';
import { hexCombine } from '@theme/helpers';

const Wrapper = styled.button<any>`
  display: flex;
  box-sizing: border-box;
  align-self: start;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  text-align: center;
  vertical-align: center;
  font-size: ${fontSize() * 1}px;
  line-height: 1rem;
  padding: ${gridSize() * 1}px ${gridSize() * 1.25}px ${gridSize() * 1}px ${gridSize() * 1}px;
  border-radius: ${borderRadius() * 1.5}px;
  cursor: pointer;
  font-weight: 500;
  transition: ${animation.normal()};
  border: none;
  user-select: none;
  border-width: ${gridSize() * 0.125}px;
  border-style: solid;
  border-color: transparent;
  gap: ${gridSize() * 0.625}px;


  ${({ isToggled }) => !isToggled  && `
    background-color: ${colors.d[900]};
    color: ${colors.n[600]};
    border-color: transparent;
    &:hover {
      background-color: ${colors.d[800]};
      color: ${colors.n[500]};
      border-color: ${colors.n[500]};
    }
    &:active {
      background-color: ${colors.d[700]};
      color: ${colors.n[400]};
      border-color: ${colors.n[400]};
    }
  `}

  ${({ isToggled }) => isToggled && `
    background-color: ${colors.p[600]};
    color: ${colors.p[200]};
    border-color: ${colors.p[200]};
    // &:hover {
    //   background-color: ${colors.p[500]};
    //   color: ${colors.p[100]};
    //   border-color: ${colors.p[100]};
    // }
    &:hover {
      background-color: ${colors.d[700]};
      color: ${colors.n[400]};
      border-color: ${colors.n[400]};
    }
  `}
`;

const Icon = styled.span<any>`
  display: flex;
  align-content: center;
  align-items: center;
  justify-content: center;
  svg {
    display: flex;
    align-content: center;
    width: 1.5rem;
    height: 1.5rem;
    margin: -0.5rem 0;
  }
`;

const ToggleButton = ({
  iconBefore,
  iconAfter,
  children,
  onClick,
  isToggled,
  ...rest
}: any) => {
  const [isActive, setIsActive] = useState(false);

  return (
    <Wrapper isToggled={isActive} onClick={() => setIsActive(!isActive)} {...rest}>
        {iconBefore && 
          <Icon>
            {typeof iconBefore === 'function' ? iconBefore() : iconBefore}
          </Icon>
        }
        {children}
        {iconAfter && 
          <Icon>
            {typeof iconAfter === 'function' ? iconAfter() : iconAfter}
          </Icon>
        }
    </Wrapper>
  );
};

export default ToggleButton;