import type { Meta, StoryObj } from "@storybook/react";
import { AmountInfo } from "./AmountInfo";
import { action } from "@storybook/addon-actions"; // Import action for handling clicks

const meta: Meta<typeof AmountInfo> = {
  title: "Example/AmountInfo",
  component: AmountInfo,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    resetHandle: { action: "resetHandleClicked" }, // Track the reset button click
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    tipAmount: 15.0,
    totalAmount: 115.0,
    resetHandle: action("resetHandleClicked"), // Use Storybook action to log clicks
    isResetSelected: false,
  },
};

export const ResetSelected: Story = {
  args: {
    tipAmount: 20.0,
    totalAmount: 120.0,
    resetHandle: action("resetHandleClicked"),
    isResetSelected: true,
  },
};
