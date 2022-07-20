import React from 'react';
import styled from 'styled-components';
import { gridSize, borderRadius, colors, fontSizeSmall } from '@theme/constants';
import { Button } from '@components/core';
import { HiOutlineDotsHorizontal } from 'react-icons/hi';

const Wrapper = styled.div`
`;


const Container = styled.div`
  display: flex;
  flex-direction: column;
  // flex-basis: 100%;
  flex-basis: ${gridSize() * 24}px;
  box-shadow: ${({ theme }) => theme.elevation[200]};
  background-color: ${colors.d[800]};
  border-radius: ${borderRadius() * 1.5}px;
  padding: ${gridSize() * 3}px;
  padding-top: 0;
  border: ${gridSize() * 0.125}px solid ${colors.d[700]};
  border-top: ${gridSize() * 0.5}px solid ${colors.d[700]};
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
  gap: ${gridSize() * 1}px;
`;

const CardDataLabel= styled.div`
  display: flex;
  color: ${colors.n[900]};
  font-size: ${fontSizeSmall()};
  font-weight: 400;
`;

const CardDataValue= styled.div`
  display: flex;
  color: ${colors.n[400]};
  font-weight: 500;
`;

const CardDataRow = styled.div`
  display: flex;
  flex-grow: 1;
  flex-direction: row;
  justify-content: space-between;
  gap: ${gridSize() * 1}px;
`;


// Title
// Short description
// Due date
// Hours worked
// Expected Hours
// Urgency - Expected hours + Hours worked
// Status - In Progress / Hinderd / Etc
// Release
// Active users

const Card = ({
  title = "Login V1",
  children
}: any) => {
  return (
    <>
      <Container>
        <CardHeader>
          <CardTitle>{title}</CardTitle>
          <Button appearance="subtle" iconBefore={HiOutlineDotsHorizontal} />
        </CardHeader>
          <CardContent>
            <CardDataRow>
              <CardDataLabel>Release</CardDataLabel>
              <CardDataValue>3.18.0</CardDataValue>
            </CardDataRow>
            
            <CardDataRow>
              <CardDataLabel>Due</CardDataLabel>
              <CardDataValue>10/10/2022</CardDataValue>
            </CardDataRow>
            
            <CardDataRow>
              <CardDataLabel>Expected hours</CardDataLabel>
              <CardDataValue>16</CardDataValue>
            </CardDataRow>
            
            <CardDataRow>
              <CardDataLabel>Hours worked</CardDataLabel>
              <CardDataValue>10</CardDataValue>
            </CardDataRow>
            
            <CardDataRow>
              <CardDataLabel>Urgency</CardDataLabel>
              <CardDataValue>6</CardDataValue>
            </CardDataRow>
            
            <CardDataRow>
              <CardDataLabel>Status</CardDataLabel>
              <CardDataValue>Hindered</CardDataValue>
            </CardDataRow>
            
            <CardDataRow>
              <CardDataLabel>Active users</CardDataLabel>
              <CardDataValue>3</CardDataValue>
            </CardDataRow>
          </CardContent>
      </Container>
    </>
  );
};

export default Card;