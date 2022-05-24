import React, { useEffect, cloneElement, useState  } from 'react';
import styled from 'styled-components';
import { colors, gridSize, layers, animation, fontSize, borderRadius, gradients, fontSizeSmall, typography } from '@theme/constants';
import ReactSelect, { Props as SelectProps, components } from 'react-select';
import { FaChevronDown } from 'react-icons/fa';
import { hex2rgba } from '@theme/helpers';
import { HiOutlineStar, HiSearch, HiStar, HiHome } from 'react-icons/hi';
import { useStore } from '@internal/core';
import { useQuery } from '@apollo/client';
import { GET_STARRED_ITEMS } from '@internal/queries';
import { Input, Option, SingleValue, MenuList } from '.';

const DropdownIndicator = () => <FaChevronDown />;

const Dropdown = ({
  placeholder = 'Select',
  defaultValue,
}: SelectProps) => {
  const store: any = useStore();
  const { data: { starredItems } } = useQuery(GET_STARRED_ITEMS);

  const options = [
    {
      label: 'Starred',
      options: store.Space.spaceItemsVar().filter((opt: any) => starredItems.indexOf(opt) !== -1) || [],
      starable: true
    },
    {
      label: 'My Spaces',
      options: store.Space.spaceItemsVar().filter((opt: any) => starredItems.indexOf(opt) === -1),
      starable: true
    },
    {
      label: 'Feeds',
      options: [
        { value: "chocolate", label: "Home", image: HiHome },
        { value: "strawberry", label: "All", image: HiHome  }
      ]
    }
  ];
  // TODO: add pagination for the menu scroll (dynamically load spaces on scroll)

  return (
      <Styled
        classNamePrefix="react-select"
        placeholder={placeholder}
        options={options}
        escapeClearsValue
        closeMenuOnScroll
        components={{ 
          DropdownIndicator, 
          Option, 
          SingleValue, 
          Input,
          MenuList,
          IndicatorSeparator: null
        }}
        // hideSelectedOptions
        defaultValue={defaultValue}
        // menuIsOpen
        onMenuClose={() => {
          const menuEl = document.querySelector(`.react-select__menu`);
          const containerEl = menuEl?.parentElement;
          const clonedMenuEl: any = menuEl?.cloneNode(true);
    
          if (!clonedMenuEl) return; // safeguard
    
          clonedMenuEl.classList.add("react-select__menu--close");
          clonedMenuEl.addEventListener("animationend", () => {
            containerEl?.removeChild(clonedMenuEl);
          });
    
          containerEl?.appendChild(clonedMenuEl!);
        }}
      />
  );
};

const Styled = styled<any>(ReactSelect)`
  .react-select {
    &__control {
      flex-wrap: nowrap;
      z-index: ${layers.select() + 1};
      transition: ${animation.normal()};
      margin: 0;
      min-height: 0;
      border: ${gridSize() * 0.25}px solid ${({ theme: { dropdownStyles } }) => dropdownStyles.borderColor['body'].default()};
      box-shadow: none;
      border-radius: ${borderRadius() * 1}px;
      padding: ${gridSize() * 0.5}px ${gridSize() * 1.25}px;
      padding-left: ${gridSize() * 0.75}px;
      // line-height: normal;
      height: ${gridSize() * 4}px;
      background-color: ${({ theme: { dropdownStyles } }) => dropdownStyles.background['body'].default()};
      color: ${({ theme: { dropdownStyles } }) => dropdownStyles.color['body'].default()};
      :hover {
        border-color: ${({ theme: { dropdownStyles } }) => dropdownStyles.borderColor['body'].hover()};
      }
      :focus, &--is-focused {
        border-color: ${({ theme: { dropdownStyles } }) => dropdownStyles.borderColor['body'].focus()} !important;
      }
      ::before { 
        display: block;
        position: absolute;
        content: '';
        background-color: transparent;
        border-bottom: ${gridSize() * 0.25}px dashed transparent;
        // border-bottom-right-radius: ${borderRadius() * 1}px;
        // border-bottom-left-radius: ${borderRadius() * 1}px;
        left: 0;
        bottom: -${gridSize() * 0.25}px;
        height: ${gridSize() * 0.25}px;
        width: calc(100%);
        transition: ${animation.normal()};
      }
      // ::after { 
      //   display: block;
      //   position: absolute;
      //   content: '';
      //   background: linear-gradient(0deg, transparent, transparent 100%) bottom;
      //   left: 0;
      //   bottom: -${gridSize() * 1}px;
      //   width: calc(100%);
      //   height: ${gridSize() * 0.75}px;
      //   transition: ${animation.normal()};
      // }
      &--menu-is-open {
        border-bottom-left-radius: 0;
        border-bottom-right-radius: 0;
        // ::after {
        //   background: linear-gradient(0deg, transparent, ${hex2rgba('#000', 0.375)} 75%) bottom;
        // }
        ::before { 
          background-color: ${({ theme: { dropdownStyles } }) => dropdownStyles.background['body'].default()};
          // border-bottom-color: ${({ theme: { dropdownStyles } }) => dropdownStyles.borderColor['body'].focus()};
        }
      }
    }
    &__placeholder {
      margin: 0;
      color: ${({ theme: { dropdownStyles } }) => dropdownStyles.color['body'].placeholder()};
      margin-left: ${gridSize() * 0.5}px;
    }
    &__value-container {
      padding: 0 0 0 0;
      min-width: calc(200px - ${gridSize() * 2.25}px);
    }
    &__input-container {
      padding: 0;
      margin: 0;
      color: ${({ theme: { dropdownStyles } }) => dropdownStyles.color['body'].default()};
      // background-color: rgba(255 0 0 / 10%);
      margin-left: ${gridSize() * 3.75}px;
      // line-height: 20px;
    }
    &__indicators {
      color: ${({ theme: { dropdownStyles } }) => dropdownStyles.color['body'].default()};
      margin-left: ${gridSize() * 0.75}px;
      & > svg {
        height: ${gridSize() * 1.5 / fontSize()}em;
        width: ${gridSize() * 1.5 / fontSize()}em;
        margin-left: auto;
      }
    }
    &__menu {
      margin: 0 0 ${gridSize() * 1}px 0;
      background-color: ${({ theme: { dropdownStyles } }) => dropdownStyles.background['body'].default()};
      box-shadow: ${({ theme }) => theme.elevation[300]};
      z-index: ${layers.select()};
      border-radius: ${borderRadius() * 1.25}px;
      border-top-left-radius: 0;
      border-top-right-radius: 0;
      border: ${gridSize() * 0.25}px solid ${({ theme: { dropdownStyles } }) => dropdownStyles.borderColor['body'].focus()};
      border-top: none;
      z-index: -1;
      @keyframes fadeIn {
        0% {
          opacity: 0;
          border-color: ${({ theme: { dropdownStyles } }) => dropdownStyles.background['body'].default()};
        }
        100% {
          opacity: 1;
          border-color: ${({ theme: { dropdownStyles } }) => dropdownStyles.borderColor['body'].focus()};
        }
      }
      animation: fadeIn ${animation.normal()};
      &--close {
        animation: fadeIn ${animation.normal()};
        animation-direction: reverse;
      }
      padding-bottom:${gridSize() * 0.75}px;
    }
    &__menu-list {
      padding: 0;
      max-height: 60vh;
      // padding-left: ${gridSize() * 0.25}px;
      overflow-y: scroll;
    }
    &__menu-notice {
      padding: ${gridSize() * 0.75}px ${gridSize() * 1.25}px;
      padding-bottom: ${gridSize() * 1}px;
      color: ${({ theme: { dropdownStyles } }) => dropdownStyles.color['body'].placeholder()};
    }
    &__option {
      display: flex;
      flex-direction: row;
      flex-grow: 1;
      justify-content: start;
      align-content: center;
      align-items: center;
      & > svg {
        height: ${gridSize() * 2.5}px;
        width: ${gridSize() * 2.5}px;
        margin-right: ${gridSize() * 1.25}px;
        margin-left: 0;
      }
      // border-radius: ${borderRadius() * 1}px;
      border-top-right-radius: ${borderRadius() * 1}px;
      border-bottom-right-radius: ${borderRadius() * 1}px;
      transition: ${animation.normal()};
      padding: ${gridSize() * 0.75}px ${gridSize() * 2}px;
      // padding-right: ${gridSize() * 2.5}px;
      // line-height: normal;
      background-color: ${({ theme: { dropdownStyles } }) => dropdownStyles.background['body'].default()};
      color: ${({ theme: { dropdownStyles } }) => dropdownStyles.color['body'].default()};
      &:hover {
        background-color: ${({ theme: { dropdownStyles } }) => dropdownStyles.background['body'].hover()};
      }
      &:active {
        background-color: ${({ theme: { dropdownStyles } }) => dropdownStyles.background['body'].active()};
      }
      &--is-selected {
        background-color: ${({ theme: { dropdownStyles } }) => dropdownStyles.background['body'].selected()} !important;
      }
    }
    &__single-value {
      display: flex;
      flex-direction: row;
      align-items: center;
      align-content: center;
      color: ${({ theme: { dropdownStyles } }) => dropdownStyles.color['body'].default()};
      & > svg {
        height: ${gridSize() * 2.5}px;
        width: ${gridSize() * 2.5}px;
        margin-right: ${gridSize() * 1}px;
        margin-left: 0;
      }
      & > img {
        margin-right: ${gridSize() * 1}px;
      }
    }
    &__group {
      padding: ${gridSize() * 0.75}px 0;
    }
    &__group-heading {
      ${typography.heading.h100()}
      margin: ${gridSize() * 0.75}px 0;
      margin-top: ${gridSize() * 1}px;
      // margin-top: 0;
    }
  }
`;

export default Dropdown;