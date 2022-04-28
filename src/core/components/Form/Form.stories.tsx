import React from 'react';
import styled from 'styled-components';
import { gridSize, colors, fontSize } from '@theme/constants';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Form, FormFooter, FormHeader } from '.';
import FormSection from './FormSection';
import Field from './Field';
import { Button } from '..';

export default {
  title: 'Design System/Form',
  component: Form,
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

export const Basic: ComponentStory<typeof Form> = () => (
  <Row>
    <Form>
      {({ formState: { isSubmitting }, handleSubmit }) => (
        <form onSubmit={handleSubmit(onSubmit)}>
          <FormHeader
            title="Sign up"
            description="This is a sign up form example"
          />
          <FormSection title="Form Section" />
          <Field name="username" label="Username">
            {({ fieldProps }) => (
              <input 
                {...fieldProps}
                placeholder="Enter your username"
              />
            )}
          </Field>
          <FormFooter>
            <Button
              type="submit"
              isLoading={isSubmitting}
            >
                Submit
              </Button>
          </FormFooter>
        </form>
      )}
    </Form>
  </Row>
);
