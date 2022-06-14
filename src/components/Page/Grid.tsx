import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import { GridColumn } from '.';
import { gridSize } from '@theme/constants';

const Wrapper = styled.div<any>`
  ${({ columns, layout }) => `
    display: grid;
    grid-template-columns: repeat(${columns}, 1fr);
    grid-template-rows: 1fr min-content;
    gap: ${gridSize() * 8}px;
    // background-color: rgba(0 255 0 / 10%);
    width: ${layout === 'fluid' ? '100%' : 'auto'};
    grid-auto-flow: row;
  `}
`;

interface Props {
  children?: any;
  columns: number;
  layout?: 'fluid' | 'fixed';
}

const Grid = ({
  children,
  columns, // number of columns available in each row.
  layout = 'fluid'
}: Props) => {
  return (
    <Wrapper
      layout={layout}
      columns={columns}
    >
      {children}
    </Wrapper>
  );
};



export default Grid;