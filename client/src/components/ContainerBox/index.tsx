import * as React from "react";

interface IContainerProps {
  [key: string]: any;
}

export default function containerBox({ children, ...rest }: IContainerProps) {
  return (
    <div className="container" {...rest}>
      {children}
    </div>
  );
}
