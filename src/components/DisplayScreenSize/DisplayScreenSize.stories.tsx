import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import { DisplayScreenResolution } from "./DisplayScreenResolution";
import { useState } from "react";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "Example/DisplayScreenResolution",
  component: DisplayScreenResolution,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: "centered",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {
    backgroundColor: { control: "color" },
  },
  // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
  args: { onClick: fn() },
} satisfies Meta<typeof DisplayScreenResolution>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const DisplayResolution: Story = {
  render() {
    const [show, setShow] = useState(true);

    const Button = () => {
      return (
        <button
          onClick={() => {
            show ? setShow(false) : setShow(true);
          }}
        >
          {show ? "show" : "hide"}
        </button>
      );
    };
    return (
      <>
        {show ? <DisplayScreenResolution></DisplayScreenResolution> : ""}
        <br></br>
        <Button></Button>
      </>
    );
  },
};
