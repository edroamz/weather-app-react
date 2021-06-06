import * as React from "react";

interface IHeadingProps {
  level: keyof JSX.IntrinsicElements;
}

const Heading: React.FunctionComponent<
  IHeadingProps & React.HTMLAttributes<HTMLOrSVGElement>
> = ({ level: HeadingType = "h1", children, ...rest }) => {
  return <HeadingType {...rest}>{children}</HeadingType>;
};

export default Heading;
