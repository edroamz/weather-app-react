import React from "react";

export default function heading({ level, children, ...rest }) {
  const validlevels = ["h1", "h2", "h3", "h4", "h5", "h6"];
  const safeHeading = level ? `h${level}`.toLowerCase() : "";
  const Heading = validlevels.includes(safeHeading) ? safeHeading : "h1";
  return <Heading {...rest}>{children}</Heading>;
}
