const path = require('path');

module.exports = {
  stories: [
    "../src/guides/**/*.stories.mdx",
    "../src/guides/**/*.stories.@(js|jsx|ts|tsx)",
    "../src/components/**/*.stories.mdx",
    "../src/components/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  addons: [
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
    config.resolve.alias = {
      ...config.resolve.alias,
      '@theme/core': path.resolve(__dirname, "../src/theme/index"),
      '@theme/helpers': path.resolve(__dirname, "../src/theme/helpers"),
      '@theme/constants': path.resolve(__dirname, "../src/theme/constants"),
      '@components/core': path.resolve(__dirname, "../src/components/index")
    };

    return config;
  },
  staticDirs: [path.resolve(__dirname, "../static")]
}