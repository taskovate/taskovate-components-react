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
  title: 'Templates/Signup',
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
                  title="Create a Taskovate account"
                  description="Sign up with your email and a password."
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
                  <Button appearance="primary" type="submit" isLoading={isSubmitting}>Sign up</Button>
                  <span>Already have an account? <a href="/">Log in</a></span>
                </FormFooter>
              </form>
            }
          </Form>
        </Plate>
      </Main>
    </Content>
    <Footer>
      <div>
        <p>By signing up for Taskovate, you agree to our <a href="/">terms of service</a>.</p>
      </div>
    </Footer>
  </PageLayout>
);

export const SignupQuestions: ComponentStory<typeof Header> = () => (
  <PageLayout>
    <TopNavigation>
      <Header>
        <HeaderDesignation />
      </Header>
    </TopNavigation>
    <Content>
      <Main>
        <Plate appearance="display">
          <Form>
            {({ formState: { isSubmitting }, handleSubmit }) =>
              <form onSubmit={handleSubmit(() => console.log('submitted'))}>
                <FormHeader
                  title="Set up your Taskovate account"
                />
                <FormSection title="Tell us about yourself">
                  <Field 
                    name="fName" 
                    label="First name"
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
                        placeholder="First name"
                      />
                    )}
                  </Field>
                  <Field 
                    name="lName" 
                    label="Last name"
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
                        placeholder="Last name"
                      />
                    )}
                  </Field>
                </FormSection>
                <FormFooter>
                  <Button appearance="primary" type="submit" isLoading={isSubmitting}>Set up and continue</Button>
                  {/* <span>Already have an account? <a href="/">Log in</a></span> */}
                </FormFooter>
              </form>
            }
          </Form>
        </Plate>
      </Main>
    </Content>
  </PageLayout>
);

export const VerifyAccount: ComponentStory<typeof Header> = (args) => (
  <PageLayout>
    <TopNavigation/>
    <Content>
      <Main>
        <img src="/images/logo.svg" height={gridSize() * 5} />
        <Plate appearance="display">
          <FormHeader
            title="Check your email"
          />
        </Plate>
        <p>Check your <strong>{args.email}</strong> inbox for instructions from us on how to verify your account.</p>
        <br/>
        <a href="/">Go to login screen</a>
      </Main>
    </Content>
  </PageLayout>
);

VerifyAccount.args = {
  email: "example@example.com"
};

