import * as React from "react";

interface IButtonProps {
  [key: string]: any;
}

export default function Button({ children, ...rest }: IButtonProps) {
  return <button {...rest}>{children}</button>;
}
