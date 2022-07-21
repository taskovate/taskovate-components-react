import React, { useState } from 'react';
import styled from 'styled-components';
import { gridSize, borderRadius, colors, fontSizeSmall, animation } from '@theme/constants';
import { Button } from '@components/core';
import { HiOutlineDotsHorizontal } from 'react-icons/hi';
import { FiEdit } from 'react-icons/fi';

const Wrapper = styled.div`
`;


const Container = styled.div`
  display: flex;
  flex-direction: column;
  // flex-basis: 100%;
  flex-basis: ${gridSize() * 24}px;
  box-shadow: ${({ theme }) => theme.elevation[100]};
  background-color: ${colors.d[700]};
  border-radius: ${borderRadius() * 1.25}px;
  padding: ${gridSize() * 3}px;
  padding-top: 0;
  // border: ${gridSize() * 0.125}px solid ${colors.d[600]};
  // border-top: ${gridSize() * 0.5}px solid ${colors.d[600]};
  // border-top-left-radius: ${borderRadius() * 1}px;
  // border-top-right-radius: ${borderRadius() * 1}px;
  transition: ${animation.normal()};
  cursor: pointer;
  &:hover {
    background-color: ${colors.d[600]};
  }
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
  flex-direction: row;
  justify-content: start;
  gap: ${gridSize() * 1}px;
  width: 60%;
  flex-wrap: wrap;
  // padding: 0 ${gridSize() * 1}px;
`;

const CardDataLabel= styled.div`
  display: flex;
  color: ${colors.n[800]};
  font-size: ${fontSizeSmall()};
  font-weight: 400;
`;

const CardDataValue= styled.div`
  display: flex;
  color: ${colors.n[400]};
  font-weight: 600;
`;

const CardDataRow = styled.div`
  display: flex;
  // flex-grow: 1;
  flex-direction: row;
  justify-content: start;
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
  const [isMouseOver, setMouseOver] = useState(false);


  return (
    <>
      <Container
        onMouseOver={() => setMouseOver(true)}
        onMouseOut={() => setMouseOver(false)}
      >
        <CardHeader>
          <CardTitle>{title}</CardTitle>
          <Button appearance="subtle" iconBefore={isMouseOver && FiEdit} />
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