import React, { Children } from 'react';
import styled from 'styled-components';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { colors, gridSize } from '@theme/constants';
import { MdLogin } from 'react-icons/md';
import { HiOutlineChatAlt, HiOutlineBell, HiOutlineUser, HiHome, HiStar } from 'react-icons/hi';
import {
  Button,
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
  Footer,
} from '@components/core';
import {
  PageHeader,
  Grid,
  GridColumn
} from '.';

export default {
  title: 'Components/Page',
  parameters: {
    layout: 'fullscreen',
  },
} as ComponentMeta<typeof Layout>;


export const PageGrid: ComponentStory<typeof Layout> = (args) => (
  <Layout>
    <Main>
      <Content>
      <Grid columns={3}>
        <GridColumn medium={2}>
          <h1>Content heading</h1>
          <p>
            Lorem ipsum dolor sit amet and consectetur adipisicing elit.
            Blanditiis voluptatum perspiciatis doloribus dignissimos accusamus
            commodi, nobis ut, error iusto, quas vitae nesciunt consequatur
            possimus labore! Mollitia est quis minima asperiores.
          </p>
        </GridColumn>
        <GridColumn medium={1}>
          <h2>Sidebar</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis
            voluptatum perspiciatis doloribus dignissimos accusamus commodi, nobis
            ut, error iusto, quas vitae nesciunt consequatur possimus labore!
            Mollitia est quis minima asperiores.
          </p>
        </GridColumn>
        <GridColumn medium={3}>
          <h2>Main below which takes up remaining space</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis
            voluptatum perspiciatis doloribus dignissimos accusamus commodi, nobis
            ut, error iusto, quas vitae nesciunt consequatur possimus labore!
            Mollitia est quis minima asperiores.
          </p>
        </GridColumn>
      </Grid>
      </Content>
    </Main>
  </Layout>
);

export const PageWHeader: ComponentStory<typeof Layout> = (args) => (
  <Layout>
    <Main>
      <Content>
        <PageHeader
          breadcrumbs={"some project"}
          children="Title describing content"
          actions={(
            <Button>Default</Button>
          )}
          controls={(
            <>
              <Button>Default</Button>
              <Button>Default</Button>
            </>
          )}
        />
        <p>Main</p>
      </Content>
    </Main>
  </Layout>
);
PageWHeader.storyName = "Page Header";