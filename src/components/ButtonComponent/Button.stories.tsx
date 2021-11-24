import React from "react";
import { Meta } from "@storybook/react/types-6-0";
import { Story } from "@storybook/react";
import Button, { ButtonProps } from "./Button";
import { text, boolean } from "@storybook/addon-knobs";

export default {
  title: "FORM/Button",
  component: Button,
  argTypes: {
    backgroundColor: { control: "color" },
    onClick: { action: "clicked" },
  },
  // decorators: [(story) => <CenterAlign>{story()}</CenterAlign>],
} as Meta;

// Create a master template for mapping args to render the Button component
const Template: Story<ButtonProps> = (args) => (
  <>
    <Button
      {...args}
      // {...actions("onClick", "onMouseOver")}
      onClick={() => console.log("button Click")}
    />
    <button disabled={boolean("Disabled", false)}>
      {" "}
      {text("label", "button label")}
    </button>
  </>
);

// Reuse that template for creating different stories
export const Primary = Template.bind({});
Primary.args = { label: "Primary 😃", size: "large" };

export const Secondary = Template.bind({});
Secondary.args = { ...Primary.args, primary: false, label: "Secondary 😇" };
