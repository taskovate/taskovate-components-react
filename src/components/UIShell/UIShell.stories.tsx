import React from 'react';
import styled from 'styled-components';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { gridSize } from '@theme/constants';
import { MdLogin } from 'react-icons/md';
import { HiOutlineChatAlt, HiOutlineBell, HiOutlineUser, HiHome, HiStar } from 'react-icons/hi';
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
  title: 'Components/UIShell',
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

export const NavigationWebsiteExample: ComponentStory<typeof Header> = () => (
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
  {
    label: 'Starred',
    options: [
      { value: "strawberry", label: "ATX QA", icon: HiHome  },
    ]
  },
  {
    label: 'My Spaces',
    options: [
      { value: "strawberry", label: "ATX QA", icon: HiHome  },
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

export const NavigationAppExample: ComponentStory<typeof Header> = () => (
  <ScrollArea>
    <Header>
      <HeaderDesignation />
      <HeaderMenuBar>
        <HeaderMenuItem>
          <Dropdown options={options} />
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


export const LandingPageExample: ComponentStory<typeof Header> = () => (
  <ScrollArea>
    <Header>
      <HeaderDesignation />
      <HeaderMenuBar>
        <HeaderMenuItem>
          <Dropdown options={options} />
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