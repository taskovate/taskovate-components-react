import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { colors, gridSize, layers, animation, fontSize, borderRadius, gradients, fontSizeSmall, typography } from '@theme/constants';
import ReactSelect, { Props as SelectProps, components } from 'react-select';
import { FaChevronDown } from 'react-icons/fa';
import { HiOutlineStar, HiSearch, HiStar } from 'react-icons/hi';
import { useStore } from '@store/core';
import { SpaceImage } from '.';
import { Button } from '..';

const Styled = styled.div<any>`
  .react-select__option {
    &:hover:not(&--is-selected) {
      background-color: ${({ isMouseOverStar, theme: { dropdownStyles } }) => isMouseOverStar ? dropdownStyles.background['body'].hover() : 'auto'} !important;
    }
    &:hover &--is-selected {
      background-color: ${({ theme: { dropdownStyles } }) => dropdownStyles.background['body'].selected()} !important;
    }
    
    button svg {
      display: flex;
      align-content: center;
      width: ${gridSize() * 2.5}px;
      height: ${gridSize() * 2.5}px;
      margin: -${gridSize() * 1}px 0;
    }
  }
`;

const StarredIcon = styled(HiStar)`
`;
const UnstarredIcon = styled(HiOutlineStar)`
`;


const StarButton = ({ 
  isStarred, 
  onClick, 
  onMouseOver,
  onFocus,
  onMouseLeave,
  onBlur
}: any) => {
  return (
    <Button
      appearance="starred"
      spacing="none"
      iconBefore={isStarred ? <StarredIcon /> : <UnstarredIcon />}
      onClick={onClick}
      style={{ marginLeft: 'auto' }}
      onMouseOver={onMouseOver}
      onFocus={onFocus}
      onMouseLeave={onMouseLeave}
      onBlur={onBlur}
    />
  );
};

const Option = ({
  data,
  innerProps,
  ...rest
}: any) => {
  const { Space }: any = useStore();
  const [isMouseOverStar, setIsMouseOverStar] = useState(false);

  const onStarClick = (data: any) => {
    console.log(`onStarClick - ${data.label}`)
    const prevStarred: any = Space.starredItemsVar();
    let newStarred = prevStarred;
    if(prevStarred.indexOf(data) !== -1)
      newStarred = newStarred.filter((el: any) => el !== data);
    else
      newStarred = newStarred.concat([data])
    Space.starredItemsVar(newStarred);
  };

  const onClick = (e: any) => {
    e.preventDefault();
    if(isMouseOverStar) return;
    innerProps.onClick(e);
  };

  const isStarable = rest.options
  .filter((grp: any) => grp.starable === true)
  .some((grp: any) => grp.options.indexOf(data) !== -1);

  return (
    <Styled isMouseOverStar={isMouseOverStar}>
      <components.Option {...rest} innerProps={{ ...innerProps, onClick }}>
        {typeof data.image === 'string' ? <SpaceImage src={data.image} /> : data.image()}
        {data.label}
        {isStarable && (
          <StarButton
            isStarred={Space.starredItemsVar().indexOf(data) !== -1}
            onClick={() => onStarClick(data)}
            onMouseOver={() => setIsMouseOverStar(true)}
            onFocus={() => setIsMouseOverStar(true)}
            onMouseLeave={() => setIsMouseOverStar(false)}
            onBlur={() => setIsMouseOverStar(false)}
          />
        )}
      </components.Option>
    </Styled>
  );
};

export default Option;