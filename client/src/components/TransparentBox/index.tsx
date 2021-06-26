import * as React from "react";

interface ITransparentBoxProps {
  from: string;
  to: string;
  bg?: string;
}

export default function transparentBox({
  from,
  to,
  bg = "#fff",
}: ITransparentBoxProps) {
  return (
    <div
      className={`transparent-box transparent-box--${from}`}
      style={{
        backgroundImage: `linear-gradient(to ${to}, ${bg},hsla(0,0%,100%,0))`,
      }}
    ></div>
  );
}
