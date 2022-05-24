

import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { colors, gridSize, layers, animation, fontSize, borderRadius, gradients, fontSizeSmall, typography } from '@theme/constants';
import ReactSelect, { Props as SelectProps, components } from 'react-select';
import { FaChevronDown } from 'react-icons/fa';
import { useStore } from '@internal/core';
import { HiSearch } from 'react-icons/hi';

const SearchIcon = styled(HiSearch)`
  display: flex !important;
  position: absolute;
  align-self: center !important;
  left: ${gridSize() * 0.25}px;
  height: ${gridSize() * 2.5}px !important;
  width: ${gridSize() * 2.5}px !important;
`;

const Input = ({
  data,
  ...rest
}: any) => {
  return (
    <>
      {rest.value && <SearchIcon />}
      <components.Input {...rest} />
    </>
  );
};

export default Input;