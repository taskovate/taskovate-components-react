import * as colors from './colors';

export const name = 'Taskovate Dark';

export const background = () => colors.midnight[500];
export const text = () => colors.neutral[900];
export const textHover = () => colors.neutral[0];
export const textActive = () => colors.neutral[0];
export const subtleText = () => colors.neutral[0];
export const placeholderText = () => colors.neutral[0];
export const heading = () => colors.neutral[0];
export const subtleHeading = () => colors.neutral[0];
export const codeBlock = () => colors.neutral[0];
export const link = () => colors.neutral[0];
export const linkHover = () => colors.neutral[0];
export const linkActive = () => colors.neutral[0];
export const linkOutline = () => colors.neutral[0];
export const primary = () => colors.neutral[0];
export const skeleton = () => colors.neutral[20];

export const skeletonShimmer = () => ({
  css: {
    backgroundColor: skeleton(),
    backgroundImage: `linear-gradient(to right, ${skeleton()} 0%, ${colors.neutral[30]} 20%, ${skeleton()} 40%, ${skeleton()} 100%)`,
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