import React from 'react';
import styled from 'styled-components';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { gridSize } from '@theme/constants';
import { MdLogin } from 'react-icons/md';
import { HiOutlineChatAlt, HiOutlineBell, HiOutlineUser } from 'react-icons/hi';
import { 
  Header,
  HeaderDesignation,
  HeaderMenuBar,
  HeaderMenuItem,
  HeaderGlobalBar,
  HeaderGlobalAction,
} from '.';

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

export const NavigationApp: ComponentStory<typeof Header> = () => (
  <ScrollArea>
    <Header>
      <HeaderDesignation />
      <HeaderMenuBar>
        <HeaderMenuItem>
          Your work
        </HeaderMenuItem>
        <HeaderMenuItem>
          People
        </HeaderMenuItem>
        <HeaderMenuItem>
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