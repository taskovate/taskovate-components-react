import { createGlobalStyle, DefaultTheme } from 'styled-components';
import base from './base';
import scrollbar from './scrollbar';
import typographical from './typographical';

export default createGlobalStyle<DefaultTheme>`
  ${base()}
  ${scrollbar()}
  ${typographical()}
`;