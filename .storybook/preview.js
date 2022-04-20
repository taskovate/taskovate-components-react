import { addDecorator } from '@storybook/react';
import { withThemes } from '@react-theming/storybook-addon';
import { ThemeProvider } from 'styled-components';
import { TaskovateDark, GlobalStyle } from '../src/themes';
import { withThemesProvider } from "storybook-addon-styled-component-theme";

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

const onThemeSwitch = ({ theme: { colors } }) => {
  return {
    parameters: {
      backgrounds: {
        default: colors.background(),
      }
    }
  };
};

const providerFn = ({ theme, children }) => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      {children}
    </ThemeProvider>
  );
};

addDecorator(withThemesProvider([TaskovateDark], ThemeProvider));
addDecorator(withThemes(null, [TaskovateDark], { onThemeSwitch, providerFn }));
