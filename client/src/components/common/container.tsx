import * as React from "react";

interface IContainerProps {
  [key: string]: any;
}

export default function container({ children, ...rest }: IContainerProps) {
  return (
    <div className="container" {...rest}>
      {children}
    </div>
  );
}
