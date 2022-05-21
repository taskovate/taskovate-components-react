import React from 'react';
import styled from 'styled-components';
import { gridSize, colors } from '@theme/constants';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { HiStar } from 'react-icons/hi';
import { Button, ButtonGroup } from '.';

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
  flex-direction: column;
  justify-content: center;
  align-items: start;
  p { margin-bottom: ${gridSize() * 1}px; }
  margin-bottom: ${gridSize() * 2}px;
`;

export const Appearances: ComponentStory<typeof Button> = (args) => (
  <Col>
    <Row>
      <p>Default</p>
      <ButtonGroup>
        <Button>Submit</Button>
        <Button isDisabled>Disabled</Button>
        <Button isLoading>Loading</Button>
      </ButtonGroup>
    </Row>
    <Row>
      <p>Primary</p>
      <ButtonGroup>
        <Button appearance='primary'>Sign up</Button>
        <Button appearance='primary' isDisabled>Disabled</Button>
        <Button appearance='primary' isLoading>Loading</Button>
      </ButtonGroup>
    </Row>
    <Row>
      <p>Special</p>
      <ButtonGroup>
        <Button appearance='special'>Get started</Button>
        <Button appearance='special' isDisabled>Disabled</Button>
        <Button appearance='special' isLoading>Loading</Button>
      </ButtonGroup>
    </Row>
    <Row>
      <p>Warning</p>
      <ButtonGroup>
        <Button appearance='warning'>Confirm</Button>
        <Button appearance='warning' isDisabled>Disabled</Button>
        <Button appearance='warning' isLoading>Loading</Button>
      </ButtonGroup>
    </Row>
    <Row>
      <p>Danger</p>
      <ButtonGroup>
        <Button appearance='danger'>Destroy</Button>
        <Button appearance='danger' isDisabled>Disabled</Button>
        <Button appearance='danger' isLoading>Loading</Button>
      </ButtonGroup>
    </Row>
    <Row>
      <p>Link</p>
      <ButtonGroup>
        <Button appearance='link'>Link</Button>
        <Button appearance='link' isDisabled>Disabled</Button>
        <Button appearance='link' isLoading>Loading</Button>
      </ButtonGroup>
    </Row>
    <Row>
      <p>Subtle</p>
      <ButtonGroup>
        <Button appearance='subtle'>Menu</Button>
        <Button appearance='subtle' isDisabled>Disabled</Button>
        <Button appearance='subtle' isLoading>Loading</Button>
      </ButtonGroup>
    </Row>
    <Row>
      <p>Subtle-link</p>
      <ButtonGroup>
        <Button appearance='subtle-link'>Preview</Button>
        <Button appearance='subtle-link' isDisabled>Disabled</Button>
        <Button appearance='subtle-link' isLoading>Loading</Button>
      </ButtonGroup>
    </Row>
  </Col>
);

export const Options: ComponentStory<typeof Button> = (args) => (
  <Col>
    <Row>
      <p>Spacing</p>
      <ButtonGroup>
        <Button spacing="none">None</Button>
        <Button spacing="compact">Compact</Button>
        <Button spacing="default">Default</Button>
        <Button spacing="pleasant">Pleasant</Button>
      </ButtonGroup>
    </Row>
    <Row>
      <p>Icons</p>
      <ButtonGroup>
        <Button iconBefore={HiStar}>Icon Before</Button>
        <Button iconAfter={HiStar}>Icon After</Button>
        <Button iconBefore={HiStar} iconAfter={HiStar}>Icons</Button>
      </ButtonGroup>
    </Row>
    <Row>
      <p>Tooltip</p>
      <ButtonGroup>
        <Button tooltip={{ label: "Nice! 😁", placement: 'left'}} >Try me!</Button>
      </ButtonGroup>
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