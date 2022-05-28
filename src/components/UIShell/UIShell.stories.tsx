import React, { Children } from 'react';
import styled from 'styled-components';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { gridSize } from '@theme/constants';
import { MdLogin } from 'react-icons/md';
import { HiOutlineChatAlt, HiOutlineBell, HiOutlineUser, HiHome, HiStar } from 'react-icons/hi';
import { 
  Header,
  HeaderDesignation,
  HeaderMenuBar,
  HeaderMenuItem,
  HeaderGlobalBar,
  HeaderGlobalAction,
  Dropdown
} from '@components/core';

export default {
  title: 'Components/UI Shell',
  subcomponents: {
    Header,
    HeaderDesignation,
    HeaderMenuBar,
    HeaderMenuItem,
    HeaderGlobalBar,
    HeaderGlobalAction,
  },
  parameters: {
    layout: 'fullscreen',
  },
} as ComponentMeta<any>;

const CanvasWithScroll = styled.div`
  display: inline-flex;
  flex-direction: column;
  position: absolute;
  top: 0;
  left: 0;
  height: calc(100% + ${gridSize() * 10}px);
  width: 100%;
`;

export const HeaderBase: ComponentStory<any> = ({ children, ...rest}) => (
  <CanvasWithScroll>
    <Header {...rest}>
      <HeaderDesignation />
      {children}
    </Header>
  </CanvasWithScroll>
);
HeaderBase.storyName = "Header Base";

export const HeaderBaseWGlobalBar = HeaderBase.bind({});
HeaderBaseWGlobalBar.storyName = "Header Base w/ [Global Actions]";
HeaderBaseWGlobalBar.args = {
  children: (
    <>
      <HeaderGlobalBar>
        <HeaderGlobalAction tooltip="Log in" iconBefore={MdLogin} />
        <HeaderGlobalAction appearance="primary">
          Sign up
        </HeaderGlobalAction>
      </HeaderGlobalBar>
    </>
  )
};

export const HeaderBaseWMenuBar = HeaderBase.bind({});
HeaderBaseWMenuBar.storyName = "Header Base w/ [Menu Items]";
HeaderBaseWMenuBar.args = {
  children: (
    <>
      <HeaderMenuBar>
        <HeaderMenuItem>
          Why Taskovate
        </HeaderMenuItem>
        <HeaderMenuItem>
          Solutions
        </HeaderMenuItem>
        <HeaderMenuItem>
          Pricing
        </HeaderMenuItem>
        <HeaderMenuItem>
          Getting Started
        </HeaderMenuItem>
      </HeaderMenuBar>
    </>
  )
};

export const HeaderBaseWActionsMenus = HeaderBase.bind({});
HeaderBaseWActionsMenus.storyName = "Header Base w/ [Menu Items, Global Actions]";
HeaderBaseWActionsMenus.args = {
  children: (
    <>
      <HeaderMenuBar>
        <HeaderMenuItem>
          Why Taskovate
        </HeaderMenuItem>
        <HeaderMenuItem>
          Solutions
        </HeaderMenuItem>
        <HeaderMenuItem>
          Pricing
        </HeaderMenuItem>
        <HeaderMenuItem>
          Getting Started
        </HeaderMenuItem>
      </HeaderMenuBar>
      <HeaderGlobalBar>
        <HeaderGlobalAction tooltip="Log in" iconBefore={MdLogin} />
        <HeaderGlobalAction appearance="primary">
          Sign up
        </HeaderGlobalAction>
      </HeaderGlobalBar>
    </>
  )
};

export const HeaderBaseWDroplistActionsMenus = HeaderBase.bind({});
HeaderBaseWDroplistActionsMenus.storyName = "Header App";
HeaderBaseWDroplistActionsMenus.args = {
  children: (
    <>
      <HeaderMenuBar>
        <HeaderMenuItem>
          <Dropdown />
        </HeaderMenuItem>
        <HeaderMenuItem>
          Your work
        </HeaderMenuItem>
        <HeaderMenuItem>
          People
        </HeaderMenuItem>
        <HeaderMenuItem>
          Files
        </HeaderMenuItem>
      </HeaderMenuBar>
      <HeaderGlobalBar>
        <HeaderGlobalAction tooltip="Log in" iconBefore={MdLogin} />
        <HeaderGlobalAction appearance="primary">
          Sign up
        </HeaderGlobalAction>
      </HeaderGlobalBar>
    </>
  )
};

export const HeaderWContent: ComponentStory<any> = ({ children, ...rest}) => (
  <>
    <Header {...rest}>
      <HeaderDesignation />
      <HeaderMenuBar>
        <HeaderMenuItem>
          <Dropdown />
        </HeaderMenuItem>
        <HeaderMenuItem>
          Your work
        </HeaderMenuItem>
        <HeaderMenuItem>
          People
        </HeaderMenuItem>
        <HeaderMenuItem>
          Files
        </HeaderMenuItem>
      </HeaderMenuBar>
      <HeaderGlobalBar>
        <HeaderGlobalAction tooltip="Log in" iconBefore={MdLogin} />
        <HeaderGlobalAction appearance="primary">
          Sign up
        </HeaderGlobalAction>
      </HeaderGlobalBar>
    </Header>
  </>
);

HeaderWContent.storyName = "Header App w/ [SideBars, Content, Footer]";