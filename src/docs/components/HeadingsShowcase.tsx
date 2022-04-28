import React, { useState } from 'react';
import styled from 'styled-components';
import { colors, borderRadius, gridSize, animation } from '@theme/constants';
import { ShowcaseArea } from '.';

const Area = styled.div`
  display: flex:
  flex-grow: 1;
  background-color: ${colors.d[800]};
  padding: ${gridSize() * 2}px;
  border-radius: ${borderRadius() * 1}px;
  border: 1px solid ${colors.d[700]};
  margin-top: ${gridSize() * 1}px;
`;

const HeadingsShowcase = (props: any) => {
  return (
    <ShowcaseArea>
      <h1>Heading (h1)</h1>
      <h2>Heading (h2)</h2>
      <h3>Heading (h3)</h3>
      <h4>Heading (h4)</h4>
      <h5>Heading (h5)</h5>
      <h6>Heading (h6)</h6>
    </ShowcaseArea>
  );
};

export default HeadingsShowcase;