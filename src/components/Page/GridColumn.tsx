import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import { gridSize } from '@theme/constants';

const Wrapper = styled.div<any>`
  ${({ medium }) => `
    display: flex;
    flex-direction: column;
    grid-column: ${medium ? `span ${medium}` : 'span'};
    // background-color: rgba(255 0 0 / 10%);
    gap: ${gridSize() * 2}px;
  `}
`;

interface Props {
  children?: any;
  medium: number;
}

export const GridColumn = ({
  children,
  medium, // the number of columns in it's parent Grid that the GridColumn should span.
}: Props) => {

  return (
    <Wrapper
      medium={medium}
    >
      {children}
    </Wrapper>
  );
};

export default GridColumn;