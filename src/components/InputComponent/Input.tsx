import React from "react";
import "./Input.css";

export interface InputProps  {
  size?: "small" | "medium" | "large";
  color?: string;
  title: string;
};

const Input = ({
  color,
  size = "medium",
  title,
}: InputProps) => {

  return (
    <>
    <div>
    <div className={`heading-${size}`} style={color ? { color }: {}}>{title}</div>
    
    <input className={`input ${size}`} placeholder={title} />
    </div>
    </>
  );
};

export default Input;