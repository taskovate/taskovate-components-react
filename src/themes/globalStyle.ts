import { createGlobalStyle, DefaultTheme } from 'styled-components';

export default createGlobalStyle<DefaultTheme>`
  .sb-show-main {
    background-color: ${({ theme: { colors } }) => colors.background()};
  }
`;
