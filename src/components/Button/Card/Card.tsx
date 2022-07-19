import React from 'react';
import styled from 'styled-components';
import { gridSize, borderRadius, colors } from '@theme/constants';
import { Button } from '@components/core';
import { HiOutlineDotsHorizontal } from 'react-icons/hi';

const Container = styled.div`
  box-shadow: ${({ theme }) => theme.elevation[100]};
  background-color: ${colors.d[800]};
  border-radius: ${borderRadius() * 1}px;
  margin: ${gridSize() * 0}px 0;
  padding: ${gridSize() * 3}px;
  padding-top: 0;
  display: flex;
  flex-direction: column;
  // flex-basis: ${gridSize() * 24}px;
  // flex-basis: 100%;
  // border: ${gridSize() * 0.25}px solid ${colors.d[700]};
  // border-top: ${gridSize() * 0.5}px solid ${colors.d[700]};
`;

const CardHeader = styled.div`
  display: flex;
  flex: 1 0 0;
  flex-direction: row;
  justify-content: space=between;
  align-content: center;
  align-items: center;
  padding: ${gridSize() * 2}px 0;
  button {
    width: ${gridSize() * 3.5}px;
    height: ${gridSize() * 3.5}px;
  }
  gap: ${gridSize() * 3}px;
`;

const CardTitle = styled.h4`
  display: flex;
  flex: 1 0 0;
  flex-direction: row;
  justify-content: space=between;
`;

const CardContent = styled.div`
  display: flex;
  flex-grow: 1;
  flex-direction: column;
  // padding: ${gridSize() * 1}px;
`;

const Card = ({
  title = "Login V1",
  children
}: any) => {
  return (
    <Container>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <Button appearance="subtle" iconBefore={HiOutlineDotsHorizontal} />
      </CardHeader>
      <CardContent>
        {children}
      </CardContent>
    </Container>
  );
};

export default Card;