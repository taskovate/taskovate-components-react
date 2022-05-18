import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { colors, gridSize, layers, animation, fontSize, borderRadius, gradients, fontSizeSmall, typography } from '@theme/constants';
import ReactSelect, { Props as SelectProps, components } from 'react-select';
import { FaChevronDown } from 'react-icons/fa';
import { HiOutlineStar, HiSearch, HiStar } from 'react-icons/hi';
import { useStore } from '@store/core';
import { SpaceImage } from '.';
import { Button } from '..';

const SingleValue = ({
  data,
  ...rest
}: any) => {
  const { label, image } = data?.options ?? data;
  return (
    <components.SingleValue {...rest}>
      {typeof data.image === 'string' ? <SpaceImage src={data.image} /> : data.image()}
      {label}
    </components.SingleValue>
  );
};

export default SingleValue;