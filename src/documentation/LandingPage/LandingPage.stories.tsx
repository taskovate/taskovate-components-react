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
} from '@components/core';

import {
  PageLayout,
  TopNavigation,
  Content,
  Footer,
  Main,
  LeftSidebar,
  RightSidebar
} from '@components/core';

export default {
  title: 'Templates/Landing page',
  component: Header,
  parameters: {
    layout: 'fullscreen',
  },
} as ComponentMeta<typeof Header>;

export const Default: ComponentStory<typeof Header> = () => (
  <PageLayout>
    <TopNavigation>
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
    </TopNavigation>
    <Content>
      <Main>
        Main
      </Main>
    </Content>
    <Footer>
      Footer
    </Footer>
  </PageLayout>
);