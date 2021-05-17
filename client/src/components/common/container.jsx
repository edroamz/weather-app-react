import React from "react";

export default function container({ tag = "div", children, ...rest }) {
  const CustomTag = tag;
  return (
    <CustomTag className="container" {...rest}>
      {children}
    </CustomTag>
  );
}
