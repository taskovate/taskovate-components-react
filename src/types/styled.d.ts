import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    name: string;
    colorScheme: () => 'light' | 'dark';
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
    dropdownStyles: any;
    inputStyles: any;
    scrollStyles: any;
    navigationStyles: any;
    toggleButtonStyles: any;
    buttonStyles: any;
  }
};
