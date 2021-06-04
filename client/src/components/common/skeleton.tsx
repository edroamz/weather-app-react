import * as React from "react";

interface ISkeleton {
  [key: string]: any;
}

export default function Skeleton({ children, ...rest }: ISkeleton) {
  return <div {...rest}>{children}</div>;
}
