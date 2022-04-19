import { createGlobalStyle, DefaultTheme } from 'styled-components';

export default createGlobalStyle<DefaultTheme>`
  .sb-show-main {
    background-color: ${props => props.theme.name === 'Dark theme' ? '#2c2f33' : 'white'} !important;
  }
`;
