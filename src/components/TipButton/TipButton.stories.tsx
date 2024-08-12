import type { Meta, StoryObj } from "@storybook/react";
import { TipButton } from "./TipButton";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "Example/TipButton",
  component: TipButton,
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
} satisfies Meta<typeof TipButton>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const DefaultTipButton: Story = {
  args: {
    tipPercentage: 15,
    isSelected: false,
    minCustomTip: 1,
  },
};

export const CustomTipInput: Story = {
  args: {
    tipPercentage: "custom",
    isSelected: false,
    minCustomTip: 1,
  },
};

export const SelectedTipButton: Story = {
  args: {
    tipPercentage: 20,
    isSelected: true,
    minCustomTip: 1,
  },
};
