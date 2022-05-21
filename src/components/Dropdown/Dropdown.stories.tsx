import React, { useEffect, useState } from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import styled from 'styled-components';
import { gridSize, layers, animation, fontSize, borderRadius, gradients, fontSizeSmall } from '@theme/constants';
import { HiHome, HiStar } from 'react-icons/hi';
import { useStore } from '@internal/core';
import { Dropdown } from '.';
import {
  Header,
  HeaderDesignation,
  HeaderMenuBar,
  HeaderMenuItem
} from '..';

export default {
  title: 'Design System/Dropdown',
  component: Dropdown,
} as ComponentMeta<typeof Dropdown>;

const ScrollArea = styled.div`
  display: flex;
  position: absolute;
  top: 0;
  left: 0;
  height: calc(100% + ${gridSize() * 10}px);
  width: 100%;
`;

export const Basic: ComponentStory<typeof Header> = () => {
  return (
    <ScrollArea>
      <Header>
        <HeaderDesignation />
        <HeaderMenuBar>
          <HeaderMenuItem>
            <Dropdown />
          </HeaderMenuItem>
        </HeaderMenuBar>
      </Header>
    </ScrollArea>
  );
};