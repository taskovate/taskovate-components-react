
import { create } from '@storybook/theming';

const base = () => ({
  colorPrimary: '#7F33FF',
  colorSecondary: '#169EFF',

  // UI
  appBg: '#1D1C21',
  appContentBg: '#17171B',
  appBorderColor: '#252429',
  appBorderRadius: 3,

  // Typography
  fontBase: `'Assailand'`,
  fontCode: `'IBM Plex Mono', monospace`,

  // Text colors
  textColor: '#EEEDF2',
  // textInverseColor: 'rgba(0,0,255,0.9)',

  // Toolbar default and active colors
  barTextColor: '#9D9AAC',
  barSelectedColor: '#DDDBE5',
  barBg: '#252429',

  // Form colors
  inputBg: '#1D1C21',
  inputBorder: '#4C4B4F',
  inputTextColor: '#EEEDF2',
  inputBorderRadius: 3,

  // Other
  brandTitle: 'Taskovate Storybook',
  brandImage: '/images/brandImage.svg',

  toolbar: {
    // Array of plain string values or MenuItem shape (see below)
    items: ['light', 'dark'],
    // Property that specifies if the name of the item will be displayed
    showName: true,
    // Change title based on selected value
    dynamicTitle: true,
  },
});

export const light = create({
  ...base(),
  base: 'light',
});

export const dark = create({
  ...base(),
  base: 'dark',
});
