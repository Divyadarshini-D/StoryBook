import React from "react";
import { Meta } from "@storybook/react/types-6-0";
import { Story } from "@storybook/react";
import Input, { InputProps } from "./Input";

export default {
  title: "FORM/Input",
  component: Input,
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as Meta;

// Create a master template for mapping args to render the Button component
const Template: Story<InputProps> = (args) => (
  <>
    <Input {...args} />
  </>
);

// Reuse that template for creating different stories
export const Small = Template.bind({});
Small.args = { title: "Name", size: "small" };

export const Medium = Template.bind({});
Medium.args = { ...Medium.args, title: "Name", size: "medium" };

export const Large = Template.bind({});
Large.args = { ...Large.args, title: "Name", size: "large" };
