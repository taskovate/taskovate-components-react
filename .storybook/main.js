const path = require('path');
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');

module.exports = {
  stories: [
    "../src/docs/**/**/*.stories.@(js|jsx|ts|tsx|mdx)",
    "../src/core/components/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  addons: [
    { name: "@storybook/addon-docs",
      options: {
        configureJSX: true,
      },
    },
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    "@storybook/preset-create-react-app",
    "storybook-addon-styled-component-theme/dist/preset"
  ],
  framework: "@storybook/react",
  core: {
    "builder": "webpack5"
  },
  webpackFinal: async (config) => {
    config.resolve.plugins = [new TsconfigPathsPlugin()];
    config.resolve.extensions = ['.ts', '.js', '.tsx'];
    return config;
  },
  staticDirs: [path.resolve(__dirname, "../static")]
}