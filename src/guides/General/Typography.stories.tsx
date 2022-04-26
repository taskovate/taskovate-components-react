import React from 'react';
import styled from 'styled-components';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { typography } from '@theme/constants';
import { LoremIpsum } from 'react-lorem-ipsum';

const Heading = styled.div<{ mixin: any }>`
  ${props => props.mixin};
`;

export default {
  title: 'Documentation/General',
  component: React.Fragment,
} as ComponentMeta<typeof React.Fragment>;

const StoryArea = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Typography: ComponentStory<typeof React.Fragment> = (args) => (
  <StoryArea>
    <Heading mixin={typography.heading.h900()} style={{ marginTop: 0}}>Heading (h900)</Heading>
    <Heading mixin={typography.heading.h800()}>Heading (h800)</Heading>
    <Heading mixin={typography.heading.h700()}>Heading (h700)</Heading>
    <Heading mixin={typography.heading.h600()}>Heading (h600)</Heading>
    <Heading mixin={typography.heading.h500()}>Heading (h500)</Heading>
    <Heading mixin={typography.heading.h400()}>Heading (h400)</Heading>
    <Heading mixin={typography.heading.h300()}>Heading (h300)</Heading>
    <Heading mixin={typography.heading.h200()}>Heading (h200)</Heading>
    <Heading mixin={typography.heading.h100()}>Heading (h100)</Heading>
    <p>
      <LoremIpsum p={1} avgSentencesPerParagraph={4}/>
    </p>
    <p><a href="/">Link</a></p>
    <small>Small</small>
    <code>
      <LoremIpsum p={1} avgSentencesPerParagraph={1}/>
    </code>
  </StoryArea>
);
