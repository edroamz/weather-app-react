import React from "react";

export default function Text({ children, ...rest }) {
  return <span {...rest}>{children}</span>;
}
