import React from "react";
import Div from "../Div/Div";

// Define el tipo para las props del componente VerticalLinks
interface LinkItem {
  name: string;
  links: string;
}

interface VerticalLinksProps {
  title?: string; // Título opcional
  data?: LinkItem[]; // Arreglo de enlaces, cada uno con nombre y URL
  variant?: string; // Opcional, ya que podría no estar presente
}

const VerticalLinks: React.FC<VerticalLinksProps> = ({
  title,
  data,
  variant,
}) => {
  return (
    <Div
      className={`cs-hero_social_wrap cs-primary_font cs-primary_color ${
        variant ? variant : ""
      }`}
    >
      {title && <Div className="cs-hero_social_title">{title}</Div>}
      {data && data.length > 0 && (
        <ul className="cs-hero_social_links">
          {data.map((item, index) => (
            <li key={index}>
              <a href={item.links}>{item.name}</a>
            </li>
          ))}
        </ul>
      )}
    </Div>
  );
};

export default VerticalLinks;
