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
  Form,
  Field,
  FormHeader,
  FormSection,
  FormFooter,
  TextField,
  Select,
  HelperMessage
} from '@components/core';

import {
  Layout,
  TopNavigation,
  Content,
  Footer,
  Main,
  LeftSidebar,
  RightSidebar
} from '@components/core';

export default {
  title: 'Templates/Error',
  parameters: {
    layout: 'fullscreen',
  },
} as ComponentMeta<any>;

export const Default: ComponentStory<any> = () => (
  <Layout>
    <TopNavigation>
      <Header>
        <HeaderDesignation />
      </Header>
    </TopNavigation>
    <Content>
      <Main>
        <center>
          <Plate appearance="display">
            <center>
              <h1>Oh no! Something went wrong</h1>
              <br/>
              <p>We apologize for the inconvenience and are working hard to rectify the issue.</p>
              <br/>
              <a href="/">Go to home</a>
            </center>
          </Plate>
        </center>
      </Main>
    </Content>
  </Layout>
);

export const Error401: ComponentStory<any> = () => (
  <Layout>
    <TopNavigation>
      <Header>
        <HeaderDesignation />
      </Header>
    </TopNavigation>
    <Content>
      <Main>
        <center>
          <Plate appearance="display">
            <center>
              <h1>No authorization found</h1>
              <br/>
              <p>This page may be private. If someone gave you this link, they may need to invite you to one of their spaces or projects.</p>
              <br/>
              <a href="/">Go to home</a>
            </center>
          </Plate>
        </center>
      </Main>
    </Content>
  </Layout>
);

export const Error404: ComponentStory<any> = () => (
  <Layout>
    <TopNavigation>
      <Header>
        <HeaderDesignation />
      </Header>
    </TopNavigation>
    <Content>
      <Main>
        <center>
          <Plate appearance="display">
            <center>
              <h1>Page not found</h1>
              <br/>
              <p>The page you are looking for does not exist. It might have been moved or deleted.</p>
              <br/>
              <a href="/">Go to home</a>
            </center>
          </Plate>
        </center>
      </Main>
    </Content>
  </Layout>
);