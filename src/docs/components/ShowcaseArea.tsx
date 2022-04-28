import React, { useState } from 'react';
import styled from 'styled-components';
import { colors, borderRadius, gridSize, animation } from '@theme/constants';

const Area = styled.div`
  display: flex:
  flex-grow: 1;
  background-color: ${colors.d[900]};
  padding: ${gridSize() * 2}px;
  border-top: 1px solid ${colors.d[500]};
  border-bottom: 1px solid ${colors.d[500]};
  margin-top: ${gridSize() * 1}px;
`;

const ShowcaseArea = ({ children }: any) => {
  return (
    <Area>
      {children}
    </Area>
  );
};

export default ShowcaseArea;