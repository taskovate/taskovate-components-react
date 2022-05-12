import { hex2rgba, hexCombine } from '@theme/helpers';
import * as colors from './colors';
import * as typography from './typography';

export const borderRadius = () => 3;
export const gridSize = () => 8;
export const fontSize = () => 14;
export const fontSizeSmall = () => 11;

export const fontFamily = () => `'Noto Sans'`;
export const headerFontFamily = () => `'Noto Sans Display', sans-serif`;
export const codeFontFamily = () => `'Noto Sans Mono', monospace`;

export const breakpoints = {
  mobile: () => '320px',
  tablet: () => '768px',
  computer: () => '992px',
  desktop: () => '1200px',
  widescreen: () => '1920px'
};

export const focusRing = (
  color: string = colors.b[100],
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

export const layers = {
  plate: () => 100,
  card: () => 110,
  select: () => 120,
  dialog: () => 300,
  navigation: () => 200,
  layer: () => 400,
  modal: () => 510,
  flag: () => 600,
  tooltip: () => 800
};

export const animation = {
  slow: () => '160ms ease-in',
  normal: () => '80ms ease-in',
  fast: () => '40ms ease-in'
};

export const gradients = {
  primary: () => `linear-gradient(171deg, ${hex2rgba(hexCombine(colors.b[500], colors.g[800], 0.55), 1)} 0%, ${hex2rgba(hexCombine(hexCombine(colors.b[500], colors.p[900], 0.3), colors.g[600], 0.2), 0.9)} 44%, ${hex2rgba(colors.p[600], 1)} 100%)`,
  secondary: () => `linear-gradient(55deg, ${hex2rgba(hexCombine(colors.b[500], colors.g[800], 0.55), 1)} 0%, ${hex2rgba(hexCombine(hexCombine(colors.b[500], colors.p[900], 0.3), colors.g[600], 0.2), 0.9)} 44%, ${hex2rgba(colors.p[600], 1)} 100%)`,
  subtle: () => `linear-gradient(-9deg, #444 0%, #333 66%, #555 100%)`,
};