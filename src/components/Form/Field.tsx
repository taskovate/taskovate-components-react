import React, { useEffect, cloneElement, useState } from 'react';
import styled from 'styled-components';
import { colors, gridSize, layers, animation, fontSize, borderRadius, gradients, fontSizeSmall } from '@theme/constants';
import { useForm, useFormContext, Controller, UseControllerProps, UseControllerReturn, FormStateProxy } from "react-hook-form";
import { FaAsterisk } from 'react-icons/fa';

const Styled = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: ${gridSize() * 2}px;

  label > svg {
    height: ${gridSize() * 0.75}px;
    width: ${gridSize() * 0.75}px;
    margin-top: -${gridSize() * 0.25}px;
    margin-left: ${gridSize() * 0.25}px;
    vertical-align: top;
  }

  label { 
    margin-bottom: ${gridSize() * 0.125}px;
    margin-left: ${gridSize() * 0.25}px;
  }
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
      {label && (
        <label htmlFor={name}>
          {label}
          {rules?.required && <FaAsterisk color={colors.r[700]}/>}
        </label>
      )}
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