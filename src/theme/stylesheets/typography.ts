import { css } from 'styled-components';
import {
  colors,
  fontFamily,
  headerFontFamily,
  codeFontFamily,
  gridSize,
  layers,
  animation,
  borderRadius,
  gradients,
  typography,
  fontSize,
  fontSizeSmall
} from '@theme/constants';

export default () => css`
* {
  font-family: ${fontFamily()};
}

body, :root {
  font-family: ${fontFamily()};
  color: ${({ theme }) => theme.text()};
  font-size: ${fontSize()}px;
  font-style: normal;
  line-height: 1.428571428571429;
  font-weight: 400;
  -ms-overflow-style: -ms-autohiding-scrollbar;
  text-decoration-skip-ink: auto;
  backface-visibility: hidden;
}

/* Headings */
h1 {
  ${typography.heading.h800()}
}
h2 {
  ${typography.heading.h700()}
}
h3 {
  ${typography.heading.h600()}
}
h4 {
  ${typography.heading.h500()}
}
h5 {
  ${typography.heading.h400()}
}
h6 {
  ${typography.heading.h300()}
}

/* Other typographical elements */
label {
  ${typography.heading.h100()}
  font-weight: normal;
  margin-top: 0;
  margin-bottom: ${gridSize() * 0.5}px;
}

input {
  font-size: ${fontSize()}px;
}

small {
  ${typography.heading.h100()}
  font-weight: normal;
}

pre, code, pre code {
  font-family: ${codeFontFamily()};
  // font-variation-settings: "MONO" 1, "CASL" 0, "wght" 400, "slnt" 0, "CRSV" 0.5;
}

var,
address,
dfn,
cite {
  font-style: italic;
}

abbr {
  border-bottom: 1px #ccc dotted;
  cursor: help;
}
`;