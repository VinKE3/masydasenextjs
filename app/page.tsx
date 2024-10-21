"use client";
import About from "@/Sections/About";
import Facturacion from "@/Sections/Facturacion";
import GuiasRemision from "@/Sections/GuiasRemision";
import LiquidacionCompra from "@/Sections/LiquidacionCompra";
import Services from "@/Sections/Services";
import Utilcon from "@/Sections/Utilcon";
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
        subtitle="En MASYDASE, somos un equipo joven especializado en el desarrollo de soluciones tecnológicas que impulsan la transformación digital de tu empresa."
        socialLinksHeading="Siguenos"
        heroSocialLinks={heroSocialLinks}
        bgImageUrl="./images/fondo.jpg"
      />
      <About />
      <Services />
      <Facturacion />
      <LiquidacionCompra />
      <GuiasRemision />
      <Utilcon />
    </>
  );
}
