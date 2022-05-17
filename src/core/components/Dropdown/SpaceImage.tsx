import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { colors, gridSize, layers, animation, fontSize, borderRadius, gradients, fontSizeSmall, typography } from '@theme/constants';
import ReactSelect, { Props as SelectProps, components } from 'react-select';
import { FaChevronDown } from 'react-icons/fa';
import { HiOutlineStar, HiSearch, HiStar } from 'react-icons/hi';
import { useStore } from '@store/core';
import { Button } from '..';

const SpaceImage = styled.img`
  height: ${gridSize() * 2}px;
  width: ${gridSize() * 2}px;
  margin-right: ${gridSize() * 1}px;
  margin-left: 0;
  background-color: ${({ theme: { dropdownStyles } }) => dropdownStyles.borderColor['body'].hover()};
  padding: ${gridSize() * 0.25}px;
  border-radius: ${borderRadius() * 1}px;
`;

export default SpaceImage;