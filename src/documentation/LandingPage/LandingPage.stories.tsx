import React from 'react';
import styled from 'styled-components';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { gridSize } from '@theme/constants';
import { MdLogin } from 'react-icons/md';
import { HiOutlineChatAlt, HiOutlineBell, HiOutlineUser, HiHome, HiStar } from 'react-icons/hi';
import {
  Dropdown,
  Header,
  HeaderDesignation,
  HeaderMenuBar,
  HeaderMenuItem,
  HeaderGlobalBar,
  HeaderGlobalAction,
} from '@components/core';

export default {
  title: 'Templates/Landing page',
  component: Header,
  parameters: {
    layout: 'fullscreen',
  },
} as ComponentMeta<typeof Header>;

const ScrollArea = styled.div`
  display: flex;
  position: absolute;
  top: 0;
  left: 0;
  height: calc(100% + ${gridSize() * 10}px);
  width: 100%;
`;

export const Default: ComponentStory<typeof Header> = () => (
  <ScrollArea>
    <Header>
      <HeaderDesignation />
      <HeaderMenuBar>
        <HeaderMenuItem>
          Why Taskovate
        </HeaderMenuItem>
        <HeaderMenuItem>
          Solutions
        </HeaderMenuItem>
        <HeaderMenuItem>
          Pricing
        </HeaderMenuItem>
        <HeaderMenuItem>
          Getting Started
        </HeaderMenuItem>
      </HeaderMenuBar>
      <HeaderGlobalBar>
        <HeaderGlobalAction tooltip="Log in" iconBefore={MdLogin} />
        <HeaderGlobalAction appearance="primary">
          Sign up
        </HeaderGlobalAction>
      </HeaderGlobalBar>
    </Header>
  </ScrollArea>
);