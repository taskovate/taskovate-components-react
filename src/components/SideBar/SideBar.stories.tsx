import React, { Children } from 'react';
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
  Dropdown,
  PageLayout,
  Content,
  Main,
  LeftSidebar,
  RightSidebar,
  TopNavigation,
  BottomNavigation,
  Footer
} from '@components/core';
import {
  SideBar,
  Section,
  ButtonItem
} from '.';

export default {
  title: 'Components/Sidebar',
  parameters: {
    layout: 'fullscreen',
  },
} as ComponentMeta<typeof PageLayout>;


export const Basic: ComponentStory<typeof PageLayout> = ({ children, ...rest}) => (
  <PageLayout>
    <TopNavigation children="Top Navigation"/>
    <Content>
      <LeftSidebar>
        <SideBar>
          <Section title="Projects">
            <ButtonItem>
              Starred
            </ButtonItem>
            <ButtonItem>
              Starred
            </ButtonItem>
          </Section>
          <Section title="Other">
            <ButtonItem>
              Starred
            </ButtonItem>
            <ButtonItem>
              Starred
            </ButtonItem>
          </Section>
        </SideBar>
      </LeftSidebar>
      <Main children="Main" />
      <RightSidebar children="Right Sidebar"/>
    </Content>
  </PageLayout>
);
Basic.storyName = "Basic";