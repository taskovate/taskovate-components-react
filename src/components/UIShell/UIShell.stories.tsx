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
  Dropdown,
  Plate,
  Main,
  Content,
  Footer,
  SideBar
} from '@components/core';

export default {
  title: 'Components/UIShell',
  parameters: {
    layout: 'fullscreen',
  },
} as ComponentMeta<any>;

export const Default: ComponentStory<any> = () => (
  <>
    <Main>
      <SideBar />
      <Content>
        <Plate>Placeholder</Plate>
      </Content>
      <SideBar />
    </Main>
    <Footer />
  </>
);
