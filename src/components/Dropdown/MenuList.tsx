import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { colors, gridSize, layers, animation, fontSize, borderRadius, gradients, fontSizeSmall, typography } from '@theme/constants';
import ReactSelect, { Props as SelectProps, components } from 'react-select';
import { FaChevronDown } from 'react-icons/fa';
import { HiOutlineStar, HiSearch, HiStar } from 'react-icons/hi';
import { useStore } from '@internal/core';
import { SpaceImage } from '.';
import { Button } from '..';

const MenuList = ({
  focusedOption,
  options,
  ...rest
}: any) => {
  // console.log(focusedOption)

  return (
    <components.MenuList
      focusedOption={focusedOption}
      options={options}
      {...rest}
    />
  );
};

export default MenuList;