"use client";
import About from "@/Sections/About";
import Facturacion from "@/Sections/Facturacion";
import Hero from "@/components/Hero/Hero";
import Service from "@/components/Services/Service";

import { useEffect } from "react";
export default function Home() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const funfaceData = [
    {
      title: "Global Happy Clients",
      factNumber: "40K",
    },
    {
      title: "Project Completed",
      factNumber: "50K",
    },
    {
      title: "Team Members",
      factNumber: "245",
    },
    {
      title: "Digital products",
      factNumber: "550",
    },
  ];
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
      <Hero
        title="Transformamos ideas <br/> en soluciones"
        subtitle="Somos un equipo joven dedicado a la programación de sistemas convertidas en soluciones, y que brinda soporte técnico a más de 1500 empresas nacionales."
        btnText="Contacto"
        btnLink="#contacto"
        scrollDownId="#nosotros"
        socialLinksHeading="Siguenos"
        heroSocialLinks={heroSocialLinks}
        bgImageUrl="/images/fondo.jpg"
      />

      <About />
      <Service />
      <Facturacion />
    </>
  );
}
