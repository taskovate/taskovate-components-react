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
  title: 'Templates/Invitation',
  parameters: {
    layout: 'fullscreen',
  },
} as ComponentMeta<any>;

export const Default: ComponentStory<typeof Header> = (args) => (
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
              <h1 children={<><b style={{ fontWeight: 800 }}>{args.fullName}</b> invited you to <b style={{ fontWeight: 800 }}>{args.projectName}</b>!</>}/>
              <br/>
              <Button appearance="primary">Join Project</Button>
            </center>
          </Plate>
        </center>
      </Main>
    </Content>
  </Layout>
);

Default.args = {
  fullName: 'Joe Bishop',
  projectName: "Puppy Project",
  email: "example@example.com"
};

export const PrivateProject: ComponentStory<typeof Header> = (args) => (
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
            <FormHeader
              title="This project is private"
              description="Submit a request for access."
            />
            <center>
              <br />
              <Button appearance="primary">Send request</Button>
              <br/>
              <p> You'll get an invitation if you're approved to join.</p>
            </center>
          </Plate>
        </center>
      </Main>
    </Content>
    <Footer>
      <div>
        <p>By requesting access, you agree to make your account, including your email address, visible to the project admins.</p>
      </div>
    </Footer>
  </Layout>
);

Default.args = {
  fullName: 'Joe Bishop',
  projectName: "Puppy Project",
  email: "example@example.com"
};


