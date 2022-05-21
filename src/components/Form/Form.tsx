import React, { useEffect, cloneElement, useState, ReactNode  } from 'react';
import styled from 'styled-components';
import { gridSize, layers, animation, fontSize, borderRadius, gradients, fontSizeSmall } from '@theme/constants';
import { FormProvider, useForm, UseFormReturn } from 'react-hook-form';

interface FormProps {
  children: (methods: UseFormReturn) => ReactNode,
  mode?: any
}

const Styled = styled.div`
`;

const Form = ({
  children,
  mode
}: FormProps) => {
  const methods = useForm({ mode });

  return (
    <Styled>
      <FormProvider {...methods}>
        {children(methods)}
      </FormProvider>
    </Styled>
  );
};

export default Form;