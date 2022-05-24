const path = require('path');
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');

module.exports = {
  framework: "@storybook/react",
  core: {
    "builder": "webpack5"
  },
  stories: [
    "../src/components/**/*.stories.tsx",
    "../src/documentation/**/*.stories.mdx"
  ],
  staticDirs: [path.resolve(__dirname, "../static")],
  addons: [
    { name: "@storybook/addon-docs",
      options: {
        configureJSX: true,
      },
    },
    // "@storybook/preset-create-react-app",
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    "storybook-addon-apollo-client"
  ],
  webpackFinal: async (config) => {
    config.resolve.extensions.push('.js', '.jsx', '.ts', '.tsx');
    config.resolve.plugins = [
      ...(config.resolve.plugins || []),
      new TsconfigPathsPlugin({
        baseUrl:  path.resolve(__dirname, '../src'),
        configFile: path.resolve(__dirname, '../tsconfig.json'),
        extensions: config.resolve.extensions,
      })
    ];
  
    return config;
  },
};