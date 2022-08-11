import React, { useEffect, cloneElement, useState, forwardRef  } from 'react';
import styled from 'styled-components';
import { colors, gridSize, layers, animation, fontSize, borderRadius, gradients, fontSizeSmall } from '@theme/constants';
import ReactSelect, { Props as SelectProps } from 'react-select';
import { FaChevronDown } from 'react-icons/fa';

const Styled = styled.label`
  display: flex;
  flex-direction: row;
  align-content: center;
  align-items: center;
  justify-content: start;
  align-items: center;
  padding-left: 0;
  line-height: ${fontSize()}px !important;
  gap: ${gridSize() * 0.5}px;
  margin-left: -${gridSize() * 0.25}px !important;
`;

const Input = styled.input<any>`
`;

const CheckboxText = styled.span`
  margin: 0;
  user-select: none;
  margin-bottom: -${fontSizeSmall() * 0.25}px;
`;

const DropdownIndicator = () => (
  <FaChevronDown />
);

const Checkbox = forwardRef(({
  children,
  ...rest
}: any, ref) => {

  return (
    <Styled>
      <Input
        ref={ref}
        type="checkbox"
        {...rest}
      />
      <CheckboxText>
        {children}
      </CheckboxText>
    </Styled>
  );
});

export default Checkbox;