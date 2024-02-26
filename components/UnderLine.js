import React from "react";

export const UnderLine = ({ size, color }) => (
  <svg width={size} height={size} viewBox="0 0 100 100" transform="rotate(270)">
    {/* Vertical line of the bracket */}
    <line
      x1="80"
      y1="9"
      x2="80"
      y2="91"
      style={{ stroke: color, strokeWidth: 2 }}
    />
    {/* Top horizontal line of the bracket */}
    <line
      x1="80"
      y1="10"
      x2="95"
      y2="10"
      style={{ stroke: color, strokeWidth: 2 }}
    />
    {/* Bottom horizontal line of the bracket */}
    <line
      x1="80"
      y1="90"
      x2="95"
      y2="90"
      style={{ stroke: color, strokeWidth: 2 }}
    />
  </svg>
);
