import type { Meta, StoryObj } from "@storybook/react";
import { SelectTip } from "./SelectTip";
import { TipButton } from "../TipButton/TipButton";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "Example/SelectTip",
  component: SelectTip,
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
} satisfies Meta<typeof SelectTip>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const SelectTipBox: Story = {
  args: {
    label: "Select Tip %",
    children: (
      <>
        <TipButton tipPercentage={5}></TipButton>
        <TipButton tipPercentage={10}></TipButton>
        <TipButton tipPercentage={15}></TipButton>
        <TipButton tipPercentage={25}></TipButton>
        <TipButton tipPercentage={50}></TipButton>
        <TipButton tipPercentage="custom"></TipButton>
      </>
    ),
  },
};
