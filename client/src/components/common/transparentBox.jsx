import React from "react";

export default function transparentBox({ from, to, bg = "#fff" }) {
  return (
    <div
      className={`transparent-box transparent-box--${from}`}
      style={{
        backgroundImage: `linear-gradient(to ${to}, ${bg},hsla(0,0%,100%,0))`,
      }}
    ></div>
  );
}
