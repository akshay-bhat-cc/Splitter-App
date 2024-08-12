import type { Meta, StoryObj } from "@storybook/react";
import { ResetButton } from "./ResetButton";

const meta: Meta<typeof ResetButton> = {
  title: "Example/ResetButton",
  component: ResetButton,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    // Optional: Define control types if needed
    isSelected: { control: "boolean" },
    onClick: { action: "clicked" }, // For demonstrating click events
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    label: "RESET",
    isSelected: false,
  },
};

export const Selected: Story = {
  args: {
    label: "RESET",
    isSelected: true,
  },
};
