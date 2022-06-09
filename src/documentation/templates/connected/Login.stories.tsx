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
  PageLayout,
  TopNavigation,
  Content,
  Footer,
  Main,
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
  <PageLayout>
    <TopNavigation/>
    <Content>
      <Main>
        <img src="/images/logo.svg" height={gridSize() * 5} />
        <Plate appearance="display">
          <Form>
            {({ formState: { isSubmitting }, handleSubmit }) =>
              <form onSubmit={handleSubmit(() => console.log('submitted'))}>
                <FormHeader
                  title="Log in to Taskovate"
                  description="Enter your email address and a password."
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
      </Main>
    </Content>
  </PageLayout>
);

export const ForgotPassword: ComponentStory<typeof Header> = () => (
  <PageLayout>
    <TopNavigation/>
    <Content>
      <Main>
        <img src="/images/logo.svg" height={gridSize() * 5} />
        <Plate appearance="display">
          <Form>
            {({ formState: { isSubmitting }, handleSubmit }) =>
              <form onSubmit={handleSubmit(() => console.log('submitted'))}>
                <FormHeader
                  title="Log in to Taskovate"
                  description="Enter your email address and a password."
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
      </Main>
    </Content>
  </PageLayout>
);


export const ResetPassword: ComponentStory<typeof Header> = () => (
  <PageLayout>
    <TopNavigation/>
    <Content>
      <Main>
        <img src="/images/logo.svg" height={gridSize() * 5} />
        <Plate appearance="display">
          <Form>
            {({ formState: { isSubmitting }, handleSubmit }) =>
              <form onSubmit={handleSubmit(() => console.log('submitted'))}>
                <FormHeader
                  title="Log in to Taskovate"
                  description="Enter your email address and a password."
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
      </Main>
    </Content>
  </PageLayout>
);