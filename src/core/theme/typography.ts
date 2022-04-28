import { css } from 'styled-components';

// import * as colors from './colors';
import { gridSize, fontSize, headerFontFamily } from './constants';

const baseHeading = (size: number, lineHeight: number) => `
  font-family: ${headerFontFamily()};
  font-size: ${size / fontSize()}em;
  font-style: inherit;
  line-height: ${lineHeight / size};
`;

export const heading = {
  // Oversized screen titles. Use in moderation.
  h900: () => css`
    ${baseHeading(35, 40)}
    color: ${({ theme }) => theme.heading()};
    font-weight: 500;
    letter-spacing: -0.01em;
    margin-top: ${gridSize() * 6.5}px;
  `,
  // Empty states and feature introductions. Top level headers.
  h800: () => css`
    ${baseHeading(35, 32)}
    color: ${({ theme }) => theme.heading()};
    font-weight: 600;
    letter-spacing: -0.01em;
    margin-top: ${gridSize() * 5}px;
  `,
  // Main titles, use only once per page.
  h700: () => css`
    ${baseHeading(24, 32)}
    color: ${({ theme }) => theme.heading()};
    font-weight: 500;
    letter-spacing: -0.01em;
    margin-top: ${gridSize() * 5}px;
  `,
  // Headings that identify key functionality.
  h600: () => css`
    ${baseHeading(20, 24)}
    color: ${({ theme }) => theme.heading()};
    font-weight: 500;
    letter-spacing: -0.008em;
    margin-top: ${gridSize() * 3.5}px;
  `,
  // Sub-section and field group headings.
  h500: () => css`
    ${baseHeading(16, 20)}
    color: ${({ theme }) => theme.heading()};
    font-weight: 600;
    letter-spacing: -0.006em;
    margin-top: ${gridSize() * 3}px;
  `,
  // Deep headings and for highlighting important pieces of information.
  h400: () => css`
    ${baseHeading(14, 16)}
    color: ${({ theme }) => theme.heading()};
    font-weight: 600;
    letter-spacing: -0.003em;
    margin-top: ${gridSize() * 2}px;
  `,
  // Heading up a group of list items.
  h300: () => css`
    ${baseHeading(12, 16)}
    color: ${({ theme }) => theme.heading()};
    font-weight: 600;
    margin-top: ${gridSize() * 2.5}px;
    text-transform: uppercase;
  `,
  // Low level headings.
  h200: () => css`
    ${baseHeading(12, 16)}
    color: ${({ theme }) => theme.subtleHeading()};
    font-weight: 600;
    margin-top: ${gridSize() * 2}px;
  `,
  // Lowest level headings.
  h100: () => css`
    ${baseHeading(11, 16)}
    color: ${({ theme }) => theme.subtleHeading()};
    font-weight: 700;
    margin-top: ${gridSize() * 2}px;
  `
};