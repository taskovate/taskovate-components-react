import React, { useEffect, useState } from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import styled from 'styled-components';
import { gridSize, layers, animation, fontSize, borderRadius, gradients, fontSizeSmall } from '@theme/constants';
import { HiHome, HiStar } from 'react-icons/hi';
// import { useStore } from '@internal/core';
import { Card } from '.';

export default {
  title: 'Components/Card',
  component: Card,
} as ComponentMeta<typeof Card>;

export const Basic: ComponentStory<typeof Card> = () => {
  return (
    <>
      <Card />
    </>
  );
};