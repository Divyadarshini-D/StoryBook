import React from "react";
import "./Button.css";
import { ButtonStyle } from "../GlobalStyle/GlobalStyle";
export interface ButtonProps {
  /**
   * Is this the principal call to action on the page?
   */
  primary?: boolean;
  /**
   * What background color to use
   */
  backgroundColor?: string;
  /**
   * How large should the button be?
   */
  size?: "small" | "medium" | "large";

  borderRadius?: number;
  /**
   * Button contents
   */
  label?: string;
  /**
   * Optional click handler
   */
  onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

/**
 * Primary UI component for user interaction
 */
const Button = ({
  primary = true,
  backgroundColor,
  size = "medium",
  onClick,
  borderRadius,
  label,
}: ButtonProps) => {
  const mode = primary
    ? "storybook-button--primary"
    : "storybook-button--secondary";
  return (
    <ButtonStyle
      type="button"
      className={["storybook-button", `storybook-button--${size}`, mode].join(
        " "
      )}
      backgroundColor={backgroundColor}
      borderRadius={borderRadius}
      onClick={onClick}
    >
      {label}
    </ButtonStyle>
  );
};

export default Button;
