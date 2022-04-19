import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    name: string;
    animation: any;
    breakpoints: any;
    colors: any;
    gradients: any;
    fonts: any;
    mediaQueries: any;
    fontSizes: array<number>;
    fontWeights: any;
    lineHeights: any;
    grid: array<number>;
    radii: any;
    shadows: any;
  }
}