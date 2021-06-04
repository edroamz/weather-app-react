import * as React from "react";

interface IParagraph {
  [key: string]: any;
}

export default function Paragraph({ children, ...rest }: IParagraph) {
  return <p {...rest}>{children}</p>;
}
