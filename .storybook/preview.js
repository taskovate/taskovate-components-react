import { ThemeProvider } from 'styled-components';
import { DocsContainer } from '@storybook/addon-docs/blocks';
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
    canvas: { title: 'Canvas', hidden: false },
    'storybook/docs/panel': {
      title: 'Documentation',
    },
  },
  docs: {
    theme: dark,
    container: ({ children, context }) => (
      <DocsContainer context={context}>
        <ThemeProvider theme={DarkTheme}>
          <GlobalStyle />
          {children}
        </ThemeProvider>
      </DocsContainer>
    ),
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
