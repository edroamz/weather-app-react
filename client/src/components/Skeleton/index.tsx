import * as React from "react";

interface ISkeletonProps {
  [key: string]: any;
}

export default function Skeleton({ children, ...rest }: ISkeletonProps) {
  return <div {...rest}>{children}</div>;
}
