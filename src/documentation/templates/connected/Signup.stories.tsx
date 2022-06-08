import React from 'react';
import styled from 'styled-components';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { colors, gridSize } from '@theme/constants';
import { MdLogin } from 'react-icons/md';
import { HiOutlineChatAlt, HiOutlineBell, HiOutlineUser, HiHome, HiStar } from 'react-icons/hi';
import {
  Header,
  HeaderDesignation,
  HeaderMenuBar,
  HeaderMenuItem,
  HeaderGlobalBar,
  HeaderGlobalAction,
  Plate,
  Button
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
  title: 'Templates/Signup',
  parameters: {
    layout: 'fullscreen',
  },
} as ComponentMeta<any>;
// unique header needed (in main)
//unique footer needed
export const Default: ComponentStory<typeof Header> = () => (
  <PageLayout>
    <TopNavigation>
      <Header>
        <HeaderDesignation />
        <HeaderMenuBar>
          <HeaderMenuItem>
            About Taskovate
          </HeaderMenuItem>
          <HeaderMenuItem>
            Solutions
          </HeaderMenuItem>
          <HeaderMenuItem>
            Resources
          </HeaderMenuItem>
          <HeaderMenuItem>
            Pricing
          </HeaderMenuItem>
        </HeaderMenuBar>
        <HeaderGlobalBar>
          <HeaderGlobalAction>
            Log in
          </HeaderGlobalAction>
          <HeaderGlobalAction appearance="primary">
            Try Taskovate for Free
          </HeaderGlobalAction>
        </HeaderGlobalBar>
      </Header>
    </TopNavigation>
    <Content>
      <Main>
      </Main>
    </Content>
    <Footer>
      <div>
      </div>
      <div>
        <div>
          <h4>Resources</h4>
          <p>Support</p>
          <p>Blog</p>
          <p>Newsletter</p>
          <p>What's new</p>
          <p>Sitemap</p>
        </div>
        <div>
          <h4>Company</h4>
          <p>Your Privacy</p>
          <p>About us</p>
        </div>
        <div>
          <h4>Support</h4>
          <p>Contact Us</p>
          <p>FAQ</p>
        </div>
      </div>
      <div>
        <h2>Taskovate<span style={{ fontSize: 18 }}>.com</span></h2>
        <p>All rights reserved. © 2022 Taskovate.com</p>
      </div>
    </Footer>
  </PageLayout>
);
