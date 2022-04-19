import { DefaultTheme } from 'styled-components';

const animation = {
  default: '400ms ease-in',
  fast: '300ms ease-in'
};

const breakpoints = [
  // mobile
  '320px',
  // tablet
  '768px',
  // computer
  '992px',
  // desktop
  '1200px',
  // widescreen
  '1920px'
];

const colors = {
  D25: '#525252',
  D50: '#474747',
  D75: '#3D3D3D',
  D100: '#333333',
  D200: '#292929',
  D300: '#1F1F1F',
  D400: '#141414',
  D500: '#121212',
  G50: '#E3FCEF',
  G75: '#ABF5D1',
  G100: '#79F2C0',
  G200: '#57D9A3',
  G300: '#36B37E',
  G400: '#00875A',
  G500: '#006644',
  P50: '#EAE6FF',
  P75: '#C0B6F2',
  P100: '#998DD9',
  P200: '#8777D9',
  P300: '#6554C0',
  P400: '#5243AA',
  P500: '#403294',
  T50: '#E6FCFF',
  T75: '#B3F5FF',
  T100: '#79E2F2',
  T200: '#00C7E6',
  T300: '#00B8D9',
  T400: '#00A3BF',
  T500: '#008DA6',
};

const gradients = {
};

const fonts = {
  body: 'Roboto, Helvetiva Neue, Helvetica, Aria, sans-serif',
  heading: 'Poppins, Helvetiva Neue, Helvetica, Aria, sans-serif',
  monospace: 'Menlo, monospace'
};

const theme: DefaultTheme = {
  name: 'Dark theme',
  animation,
  breakpoints,
  colors,
  gradients,
  fonts,
  mediaQueries: {
    mobile: `@media screen and (min-width: ${breakpoints[0]})`,
    tablet: `@media screen and (min-width: ${breakpoints[1]})`,
    computer: `@media screen and (min-width: ${breakpoints[2]})`,
    desktop: `@media screen and (min-width: ${breakpoints[3]})`,
    widescreen: `@media screen and (min-width: ${breakpoints[4]})`
  },
  fontSizes: [12, 14, 16, 20, 24, 32, 48, 64, 96],
  fontWeights: {
    body: 400,
    heading: 500,
    bold: 700
  },
  lineHeights: {
    body: 1.5,
    heading: 1.25
  },
  grid: [0, 4, 8, 16, 32, 64, 128, 256, 512],
  radii: {
    default: 0,
    circle: 99999
  },
  shadows: {

  }
};

export default theme;