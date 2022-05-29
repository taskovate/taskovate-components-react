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
import {
  PageLayout,
  Content,
  Main,
  LeftSidebar,
  RightSidebar,
  TopNavigation,
  Footer
} from '.';

export default {
  title: 'Components/Page Layout',
  parameters: {
    layout: 'fullscreen',
  },
} as ComponentMeta<typeof PageLayout>;

export const Basic: ComponentStory<typeof PageLayout> = ({ children, ...rest}) => (
  <>
    <PageLayout>
      <TopNavigation children="Top Navigation"/>
      <Content>
        <LeftSidebar children="Left Sidebar"/>
        <Main children="Main" />
        <RightSidebar children="Right Sidebar"/>
      </Content>
      <Footer children="Footer"/>
    </PageLayout>
  </>
);
Basic.storyName = "Basic";