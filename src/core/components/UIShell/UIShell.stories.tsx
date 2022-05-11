import React from 'react';
import styled from 'styled-components';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { gridSize } from '@theme/constants';
import { MdLogin } from 'react-icons/md';
import { HiOutlineChatAlt, HiOutlineBell, HiOutlineUser, HiHome } from 'react-icons/hi';
import { 
  Header,
  HeaderDesignation,
  HeaderMenuBar,
  HeaderMenuItem,
  HeaderGlobalBar,
  HeaderGlobalAction,
} from '.';
import {
  Dropdown
} from '..';

export default {
  title: 'Design System/UIShell',
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

// export const Navigation0: ComponentStory<typeof Header> = (args) => (
//   <Header {...args} />
// );

// export const Navigation1: ComponentStory<typeof Header> = () => (
//   <Header>
//     <HeaderDesignation />
//   </Header>
// );

export const NavigationExample: ComponentStory<typeof Header> = () => (
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

const options = [
  { value: "chocolate", label: "Home", icon: HiHome },
  { value: "strawberry", label: "ATX QA", icon: HiHome  },
  { value: "vanilla", label: "UK QA", icon: HiHome  }
];

export const NavigationApp: ComponentStory<typeof Header> = () => (
  <ScrollArea>
    <Header>
      <HeaderDesignation />
      <HeaderMenuBar>
        <HeaderMenuItem>
          <Dropdown options={options}/>
        </HeaderMenuItem>
        <HeaderMenuItem tooltip="Your work">
          Your work
        </HeaderMenuItem>
        <HeaderMenuItem tooltip="People">
          People
        </HeaderMenuItem>
        <HeaderMenuItem tooltip="Files">
          Files
        </HeaderMenuItem>
      </HeaderMenuBar>
      <HeaderGlobalBar>
        <HeaderGlobalAction tooltip="Chats" iconBefore={HiOutlineChatAlt} />
        <HeaderGlobalAction tooltip="Notifications" iconBefore={HiOutlineBell} />
        <HeaderGlobalAction tooltip="Your profile and settings" iconBefore={HiOutlineUser} />
      </HeaderGlobalBar>
    </Header>
  </ScrollArea>
);