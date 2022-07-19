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
  Dropdown
} from '@components/core';
import {
  Layout,
  Content,
  Main,
  LeftSidebar,
  RightSidebar,
  TopNavigation,
  BottomNavigation
} from '.';

export default {
  title: 'Components/Page Layout',
  parameters: {
    layout: 'fullscreen',
  },
} as ComponentMeta<typeof Layout>;

const Styled = styled.div`
  width: 100%;
  height: 100%;
  & > div > :nth-child(1),
  & > div > :nth-child(2) > div,
  & > div > :nth-child(3) {
    outline: 2px dashed ${colors.b[500]};
    outline-offset: -4px;
    padding: ${gridSize() * 1}px;
  }
`;

export const Basic: ComponentStory<typeof Layout> = ({ children, ...rest}) => (
  <Styled>
    <Layout>
      <TopNavigation children="Top Navigation"/>
      <Content>
        <LeftSidebar children="Left Sidebar"/>
        <Main children="Main" />
        <RightSidebar children="Right Sidebar"/>
      </Content>
      <BottomNavigation children="Footer"/>
    </Layout>
  </Styled>
);
Basic.storyName = "Basic";