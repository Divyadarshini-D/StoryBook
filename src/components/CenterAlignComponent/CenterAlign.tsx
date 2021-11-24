import React from "react";
import "./CenterAlign.css";

export interface CenterProps  {
  children: JSX.IntrinsicElements['div'];
};

const CenterAlign = ({children}:CenterProps) => {
 return (
    <>
   <div className="center">
    {children}
   </div>
    </>
  );
};

export default CenterAlign;