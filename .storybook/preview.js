import { addDecorator } from '@storybook/react';
import { withThemes } from '@react-theming/storybook-addon';
import { ThemeProvider } from 'styled-components';
import { Dark as Theme, GlobalStyle } from '../src/themes';

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
  }
};
const onThemeSwitch = ({ theme }) => ({
  parameters: {
    backgrounds: {
      default: theme.name === 'Dark theme' ? '#2c2f33' : 'white',
    }
  }
});

addDecorator(withThemes(ThemeProvider, [Theme], { onThemeSwitch }));
addDecorator(s => <>{ThemeProvider({ theme: Theme, children: <GlobalStyle /> })}{s()}</>);