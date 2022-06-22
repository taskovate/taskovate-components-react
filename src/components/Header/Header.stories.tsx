import React, { Children } from 'react';
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
  Dropdown
} from '@components/core';

export default {
  title: 'Components/Header',
  component: Header,
  subcomponents: {
    HeaderDesignation,
    HeaderMenuBar,
    HeaderMenuItem,
    HeaderGlobalBar,
    HeaderGlobalAction,
  },
  parameters: {
    layout: 'fullscreen',
  },
} as ComponentMeta<typeof Header>;

const CanvasWithScroll = styled.div`
  display: inline-flex;
  flex-direction: column;
  position: absolute;
  top: 0;
  left: 0;
  height: calc(100% + ${gridSize() * 10}px);
  width: 100%;
`;

export const Barebones: ComponentStory<typeof Header> = () => (
  <>
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
  </>
);

Barebones.storyName = "Website example";

export const HeaderWContent: ComponentStory<typeof Header> = () => (
  <>
    <Header>
      <HeaderDesignation />
      <HeaderMenuBar>
        <HeaderMenuItem>
          <Dropdown />
        </HeaderMenuItem>
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
        <HeaderGlobalAction tooltip="Log in" iconBefore={MdLogin} />
        <HeaderGlobalAction appearance="primary">
          Sign up
        </HeaderGlobalAction>
      </HeaderGlobalBar>
    </Header>
  </>
);

HeaderWContent.storyName = "App example";