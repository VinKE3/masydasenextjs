import React from "react";
import Link from "next/link"; // Cambiado a next/link para Next.js
import Div from "../Div/Div";
import "./card.scss";

// Definimos los tipos para las props del componente
interface CardProps {
  title: string;
  link: string;
  src: string;
  alt: string;
}

const Card: React.FC<CardProps> = ({ title, link, src, alt }) => {
  return (
    <Link href={link} className="cs-card cs-style1">
      <>
        <img src={src} alt={alt} />
        <Div className="cs-card_overlay" />
        <Div className="cs-card_info">
          <span className=" cs-hover_layer3 cs-accent_bg" />
          <h2 className="cs-card_title">{title}</h2>
        </Div>
      </>
    </Link>
  );
};

export default Card;
