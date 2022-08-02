import { css } from 'styled-components';
import { hexCombine } from '../helpers/helpers';

// import * as colors from './colors';
import { gridSize, fontSize, headerFontFamily } from './constants';

const baseHeading = (size: number, lineHeight: number) => `
  &, * { font-family: ${headerFontFamily()} !important; }
  font-size: ${size / fontSize()}rem !important;
  font-style: inherit !important;
  line-height: ${lineHeight / size} !important;
`;

export const heading = {
  // Oversized screen titles. Use in moderation.
  h900: () => css`
    ${baseHeading(35, 40)}
    color: ${({ theme }) => theme.heading()};
    font-weight: 600 !important;
    letter-spacing: -0.01em !important;
    margin-top: ${gridSize() * 6}px;
  `,
  // Empty states and feature introductions. Top level headers.
  h800: () => css`
    ${baseHeading(29, 32)}
    color: ${({ theme }) => hexCombine(theme.heading(), '#ffffff', 0.625)};
    font-weight: 700 !important;
    letter-spacing: -0.01em !important;
    margin-top: ${gridSize() * 4.5}px;
  `,
  // Main titles, use only once per page.
  h700: () => css`
    ${baseHeading(24, 32)}
    color: ${({ theme }) => theme.heading()};
    font-weight: 600 !important;
    letter-spacing: -0.01em !important;
    margin-top: ${gridSize() * 4.5}px;
  `,
  // Headings that identify key functionality.
  h600: () => css`
    ${baseHeading(20, 24)}
    color: ${({ theme }) => theme.heading()};
    font-weight: 600 !important;
    letter-spacing: -0.008em !important;
    margin-top: ${gridSize() * 3}px;
  `,
  // Sub-section and field group headings.
  h500: () => css`
    ${baseHeading(16, 20)}
    color: ${({ theme }) => theme.heading()};
    font-weight: 700 !important;
    letter-spacing: -0.006em !important;
    margin-top: ${gridSize() * 2.5}px;
  `,
  // Deep headings and for highlighting important pieces of information.
  h400: () => css`
    ${baseHeading(14, 16)}
    color: ${({ theme }) => theme.heading()};
    font-weight: 700 !important;
    letter-spacing: -0.003em !important;
    margin-top: ${gridSize() * 1.5}px;
  `,
  // Heading up a group of list items.
  h300: () => css`
    ${baseHeading(12, 16)}
    color: ${({ theme }) => theme.subtleHeading()};
    font-weight: 700 !important;
    margin-top: ${gridSize() * 2}px;
    text-transform: uppercase !important;
  `,
  // Low level headings.
  h200: () => css`
    ${baseHeading(12, 16)}
    color: ${({ theme }) => theme.subtleHeading()};
    font-weight: 700 !important;
    margin-top: ${gridSize() * 1.5}px;
  `,
  // Lowest level headings.
  h100: () => css`
    ${baseHeading(11, 16)}
    color: ${({ theme }) => theme.subtleHeading()};
    font-weight: 700 !important;
    margin-top: ${gridSize() * 1.5}px;
  `
};