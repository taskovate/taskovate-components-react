import React, { FC } from 'react';
import styled from 'styled-components';
import { colors, gridSize, layers, animation, borderRadius, gradients, fontSize, headerFontFamily } from '@theme/constants';
import { hex2rgba } from '@theme/helpers';

// TODO: Restructure Footer into BottomNavigation component, then have Footer with grid as Footer component (like how Header and TopNavigation are setup).
const Styled = styled.div`
  display: flex;
  flex-grow: 1;
  // width: 100%;
  // max-width: ${gridSize() * 144}px;
  // margin: 0 auto;
  margin-top: ${gridSize() * 6}px;
`;
const Grid = styled.div<any>`
  display: grid;
  grid-template-columns: repeat(auto-fill, 1fr);
  grid-auto-rows: 100%;
  background: ${gradients.primary()};
  background: transparent;
  border-top-right-radius: ${borderRadius() * 1.25}px;
  border-top-left-radius: ${borderRadius() * 1}px;
  // box-shadow: ${({ theme }) => theme.elevation[200]}; 
  width: ${({ numChildren }) => numChildren === 1 ? 'auto' : '100%'};
  margin: 0 ${({ numChildren }) => numChildren === 1 ? 'auto' : `${gridSize() * 1}px`};
`;

const Content = styled.div<any>`
  display: ${({ numChildren }) => numChildren === 1 ? 'flex' : 'grid'};
  grid-template-columns: repeat(auto-fill, 2fr);
  grid-auto-rows: minmax(min-content, max-content);
  grid-column-gap: ${gridSize() * 1}px;
  grid-row-gap: ${gridSize() * 1}px;
  padding: ${gridSize() * 3.5}px ${gridSize() * 4}px;
  padding-bottom: ${gridSize() * 4}px;
  background-color: ${({ theme }) => hex2rgba(colors.d[900], 0.96875)};
  background-color: transparent;
  // background-color: rgba(255 0 0 / 10%);
  border-top-right-radius: ${borderRadius() * 1}px;
  border-top-left-radius: ${borderRadius() * 1}px;
  margin: ${gridSize() * 0.25}px;
  margin-bottom: 0;
  gap: ${gridSize() * 8}px;

  h2, h3 {
    color: ${colors.n[300]} !important;
  }
  h5, h4 {
    color: ${colors.n[400]} !important;
  }
  p {
    color: ${colors.n[500]} !important;
  }

  // footnote
  &>:only-child {
    display: flex;
    // background-color: red;
    margin: 0 auto;
    gap: ${gridSize() * 4}px;
  }
  &>:nth-child(1):not(:only-child){
    grid-area: 1 / 1 / 2 / 2;
  }

  // footnote misc
  &>:nth-child(2) {
    grid-area: 1 / 2 / 3 / 3;
    display: flex;
    justify-content: end;
    gap: ${gridSize() * 4}px;
    p {
      margin-left: ${gridSize() * 1}px;
    }
    // background-color: rgba(0 0 255 / 10%);
  }

  // links
  &>:nth-child(3) { 
    grid-area: 2 / 1 / 3 / 2;
    align-self: start;
    // background-color: rgba(0 255 0 / 10%);
  }
`;

const Footer = ({ children }: any) => {
  const renderChildren = Array.isArray(children) ? children: [children];
  return (
    <Styled>
      <Grid numChildren={renderChildren.length}>
        <Content numChildren={renderChildren.length}>
          {renderChildren}
        </Content>
      </Grid>
    </Styled>
  )
};

Footer.prototype.name = "Footer";

export default Footer;
