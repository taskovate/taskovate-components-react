import * as colors from './colors';

export * as colors from './colors';

export const name = 'Taskovate Dark';

export const borderRadius = () => 3;
export const gridSize = () => 8;
export const fontSize = () => 14;
export const fontSizeSmall = () => 11;

export const fontFamily = () => `-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif`;
export const headerFontFamily = () => `'Poppins', 'Helvetiva Neue', 'Helvetica', 'Aria', 'sans-serif'`;
export const codeFontFamily = () => `'SFMono-Medium', 'SF Mono', 'Segoe UI Mono', 'Roboto Mono', 'Ubuntu Mono', Menlo, Consolas, Courier, monospace`;

export const animation = {
  normal: () => '400ms ease-in',
  fast: () => '300ms ease-in'
};

export const breakpoints = {
  mobile: () => '320px',
  tablet: () => '768px',
  computer: () => '992px',
  desktop: () => '1200px',
  widescreen: () => '1920px'
};

export const gradients = {
  primary: () => `linear-gradient(-185deg, ${colors.purple[500]} 0%, ${colors.teal[500]} 66%, ${colors.green[300]} 100%)`,
  secondary: () => '',
  subtle: () => ''
};

export const layers = {
  card: () => 100,
  dialog: () => 300,
  navigation: () => 200,
  layer: () => 400,
  modal: () => 510,
  flag: () => 600,
  tooltip: () => 800,
};

export const focusRing = (
  color: string = colors.blue[100],
  outlineWidth: number = gridSize() / 4,
) => `
  &:focus {
    outline: none;
    box-shadow: 0px 0px 0px ${outlineWidth}px ${color};
  }
`;

export const noFocusRing = () => `
  box-shadow: none;
`;

export const skeletonShimmer = () => ({
  css: {
    backgroundColor: colors.skeleton(),
    backgroundImage: `linear-gradient(to right, ${colors.skeleton()} 0%, ${colors.neutral[30]} 20%, ${colors.skeleton()} 40%, ${colors.skeleton()} 100%)`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: '800px 104px',
    animationDuration: '1.5s',
    animationFillMode: 'forwards',
    animationIterationCount: 'infinite',
    animationTimingFunction: 'linear',
  },
  keyframes: {
    '0%': {
      backgroundPosition: '-468px 0',
    },

    '100%': {
      backgroundPosition: '468px 0',
    },
  },
});
