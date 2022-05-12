import { css } from 'styled-components';
import {
  gridSize,
  borderRadius
} from '@theme/constants';

export default () => css`
  body {
    ${({ theme: { scrollStyles } }) => `
      ::-webkit-scrollbar {
        width: ${gridSize() * 2.25}px;
      }

      ::-webkit-scrollbar-track {
        background: ${scrollStyles.background['body'].track()};
      }

      ::-webkit-scrollbar-thumb {
        background: ${scrollStyles.background['body'].default()};
        border-width: 7px;
        border-style: solid;
        border-color:${scrollStyles.background['body'].track()};
        border-radius: ${borderRadius()}em;
      }
            
      ::-webkit-scrollbar-thumb:hover {
        background: ${scrollStyles.background['body'].hover()};
        border-width: 6px;
      }

      ::-webkit-scrollbar-thumb:active {
        background: ${scrollStyles.background['body'].active()};
        border-width: auto;
      }
    `}
  }
`;