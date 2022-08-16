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
  HelperMessage,
  BottomNavigation
} from '@components/core';

import {
  Layout,
  TopNavigation,
  Main,
  Footer,
  Content,
  LeftSidebar,
  RightSidebar
} from '@components/core';

export default {
  title: 'Templates/Login',
  parameters: {
    layout: 'fullscreen',
  },
} as ComponentMeta<any>;

export const Default: ComponentStory<typeof Header> = () => (
  <Layout>
    <TopNavigation>
      <Header>
        <HeaderMenuBar>
          <HeaderDesignation/>
        </HeaderMenuBar>
      </Header>
    </TopNavigation>
    <Main>
      <Content>
        <center>
          {/* <img src="/images/logo.svg" height={gridSize() * 4.5} style={{ marginBottom: gridSize() * 2 }} /> */}
          <Plate appearance="display">
            <Form>
              {({ formState: { isSubmitting }, handleSubmit }) =>
                <form onSubmit={handleSubmit(() => console.log('submitted'))}>
                  <FormHeader
                    title="Log in to Taskovate"
                    description="Enter your email address and password."
                  />
                  <FormSection>
                    <Field 
                      name="email" 
                      label="Email Address"
                      rules={{
                        required: { 
                          value: true, 
                          message: "Please fill out this field." 
                        }
                      }}
                    >
                      {({ fieldProps }) => (
                        <TextField 
                          {...fieldProps}
                          placeholder="Email"
                        />
                      )}
                    </Field>
                    <Field 
                      name="password" 
                      label="Password"
                      rules={{
                        required: { 
                          value: true, 
                          message: "Please fill out this field." 
                        }
                      }}
                    >
                      {({ fieldProps }) => (
                        <TextField 
                          {...fieldProps}
                          placeholder="Password"
                        />
                      )}
                    </Field>
                  </FormSection>
                  <FormFooter>
                    <Button appearance="primary" type="submit" isLoading={isSubmitting}>Log in</Button>
                    <span>Don't have an account yet? <a href="/">Sign up</a></span>
                  </FormFooter>
                  <FormFooter align="center">
                    <span><a href="/">Forgot your password?</a></span>
                  </FormFooter>
                </form>
              }
            </Form>
          </Plate>
        </center>
      </Content>
    </Main>
    <BottomNavigation>
      <Footer>
        <div>
          <p>By signing in to Taskovate, you agree to our <a href="/">terms of service</a>.</p>
        </div>
      </Footer>
    </BottomNavigation>
  </Layout>
);

export const ForgotPassword: ComponentStory<typeof Header> = () => (
  <Layout>
    <TopNavigation/>
    <Main>
      <Content>
        <center>
          <img src="/images/logo.svg" height={gridSize() * 4.5} style={{ marginBottom: gridSize() * 2 }} />
          <Plate appearance="display">
            <Form>
              {({ formState: { isSubmitting }, handleSubmit }) =>
                <form onSubmit={handleSubmit(() => console.log('submitted'))}>
                  <FormHeader
                    title="Reset your password"
                    description="To reset your password, enter the email address you use to sign in."
                  />
                  <FormSection>
                    <Field 
                      name="email" 
                      label="Email Address"
                      rules={{
                        required: { 
                          value: true, 
                          message: "Please fill out this field." 
                        }
                      }}
                    >
                      {({ fieldProps }) => (
                        <TextField 
                          {...fieldProps}
                          placeholder="Email"
                        />
                      )}
                    </Field>
                  </FormSection>
                  <FormFooter>
                    <Button appearance="primary" type="submit" isLoading={isSubmitting}>Get reset link</Button>
                    <span>No longer required? <a href="/">Log in</a></span>
                  </FormFooter>
                </form>
              }
            </Form>
          </Plate>
        </center>
      </Content>
    </Main>
  </Layout>
);

export const ResetPassword: ComponentStory<typeof Header> = () => (
  <Layout>
    <TopNavigation/>
    <Main>
      <Content>
        <center>
          <img src="/images/logo.svg" height={gridSize() * 4.5} style={{ marginBottom: gridSize() * 2 }} />
          <Plate appearance="display">
            <Form>
              {({ formState: { isSubmitting }, handleSubmit }) =>
                <form onSubmit={handleSubmit(() => console.log('submitted'))}>
                  <FormHeader
                    title="Reset your password"
                    description="Enter your new password."
                  />
                  <FormSection>
                    <Field 
                      name="password" 
                      label="New Password"
                      rules={{
                        required: { 
                          value: true, 
                          message: "Please fill out this field." 
                        }
                      }}
                    >
                      {({ fieldProps }) => (
                        <TextField 
                          {...fieldProps}
                          placeholder="New password"
                        />
                      )}
                    </Field>
                    <Field 
                      name="confirm_password" 
                      label="Confirm Password"
                      rules={{
                        required: { 
                          value: true, 
                          message: "Please fill out this field." 
                        }
                      }}
                    >
                      {({ fieldProps }) => (
                        <TextField 
                          {...fieldProps}
                          placeholder="Confirm new password"
                        />
                      )}
                    </Field>
                  </FormSection>
                  <FormFooter>
                    <Button appearance="primary" type="submit" isLoading={isSubmitting}>Reset password</Button>
                    <span>No longer required? <a href="/">Log in</a></span>
                  </FormFooter>
                </form>
              }
            </Form>
          </Plate>
        </center>
      </Content>
    </Main>
  </Layout>
);

export const ResetConfirmation: ComponentStory<typeof Header> = (args) => (
  <Layout>
    <TopNavigation/>
    <Main>
      <Content>
        <center>
          <img src="/images/logo.svg" height={gridSize() * 4.5} style={{ marginBottom: gridSize() * 2 }} />
          <Plate appearance="display">
            <center>
              <h1 children="Check your email"/>
              <br/>
              <p>Check your <strong>{args.email}</strong> inbox for instructions from us on how to reset your password.</p>
              <br/>
              <a href="/">Go to login screen</a>
            </center>
          </Plate>
        </center>
      </Content>
    </Main>
  </Layout>
);

ResetConfirmation.args = {
  email: "example@example.com"
};
