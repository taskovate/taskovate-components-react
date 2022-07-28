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
  flex-basis: 100%;
  // flex-basis: ${gridSize() * 24}px;
  // height: ${gridSize() * 32}px;
  box-shadow: ${({ theme }) => theme.elevation[100]};
  background-color: ${colors.d[800]};
  border-radius: ${borderRadius() * 1.25}px;
  padding: ${gridSize() * 1}px;
  padding-top: 0;
  padding-bottom: ${gridSize() * 1}px;
  // border: ${gridSize() * 0.125}px solid ${colors.d[800]};
  // border-top: ${gridSize() * 0.5}px solid ${colors.d[600]};
  // border-top-left-radius: ${borderRadius() * 1}px;
  // border-top-right-radius: ${borderRadius() * 1}px;
  transition: ${animation.normal()};
  cursor: pointer;
  &:hover {
    background-color: ${colors.d[900]};
  }
`;

const CardHeader = styled.div<any>`
  display: flex;
  flex: 1 0 0;
  flex-direction: row;
  justify-content: start;
  align-content: center;
  align-items: center;
  padding: ${gridSize() * 1}px 0;
  padding-bottom: 0;
  button {
    width: ${gridSize() * 3.5}px;
    height: ${gridSize() * 3.5}px;
  }
  gap: ${gridSize() * 1}px;
`;

const CardKey = styled.small`
  display: flex;
  flex: 0  1 0;
  flex-direction: row;
  justify-content: center;
  align-content: center;
  align-items: center;
  color: ${colors.p[100]};
  background-color: ${colors.p[600]};
  padding: ${gridSize() * 0.2}px ${gridSize() * 0.33}px;
  padding-top: ${gridSize() * 0.6}px;
  border-radius: ${borderRadius() * 1}px;
  margin: 0;
  height: ${gridSize() * 1}px;
  letter-spacing: 0.03rem;
`;

const CardTitle = styled.h5`
  display: flex;
  // flex: 1 0 0;
  flex-direction: row;
  justify-content: center;
  align-content: center;
  align-items: center;
  color: ${colors.n[100]};
  margin: 0;
  // margin-right: auto;
  margin-bottom: -0.1875rem;
`;

const CardContent = styled.div`
  display: flex;
  flex-grow: 1;
  flex-direction: row;
  justify-content: start;
  align-content: start;
  gap: ${gridSize() * 2}px;
  // width: 60%;
  flex-wrap: wrap;
  padding: 0;
`;

const CardDataLabel= styled.div`
  display: flex;
  color: ${colors.n[800]};
  font-size: ${fontSizeSmall()};
  font-weight: 400;
  margin-right: auto;
`;

const CardDataValue= styled.div`
  display: flex;
  color: ${colors.n[700]};
  font-weight: 600;
  letter-spacing: 0.08rem;
`;

const CardDataRow = styled.div`
  display: flex;
  // flex-grow: 1;
  flex-direction: row;
  justify-content: start;
  gap: ${gridSize() * 0.75}px;
  // flex-basis: 100%;
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
  key = 'T1290',
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
          <CardKey>{key}</CardKey>
          <CardTitle>{title}</CardTitle>
        </CardHeader>
          <CardContent>
            {/* <CardDataRow>
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
            </CardDataRow> */}
          </CardContent>
      </Container>
    </>
  );
};

export default Card;