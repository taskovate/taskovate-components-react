import React, { FC } from 'react';
import styled from 'styled-components';
import { colors, gridSize, layers, animation, borderRadius, gradients, fontSize, headerFontFamily } from '@theme/constants';
import { hex2rgba } from '@theme/helpers';

const Styled = styled.div`
  display: flex;
  flex-grow: 1;
  width: calc(100% - ${gridSize() * 8}px);
  margin: 0 ${gridSize() * 4}px;
`;
const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(100%, 1fr);
  grid-template-rows: 100%;
  background: ${gradients.primary()};
  border-top-right-radius: ${borderRadius() * 1}px;
  border-top-left-radius: ${borderRadius() * 1}px;
  box-shadow: ${({ theme }) => theme.elevation[200]}; 
  width: calc(100%);
  // max-width: ${gridSize() * 192}px;
  margin: 0 auto;
`;

const Content = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-auto-rows: minmax(min-content, max-content);
  grid-column-gap: ${gridSize() * 1}px;
  grid-row-gap: ${gridSize() * 1}px;
  padding: ${gridSize() * 3.5}px ${gridSize() * 4}px;
  padding-bottom: ${gridSize() * 3.5}px;
  background-color: ${({ theme }) => hex2rgba(colors.d[900], 0.96875)};
  // background-color: rgba(255 0 0 / 10%);
  border-top-right-radius: ${borderRadius() * 0.75}px;
  border-top-left-radius: ${borderRadius() * 0.75}px;
  margin: ${gridSize() * 0.25}px;
  margin-bottom: 0;
  h2 {
    color: ${colors.n[400]} !important;
  }
  h4 {
    color: ${colors.n[400]} !important;
  }
  p { 
    color: ${colors.n[200]} !important;
  }

  // footnote
  &>:nth-child(1) {
    grid-area: 1 / 1 / 2 / 2;
  }

  // footnote misc
  &>:nth-child(2) {
    grid-area: 1 / 2 / 3 / 3;
    display: flex;
    justify-content: end;
    gap: ${gridSize() * 4}px;
    // background-color: rgba(0 0 255 / 10%);
  }

  // links
  &>:nth-child(3) { 
    grid-area: 2 / 1 / 3 / 2;
    align-self: end;
    // background-color: rgba(0 255 0 / 10%);
  }
`;

const Footer = ({ children }: any) => {
  return (
    <Styled>
      <Grid>
        <Content>
          {children}
        </Content>
      </Grid>
    </Styled>
  )
};

Footer.prototype.name = "Footer";

export default Footer;
