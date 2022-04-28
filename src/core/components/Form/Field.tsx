import React, { useEffect, cloneElement, useState } from 'react';
import styled from 'styled-components';
import { colors, gridSize, layers, animation, fontSize, borderRadius, gradients, fontSizeSmall } from '@theme/constants';
import { useForm, useFormContext, Controller, UseControllerProps, UseControllerReturn, FormStateProxy } from "react-hook-form";
import { FaAsterisk } from 'react-icons/fa';

const Styled = styled.div`
`;

interface FieldProps extends Omit<UseControllerReturn, 'field'> {
  fieldProps: UseControllerReturn['field']
}

interface ControllerProps extends UseControllerProps {
  label?: string;
  children: (props: FieldProps) => React.ReactElement;
}

const Field = ({
  name,
  label,
  rules,
  defaultValue,
  children
}: ControllerProps) => {
  const { control } = useFormContext();

  const renderField = ({ field: fieldProps, ...rest}: UseControllerReturn) => (
    <>
      {label && <label>{[label, rules?.required && <FaAsterisk />]}</label>}
      {children({ fieldProps, ...rest })}
    </>
  );

  return (
    <Styled>
      <Controller
        name={name}
        defaultValue={defaultValue || ""}
        rules={rules}
        render={renderField}
        control={control}
      />
    </Styled>
  );
};

export default Field;