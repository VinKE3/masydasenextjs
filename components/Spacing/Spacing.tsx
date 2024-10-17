import React from "react";
import Div from "../Div/Div";
import "./spacing.scss";

interface SpacingProps {
  lg: string;
  md: string;
}

const Spacing: React.FC<SpacingProps> = ({ lg, md }) => {
  return <Div className={`cs-height_${lg} cs-height_lg_${md}`}></Div>;
};

export default Spacing;
