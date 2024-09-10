import type { StorybookConfig } from "@storybook/react-vite";

const config: StorybookConfig = {
  stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)",'../htmlStories/**/*.stories.@(js|mdx)' ],
  addons: [
    "@storybook/addon-onboarding",
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions"
  ],
  framework: {
    name: "@storybook/react-vite",
    options: {},
  },
  webpackFinal: async (config) => {
    config.module.rules.push({
      test: /\.html$/,
      use: ['raw-loader'],
    });
    return config;
  },
};
export default config;
