import React, { FC } from 'react';
import styled from 'styled-components';
import { gridSize, layers, animation, borderRadius, gradients, fontSize, headerFontFamily } from '@theme/constants';
import { Link } from 'react-resource-router';
import { GoMarkGithub } from 'react-icons/go';
import { Plate } from '..';

const Styled = styled.div`
  margin-top: auto;
  padding: ${gridSize() * 2}px;

  h5 {
    color: darkgrey !important;
    margin-bottom: 0px !important;
    text-align: center;
  }
  a {
    color: grey !important;
    :hover { 
      color: darkgrey !important;
    }
  }
  
  @media only screen and (min-device-width: 740px) {
    margin-left: ${gridSize() * 1}px;
  }
`;

const Logo = styled.img`
  height: 32px;
  margin-right: ${gridSize() * 1}px;;
  margin-bottom: -1px;
  // transform: skewX(-9deg);
`;

const Designation = styled.div`
  display: flex;
  flex-direction: row;
  align-content: center;
  // margin-top: -6px;
  align-items: center;
 `;

const Footer = (props: any) => {
  
  return (
    <Styled>
      <Plate appearance="display">
      </Plate>
    </Styled>
  );
};

export default Footer;