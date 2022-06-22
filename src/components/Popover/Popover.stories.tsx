import React, { useEffect, useState } from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import styled from 'styled-components';
import { gridSize, layers, animation, fontSize, borderRadius, gradients, fontSizeSmall } from '@theme/constants';
import { HiHome, HiStar } from 'react-icons/hi';
import { Popover } from '.';
import { Button } from '..';

export default {
  title: 'Components/Popover',
  component: Popover
} as ComponentMeta<any>;

export const Basic: ComponentStory<any> = ({ children }) => {
  return (
    <>
      <Popover
        render={({ close, labelId, descriptionId }) => (
          <>
            <h3 id={labelId}>Create new app</h3>
            <p id={descriptionId}>Keep the name short!</p>
            <input placeholder="Name" />
            <button onClick={close}>Create</button>
          </>
        )}
      >
        {children}
      </Popover>
    </>
  );
};
Basic.args = {
  children: <Button>Click me</Button>
}