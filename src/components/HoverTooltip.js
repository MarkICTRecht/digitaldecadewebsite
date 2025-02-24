import React from "react";
import { Tooltip } from "react-tooltip";
import "react-tooltip/dist/react-tooltip.css";

export default function HoverTooltip({ text, tooltipContent, id }) {
  return (
    <span>
      <span
        data-tooltip-id={id}
        data-tooltip-content={tooltipContent}
        style={{
          cursor: "help",
          color: "#777", // Donkergrijs
        }}
      >
        {text}
      </span>
      <Tooltip id={id} />
    </span>
  );
}
