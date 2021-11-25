import React from "react";
import { Meta } from "@storybook/react/types-6-0";
import { Story } from "@storybook/react";
import ScrollUp, { ScrollUpProps } from "./ScrollUp";

export default {
  title: "ScrollUp",
  component: ScrollUp,
  argTypes: {
    color: { control: "color" },
    speed: {
      control: { type: "range", min: 0, max: 8, step: 0.1 },
    },
  },
} as Meta;

const Template: Story<ScrollUpProps> = (args) => (
  <>
    <ScrollUp {...args} />
  </>
);

// Reuse that template for creating different stories
export const ScrollTop = Template.bind({});
ScrollTop.args = { color: "brown", speed: 1 };
