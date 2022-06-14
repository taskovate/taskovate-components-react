import React, { Children } from 'react';
import styled from 'styled-components';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { colors, gridSize } from '@theme/constants';
import { MdLogin } from 'react-icons/md';
import { HiOutlineChatAlt, HiOutlineBell, HiOutlineUser, HiHome, HiStar } from 'react-icons/hi';
import { 
  Header,
  HeaderDesignation,
  HeaderMenuBar,
  HeaderMenuItem,
  HeaderGlobalBar,
  HeaderGlobalAction,
  Dropdown
} from '@components/core';
import {
  Footer,
} from '.';

export default {
  title: 'Components/Footer',
  parameters: {
    layout: 'fullscreen',
  },
} as ComponentMeta<typeof Footer>;

const Styled = styled.div`
`;

export const Default: ComponentStory<typeof Footer> = ({ children, ...rest}) => (
  <Styled>
    <Footer>
      <div>
        </div>
        <div>
          <div>
            <h4>Resources</h4>
            <p>Support</p>
            <p>Blog</p>
            <p>Newsletter</p>
            <p>What's new</p>
            <p>Sitemap</p>
          </div>
          <div>
            <h4>Company</h4>
            <p>Your Privacy</p>
            <p>About us</p>
          </div>
          <div>
            <h4>Support</h4>
            <p>Contact Us</p>
            <p>FAQ</p>
          </div>
        </div>
        <div>
          <h2>Taskovate<span style={{ fontSize: 18 }}>.com</span></h2>
          <p>All rights reserved. © 2022 Taskovate.com</p>
        </div>
    </Footer>
  </Styled>
);
Default.storyName = "Basic";

export const Single: ComponentStory<typeof Footer> = ({ children, ...rest}) => (
  <Styled>
    <Footer>
      <div>
        <p>By signing in to Taskovate, you agree to our <a href="/">terms of service</a>.</p>
      </div>
    </Footer>
  </Styled>
);
Single.storyName = "Single";