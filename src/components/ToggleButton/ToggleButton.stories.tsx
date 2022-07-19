import React, { useEffect, useState } from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import styled from 'styled-components';
import { gridSize, layers, animation, fontSize, borderRadius, gradients, fontSizeSmall } from '@theme/constants';
import { HiHome, HiStar } from 'react-icons/hi';
// import { useStore } from '@internal/core';
import { ToggleButton } from '.';

export default {
  title: 'Components/ToggleButton',
  component: ToggleButton,
} as ComponentMeta<typeof ToggleButton>;

export const Basic: ComponentStory<typeof ToggleButton> = () => {
  return (
    <>
      <ToggleButton>
        Top
      </ToggleButton>
    </>
  );
};