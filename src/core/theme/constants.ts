import * as colorsBase from './colors'; // https://github.com/parcel-bundler/parcel/issues/5911
import * as typographyBase from './typography'; // https://github.com/parcel-bundler/parcel/issues/5911
import { hex2rgba } from './helpers';

export const colors = colorsBase; // https://github.com/parcel-bundler/parcel/issues/5911
export const typography = typographyBase; // https://github.com/parcel-bundler/parcel/issues/5911

export const borderRadius = () => 3;
export const gridSize = () => 8;
export const fontSize = () => 14;
export const fontSizeSmall = () => 11;

export const fontFamily = () => `Signika`;
export const headerFontFamily = () => `'K2D', sans-serif`;
export const codeFontFamily = () => `'Ubuntu Mono', monospace`;

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
  slow: () => '135ms ease-in',
  normal: () => '90ms ease-in',
  fast: () => '45ms ease-in'
};

export const gradients = {
  primary: () => `linear-gradient(-185deg, #403294 0%, #008DA6 66%, #36B37E 100%)`,
  secondary: () => `linear-gradient(-9deg, #403294 0%, #008DA6 66%, #36B37E 100%)`,
  subtle: () => `linear-gradient(-9deg, #444 0%, #333 66%, #555 100%)`,
};