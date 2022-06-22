import React, { FC, useState, useEffect } from 'react';
import { gridSize, borderRadius, colors, fontSizeSmall, fontSize, animation, headerFontFamily } from '@theme/constants';
import styled from 'styled-components';
import { Button } from '@components/core';
import { BsChevronBarRight } from 'react-icons/bs';
import { MdChevronLeft, MdChevronRight } from 'react-icons/md';
import { HiDotsVertical } from 'react-icons/hi';
import { Popover } from '..';

const day = ["Sunday", "Monday", "Tueday", "Wednesday", "Thursday", "Friday", "Saturday"];
const month = ["January","February","March","April","May","June","July","August","September","October","November","December"];

const Text = styled.span<any>`
  line-height: 1em;
  font-weight: 700;
  font-size: ${fontSize() * 1}px;
  margin-bottom: ${gridSize() * 0.25}px;
  color: ${colors.n[400]};
  transition: ${animation.normal()};
  font-family: ${headerFontFamily()};
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  letter-spacing: -0.02rem;
  width: 100%;
  opacity: ${({ isMouseOver, isSelected, isMenuOpen }) => (isMouseOver||isSelected||isMenuOpen) ? 1 : 0};
  transform: ${({ isMouseOver, isSelected, isMenuOpen }) => (isMouseOver||isSelected||isMenuOpen) ? `scale(1) translateX(0)` : `scale(0) translateX(calc(-100% + ${gridSize() * 1}px))`};
`;

const Subtext = styled.span<any>`
  font-size: ${fontSizeSmall()}px;
  color: ${colors.n[500]};
  line-height: 1em;
  border-radius: ${borderRadius() * 1}px; 
  font-weight: 600;
  transition: ${animation.normal()};
  letter-spacing: 0.03rem;
  transform: ${({ isMouseOver, isSelected, isMenuOpen }) => (isMouseOver||isSelected||isMenuOpen) ? `translateY(0)` : `translateY(calc(${gridSize() * -1.875}px))`};
`;

const Wrapper = styled.div<any>`
  display: flex;
  flex-grow: 1;
  padding: ${gridSize() * 0.75}px ${gridSize() * 1}px;
  border-radius: ${borderRadius() * 1}px;
  gap: ${gridSize() * 1}px;
  cursor: pointer;
  user-select: none;
  transition: ${animation.normal()};
  background-color: ${({ isMenuOpen }) => isMenuOpen ? colors.d[800] : colors.d[900]};
  &:hover {
    background-color: ${colors.d[800]};
  }
  &:active {
    background-color: ${colors.d[700]};
  }
  ${Text} {
    color: ${({ isSelected, isMenuOpen }) => isSelected ? 'auto' : isMenuOpen ? colors.n[800] : colors.d[500]};
  }
  ${Subtext} {
    color: ${({ isSelected, isMenuOpen }) => isSelected ? 'auto' : isMenuOpen ? colors.n[900] : colors.d[500]};
  }
  &:hover {
    ${Text} {
      color: ${({ isSelected, isMenuOpen }) => (isSelected||isMenuOpen) ? 'auto' : colors.d[200]};
    }
    ${Subtext} {
      color: ${({ isSelected, isMenuOpen }) => (isSelected||isMenuOpen) ? 'auto' : colors.d[300]};
    }
  }
  &:active {
    ${Text} {
      color: ${({ isSelected, isMenuOpen }) => (isSelected||isMenuOpen) ? 'auto' : colors.d[100]};
    }
    ${Subtext} {
      color: ${({ isSelected, isMenuOpen }) => (isSelected||isMenuOpen) ? 'auto' : colors.d[200]};
    }
  }
`;

const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: start;
  // background-color: red;
`;

const DataContainer = styled.div<any>`
  display: flex;
  flex-direction: row;
  width: 100%;
  flex-grow: 1;
  justify-content: end;
  align-items: center;
  gap: ${gridSize() * 0.5}px;
  visibility: ${({ isMouseOver, isMenuOpen }) => (isMouseOver||isMenuOpen) ? 'visible' : 'hidden'};
  button { color: ${colors.n[600]} !important; }
`;


const ActionsContainer = styled.div`
  display: flex;
  flex-grow: 1;
  background: ${colors.d[800]};
  padding: ${gridSize() * 1}px;
  border-radius: ${borderRadius() * 1}px;
  width: ${gridSize() * 8}px;
`;

const ControlButton = styled.button`
`;

const TabButton: FC<any> = ({
  moment,
  isSelected
}) => {
  const [isMouseOver, setMouseOver] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const info = {
    day: day[moment.getDay()],
    month: month[moment.getMonth()],
    isoString: moment.toISOString().substring(6, 10).concat('-'.concat(moment.toISOString().substring(0, 4))).split('T')[0].split('-').join('/')
  };
  
  const onClick = () => {
    return moment;
  };

  const renderActions = ({ close, ...rest}: any) => (
    <ActionsContainer {...rest}>
      Hi
    </ActionsContainer>
  );

  return  (
    <Popover render={renderActions} onOpenChange={setIsMenuOpen}>
      <Wrapper 
        onClick={onClick}
        isSelected={isSelected}
        onMouseOver={() => setMouseOver(true)}
        onMouseOut={() => setMouseOver(false)}
        isMenuOpen={isMenuOpen}
      >
        <TitleContainer>
          {<Text isSelected={isSelected} isMenuOpen={isMenuOpen} isMouseOver={isMouseOver}>{info.day}</Text>}
          {<Subtext isSelected={isSelected} isMenuOpen={isMenuOpen} isMouseOver={isMouseOver}>{info.isoString}</Subtext>}
        </TitleContainer>
        <DataContainer isMenuOpen={isMenuOpen} isMouseOver={isMouseOver}>
          <Button appearance="subtle" spacing="none" iconBefore={HiDotsVertical} />
        </DataContainer>
      </Wrapper>
    </Popover>
  );
};


export default TabButton;
