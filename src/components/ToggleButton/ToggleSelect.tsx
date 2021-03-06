import React, { FC, useState } from 'react';
import styled from 'styled-components';
import { colors, gridSize, layers, animation, borderRadius, gradients, fontSize, headerFontFamily } from '@theme/constants';
import { themedOrNull } from '@theme/helpers';
import { ButtonGroup } from '@components/core';
import { ToggleButton } from '.';

const Container =  styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  border-radius: ${borderRadius() * 1}px;
  padding: ${gridSize() * 0}px;
  // background-color: ${colors.d[800]};
  
  & :first-child {
    border-bottom-left-radius: ${borderRadius() * 1}px;
    border-top-left-radius: ${borderRadius() * 1}px;
  }
  & :not(& :last-child) {
    border-right-width: ${gridSize() * 0}px;
  }
  & :not(& :first-child) {
    border-left-width: ${gridSize() * 0}px;
  }
  & :last-child {
    border-bottom-right-radius: ${borderRadius() * 1}px;
    border-top-right-radius: ${borderRadius() * 1}px;
  }
`;

const ToggleSelect = ({ 
  options,
  onChange
 }: any) => {
  const [item, setValue]: any = useState();

  const handleClick = (item: any) => {
    setValue(item);
    onChange && onChange(item)
  };
  
  return (
    <Container>
      {options && options.map((option: any, index: number) => (
        <ToggleButton 
          {...option}
          key={index}
          isEnabled={item && option.value === item.value} 
          onClick={() => handleClick(option)}
        />
      ))}
    </Container>
  )
};

export default ToggleSelect;
