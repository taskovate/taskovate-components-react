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
  Layout,
  Main,
  Content,
  LeftSidebar,
  RightSidebar,
  TopNavigation,
  BottomNavigation,
  Footer
} from '@components/core';
import {
  Sidebar,
  Section,
  ButtonItem
} from '.';

export default {
  title: 'Components/Sidebar',
  parameters: {
    layout: 'fullscreen',
  },
} as ComponentMeta<typeof Layout>;


export const Basic: ComponentStory<typeof Layout> = ({ children, ...rest}) => (
  <Layout>
    <TopNavigation children="Top Navigation"/>
    <Main>
      <LeftSidebar>
        <Sidebar>
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
        </Sidebar>
      </LeftSidebar>
      <Content children="Content" />
      <RightSidebar children="Right Sidebar"/>
    </Main>
  </Layout>
);
Basic.storyName = "Basic";