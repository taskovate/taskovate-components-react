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
      z-index: ${layers.select() + 1};
      transition: all ${animation.normal()}, 
      // border-bottom-left-radius 0ms, 
      // border-bottom-right-radius 0ms,
      border-bottom-width 0ms;
      margin: 0;
      min-height: 0;
      border: ${gridSize() * 0.25}px solid ${({ theme: { inputStyles } }) => inputStyles.borderColor['body'].default()};
      box-shadow: none;
      border-radius: ${borderRadius() * 1}px;
      padding: ${gridSize() * 0.5625}px ${gridSize() * 1.25}px;
      // line-height: normal;
      background-color: ${({ theme: { inputStyles } }) => inputStyles.background['body'].default()};
      color: ${({ theme: { inputStyles } }) => inputStyles.color['body'].default()};
      :hover {
        border-color: ${({ theme: { inputStyles } }) => inputStyles.borderColor['body'].hover()};
      }
      :focus, &--is-focused {
        border-color: ${({ theme: { inputStyles } }) => inputStyles.borderColor['body'].focus()} !important;
      }
      &--menu-is-open {
        // border-bottom-width: 0;
        border-bottom-left-radius: 0;
        border-bottom-right-radius: 0;
        // border-bottom-color: ${({ theme: { inputStyles } }) => inputStyles.background['body'].default()} !important;
      }
    }
    &__placeholder {
      margin: 0;
      color: ${({ theme: { inputStyles } }) => inputStyles.color['body'].placeholder()};
    }
    &__value-container {
      padding: 0 0 0 0;
      min-width: calc(200px - ${gridSize() * 2.25}px);
    }
    &__input-container {
      padding: 0;
      margin: 0;
      color: ${({ theme: { inputStyles } }) => inputStyles.color['body'].default()};
    }
    &__indicator-separator {
      display: none;
    }
    &__indicators {
      color: ${({ theme: { inputStyles } }) => inputStyles.color['body'].default()};
      margin-left: ${gridSize() * 0.75}px;
    }
    &__menu {
      margin: 0 0 ${gridSize() * 1}px 0;
      background-color: ${({ theme: { inputStyles } }) => inputStyles.background['body'].default()};
      box-shadow: ${({ theme }) => theme.elevation[300]};
      z-index: ${layers.select()};
      border-radius: ${borderRadius() * 1.25}px;
      border-top-left-radius: 0;
      border-top-right-radius: 0;
      border: ${gridSize() * 0.25}px solid ${({ theme: { inputStyles } }) => inputStyles.borderColor['body'].focus()};
      border-top: none;
      z-index: -1;
      @keyframes fadeIn {
        0% {
          opacity: 0;
          border: none;
        }
        100% {
          opacity: 1;
          border: ${gridSize() * 0.25}px solid ${({ theme: { inputStyles } }) => inputStyles.borderColor['body'].focus()};
          border-top: none;
    }
      }
      animation: fadeIn ${animation.slow()};
      &--close {
        animation: fadeIn ${animation.slow()};
        animation-direction: reverse;
      }
    }
    &__menu-list {
      padding: ${gridSize() * 0.5}px 0;
    }
    &__menu-notice {
      padding: ${gridSize() * 0.75}px ${gridSize() * 1.25}px;
      color: ${({ theme: { inputStyles } }) => inputStyles.color['body'].placeholder()};
    }
    &__option {
      transition: ${animation.normal()};
      padding: ${gridSize() * 0.75}px ${gridSize() * 1.25}px;
      // line-height: normal;
      background-color: ${({ theme: { inputStyles } }) => inputStyles.background['body'].default()};
      color: ${({ theme: { inputStyles } }) => inputStyles.color['body'].default()};
      &:hover {
        background-color: ${({ theme: { inputStyles } }) => inputStyles.background['body'].hover()};
      }
      &:active {
        background-color: ${({ theme: { inputStyles } }) => inputStyles.background['body'].active()};
      }
      &--is-selected {
        background-color: ${({ theme: { inputStyles } }) => inputStyles.background['body'].selected()} !important;
      }
    }
    &__single-value {
      color: ${({ theme: { inputStyles } }) => inputStyles.color['body'].default()};
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