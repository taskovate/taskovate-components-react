import React from 'react';
import styled from 'styled-components';
import { gridSize, colors, fontSize } from '@theme/constants';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Form, FormFooter, FormHeader } from '.';
import FormSection from './FormSection';
import Field from './Field';
import { 
  Button,
  Plate,
  TextField,
  Select
 } from '..';
import HelperMessage from './HelperMessage';

export default {
  title: 'Components/Form',
  component: Form,
  parameters: {
    layout: 'centered',
  },
} as ComponentMeta<typeof Form>;

const Col = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-right: ${gridSize() * 2}px;
  align-items: center;
`;

const Row = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: start;
  align-content: center;
`;

const onSubmit = async (data: any) => {
  window.alert(JSON.stringify(data));
};

export const SignupForm: ComponentStory<typeof Form> = () => (
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
                  placeholder="First Name"
                />
              )}
            </Field>
            <Field name="lastName" label="Last Name">
              {({ fieldProps }) => (
                <TextField 
                  {...fieldProps}
                  placeholder="Last Name"
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
                  placeholder="Email"
                />
              )}
            </Field>
            <Field 
              name="country" 
              label="Country"
              rules={{
                required: { 
                  value: true, 
                  message: "Please fill out this field." 
                }
              }}
            >
              {({ fieldProps }) => (
                <>
                  <Select 
                    {...fieldProps}
                    placeholder="Country"
                  />
                  <HelperMessage>Enter your country of residence.</HelperMessage>
                </>
              )}
            </Field>
          </FormSection>
          <FormFooter>
            <Button
              type="submit"
              // spacing="pleasant"
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
