import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import styled from 'styled-components';
import { gridSize, layers, animation, fontSize, borderRadius, gradients, fontSizeSmall } from '@theme/constants';
import { HiHome, HiStar } from 'react-icons/hi';
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

const options = [
  {
    label: 'Starred',
    options: [
    ]
  },
  {
    label: 'My Spaces',
    options: [
      { value: "strawberry", label: "ATX QA", icon: HiHome, action: { icon: HiStar, onClick: () => console.log('poop')} },
      { value: "vanilla", label: "UK QA", icon: HiHome, action: { icon: HiStar, onClick: () => console.log('poop')} }
    ]
  },
  {
    label: 'Feeds',
    options: [
      { value: "chocolate", label: "Home", icon: HiHome },
      { value: "strawberry", label: "All", icon: HiHome  }
    ]
  }
];

export const Basic: ComponentStory<typeof Header> = () => (
  <ScrollArea>
    <Header>
      <HeaderDesignation />
      <HeaderMenuBar>
        <HeaderMenuItem>
          <Dropdown options={options} />
        </HeaderMenuItem>
      </HeaderMenuBar>
    </Header>
  </ScrollArea>
);