import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { colors, gridSize, layers, animation, fontSize, borderRadius, gradients, fontSizeSmall, typography } from '@theme/constants';
import ReactSelect, { Props as SelectProps, components } from 'react-select';
import { FaChevronDown } from 'react-icons/fa';
import { HiOutlineStar, HiSearch, HiStar } from 'react-icons/hi';
import { useStore } from '@internal/core';
import { Button } from '..';
import { BsChevronBarLeft, BsChevronBarRight } from 'react-icons/bs';
import { TabGroup, TabButton } from '.';

const Wrapper = styled.div<any>`
  display: flex;
  flex-direction: row;
  // background-color: rgba(255, 0, 0, 0.1);
  flex: 0 1 auto;
  justify-content: space-between;
`;

const DateGroup = styled.div<any>`
  display: flex;
  flex-direction: row;
  gap: ${gridSize() * 1}px;
  justify-content: center;
`;
const oneDay = 60 * 60 * 24 * 1000;
const todayTimestamp = Date.now() - (Date.now() % oneDay) + (new Date().getTimezoneOffset() * 1000 * 60);

const DayTabs = ({ 
  ...rest
}: any) => {

  return (
    <Wrapper>
      <TabGroup>
        {new Array(7).fill(null).map((_, i) => (
          <TabButton key={i} moment={todayTimestamp - oneDay * 3 + oneDay * i} />
        ))}
      </TabGroup>
    </Wrapper>
  );
};

export default DayTabs;