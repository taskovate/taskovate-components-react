import React, { useEffect, cloneElement, useState, forwardRef  } from 'react';
import styled from 'styled-components';
import { colors, gridSize, layers, animation, fontSize, borderRadius, gradients, fontSizeSmall } from '@theme/constants';

const Input = styled.input<any>`
  display: flex;
  flex-grow: 1;
  transition: ${animation.normal()};
  padding: ${gridSize() * 0.5}px ${gridSize() * 1}px;
  border-radius: ${borderRadius() * 1}px;
  border: ${gridSize() * 0.25}px solid ${({ theme: { inputStyles } }) => inputStyles.borderColor['body'].default()};;
  background-color: ${({ theme: { inputStyles } }) => inputStyles.background['body'].default()};
  color: ${({ theme: { inputStyles } }) => inputStyles.color['body'].default()};
  outline: none;
  min-width: 0;
  :hover {
    border-color: ${({ theme: { inputStyles } }) => inputStyles.borderColor['body'].hover()};
  }
  :focus {
    border-color: ${({ theme: { inputStyles } }) => inputStyles.borderColor['body'].focus()};
  }
  ::placeholder {
    color: ${({ theme: { inputStyles } }) => inputStyles.color['body'].placeholder()};
  }
  min-width: 200px;
`;

const TextField = forwardRef(({
  placeholder
}: any, ref) => {

  return (
    <Input 
      ref={ref} 
      placeholder={placeholder}
    />
  );
});

export default TextField;