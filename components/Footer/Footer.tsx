import React from "react";
import Div from "../Div/Div";
import SocialWidget from "../Widget/SocialWidget";

import ContactInfoWidget from "../Widget/ContactInfoWidget";
import MenuWidget from "../Widget/MenuWidget";
import TextWidget from "../Widget/TextWidget";
import "./footer.scss";

const serviceMenu = [
  {
    title: "F. Electrónica",
    href: "/service/service-details",
  },
  {
    title: "Liquidaciones de compra",
    href: "/service/service-details",
  },
  {
    title: "Sist. Guías Remisión",
    href: "/service/service-details",
  },
  {
    title: "VPS",
    href: "/service/service-details",
  },
  {
    title: "Utilcon",
    href: "/service/service-details",
  },
];
const DesarrolloMenu = [
  {
    title: "Desarrollo Web",
    href: "/service/service-details",
  },
  {
    title: "Outsourcing Contable",
    href: "/service/service-details",
  },
];
const Footer = () => {
  return (
    <footer className="cs-fooer">
      <Div className="cs-fooer_main">
        <Div className="container">
          <Div className="row">
            <Div className="col-lg-3 col-sm-6">
              <Div className="cs-footer_item">
                <TextWidget
                  logoSrc="/images/logo/MS2.png"
                  logoAlt="Logo"
                  text="Transformamos ideas en soluciones ágiles de confianza"
                />
                <SocialWidget />
              </Div>
            </Div>
            <Div className="col-lg-3 col-sm-6">
              <Div className="cs-footer_item">
                <MenuWidget menuItems={serviceMenu} menuHeading="Servicios" />
              </Div>
            </Div>
            <Div className="col-lg-3 col-sm-6">
              <Div className="cs-footer_item">
                <MenuWidget
                  menuItems={DesarrolloMenu}
                  menuHeading="Servicios"
                />
              </Div>
            </Div>
            <Div className="col-lg-3 col-sm-6">
              <Div className="cs-footer_item">
                <ContactInfoWidget title="Contacto" />
              </Div>
            </Div>
          </Div>
        </Div>
      </Div>
      <Div className="container">
        <Div className="cs-bottom_footer">
          <Div className="cs-bottom_footer_left text-center">
            <Div className="cs-copyright">Copyright © 2025 MasyDase.</Div>
          </Div>
        </Div>
      </Div>
    </footer>
  );
};

export default Footer;
