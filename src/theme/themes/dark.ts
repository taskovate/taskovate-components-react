import { colors } from '@theme/constants';
import { hex2rgba, hexCombine } from '@theme/helpers';

export const name = 'Taskovate Dark';
export const colorScheme = () => 'dark';
export const background = () => hexCombine(colors.d[900], colors.n[900], 0.1/3);
export const text = () => colors.n[300];
export const textHover = () => colors.n[100];
export const textActive = () => colors.n[100];
export const subtleTwext = () => colors.n[100];
export const placeholderText = () => colors.n[100];
export const heading = () => colors.n[200];
export const subtleHeading = () => colors.n[600];
export const codeBlock = () => colors.n[100];
export const link = () => colors.n[100];
export const linkHover = () => colors.n[100];
export const linkActive = () => colors.n[100];
export const linkOutline = () => colors.n[100];
export const primary = () => colors.n[100];
export const tooltip = () => colors.d[600];
export const skeleton = () => colors.n[200];
export const label = () => colors.n[100];

export const elevation = {
  100: `0 1px 1px ${hex2rgba('#000007', 0.3)}, 0 1px 1px #0001`,
  200: `0 4px 8px -2px ${hex2rgba('#000007', 0.3)}, 0 1px 1px #0001`,
  300: `0 8px 16px -4px ${hex2rgba('#000007', 0.3)}, 0 1px 1px #0001`,
  400: `0 12px 24px -6px ${hex2rgba('#000007', 0.3)}, 0 1px 1px #0001`,
  500: `0 20px 32px -8px ${hex2rgba('#000007', 0.3)}, 0 1px 1px #0001`,
};

export const dropdownStyles = {
  background: {
    'body': {
      default: () => background(),
      hover: () => colors.d[700],
      active: () => colors.d[600],
      selected: () => colors.d[500],
    }
  },
  borderColor: {
    'body': {
      default: () => background(),
      hover: () => colors.d[600],
      focus: () => colors.d[500]
    }
  },
  color: {
    'body': {
      default: () => colors.n[200],
      placeholder: () => colors.n[900]
    }
  }
};

export const inputStyles = {
  background: {
    'body': {
      default: () => colors.d[700],
      hover: () => colors.d[600],
      active: () => colors.d[500],
      selected: () => colors.d[400],
    }
  },
  borderColor: {
    'body': {
      default: () => colors.d[700],
      hover: () => colors.p[600],
      focus: () => colors.p[500]
    }
  },
  color: {
    'body': {
      default: () => colors.n[100],
      placeholder: () => colors.n[900]
    }
  }
};

export const scrollStyles = {
  background: {
    'body': {
      default: () => colors.n[900],
      hover: () => colors.n[600],
      active: () => colors.n[300],
      track: () => background()
    },
    'dropdown': {
      default: () => colors.n[900],
      hover: () => colors.n[600],
      active: () => colors.n[300],
      track: () => background()
    }
  },
};

export const navigationStyles = {
  background: {
    'unset': {
      disabled: () => 'transparent',
      default: () => 'transparent',
      hover: () => hex2rgba(colors.d[600], 0.75),
      active: () => hex2rgba(colors.d[500], 0.75),
    },
    'primary': {
      disabled: () => colors.p[800],
      default: () => colors.p[700],
      hover: () => colors.p[600],
      active: () => colors.p[500],
    },
    'special': {
      disabled: () => hexCombine(colors.n[900], colors.d[900], 0.25),
      default: () => hexCombine(hexCombine(colors.n[300], colors.p[200], 0.125), colors.b[100], 0.125),
      hover: () => hexCombine(hexCombine(colors.n[200], colors.p[200], 0.125), colors.b[100], 0.125),
      active: () => hexCombine(hexCombine(colors.n[100], colors.p[200], 0.125), colors.b[100], 0.125),
    }
  },
  color: {
    'unset': {
      default: () => colors.n[400],
      hover: () => colors.n[300],
      active: () => colors.n[300],
      disabled: () => hex2rgba(colors.d[500], 0.8),
    },
    'primary': {
      default: () => colors.n[400],
      hover: () => colors.n[400],
      active: () => colors.n[300],
      disabled: () => hex2rgba(colors.n[900], 0.8),
    },
    'special': {
      default: () => colors.d[900],
      hover: () => colors.d[800],
      active: () => colors.d[600],
      disabled: () => hex2rgba(colors.d[300], 0.95),
    }
  }
};

export const toggleButtonStyles = {
  background: {
    'unset': {
      default: () => colors.d[800],
      active: () => colors.p[600],
      hover: () => colors.d[700],
    },
  },
  color: {
    'unset': {
      default: () => colors.n[400],
      active: () => colors.n[100],
      hover: () => colors.n[300],
    },
  },
  outline: {
    'unset': {
      default: () => colors.p[600]
    }
  }
};

export const buttonStyles = {
  background: {
    'unset': {
      disabled: () => colors.d[800],
      default: () => colors.d[700],
      hover: () => colors.d[600],
      active: () => colors.d[500],
    },
    'primary': {
      disabled: () => colors.p[800],
      default: () => colors.p[700],
      hover: () => colors.p[600],
      active: () => colors.p[500],
    },
    'special': {
      disabled: () => hexCombine(colors.n[900], colors.d[900], 0.25),
      default: () => hexCombine(hexCombine(colors.n[300], colors.p[200], 0.125), colors.b[100], 0.125),
      hover: () => hexCombine(hexCombine(colors.n[200], colors.p[200], 0.125), colors.b[100], 0.125),
      active: () => hexCombine(hexCombine(colors.n[100], colors.p[200], 0.125), colors.b[100], 0.125),
    },
    'warning': {
      disabled: () => colors.y[900],
      default: () => colors.y[700],
      hover: () => colors.y[600],
      active: () => colors.y[500],
    },
    'danger': {
      disabled: () => colors.r[900],
      default: () => colors.r[700],
      hover: () => colors.r[600],
      active: () => colors.r[500],
    },
    'link': {
      disabled: () => 'transparent',
      default: () => 'transparent',
      hover: () => 'transparent',
      active: () => 'transparent',
    },
    'subtle': {
      disabled: () => 'transparent',
      default: () => 'transparent',
      hover: () => colors.d[700],
      active: () => colors.d[600],
    },
    'subtle-link': {
      disabled: () => 'transparent',
      default: () => 'transparent',
      hover: () => 'transparent',
      active: () => 'transparent',
    },
    'starred': {
      disabled: () => 'transparent',
      default: () => 'transparent',
      hover: () => 'transparent',
      active: () => 'transparent',
    }
  },
  color: {
    'unset': {
      default: () => colors.n[300],
      hover: () => colors.n[200],
      active: () => colors.n[100],
      disabled: () => hex2rgba(colors.n[100], 0.2)
    },
    'primary': {
      default: () => colors.n[300],
      hover: () => colors.n[200],
      active: () => colors.n[100],
      disabled: () => hex2rgba(colors.n[100], 0.2)
    },
    'special': {
      default: () => colors.d[900],
      hover: () => colors.d[800],
      active: () => colors.d[600],
      disabled: () => hex2rgba(colors.d[900], 0.5)
    },
    'warning': {
      default: () => colors.d[900],
      hover: () => colors.d[800],
      active: () => colors.d[700],
      disabled: () => hex2rgba(colors.d[800], 0.7)
    },
    'danger': {
      default: () => colors.d[900],
      hover: () => colors.d[800],
      active: () => colors.d[700],
      disabled: () => hex2rgba(colors.d[800], 0.8)
    },
    'link': {
      default: () => colors.b[500],
      hover: () => colors.b[400],
      active: () => colors.b[600],
      disabled: () => hex2rgba(colors.d[400], 0.8),
    },
    'subtle': {
      default: () => colors.n[300],
      hover: () => colors.n[200],
      active: () => colors.n[100],
      disabled: () => hex2rgba(colors.d[400], 0.8),
    },
    'subtle-link': {
      default: () => colors.n[500],
      hover: () => colors.n[400],
      active: () => colors.n[300],
      disabled: () => hex2rgba(colors.d[400], 0.8),
    },
    'starred': {
      default: () => colors.p[400],
      hover: () => colors.p[300],
      active: () => colors.p[200],
      disabled: () => hex2rgba(colors.p[600], 0.8),
    }
  }
};

export const skeletonShimmer = () => ({
  css: {
    backgroundColor: skeleton(),
    backgroundImage: `linear-gradient(to right, ${skeleton()} 0%, ${colors.n[300]} 20%, ${skeleton()} 40%, ${skeleton()} 100%)`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: '800px 104px',
    animationDuration: '1.5s',
    animationFillMode: 'forwards',
    animationIterationCount: 'infinite',
    animationTimingFunction: 'linear',
  },
  keyframes: {
    '0%': {
      backgroundPosition: '-468px 0',
    },

    '100%': {
      backgroundPosition: '468px 0',
    },
  },
});