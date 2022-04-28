import React from 'react';
import styled from 'styled-components';
import { gridSize, colors } from '@theme/constants';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Button } from '.';

export default {
  title: 'Design System/Button',
  component: Button,
} as ComponentMeta<typeof Button>;

const Col = styled.div`
  display: flex;
  flex-direction: column;
`;

const Row = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: ${gridSize() * 1}px;
  justify-content: end;
  align-items: center;
`;

export const Appearances: ComponentStory<typeof Button> = (args) => (
  <Col>
    <Row style={{ justifyContent: 'start', borderBottom: `1px solid ${colors.d[800]}` }}><p>Default</p></Row>
    <Row>
      <Button>Submit</Button>
      <Button isDisabled>Disabled</Button>
      <Button isLoading>Loading</Button>
    </Row>
    <Row style={{ justifyContent: 'start', borderBottom: `1px solid ${colors.d[800]}` }}><p>Primary</p></Row>
    <Row>
      <Button appearance='primary'>Sign up</Button>
      <Button appearance='primary' isDisabled>Disabled</Button>
      <Button appearance='primary' isLoading>Loading</Button>
    </Row>
    <Row style={{ justifyContent: 'start', borderBottom: `1px solid ${colors.d[800]}` }}><p>Special</p></Row>
    <Row>
      <Button appearance='special'>Get started</Button>
      <Button appearance='special' isDisabled>Disabled</Button>
      <Button appearance='special' isLoading>Loading</Button>
    </Row>
    <Row style={{ justifyContent: 'start', borderBottom: `1px solid ${colors.d[800]}` }}><p>Warning</p></Row>
    <Row>
      <Button appearance='warning'>Confirm</Button>
      <Button appearance='warning' isDisabled>Disabled</Button>
      <Button appearance='warning' isLoading>Loading</Button>
    </Row>
    <Row style={{ justifyContent: 'start', borderBottom: `1px solid ${colors.d[800]}` }}><p>Danger</p></Row>
    <Row>
      <Button appearance='danger'>Destroy</Button>
      <Button appearance='danger' isDisabled>Disabled</Button>
      <Button appearance='danger' isLoading>Loading</Button>
    </Row>
    <Row style={{ justifyContent: 'start', borderBottom: `1px solid ${colors.d[800]}` }}><p>Link</p></Row>
    <Row>
      <Button appearance='link'>Link</Button>
      <Button appearance='link' isDisabled>Disabled</Button>
      <Button appearance='link' isLoading>Loading</Button>
    </Row>
    <Row style={{ justifyContent: 'start', borderBottom: `1px solid ${colors.d[800]}` }}><p>Subtle</p></Row>
    <Row>
      <Button appearance='subtle'>Menu</Button>
      <Button appearance='subtle' isDisabled>Disabled</Button>
      <Button appearance='subtle' isLoading>Loading</Button>
    </Row>
    <Row style={{ justifyContent: 'start', borderBottom: `1px solid ${colors.d[800]}` }}><p>Subtle-link</p></Row>
    <Row>
      <Button appearance='subtle-link'>Preview</Button>
      <Button appearance='subtle-link' isDisabled>Disabled</Button>
      <Button appearance='subtle-link' isLoading>Loading</Button>
    </Row>
  </Col>
);

export const Spacing: ComponentStory<typeof Button> = (args) => (
  <Col>
    <Row style={{ justifyContent: 'start', borderBottom: `1px solid ${colors.d[800]}` }}><p>Spacing</p></Row>
    <Row>
      <Button spacing="none">None</Button>
      <Button spacing="compact">Compact</Button>
      <Button spacing="default">Default</Button>
      <Button spacing="pleasant">Pleasant</Button>
    </Row>
  </Col>
);

export const Options: ComponentStory<typeof Button> = (args) => (
  <Col>
    <Row style={{ justifyContent: 'start', borderBottom: `1px solid ${colors.d[800]}` }}><p>Tooltip</p></Row>
    <Row>
      <Button tooltip={{ label: "Nice! 😁", placement: 'left'}} >Try me!</Button>
    </Row>
  </Col>
);

// PrimaryButton.args = {
//   appearance: 'unset',
//   children: 'Text',
//   href: '',
//   tooltip: '',
//   isDisabled: false
// };