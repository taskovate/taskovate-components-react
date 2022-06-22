import React, { useEffect, useState } from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import styled from 'styled-components';
import { gridSize, layers, animation, fontSize, borderRadius, gradients, fontSizeSmall } from '@theme/constants';
import { HiHome, HiStar } from 'react-icons/hi';
// import { useStore } from '@internal/core';
import { DayTabs } from '.';

export default {
  title: 'Components/DayTabs',
  component: DayTabs,
} as ComponentMeta<typeof DayTabs>;

export const Basic: ComponentStory<typeof DayTabs> = () => {
  return (
    <>
      <DayTabs />
    </>
  );
};