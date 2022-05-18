import React from 'react'
import styled, { keyframes } from 'styled-components'
import { colors, gridSize, fontSize, layers, animation, borderRadius } from '@theme/constants';
import { hex2rgba } from '@theme/helpers';

const motion = () => keyframes`
  0% {
    transform: rotate(-45deg);
  }
  100% {
    transform: rotate(315deg);
  }
`;
const Container = styled.div<any>`
  display: inline-flex;
  align-self: center;
  align-items: center;
  align-content: center;
  justify-content: center;
  box-sizing: border-box;
  position: relative;
  width:  ${(props) => `calc(${props.size}px)`};
  height: ${(props) => `calc(${props.size}px)`};
  border-radius: 50%;
  border: ${(props) => `${props.borderWidth}px`} solid;
  border-color: ${hex2rgba('#fff', 0.25)} transparent transparent;
  will-change: transform;
  animation: ${motion()} 800ms cubic-bezier(0.5, 0, 0.5, 1) infinite;
  :nth-child(1) {
    animation-delay: -0.45s;
  }
  :nth-child(2) {
    animation-delay: -0.3s;
  }
  :nth-child(3) {
    animation-delay: -0.15s;
  }
`;

interface SpinnerProps {
  color?: string,
  size?: number,
  style?: any
}

const Spinner = ({ color = colors.b[400], size = gridSize() * 2, style }: SpinnerProps) => {
  return (
      <Container 
        color={color} 
        size={size}
        borderWidth={size / gridSize() * 1.25}
        style={style}
      />
  );
};

export default Spinner;