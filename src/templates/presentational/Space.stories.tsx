import React from 'react';
import styled from 'styled-components';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { colors, gridSize } from '@theme/constants';
import { MdLogin, MdMessage, MdNotifications, MdRecentActors } from 'react-icons/md';
import { HiOutlineChatAlt, HiOutlineBell, HiOutlineUser, HiHome, HiStar, HiOutlineClock } from 'react-icons/hi';
import {
  Header,
  HeaderDesignation,
  HeaderMenuBar,
  HeaderMenuItem,
  HeaderGlobalBar,
  HeaderGlobalAction,
  Plate,
  Button,
  PageHeader,
  Grid,
  GridColumn,
  Card,
  CardGroup,
  Select,
  TextField,
  Avatar,
  ButtonGroup
} from '@components/core';

import {
  Layout,
  TopNavigation,
  Content,
  Main,
  LeftSidebar,
  RightSidebar,
  Dropdown,
  Sidebar, Section, ButtonItem,
  ToggleButton,
} from '@components/core';
import { useState } from 'react';
import { FaClock, FaFire, FaPeopleCarry, FaProjectDiagram } from 'react-icons/fa';
import { IoIosArrowDown, IoIosClock, IoIosPeople, IoMdCalendar, IoMdTimer } from 'react-icons/io';
import { TbUrgent } from 'react-icons/tb';
import { ToggleSelect } from 'src/components/ToggleButton';
import { MdChevronLeft, MdChevronRight, MdDateRange,  MdMenu } from 'react-icons/md';

export default {
  title: 'Templates/Space',
  component: Header,
  parameters: {
    layout: 'fullscreen',
  },
} as ComponentMeta<typeof Header>;

const options = [
  { value: 'space', label: 'Spaces' },
  { value: 'project', label: 'Projects' },
];

const tasks = [
  { title: "QATR-2068" },
  { title: "QATR-2088" },
  { title: "QATR-2077" },
  { title: "Mining Checklist" },
  { title: "Editor Smoke Checklist" },
  { title: "Engine Tools Regressions" },
];
//TODO: add filter bar
// TODO: add gridlines?, add option to view in scheduler mode (show times, default is full day)

export const Default: ComponentStory<typeof Header> = () => {
  const [select, setSelect] = useState();
  const [list, setList]: any = useState(tasks);

  return (
    <Layout>
      <TopNavigation>
        <Header>
          <HeaderDesignation />
          <HeaderMenuBar>
            <HeaderMenuItem>
              <Dropdown />
            </HeaderMenuItem>
            {/* <HeaderMenuItem>
              Planner
            </HeaderMenuItem>
            <HeaderMenuItem>
              Stats
            </HeaderMenuItem>
            <HeaderMenuItem>
              Tasks
            </HeaderMenuItem> */}
            <HeaderGlobalAction appearance="primary">
              Create
            </HeaderGlobalAction>
          </HeaderMenuBar>
          <HeaderGlobalBar>
            <HeaderGlobalAction iconBefore={MdMessage}>
            </HeaderGlobalAction>
            <HeaderGlobalAction iconBefore={MdNotifications}>
            </HeaderGlobalAction>
            <HeaderGlobalAction isAvatar tooltip="Your profile and settings">
              <Avatar />
            </HeaderGlobalAction>
          </HeaderGlobalBar>
        </Header>
      </TopNavigation>
      <Content>
        <Main>
          <CardGroup>
            {list.map((item: any) => (
              <Card title={item.title} children={item.children} />
            ))}
          </CardGroup>
        </Main>
        <RightSidebar>
          <Sidebar>
            <CardGroup title="Project tasks">
              {list.map((item: any) => (
                <Card title={item.title} children={item.children} />
              ))}
            </CardGroup>
          </Sidebar>
        </RightSidebar>
      </Content>
    </Layout>
  );
};