import { css } from 'styled-components';
import {
  colors,
  gridSize,
} from '@theme/constants';

export default () => css`
  .sb-show-main {
    background-color: ${({ theme }) => theme.background()} !important;
  }

  :root {
    color-scheme: ${({ theme }) => theme.colorScheme()};
  }

  * {
    backface-visibility: hidden;
  }

  html, body, #root {
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    height: 100%;
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
    color: ${colors.b[500]};
    text-decoration: none;
  }
  a:hover {
    color: ${colors.b[400]};
  }
  a:active {
    color: ${colors.b[600]};
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
`;
