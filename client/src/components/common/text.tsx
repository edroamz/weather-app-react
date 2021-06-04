import * as React from "react";

interface IText {
  [key: string]: any;
}

export default function Text({ children, ...rest }: IText) {
  return <span {...rest}>{children}</span>;
}
