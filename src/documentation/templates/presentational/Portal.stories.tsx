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
  Button,
  PageHeader,
  Portion,
  Grid,
  GridColumn
} from '@components/core';

import {
  PageLayout,
  TopNavigation,
  Content,
  Main,
  LeftSidebar,
  RightSidebar,
  Dropdown,
  SideBar, Section, ButtonItem
} from '@components/core';

export default {
  title: 'Templates/Portal',
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
            <Dropdown />
          </HeaderMenuItem>
          <HeaderGlobalAction appearance="primary">
            Create
          </HeaderGlobalAction>
        </HeaderMenuBar>
        <HeaderGlobalBar>
          <HeaderGlobalAction>
            Messages
          </HeaderGlobalAction>
          <HeaderGlobalAction>
            Notifications
          </HeaderGlobalAction>
          <HeaderGlobalAction>
            Profile
          </HeaderGlobalAction>
        </HeaderGlobalBar>
      </Header>
    </TopNavigation>
    <Content>
      <Main>
        <PageHeader
          children="Welcome Elijah"
          actions={(
            <>
              <Button>Your active tasks</Button>
              <Button>Task requests</Button>
            </>
          )}
        />
        <Grid columns={3}>
          <GridColumn medium={2}>
            <Plate appearance='brimming'>
              Welcome back to the site, we missed you!
            </Plate>
            <h4>Recent</h4>
            
            <Plate>
              Welcome back to the site, we missed you!
            </Plate>
            <br/>
            <h4>Projects</h4>
          </GridColumn>
          <GridColumn medium={1}>
            <h5>My items</h5>
          </GridColumn>
        </Grid>
      </Main>
    </Content>
  </PageLayout>
);
