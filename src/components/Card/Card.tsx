import React from 'react';
import styled from 'styled-components';
import { gridSize, borderRadius, colors } from '@theme/constants';
import { Button } from '@components/core';
import { HiOutlineDotsHorizontal } from 'react-icons/hi';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1 0 auto;
  border-top: ${gridSize() * 0.25}px solid ${colors.d[800]};
  border-left: ${gridSize() * 0.25}px solid ${colors.d[800]};
  margin-left: -${gridSize() * 0.25}px;
  margin-top: -${gridSize() * 0.25}px;
  padding: ${gridSize() * 3}px ${gridSize() * 2}px;
  flex-basis: ${gridSize() * 24}px;
`;


const Container = styled.div`
  display: flex;
  flex-direction: column;
  box-shadow: ${({ theme }) => theme.elevation[200]};
  background-color: ${colors.d[800]};
  border-radius: ${borderRadius() * 1.5}px;
  padding: ${gridSize() * 3}px;
  padding-top: 0;
  // width: ${gridSize() * 24}px;
  border: ${gridSize() * 0.125}px solid ${colors.d[700]};
  border-top: ${gridSize() * 0.5}px solid ${colors.d[700]};
  border-top-left-radius: ${borderRadius() * 1}px;
  border-top-right-radius: ${borderRadius() * 1}px;
  margin-bottom: -${gridSize() * 1}px;
  margin-right: -${gridSize() * 0.5}px;
`;

const CardHeader = styled.div<any>`
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
    <Wrapper>
      <Container>
        <CardHeader style={!children && { paddingBottom: 0 }}>
          <CardTitle>{title}</CardTitle>
          <Button appearance="subtle" iconBefore={HiOutlineDotsHorizontal} />
        </CardHeader>
        {children && 
          <CardContent>
            {children}
          </CardContent>
        } 
      </Container>
    </Wrapper>
  );
};

export default Card;