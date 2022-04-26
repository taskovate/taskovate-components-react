import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Tooltip } from '.';

export default {
  title: 'Design System/Tooltip',
  component: Tooltip,
  parameters: {
    layout: 'centered',
  },
} as ComponentMeta<typeof Tooltip>;

export const Basic: ComponentStory<typeof Tooltip> = (args) => (
  <Tooltip {...args}>
    <p>Hover over me!</p>
  </Tooltip>
);

Basic.args = {
  label: "I am a cool tooltip!"
};