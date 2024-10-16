import React from "react";
import Div from "../Div/Div";

interface TextWidgetProps {
  logoSrc: string;
  logoAlt: string;
  text: string;
}

export default function TextWidget({
  logoSrc,
  logoAlt,
  text,
}: TextWidgetProps) {
  return (
    <Div className="cs-text_widget">
      <img src={logoSrc} alt={logoAlt} />
      <p>{text}</p>
    </Div>
  );
}
