import React, { FC, useState, useEffect } from 'react';
import { gridSize, borderRadius, colors, fontSizeSmall, fontSize, animation, headerFontFamily } from '@theme/constants';
import styled from 'styled-components';

const day = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
const month = ["January","February","March","April","May","June","July","August","September","October","November","December"];

const Text = styled.span`
  line-height: 1em;
  font-weight: 700;
  font-size: ${fontSize() * 1.4}px;
  margin-bottom: ${gridSize() * 0.25}px;
  color: ${colors.n[300]};
  transition: ${animation.normal()};
  font-family: ${headerFontFamily()};
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  letter-spacing: -0.02rem;
`;

const Subtext = styled.span`
  font-size: ${fontSizeSmall()}px;
  color: ${(colors.n[400])};
  line-height: 1em;
  border-radius: ${borderRadius() * 1}px; 
  // background-color: ${colors.d[500]};
  // padding: ${gridSize() * 0.25}px ${gridSize() * 0.5}px;
  font-weight: 500;
  transition: ${animation.normal()};
  letter-spacing: 0.03rem;
`;

const Wrapper = styled.div`
  display: flex;
  flex-grow: 1;
  align-self: center;
  justify-self: center;
  // background-color: rgba(0 255 0 / 10%);
  padding: ${gridSize() * 1}px;
  border-radius: ${borderRadius() * 1}px;
  cursor: pointer;
  user-select: none;
  transition: ${animation.normal()};
  &:hover {
    background-color: ${colors.d[800]};
  }
  &:hover ${Text} {
    color: ${colors.n[300]};
  }
  &:hover ${Subtext} {
    // background-color: ${colors.p[600]};
  }
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: start;
`;


const TabButton: FC<any> = ({
  moment
}) => {
  const date = new Date(moment);
  const info = {
    day: day[date.getDay()],
    month: month[date.getMonth()],
    isoString: date.toISOString().substring(6, 10).concat('-'.concat(date.toISOString().substring(0, 4))).split('T')[0].split('-').join('/')
  };
  
  return  (
    <>
      <Wrapper>
        <Container>
          <Text>{info.day}</Text>
          <Subtext>{info.isoString}</Subtext>
        </Container>
      </Wrapper>
    </>
  );
};


export default TabButton;
