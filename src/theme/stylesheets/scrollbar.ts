import { css } from 'styled-components';
import {
  gridSize,
  borderRadius
} from '@theme/constants';
// the alias is not being read by parcel correct

const baseScrollStyle = ( trackWidth = 2.25, thumbWidth = 7 ) => css<any>`
  ${({ theme: { scrollStyles } }) => `
    ::-webkit-scrollbar {
      width: ${gridSize() * trackWidth}px;
    }

    ::-webkit-scrollbar-track {
      background: ${scrollStyles.background['body'].track()};
    }

    ::-webkit-scrollbar-thumb {
      background: ${scrollStyles.background['body'].default()};
      border-width: ${thumbWidth}px;
      border-style: solid;
      border-color:${scrollStyles.background['body'].track()};
      border-radius: ${borderRadius()}em;
    }
          
    ::-webkit-scrollbar-thumb:hover {
      background: ${scrollStyles.background['body'].hover()};
      border-width: ${thumbWidth - 1}px;
    }

    ::-webkit-scrollbar-thumb:active {
      background: ${scrollStyles.background['body'].active()};
      border-width: auto;
    }
  `}
`;

export default () => css`
  body {
    ${baseScrollStyle()}
    overflow-y: scroll;
  }

  .react-select__menu-list {
    overflow-y: scroll;
    ${baseScrollStyle(1.25, 3)}
    ${({ theme: { scrollStyles } }) => `
      ::-webkit-scrollbar-thumb {
        background: ${scrollStyles.background['dropdown'].default()};
        border-color:${scrollStyles.background['dropdown'].track()};
      }
            
      ::-webkit-scrollbar-thumb:hover {
        background: ${scrollStyles.background['dropdown'].hover()};
      }

      ::-webkit-scrollbar-thumb:active {
        background: ${scrollStyles.background['dropdown'].active()};
      }
  `}
  }
`;