import React, { useEffect, cloneElement, useState  } from 'react';
import styled from 'styled-components';
import { colors, gridSize, layers, animation, fontSize, borderRadius, gradients, fontSizeSmall, typography } from '@theme/constants';
import ReactSelect, { Props as SelectProps, components } from 'react-select';
import { FaChevronDown } from 'react-icons/fa';
import { HiSearch } from 'react-icons/hi';
import {
  Button
} from '..';

const Styled = styled<any>(ReactSelect)`
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
    }
    &__menu-list {
      padding: 0;
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
        margin-right: ${gridSize() * 1}px;
        margin-left: 0;
      }
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
    }
    &__group {
      padding: ${gridSize() * 0.75}px 0;
      padding-top: ${gridSize() * 1.25}px;
    }
    &__group-heading {
      ${typography.heading.h100()}
      margin-top: 0;
    }
  }
`;

const DropdownIndicator = () => (
  <FaChevronDown />
);

const StyledOption = styled.span<any>`
  .react-select__option {
    &:hover {
      background-color: ${({ isMouseOverAction, theme: { dropdownStyles } }) => isMouseOverAction ? dropdownStyles.background['body'].hover() : 'auto'} !important;
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

const Option = ({
  data,
  innerProps,
  ...rest
}: any) => {
  const { label, icon, action } = data || {};
  const [isMouseOverAction, IsMouseOverActionValue] = useState(false);
  
  const onClick = (e: any) => {
    e.preventDefault();
    if(isMouseOverAction) return;
    innerProps.onClick(e);
  };

  const onActionClick = (e: any) => {
    console.log('poop')
  };
  
  return (
    <StyledOption isMouseOverAction={isMouseOverAction}>
      <components.Option {...rest} innerProps={{ ...innerProps, onClick }}>
        {icon && icon()}
        {label}
        {action && (
          <span 
            style={{  marginLeft: 'auto' }}
            onMouseOver={() => IsMouseOverActionValue(true)}
            onFocus={() => IsMouseOverActionValue(true)}
            onMouseLeave={() => IsMouseOverActionValue(false)}
            onBlur={() => IsMouseOverActionValue(false)}
          >
            <Button 
              appearance="starred"
              spacing="none"
              iconBefore={action.icon}
              onClick={onActionClick}
            />
          </span>
        )}
      </components.Option>
    </StyledOption>
  );
};

const SingleValue = ({
  data,
  ...rest
}: any) => {
  const { label, icon } = data?.options ?? data;
  return (
    <components.SingleValue {...rest}>
      {icon && icon()}
      {label}
    </components.SingleValue>
  );
};

const GroupHeading = ({
  ...rest
}: any) => {
  return (
    <components.GroupHeading {...rest} />
  );
};

const SearchIcon = styled(HiSearch)`
  display: flex !important;
  position: absolute;
  align-self: center !important;
  left: ${gridSize() * 0.25}px;
  height: ${gridSize() * 2.5}px !important;
  width: ${gridSize() * 2.5}px !important;
`;

const Input = ({
  data,
  ...rest
}: any) => {
  return (
    <>
      {rest.value && <SearchIcon />}
      <components.Input {...rest} />
    </>
  );
};

const Dropdown = ({
  placeholder = 'Select',
  defaultValue,
  options,
}: SelectProps) => {

  return (
      <Styled
        classNamePrefix="react-select"
        placeholder={placeholder}
        options={options}
        escapeClearsValue
        closeMenuOnScroll
        components={{ DropdownIndicator, Option, SingleValue, Input, GroupHeading, IndicatorSeparator: null }}
        hideSelectedOptions
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

export default Dropdown;