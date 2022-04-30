import React, { useEffect, cloneElement, useState  } from 'react';
import styled from 'styled-components';
import { colors, gridSize, layers, animation, fontSize, borderRadius, gradients, fontSizeSmall } from '@theme/constants';
import { inputStyles } from 'core/theme/dark';

const Styled = styled.div`
  display: flex;
`;

const Input = styled.input`
  display: flex;
  transition: ${animation.normal()};
  padding: ${gridSize() * 0.75}px ${gridSize() * 1.25}px;
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

const TextField = ({
  placeholder,
  children
}: any) => {

  return (
    <Styled>
      <Input placeholder={placeholder} />
    </Styled>
  );
};

export default TextField;