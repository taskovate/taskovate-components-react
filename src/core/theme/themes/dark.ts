import { colors } from '@theme/constants';
import { hex2rgba } from '@theme/helpers';

export const name = 'Taskovate Dark';
export const colorScheme = () => 'dark';
export const background = () => colors.d[900];
export const text = () => colors.n[300];
export const textHover = () => colors.n[100];
export const textActive = () => colors.n[100];
export const subtleTwext = () => colors.n[100];
export const placeholderText = () => colors.n[100];
export const heading = () => colors.n[100];
export const subtleHeading = () => colors.n[400];
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
  100: `0 1px 1px ${hex2rgba('#000007', 0.6)}, 0 1px 1px #0009`,
  200: `0 4px 8px -2px ${hex2rgba('#000007', 0.6)}, 0 1px 1px #0009`,
  300: `0 8px 16px -4px ${hex2rgba('#000007', 0.6)}, 0 1px 1px #0009`,
  400: `0 12px 24px -6px ${hex2rgba('#000007', 0.6)}, 0 1px 1px #0009`,
  500: `0 20px 32px -8px ${hex2rgba('#000007', 0.6)}, 0 1px 1px #0009`,
};

export const inputStyles = {
  background: {
    'body': {
      default: () => colors.d[600],
      hover: () => colors.d[500],
      active: () => colors.d[400],
      selected: () => colors.d[300],
    }
  },
  borderColor: {
    'body': {
      default: () => colors.d[600],
      hover: () => colors.p[500],
      focus: () => colors.p[400]
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
    }
  },
};

export const navigationStyles = {
  background: {
    'unset': {
      disabled: () => background(),
      default: () => background(),
      hover: () => colors.d[600],
      active: () => colors.d[500],
    },
    'primary': {
      disabled: () => colors.p[700],
      default: () => colors.p[600],
      hover: () => colors.p[500],
      active: () => colors.p[400],
    },
    'special': {
      disabled: () => colors.n[800],
      default: () => colors.n[400],
      hover: () => colors.n[300],
      active: () => colors.n[200],
    }
  },
  color: {
    'unset': {
      default: () => colors.n[300],
      hover: () => colors.n[200],
      active: () => colors.n[200],
      disabled: () => hex2rgba(colors.d[400], 0.8),
    },
    'primary': {
      default: () => colors.n[300],
      hover: () => colors.n[200],
      active: () => colors.n[100],
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

export const buttonStyles = {
  background: {
    'unset': {
      disabled: () => colors.d[800],
      default: () => colors.d[700],
      hover: () => colors.d[600],
      active: () => colors.d[500],
    },
    'primary': {
      disabled: () => colors.p[700],
      default: () => colors.p[600],
      hover: () => colors.p[500],
      active: () => colors.p[400],
    },
    'special': {
      disabled: () => colors.n[800],
      default: () => colors.n[400],
      hover: () => colors.n[300],
      active: () => colors.n[200],
    },
    'warning': {
      disabled: () => colors.y[800],
      default: () => colors.y[600],
      hover: () => colors.y[500],
      active: () => colors.y[400],
    },
    'danger': {
      disabled: () => colors.r[800],
      default: () => colors.r[600],
      hover: () => colors.r[500],
      active: () => colors.r[400],
    },
    'link': {
      disabled: () => background(),
      default: () => background(),
      hover: () => background(),
      active: () => background(),
    },
    'subtle': {
      disabled: () => background(),
      default: () => background(),
      hover: () => colors.d[700],
      active: () => colors.d[600],
    },
    'subtle-link': {
      disabled: () => background(),
      default: () => background(),
      hover: () => background(),
      active: () => background(),
    },
  },
  color: {
    'unset': {
      default: () => colors.n[300],
      hover: () => colors.n[200],
      active: () => colors.n[100],
      disabled: () => hex2rgba(colors.n[900], 0.8),
    },
    'primary': {
      default: () => colors.n[300],
      hover: () => colors.n[200],
      active: () => colors.n[100],
      disabled: () => hex2rgba(colors.n[900], 0.8),
    },
    'special': {
      default: () => colors.d[900],
      hover: () => colors.d[800],
      active: () => colors.d[600],
      disabled: () => hex2rgba(colors.d[300], 0.95),
    },
    'warning': {
      default: () => colors.d[900],
      hover: () => colors.d[800],
      active: () => colors.d[600],
      disabled: () => hex2rgba(colors.d[900], 0.35),
    },
    'danger': {
      default: () => colors.d[900],
      hover: () => colors.d[800],
      active: () => colors.d[600],
      disabled: () => hex2rgba(colors.d[900], 0.6),
    },
    'link': {
      default: () => colors.b[400],
      hover: () => colors.b[300],
      active: () => colors.b[500],
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