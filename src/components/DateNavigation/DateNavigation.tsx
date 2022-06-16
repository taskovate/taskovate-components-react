import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { colors, gridSize, layers, animation, fontSize, borderRadius, gradients, fontSizeSmall, typography } from '@theme/constants';
import ReactSelect, { Props as SelectProps, components } from 'react-select';
import { FaChevronDown } from 'react-icons/fa';
import { HiOutlineStar, HiSearch, HiStar } from 'react-icons/hi';
import { useStore } from '@internal/core';
import { Button } from '..';
import { BsChevronBarLeft, BsChevronBarRight } from 'react-icons/bs';

const Styled = styled.div<any>`
  display: flex;
  flex-direction: row;
  // background-color: rgba(255, 0, 0, 0.1);
  flex: 0 1 auto;
  height: ${gridSize() * 4}px;
  justify-content: space-between;
  margin: ${gridSize() * 0.5}px ${gridSize() * 2.5}px;
`;

const DateGroup = styled.div<any>`
  display: flex;
  flex-direction: row;
  gap: ${gridSize() * 1}px;
  justify-content: center;
`;

const DateNavigation = ({ 
  ...rest
}: any) => {

  return (
    <Styled {...rest}>
      <Button appearance="subtle" iconBefore={BsChevronBarLeft} />
      <DateGroup>
        <Button appearance="subtle">Monday</Button>
        <Button appearance="subtle">Tuesday</Button>
        <Button>Wednesday</Button>
        <Button appearance="subtle">Thursday</Button>
        <Button appearance="subtle">Friday</Button>
      </DateGroup>
      <Button appearance="subtle" iconBefore={BsChevronBarRight} />
    </Styled>
  );
};

export default DateNavigation;