import { create } from '@storybook/theming';
import { addons } from '@storybook/addons';

const theme = create({
  base: 'light',
  // fontBase: '"Open Sans", sans-serif',
  // fontCode: 'monospace',
  brandTitle: 'Taskovate Storybook',
  brandUrl: 'https://taskovate.com',
  brandImage: 'https://place-hold.it/200x40',
});

addons.setConfig({ 
  theme
});