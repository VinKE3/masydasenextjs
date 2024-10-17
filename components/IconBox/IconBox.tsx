import React from "react";
import parse from "html-react-parser";
import "./iconbox.scss";
import Div from "../Div/Div";

// Definimos los tipos para las props del componente
interface IconBoxProps {
  title: string;
  subtitle: string;
  icon: string;
}

const IconBox: React.FC<IconBoxProps> = ({ title, subtitle, icon }) => {
  return (
    <Div className="cs-iconbox cs-style1 text-center">
      <Div className="cs-iconbox_icon">
        <img src={icon} alt="Icon" width={56} />
      </Div>
      <h2 className="cs-iconbox_title">{parse(title)}</h2>
      <Div className="cs-iconbox_subtitle">{parse(subtitle)}</Div>
    </Div>
  );
};

export default IconBox;
