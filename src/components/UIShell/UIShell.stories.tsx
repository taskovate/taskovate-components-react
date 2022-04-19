import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Header } from '.';

export default {
  title: 'Design System/UIShell',
  component: Header,
  parameters: {
    layout: 'fullscreen',
  },
} as ComponentMeta<typeof Header>;

const Template: ComponentStory<typeof Header> = (args) => <Header {...args} />;

export const LoggedIn = Template.bind({});
LoggedIn.args = {
  user: {
    name: 'Jane Doe',
  },
};

export const LoggedOut = Template.bind({});
LoggedOut.args = {};
