import React, { useEffect, cloneElement, useState  } from 'react';
import styled from 'styled-components';
import { colors, gridSize, layers, animation, fontSize, borderRadius, gradients, fontSizeSmall } from '@theme/constants';
import ReactSelect, { Props as SelectProps } from 'react-select';
import { FaChevronDown } from 'react-icons/fa';

const Styled = styled<any>(ReactSelect)`
  svg {
    height: ${gridSize() * 1.5 / fontSize()}em;
    width: ${gridSize() * 1.5 / fontSize()}em;
    margin-left: auto;
  }

  .react-select {
    &__control {
      flex-wrap: nowrap;
      z-index: ${layers.select() + 1};
      transition: all ${animation.normal()};
      margin: 0;
      min-height: 0;
      border: ${gridSize() * 0.25}px solid ${({ theme: { dropdownStyles } }) => dropdownStyles.borderColor['body'].default()};
      box-shadow: none;
      border-radius: ${borderRadius() * 1}px;
      padding: ${gridSize() * 0.5625}px ${gridSize() * 1.25}px;
      // line-height: normal;
      background-color: ${({ theme: { dropdownStyles } }) => dropdownStyles.background['body'].default()};
      color: ${({ theme: { dropdownStyles } }) => dropdownStyles.color['body'].default()};
      :hover {
        border-color: ${({ theme: { dropdownStyles } }) => dropdownStyles.borderColor['body'].hover()};
      }
      :focus, &--is-focused {
        border-color: ${({ theme: { dropdownStyles } }) => dropdownStyles.borderColor['body'].focus()} !important;
      }
      &--menu-is-open {
        border-bottom-left-radius: 0;
        border-bottom-right-radius: 0;
        ::before { 
          display: block;
          position: absolute;
          content: '';
          background-color: ${({ theme: { dropdownStyles } }) => dropdownStyles.background['body'].default()};
          left: 0;
          bottom: -${gridSize() * 0.25}px;
          width: calc(100%);
          height: ${gridSize() * 0.25}px;
          transition: all ${animation.normal()};
        }
      }
    }
    &__placeholder {
      margin: 0;
      color: ${({ theme: { dropdownStyles } }) => dropdownStyles.color['body'].placeholder()};
    }
    &__value-container {
      padding: 0 0 0 0;
      min-width: calc(200px - ${gridSize() * 2.25}px);
    }
    &__input-container {
      padding: 0;
      margin: 0;
      color: ${({ theme: { dropdownStyles } }) => dropdownStyles.color['body'].default()};
    }
    &__indicator-separator {
      display: none;
    }
    &__indicators {
      color: ${({ theme: { dropdownStyles } }) => dropdownStyles.color['body'].default()};
      margin-left: ${gridSize() * 0.75}px;
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
    }
    &__menu-list {
      padding: ${gridSize() * 0.5}px 0;
    }
    &__menu-notice {
      padding: ${gridSize() * 0.75}px ${gridSize() * 1.25}px;
      padding-bottom: ${gridSize() * 1}px;
      color: ${({ theme: { dropdownStyles } }) => dropdownStyles.color['body'].placeholder()};
    }
    &__option {
      transition: ${animation.normal()};
      padding: ${gridSize() * 0.75}px ${gridSize() * 1.25}px;
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
      color: ${({ theme: { dropdownStyles } }) => dropdownStyles.color['body'].default()};
    }
  }
`;

const DropdownIndicator = () => (
  <FaChevronDown />
);

const Dropdown = ({
  placeholder = 'Select',
  options,
}: SelectProps) => {

  return (
      <Styled
        classNamePrefix="react-select"
        placeholder={placeholder}
        options={options}
        escapeClearsValue
        closeMenuOnScroll
        components={{ DropdownIndicator }}
        hideSelectedOptions
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

export default Dropdown;