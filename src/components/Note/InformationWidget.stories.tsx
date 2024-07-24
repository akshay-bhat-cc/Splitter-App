import type { Meta, StoryObj } from "@storybook/react";
import { InformationWidget } from "./InformationWidget";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "Note/InformationWidget",
  component: InformationWidget,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: "centered",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {},
  // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
  args: {},
} satisfies Meta<typeof InformationWidget>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Success: Story = {
  args: {
    category: "success",
    title: "Welcome to React",
    content: <p>React is powerful frontend library</p>,
  },
};
export const Information: Story = {
  args: {
    category: "information",
    title: "Welcome to React",
    content: <p>React is powerful frontend library</p>,
  },
};
export const Error: Story = {
  args: {
    category: "error",
    title: "Welcome to React",
    content: <p>React is powerful frontend library</p>,
  },
};
export const Warning: Story = {
  args: {
    category: "warning",
    title: "Welcome to React",
    content: <p>React is powerful frontend library</p>,
  },
};
export const Question: Story = {
  args: {
    category: "question",
    title: "Welcome to React",
    content: <p>React is powerful frontend library</p>,
  },
};
export const Tip: Story = {
  args: {
    category: "tip",
    title: "Welcome to React",
    content: <p>React is powerful frontend library</p>,
  },
};
