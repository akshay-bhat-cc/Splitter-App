import type { Meta, StoryObj } from "@storybook/react";
import { NumberInput } from "./NumberInput";
import { ChangeEvent, useEffect, useState } from "react";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "Example/NumberInput",
  component: NumberInput,
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
} satisfies Meta<typeof NumberInput>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args

export const NoOfPeople: Story = {
  args: {
    iconType: "person",
    label: "No of People",
  },
  render: (args) => {
    const errorMessage = "No of people cannot be in decimal";
    const [value, setValue] = useState(0);
    const [touched, setTouched] = useState(false);
    const [error, setError] = useState("");
    const minValue = 1;
    const isInvalid = (value: number) => value % 1 > 0;

    useEffect(() => {
      if (touched) {
        if (isInvalid && isInvalid(value)) {
          setError(errorMessage);
        } else if (value < minValue) {
          setError(`${args.label} must be at least ${minValue}`);
        } else {
          setError("");
        }
      }
    }, [args.label, touched, value]);

    const inputHandle = (e: ChangeEvent<HTMLInputElement>) => {
      setValue(Number(e.target.value));
      setTouched(true);
    };

    return (
      <NumberInput
        {...args}
        onChange={inputHandle}
        min={minValue}
        errorMessage={error}
      ></NumberInput>
    );
  },
};
