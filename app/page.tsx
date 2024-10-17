"use client";
import About from "@/Sections/About";
import Facturacion from "@/Sections/Facturacion";
import LiquidacionCompra from "@/Sections/LiquidacionCompra";
import Services from "@/Sections/Services";
import Hero3 from "@/components/Hero/Hero3";

import { useEffect } from "react";
export default function Home() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const heroSocialLinks = [
    {
      name: "Facebook",
      links: "#",
    },
    {
      name: "Instagram",
      links: "#",
    },
    {
      name: "Youtube",
      links: "#",
    },
  ];
  return (
    <>
      <Hero3
        title="Transformamos ideas <br />en Soluciones"
        btnLink="#contacto"
        btnText={`Contacto`}
        socialLinksHeading="Siguenos"
        heroSocialLinks={heroSocialLinks}
        bgImageUrl="./images/fondo.jpg"
      />
      <About />
      <Services />
      <Facturacion />
      <LiquidacionCompra />
    </>
  );
}
