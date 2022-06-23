import React from 'react';
import styled from 'styled-components';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { colors, gridSize } from '@theme/constants';
import { MdLogin, MdMessage, MdNotifications } from 'react-icons/md';
import { HiOutlineChatAlt, HiOutlineBell, HiOutlineUser, HiHome, HiStar } from 'react-icons/hi';
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
  Avatar
} from '@components/core';

import {
  PageLayout,
  TopNavigation,
  Content,
  Main,
  LeftSidebar,
  RightSidebar,
  Dropdown,
  SideBar, Section, ButtonItem,
  ToggleButton,
  DayTabs
} from '@components/core';
import { useState } from 'react';
import { FaProjectDiagram } from 'react-icons/fa';
import { MdWorkspaces } from 'react-icons/md';
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
  { title: "QATR-2068", children: "24 open, 2 in progress, 192 closed" },
  { title: "QATR-2088", children: "24 open, 2 in progress, 192 closed" },
  { title: "QATR-2077", children: "24 open, 2 in progress, 192 closed" },
  { title: "Mining Checklist", children: "24 open, 2 in progress, 192 closed" },
  { title: "Editor Smoke Checklist", children: "24 open, 2 in progress, 192 closed" },
  { title: "Engine Tools Regressions", children: "24 open, 2 in progress, 192 closed" },
];

const spaces = [
  { title: "ATX QA Daily Tasks", children: "24 open, 2 in progress, 192 closed" },
  { title: "UK QA Daily Tasks", children: "24 open, 2 in progress, 192 closed" },
  { title: "USPU Sprints", children: "24 open, 2 in progress, 192 closed" },
  { title: "Live Release", children: "24 open, 2 in progress, 192 closed" },
];

const projects = [
  { title: "QA", children: "12 spaces, 195 total tasks, 32 total active tasks" },
  { title: "Live QA", children: "12 spaces, 195 total tasks, 32 total active tasks" },
  { title: "Embedded QA", children: "12 spaces, 195 total tasks, 32 total active tasks" },
];
//TODO: add filter bar
// TODO: add gridlines?, add option to view in scheduler mode (show times, default is full day)

export const Default: ComponentStory<typeof Header> = () => {
  const [select, setSelect] = useState();
  const [list, setList]: any = useState(tasks);

  return (
    <PageLayout>
      <TopNavigation>
        <Header>
          <HeaderDesignation />
          <HeaderMenuBar>
            <HeaderMenuItem>
              <Dropdown />
            </HeaderMenuItem>
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
          <DayTabs />
          <PageHeader
            children="ATX QA"
            breadcrumbs="ATX QA / Daily tasks"
            actions={(
              <>
                <Button iconBefore={MdMenu}></Button>
                <Button iconBefore={MdDateRange}></Button>
                <Button iconBefore={MdChevronLeft}></Button>
                <Button iconBefore={MdChevronRight}></Button>
              </>
            )}
          />
          <Grid columns={3}>
            <GridColumn medium={3}>
              {/* <CardGroup>
                {list.map((item: any) => (
                  <Card title={item.title} children={item.children} />
                ))}
              </CardGroup> */}
            </GridColumn>
          </Grid>
        </Main>
      </Content>
    </PageLayout>
  );
};
