import React from "react";

export default function Paragraph({ children, ...rest }) {
  return <p {...rest}>{children}</p>;
}
