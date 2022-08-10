import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import styled from 'styled-components';
import { gridSize, layers, animation, fontSize, borderRadius, gradients, fontSizeSmall } from '@theme/constants';
import { Checkbox } from '.';

export default {
  title: 'Components/Checkbox',
  component: Checkbox,
} as ComponentMeta<typeof Checkbox>;

const Area = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  height: calc(100% + ${gridSize() * 10}px);
  align-content: center;
  align-content: center;
  align-items: center;
  align-self: center;
  margin-top:
  & > * {
    padding-top: 10px !important;
  }
`;

export const Basic: ComponentStory<typeof Checkbox> = () => (
  <Area>
    <Checkbox>Remember me on this device</Checkbox>
  </Area>
);
