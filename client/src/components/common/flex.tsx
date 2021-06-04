import * as React from "react";

interface IFlex {
  items?: string;
  justify?: string;
  className?: string;
  inline?: boolean;
  children?: object;
}

export default function flex({
  items,
  justify,
  className,
  inline,
  children,
  ...rest
}: IFlex) {
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
