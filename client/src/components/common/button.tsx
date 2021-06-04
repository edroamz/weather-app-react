import * as React from "react";

interface IButton {
  [key: string]: any;
}

export default function Button({ children, ...rest }: IButton) {
  return <button {...rest}>{children}</button>;
}
