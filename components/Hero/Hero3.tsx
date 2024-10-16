"use client";
import React, { useEffect, useState } from "react";
import parse from "html-react-parser";
import WaterWave from "react-water-wave";
import Div from "../Div/Div";
import Button from "../Button/Button";
import VerticalLinks from "../VerticalLinks/VerticalLinks";

// Define el tipo para los enlaces sociales
interface SocialLink {
  name: string; // Asegúrate de que tenga esta propiedad
  links: string; // Asegúrate de que tenga esta propiedad
  // Otras propiedades que pueda tener...
}

// Define el tipo para las props del componente Hero3
interface Hero3Props {
  title: string;
  socialLinksHeading: string;
  heroSocialLinks: SocialLink[]; // Asegúrate de que este tipo se ajuste a tus datos
  btnLink: string;
  btnText: string;
  bgImageUrl: string;
}

const Hero3: React.FC<Hero3Props> = ({
  title,
  socialLinksHeading,
  heroSocialLinks,
  btnLink,
  btnText,
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
                <Button btnLink={btnLink} btnText={btnText} />
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
