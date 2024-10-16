import React, { HTMLAttributes } from "react";

interface DivProps extends HTMLAttributes<HTMLDivElement> {
  // Agrega una propiedad opcional
  customProp?: string;
}

const Div: React.FC<DivProps> = ({ children, ...props }) => {
  return <div {...props}>{children}</div>;
};

export default Div;
