import React, { useState } from 'react';
import styled from 'styled-components';
import { gridSize, fontSize, borderRadius, colors, animation } from '@theme/constants';
import { Button } from '@components/core';

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
  padding: ${gridSize() * 1.001953125}px ${gridSize() * 1.5}px;
  border-radius: ${borderRadius() * 1}px;
  cursor: pointer;
  font-weight: 500;
  transition: ${animation.normal()};
  border: none;
  user-select: none;
  border-width: ${gridSize() * 0.125}px;
  border-style: solid;
  border-color: transparent;

  ${({ isToggled }) => !isToggled  && `
    background-color: ${colors.d[900]};
    color: ${colors.n[600]};
    &:hover {
      background-color: ${colors.d[800]};
      color: ${colors.n[500]};
      border-color: ${colors.n[500]};
    }
  `}

  ${({ isToggled }) => isToggled && `
    background-color: ${colors.p[600]};
    color: ${colors.p[200]};
    border-color: ${colors.p[200]};
  `}
`;

const Icon = styled.span<any>`
  svg {
    display: flex;
    align-content: center;
    width: ${gridSize() * 2.5}px;
    height: ${gridSize() * 2.5}px;
    margin: -${gridSize() * 1}px 0;
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
          <Icon style={children && { marginLeft: gridSize() * -0.5, marginRight: gridSize() * 0.5 }}>
            {typeof iconBefore === 'function' ? iconBefore() : iconBefore}
          </Icon>
        }
        {children}
        {iconAfter && 
          <Icon style={children && { marginRight: gridSize() * -0.5, marginLeft: gridSize() * 0.5 }}>
            {typeof iconAfter === 'function' ? iconAfter() : iconAfter}
          </Icon>
        }
    </Wrapper>
  );
};

export default ToggleButton;