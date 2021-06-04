import * as React from "react";

export default function transparentBox(args: {
  from: string;
  to: string;
  bg?: string;
}) {
  const { from, to, bg = "#fff" } = args;
  return (
    <div
      className={`transparent-box transparent-box--${from}`}
      style={{
        backgroundImage: `linear-gradient(to ${to}, ${bg},hsla(0,0%,100%,0))`,
      }}
    ></div>
  );
}
