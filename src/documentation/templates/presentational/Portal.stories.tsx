import React from 'react';
import styled from 'styled-components';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { colors, gridSize } from '@theme/constants';
import { MdLogin } from 'react-icons/md';
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
  Select
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
  ToggleButton
} from '@components/core';
import { useState } from 'react';
import { FaProjectDiagram } from 'react-icons/fa';
import { MdWorkspaces } from 'react-icons/md';
import { ToggleSelect } from 'src/components/ToggleButton';

export default {
  title: 'Templates/Portal',
  component: Header,
  parameters: {
    layout: 'fullscreen',
  },
} as ComponentMeta<typeof Header>;

const options = [
  { value: 'space', label: 'Spaces' },
  { value: 'project', label: 'Projects' },
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

export const Default: ComponentStory<typeof Header> = () => {
  const [select, setSelect] = useState();
  const [list, setList]: any = useState(projects);

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
            <HeaderGlobalAction>
              Messages
            </HeaderGlobalAction>
            <HeaderGlobalAction>
              Notifications
            </HeaderGlobalAction>
            <HeaderGlobalAction>
              Profile
            </HeaderGlobalAction>
          </HeaderGlobalBar>
        </Header>
      </TopNavigation>
      <Content>
        <Main>
          <PageHeader
            children="Welcome Elijah"
            controls={(
              <>
                {/* <Select onChange={({ value }: any) => setList(value === 'space' ? spaces : projects )} options={options} placeholder="Display"></Select> */}
                <ToggleSelect 
                  onChange={({ value }: any) => setList(value === 'space' ? spaces : projects )} 
                  options={[
                    { value: "project", iconBefore: FaProjectDiagram },
                    { value: "spaces", iconBefore: MdWorkspaces },
                  ]}
                />
              </>
            )}
          />
          <Grid columns={3}>
            <GridColumn medium={2}>
              <CardGroup>
                {list.map((item: any) => (
                  <Card title={item.title} children={item.children} />
                ))}
              </CardGroup>
            </GridColumn>
            <GridColumn medium={1}>
              <h5>My items</h5>
            </GridColumn>
          </Grid>
        </Main>
      </Content>
    </PageLayout>
  );
};
