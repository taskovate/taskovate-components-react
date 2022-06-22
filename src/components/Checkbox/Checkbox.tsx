import React, { useEffect, cloneElement, useState, forwardRef  } from 'react';
import styled from 'styled-components';
import { colors, gridSize, layers, animation, fontSize, borderRadius, gradients, fontSizeSmall } from '@theme/constants';
import ReactSelect, { Props as SelectProps } from 'react-select';
import { FaChevronDown } from 'react-icons/fa';

const Styled = styled.label`
  display: flex;
  flex-direction: row;
  align-content: center;
  justify-content: start;
  align-items: center;
  padding-left: 0;
  line-height: 20px !important;
`;

const Input = styled.input<any>`
  margin-right: calc(1 * ${gridSize() * 0.25}px);
`;

const CheckboxText = styled.span`
  margin: auto 0;
  user-select: none;
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