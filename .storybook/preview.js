import { ThemeProvider } from 'styled-components';
import { DarkTheme, GlobalStyle } from '@theme/core';
import { MockedProvider } from '@apollo/client/testing';
import { cache, typeDefs } from '@internal/core';
import { dark } from './themes';

export const decorators = [
  Story => {
    return (
      <ThemeProvider theme={DarkTheme}>
        <GlobalStyle />
        <Story />
      </ThemeProvider>
    )
  }
];

export const parameters = {
  controls: { expanded: true },
  backgrounds: {
    disable: true
  },
  previewTabs: {
    canvas: { title: 'Code', hidden: false },
    'storybook/docs/panel': {
      title: 'Documentation',
    },
  },
  docs: {
    theme: dark
  },
  options: {
    storySort: {
      order: [
        'Getting started',
        [
          'Intro',
          'Installing the Kit',
        //   'Using the Kit',
        //   'Recommended libraries',
        //   'Design resources',
        //   'Browser support',
        //   "What's new",
        //   'Support and Feedback',
        //   'Credits',
        ],
        'Documentation',
        'Templates',
        'Components',
      ],
    },
  },
  apolloClient: {
    MockedProvider,
    cache,
    typeDefs
  }
};
