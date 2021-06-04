import * as React from "react";

interface CompProps {
  level: keyof JSX.IntrinsicElements;
}

const Heading: React.FunctionComponent<
  CompProps & React.HTMLAttributes<HTMLOrSVGElement>
> = ({ level: HeadingType = "h1", children, ...rest }) => {
  return <HeadingType {...rest}>{children}</HeadingType>;
};

export default Heading;
