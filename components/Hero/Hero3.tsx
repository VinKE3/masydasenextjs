"use client";
import React, { useEffect, useState } from "react";
import parse from "html-react-parser";

import dynamic from "next/dynamic";
import Div from "../Div/Div";

import VerticalLinks from "../VerticalLinks/VerticalLinks";
import "./hero.scss";

// Importa WaterWave dinámicamente para cargar solo en el cliente
const WaterWave = dynamic(() => import("react-water-wave"), {
  ssr: false, // Deshabilita la renderización en el lado del servidor
});

// Define el tipo para los enlaces sociales
interface SocialLink {
  name: string; // Asegúrate de que tenga esta propiedad
  links: string; // Asegúrate de que tenga esta propiedad
  // Otras propiedades que pueda tener...
}

// Define el tipo para las props del componente Hero3
interface Hero3Props {
  title: string;
  subtitle: string;
  socialLinksHeading: string;
  heroSocialLinks: SocialLink[]; // Asegúrate de que este tipo se ajuste a tus datos

  bgImageUrl: string;
}

const Hero3: React.FC<Hero3Props> = ({
  title,
  subtitle,
  socialLinksHeading,
  heroSocialLinks,

  bgImageUrl,
}) => {
  const [isBrowser, setIsBrowser] = useState(false);

  useEffect(() => {
    // Esto se ejecuta solo en el lado del cliente
    setIsBrowser(true);
  }, []);
  return (
    <Div className="cs-hero cs-style1 cs-type2" id="home">
      {isBrowser && (
        <WaterWave
          className="cs-hero_bg cs-bg cs-ripple_version cs-center"
          imageUrl={bgImageUrl}
        >
          {() => (
            <Div className="container">
              <Div className="cs-hero_text text-center">
                <h1 className="cs-hero_title">{parse(title)}</h1>
                <Div className="cs-hero_info justify-content-center">
                  <Div className="cs-hero_subtitle">{subtitle}</Div>
                </Div>
              </Div>
            </Div>
          )}
        </WaterWave>
      )}
      <VerticalLinks
        data={heroSocialLinks}
        title={socialLinksHeading}
        variant="cs-left_side"
      />
    </Div>
  );
};

export default Hero3;
