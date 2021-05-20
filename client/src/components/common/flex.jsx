import React from "react";

export default function flex({
  items,
  justify,
  className,
  inline,
  children,
  ...rest
}) {
  const flex = inline ? "inline-flex" : "flex";
  const itemsClass = items?.toLowerCase() === "center" ? "items-center" : "";
  const justifyClass =
    justify?.toLowerCase() === "center" ? "justify-center" : "";

  return (
    <div
      className={`${flex} ${itemsClass} ${justifyClass} ${className}`}
      {...rest}
    >
      {children}
    </div>
  );
}
