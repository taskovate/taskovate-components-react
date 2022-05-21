import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import styled from 'styled-components';
import { gridSize, layers, animation, fontSize, borderRadius, gradients, fontSizeSmall } from '@theme/constants';
import { Checkbox } from '.';

export default {
  title: 'Design System/Checkbox',
  component: Checkbox,
} as ComponentMeta<typeof Checkbox>;

const Area = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  align-items: center;
  height: calc(100% + ${gridSize() * 10}px);
`;

export const Basic: ComponentStory<typeof Checkbox> = () => (
  <Area>
    <Checkbox />
  </Area>
);
