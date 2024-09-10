import type { Meta, StoryObj } from '@storybook/react';
import StandardCard from '../react/components/cards/StandardCard';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'ReactJs/Cards/StandardCard',
  component: StandardCard,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {
    mode: { control: 'radio' },
    image:{control:'text'},
    title:{control:'text'},
    text:{control:'text'},
    type:{control:'radio'}
  },
  // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
} satisfies Meta<typeof StandardCard>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Light: Story = {
  args: {
    type: 'default',
    mode: 'light',
  },
};

export const Dark: Story = {
  args: {
    type: 'default',
    mode: 'dark',
  },
};

export const WideTypeLight: Story = {
  args: {
    type: 'wide',
    mode: 'light',
  },
};

export const WideTypeDark: Story = {
  args: {
    type: 'wide',
    mode: 'dark',
  },
};
