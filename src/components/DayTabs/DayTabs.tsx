import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { colors, gridSize, layers, animation, fontSize, borderRadius, gradients, fontSizeSmall, typography } from '@theme/constants';
import ReactSelect, { Props as SelectProps, components } from 'react-select';
import { FaChevronDown } from 'react-icons/fa';
import { HiOutlineStar, HiSearch, HiStar } from 'react-icons/hi';
import { useStore } from '@internal/core';
import { Button } from '..';
import { BsChevronBarLeft, BsChevronBarRight, BsChevronLeft, BsChevronRight } from 'react-icons/bs';
import { TabGroup, TabButton, TabsControlGroup } from '.';
import { MdDateRange } from 'react-icons/md';

const Wrapper = styled.div<any>`
  display: flex;
  flex-direction: row;
  align-self: center;
  align-content: center;
  align-items: center;
  // background-color: rgba(255, 0, 0, 0.1);
  flex: 0 1 auto;
  justify-content: space-between;
  gap: ${gridSize() * 1}px;
  min-width: calc(100vw - ${gridSize() * 7}px);
  // margin: 0 auto;
  margin-bottom: ${gridSize() * 1}px;
`;

const oneDay = 60 * 60 * 24 * 1000;
const todayTimestamp = Date.now() - (Date.now() % oneDay) + (new Date().getTimezoneOffset() * 1000 * 60);

const datesAreOnSameDay = (first: Date, second: Date) =>
    first.getFullYear() === second.getFullYear() &&
    first.getMonth() === second.getMonth() &&
    first.getDate() === second.getDate();
    
const DayTabs = ({ 
  ...rest
}: any) => {
  const [selectedDate, setSelectedDate] = useState(new Date(todayTimestamp));

  const handleClick = (date: Date) => {
    setSelectedDate(date);
  };

  return (
    <Wrapper>
      <TabGroup>
        {new Array(7).fill(null).map((_, i) => {
          const moment = new Date(todayTimestamp - oneDay * 3 + oneDay * i);
          return (
            <TabButton 
              key={i}
              onClick={handleClick}
              isSelected={datesAreOnSameDay(selectedDate, moment)}
              moment={moment} 
            />
          )
        })}
      </TabGroup>
    </Wrapper>
  );
};

export default DayTabs;