import React from "react";

export const Scroll = ({ children }) => (
  <div
    className="scroll"
    style={{
      overflowY: "scroll",
      border: "1px solid rgba(0,0,0,.6)",
      maxHeight: "550px",
      height: "80vh"
    }}
  >
    {children}
  </div>
);
