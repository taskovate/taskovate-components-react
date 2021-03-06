import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import styled from 'styled-components';
import { gridSize, layers, animation, fontSize, borderRadius, gradients, fontSizeSmall } from '@theme/constants';
import { Plate } from '.';

export default {
  title: 'Components/Plate',
  component: Plate,
} as ComponentMeta<typeof Plate>;

const Area = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  align-items: center;
  height: calc(100% + ${gridSize() * 10}px);
  &> div {
    margin-bottom: ${gridSize() * 3}px;
  }
`;

export const Modes: ComponentStory<typeof Plate> = () => (
  <Area>
    <Plate appearance="default">
      <p>I'm the default Plate. I'm simple and provide content inside of a beautiful outline.</p>
    </Plate>
    <Plate appearance="display">
      <p>I'm the display Plate. I show content in the raw so it can do the all the talking.</p>
    </Plate>
    <Plate appearance="brimming">
      <p>I'm the brimming Plate. I provide content with a eye grabbing background.</p>
    </Plate>
  </Area>
);

export const Options: ComponentStory<typeof Plate> = (args) => (
  <Area>
    <Plate {...args}>
      <h1>Meet Taskovate</h1>
    </Plate>
  </Area>
);

Options.args = {
  appearance: 'default',
  isLoading: false
}