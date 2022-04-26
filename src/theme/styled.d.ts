import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    name: string;
    background: () => string;
    text: () => string;
    textHover: () => string;
    textActive: () => string;
    subtleText: () => string;
    placeholderText: () => string;
    heading: () => string;
    subtleHeading: () => string;
    codeBlock: () => string;
    link: () => string;
    linkHover: () => string;
    linkActive: () => string;
    linkOutline: () => cstring;
    primary: () => string;
    tooltip: () => string;
    skeleton: () => string;
    skeletonShimmer: () => any;
    label: () => string;
    elevation: any;
    scrollStyles: any;
    navigationStyles: any;
    buttonStyles: any;
  }
}