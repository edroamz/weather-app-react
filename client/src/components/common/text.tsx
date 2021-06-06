import * as React from "react";

interface ITextProps {
  [key: string]: any;
}

export default function Text({ children, ...rest }: ITextProps) {
  return <span {...rest}>{children}</span>;
}
