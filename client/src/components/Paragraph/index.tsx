import * as React from "react";

interface IParagraphProps {
  [key: string]: any;
}

export default function Paragraph({ children, ...rest }: IParagraphProps) {
  return <p {...rest}>{children}</p>;
}
