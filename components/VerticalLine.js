import React from "react";

export const VerticalLine = ({ height }) => (
  <svg height={height} width="10">
    <line
      x1="5"
      y1="0"
      x2="5"
      y2={height}
      style={{ stroke: "#494949", strokeWidth: 3 }}
    />
  </svg>
);

// #494949; #5918df
