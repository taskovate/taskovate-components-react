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
import './Land.styles.css';

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
        <h1>Accomplish more every day</h1>
        <Plate className="fill" appearance="brimming">
        </Plate>

        <h1>Powerfully productive</h1>
        <h3>A daily scoped task managment tool to help you and your team stay focused, block distractions and prioritize your most important work.</h3>
        <Plate appearance="display">
        </Plate>

        <h1>See the big picture</h1>
        <h3>We help turn chaos into order with powerful features like forecasting, projects, and tagging.</h3>
        <Plate className="full">
        </Plate>

        <h1>Focus on what matters to you</h1>
        <h3>Your tasking list keeps track of your priorities and shows you the best task to focus on next.</h3>
        <Plate className="full" >
        </Plate>

        <h1>Stay in control</h1>
        <h3>Weekly reports make it simple to stay up to date and focused on the work that matters most.</h3>
        <Plate className="full" >
        </Plate>

        <h1>Automate your workflows today</h1>
        <Plate appearance="display">
          <Button spacing="pleasant" appearance="special">Try Taskovate for Free</Button>
        </Plate>
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
