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