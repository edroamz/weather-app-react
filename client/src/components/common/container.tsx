import * as React from "react";

interface IContainer {
  [key: string]: any;
}

export default function container({ children, ...rest }: IContainer) {
  return (
    <div className="container" {...rest}>
      {children}
    </div>
  );
}
