import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    name: string;
    animation: any,
    breakpoints: any,
    colors: any,
    gradients: any,
    layers: any,
    focusRing: () => string,
    noFocusRing: () => string,
    skeletonShimmer: () => any,
    borderRadius: () => number,
    gridSize: () => number,
    fontSize: () => number,
    fontSizeSmall: () => number,
    fontFamily: () => string,
    headerFontFamily: () => string,
    codeFontFamily: () => string
  }
}