import * as React from "react";

interface IScrollableBox {
  [key: string]: any;
}

export default function scrollableBox({ children }: IScrollableBox) {
  return <div className="scrollable-box">{children}</div>;
}
