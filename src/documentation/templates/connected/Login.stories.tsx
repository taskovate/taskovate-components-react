import React from 'react';
import styled from 'styled-components';
import { gridSize, colors, fontSize } from '@theme/constants';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { 
  Button,
  Plate,
  TextField,
  Field,
  FormSection,
  Form,
  FormFooter,
  FormHeader
 } from '@components/core';

export default {
  title: 'Templates/Login',
  parameters: {
    componentSubtitle: 'Example',
    status: 'legacy',
    introText: 'Login page for legacy applications not using WFPs single sign-on',
    previewWidth: 'full',
  },
};

export const Default: ComponentStory<any> = () => {
  const onSubmit = (data: any) => {
    console.log(data);
  };

  return (
    <Plate>
      <Form>
        {({ formState: { isSubmitting }, handleSubmit }) => (
          <form onSubmit={handleSubmit(onSubmit)}>
            <FormHeader
              title="Let's get you set up"
              description={<>If your team is already using Taskovate, you can <a href="/">log in</a>.</>}
            />
            <FormSection title="Account Details">
              <Field name="firstName" label="First Name">
                {({ fieldProps }) => (
                  <TextField 
                    {...fieldProps}
                    placeholder="Enter your username"
                  />
                )}
              </Field>
              <Field name="lastName" label="Last Name">
                {({ fieldProps }) => (
                  <TextField 
                    {...fieldProps}
                    placeholder="Enter your username"
                  />
                )}
              </Field>
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
                    placeholder="Enter your username"
                  />
                )}
              </Field>
            </FormSection>
            <FormFooter>
              <Button
                type="submit"
                spacing="pleasant"
                isLoading={isSubmitting}
              >
                  Create Taskovate Account
                </Button>
            </FormFooter>
          </form>
        )}
      </Form>
    </Plate>
  );
};