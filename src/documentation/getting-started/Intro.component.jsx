import React, { Component } from 'react';
import { linkTo } from '@storybook/addon-links';
import { Plate, Button, ButtonGroup } from '@components/core';
import styled, { ThemeProvider } from 'styled-components';
import { DarkTheme, GlobalStyle } from '@theme/core';

const Logo = styled.img`
  display: flex;
  align-self: start;
  width: 160px;
  height: 160px;
  margin: 0 auto;
  padding-left: 10%;
`;

const Introduction = () => (
  <ThemeProvider theme={DarkTheme}>
    <GlobalStyle />
    <Plate appearance="brimming">
      <span style={{ maxWidth: '50%'}}>
        <h2><b>Taskovate</b> UI-KIT</h2>
        <p>The Taskovate User Interface Kit includes guidelines, components, and templates to help you improve the usability of your products.</p>
      <ButtonGroup style={{ marginTop: '48px' }}>
        <Button appearance="special" onClick={linkTo('Getting started', 'Installing the Kit')}>Get Started</Button>
        <Button onClick={() => window.open("https://github.com/taskovate/taskovate-components-react",'_blank')}>Follow on GitHub</Button>
      </ButtonGroup>
      </span>
      <Logo src="/images/logo.svg" />
    </Plate>
  </ThemeProvider>
);

export default Introduction;