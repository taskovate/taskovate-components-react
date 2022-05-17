// import { addDecorator } from '@storybook/react';
// import { withThemes } from '@react-theming/storybook-addon';
// import { withThemesProvider } from "storybook-addon-styled-component-theme";
import { ThemeProvider } from 'styled-components';
import { DarkTheme, GlobalStyle } from '@theme/core';
import { MockedProvider } from '@apollo/client/testing';
import { cache, typeDefs } from '@store/core';

// addDecorator(withThemesProvider([DarkTheme], ThemeProvider));
// addDecorator(withThemes(ThemeProvider, [DarkTheme], { 
//   onThemeSwitch: ({ theme }) => {
//     return {
//       parameters: {
//         backgrounds: {
//           default: theme.background(),
//         }
//       }
//     };
//   },
//   providerFn: ({ theme, children }) => {
//     return (
//       <ThemeProvider theme={theme}>
//         <GlobalStyle />
//         {children}
//       </ThemeProvider>
//     );
//   }
// }));

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
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  backgrounds: {
    disable: true
  },
  previewTabs: {
    'storybook/docs/panel': {
      hidden: true
    }
  },
  apolloClient: {
    MockedProvider,
    cache,
    typeDefs
  },
};