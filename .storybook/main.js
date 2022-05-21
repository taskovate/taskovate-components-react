const path = require('path');
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');

module.exports = {
  stories: [
    "../src/components/**/*.stories.@(js|jsx|ts|tsx)",
    // "../src/documentation/**/*.stories.@(ts|tsx|mdx)"
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
    "storybook-addon-apollo-client",
    "@storybook/preset-create-react-app",
    "storybook-addon-styled-component-theme/dist/preset"
  ],
  framework: "@storybook/react",
  core: {
    "builder": "webpack5"
  },
  webpackFinal: async (config) => {
    config.resolve.plugins = [new TsconfigPathsPlugin()];
    config.resolve.extensions = ['.js', '.jsx', '.ts', '.tsx'];
    return config;
  },
  staticDirs: [path.resolve(__dirname, "../static")]
}