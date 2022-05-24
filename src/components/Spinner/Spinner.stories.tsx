import React from 'react';
import styled from 'styled-components';
import { gridSize, colors, fontSize } from '@theme/constants';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Spinner } from '.';

export default {
  title: 'Components/Spinner',
  component: Spinner,
} as ComponentMeta<typeof Spinner>;

const Col = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-right: ${gridSize() * 2}px;
  align-items: center;
`;

const Row = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: start;
  align-content: center;
`;


export const Sizes: ComponentStory<typeof Spinner> = (args) => (
  <Row>
    <Col>
      {gridSize() * 2}px
      <Spinner size={gridSize() * 2} />
    </Col>
    <Col>
      {gridSize() * 3}px
      <Spinner size={gridSize() * 3} />
    </Col>
    <Col>
      {gridSize() * 4}px
      <Spinner size={gridSize() * 4} />
    </Col>
    <Col>
      {gridSize() * 5}px
      <Spinner size={gridSize() * 5} />
    </Col>
    <Col>
      {gridSize() * 6}px
      <Spinner size={gridSize() * 6} />
    </Col>
    <Col>
      {gridSize() * 7}px
      <Spinner size={gridSize() * 7} />
    </Col>
    <Col>
      {gridSize() * 8}px
      <Spinner size={gridSize() * 8} />
    </Col>
  </Row>
);

// PrimaryButton.args = {
//   appearance: 'unset',
//   children: 'Text',
//   href: '',
//   tooltip: '',
//   isDisabled: false
// };