import React from "react";
import "./ScrollUp.css";
import { ScrollUpStyles } from "../GlobalStyle/GlobalStyle";

export interface ScrollUpProps {
  color?: string;
  speed?: number;
}

const ScrollUp = ({ color, speed }: ScrollUpProps) => {
  return (
    <div className="scroll_icon">
      <ScrollUpStyles
        className="scroll"
        color={color}
        speed={speed}
      ></ScrollUpStyles>
    </div>
  );
};

export default ScrollUp;
