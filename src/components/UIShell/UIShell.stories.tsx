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
  Dropdown,
  Plate,
  Main,
  Content,
  Footer,
  SideBar
} from '@components/core';

export default {
  title: 'Components/UIShell',
  subcomponents: {
    Header,
    HeaderDesignation,
    HeaderMenuBar,
    HeaderMenuItem,
    HeaderGlobalBar,
    HeaderGlobalAction,
    Dropdown,
    Plate,
    Main,
    Content,
    Footer,
    SideBar
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

export const HeaderBaseWGlobalBar = HeaderBase.bind({});
HeaderBaseWGlobalBar.storyName = "Header Base - Actions";
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
HeaderBaseWMenuBar.storyName = "Header Base - Menus";
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
HeaderBaseWActionsMenus.storyName = "Header Base - Actions and Menus";
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

export const HeaderWContent: ComponentStory<any> = ({ children, ...rest}) => (
  <>
    <Header {...rest}>
      <HeaderDesignation />
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
    </Header>
    <Main>
      <SideBar />
      <Content>
        <Plate>Placeholder</Plate>
        <Plate>Placeholder</Plate>
        <Plate>Placeholder</Plate>
        <Plate>Placeholder</Plate>
        <Plate>Placeholder</Plate>
        <Plate>Placeholder</Plate>
        <Plate>Placeholder</Plate>
        <Plate>Placeholder</Plate>
        <Plate>Placeholder</Plate>
        <Plate>Placeholder</Plate>
        <Plate>Placeholder</Plate>
        <Plate>Placeholder</Plate>
        <Plate>Placeholder</Plate>
        <Plate>Placeholder</Plate>
        <Plate>Placeholder</Plate>
        <Plate>Placeholder</Plate>
        <Plate>Placeholder</Plate>
        <Plate>Placeholder</Plate>
        <Plate>Placeholder</Plate>
        <Plate>Placeholder</Plate>
        <Plate>Placeholder</Plate>
        <Plate>Placeholder</Plate>
        <Plate>Placeholder</Plate>
        <Plate>Placeholder</Plate>
        <Plate>Placeholder</Plate>
        <Plate>Placeholder</Plate>
        <Plate>Placeholder</Plate>
        <Plate>Placeholder</Plate>
        <Plate>Placeholder</Plate>
        <Plate>Placeholder</Plate>
        <Plate>Placeholder</Plate>
      </Content>
      <SideBar />
    </Main>
    <Footer />
  </>
);
HeaderWContent.storyName = "Header and Page"