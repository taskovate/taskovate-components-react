import React, { FC, useState, useEffect } from 'react';
import { gridSize, borderRadius, colors, fontSizeSmall, fontSize, animation, headerFontFamily } from '@theme/constants';
import styled from 'styled-components';

const day = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
const month = ["January","February","March","April","May","June","July","August","September","October","November","December"];

const Text = styled.span`
  line-height: 1em;
  font-weight: 700;
  font-size: ${fontSize() * 1}px;
  margin-bottom: ${gridSize() * 0.25}px;
  color: ${colors.n[500]};
  transition: ${animation.normal()};
  font-family: ${headerFontFamily()};
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  letter-spacing: -0.02rem;
`;

const Subtext = styled.span`
  font-size: ${fontSizeSmall()}px;
  color: ${(colors.n[600])};
  line-height: 1em;
  border-radius: ${borderRadius() * 1}px; 
  font-weight: 600;
  transition: ${animation.normal()};
  letter-spacing: 0.03rem;
`;

const Wrapper = styled.div<any>`
  display: flex;
  flex-grow: 1;
  align-self: center;
  justify-self: center;
  padding: ${gridSize() * 0.75}px ${gridSize() * 1}px;
  border-radius: ${borderRadius() * 1}px;
  cursor: pointer;
  user-select: none;
  transition: ${animation.normal()};
  background-color: ${colors.d[900]};
  &:hover {
    background-color: ${colors.d[800]};
  }
  &:active {
    background-color: ${colors.d[700]};
  }
  ${Text} {
    color: ${({ isSelected }) => isSelected ? 'auto' : colors.d[200]};
  }
  ${Subtext} {
    color: ${({ isSelected }) => isSelected ? 'auto' : colors.d[300]};
  }
  // opacity: ${({ isSelected }) => isSelected ? 0.8 : 0.6};
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: start;
`;


const TabButton: FC<any> = ({
  moment,
  isSelected
}) => {
  const info = {
    day: day[moment.getDay()],
    month: month[moment.getMonth()],
    isoString: moment.toISOString().substring(6, 10).concat('-'.concat(moment.toISOString().substring(0, 4))).split('T')[0].split('-').join('/')
  };
  
  const onClick = () => {
    return moment;
  };

  return  (
    <>
      <Wrapper onClick={onClick} isSelected={isSelected}>
        <Container>
          <Text>{info.day}</Text>
          <Subtext>{info.isoString}</Subtext>
        </Container>
      </Wrapper>
    </>
  );
};


export default TabButton;
