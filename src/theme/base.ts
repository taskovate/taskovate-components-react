import { createGlobalStyle, DefaultTheme } from 'styled-components';
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
  typography
} from '@theme/constants';

export default createGlobalStyle<DefaultTheme>`
  .sb-show-main {
    background-color: ${({ theme }) => theme.background()} !important;
  }

  html,
  body {
    display: flex;
    flex-grow: 1;
  }

  body {
    color: ${({ theme }) => theme.text()};
    font-family: ${fontFamily()};
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 1.42857142857143;
    -ms-overflow-style: -ms-autohiding-scrollbar;
    text-decoration-skip-ink: auto;

    ${({ theme: { scrollStyles } }) => `
      ::-webkit-scrollbar {
        width: ${gridSize() * 2.25}px;
      }

      ::-webkit-scrollbar-track {
        background: ${scrollStyles.background['body'].track()};
      }

      ::-webkit-scrollbar-thumb {
        background: ${scrollStyles.background['body'].default()};
        border-width: 7px;
        border-style: solid;
        border-color:${scrollStyles.background['body'].track()};
        border-radius: ${borderRadius()}em;
      }
            
      ::-webkit-scrollbar-thumb:hover {
        background: ${scrollStyles.background['body'].hover()};
        border-width: 6px;
      }

      ::-webkit-scrollbar-thumb:active {
        background: ${scrollStyles.background['body'].active()};
        border-width: auto;
      }
    `}
  }

  /* Default margins */
  p,
  ul,
  ol,
  dl,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  blockquote,
  pre,
  form,
  table {
    margin: ${gridSize() * 1.5}px 0 0 0;
  }

  /* Links */
  a {
    color: ${colors.b[400]};
    text-decoration: none;
  }
  a:hover {
    color: ${colors.b[300]};
    text-decoration: underline;
  }
  a:active {
    color: ${colors.b[500]};
  }
  // a:focus {
  //   outline: 2px solid ${colors.b[100]};
  //   outline-offset: 2px;
  // }

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

  /* Lists */
  ul,
  ol,
  dl {
    padding-left: ${gridSize() * 5}px;
  }
  [dir='rtl']ul,
  [dir='rtl']ol,
  [dir='rtl']dl {
    padding-left: 0;
    padding-right: ${gridSize() * 5}px;
  }

  dd,
  dd + dt,
  li + li {
    margin-top: ${gridSize() / 2}px;
  }
  ul ul:not(:first-child),
  ol ul:not(:first-child),
  ul ol:not(:first-child),
  ol ol:not(:first-child) {
    margin-top: ${gridSize() / 2}px;
  }

  /* remove top margin for first element */
  p:first-child,
  ul:first-child,
  ol:first-child,
  dl:first-child,
  h1:first-child,
  h2:first-child,
  h3:first-child,
  h4:first-child,
  h5:first-child,
  h6:first-child,
  blockquote:first-child,
  pre:first-child,
  form:first-child,
  table:first-child {
    margin-top: 0;
  }

  /* Quotes */
  blockquote,
  q {
    color: inherit;
  }
  blockquote {
    border: none;
    padding-left: ${gridSize() * 5}px;
  }
  [dir='rtl'] blockquote {
    padding-left: 0;
    padding-right: ${gridSize() * 5}px;
  }

  blockquote::before,
  q::before {
    content: '\\201C';
  }

  blockquote::after,
  q::after {
    content: '\\201D';
  }

  blockquote::before {
    float: left;
    /* to keep the quotes left of any child elements like blockquote > p */
    margin-left: -1em;
    text-align: right;
    width: 1em;
  }
  [dir='rtl'] blockquote::before {
    float: right;
    margin-right: -1em;
    text-align: left;
  }

  blockquote > :last-child {
    display: inline-block; /* so the quotes added via pseudos follow it immediately. */
  }

  /* Other typographical elements */
  small {
    ${typography.heading.h100()}
    font-weight: normal;
  }

  code,
  kbd {
    font-family: ${codeFontFamily()};
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
