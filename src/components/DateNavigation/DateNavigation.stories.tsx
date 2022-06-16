import React, { useEffect, useState } from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import styled from 'styled-components';
import { gridSize, layers, animation, fontSize, borderRadius, gradients, fontSizeSmall } from '@theme/constants';
import { HiHome, HiStar } from 'react-icons/hi';
// import { useStore } from '@internal/core';
import { DateNavigation } from '.';

export default {
  title: 'Components/DateNavigation',
  component: DateNavigation,
} as ComponentMeta<typeof DateNavigation>;

export const Basic: ComponentStory<typeof DateNavigation> = () => {
  return (
    <>
      <DateNavigation />
    </>
  );
};