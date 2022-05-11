import { createGlobalStyle, DefaultTheme } from 'styled-components';
import base from './base';
import scrollbar from './scrollbar';
import typography from './typography';

export default createGlobalStyle<DefaultTheme>`
  ${base()}
  ${scrollbar()}
  ${typography()}
`;