import * as React from "react";

interface IScrollableBoxProps {
  [key: string]: any;
}

export default function scrollableBox({ children }: IScrollableBoxProps) {
  return <div className="scrollable-box">{children}</div>;
}
