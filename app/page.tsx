"use client";
import FunFact from "@/components/FunFact/FunFact";

import Hero2 from "@/components/Hero/Hero2";

import { useEffect } from "react";
export default function Home() {
  const heroData = [
    {
      title: "Wedding",
      imageUrl: "./images/wedding.jpeg",
      href: "/service/service-details",
    },
    {
      title: "Fashion",
      imageUrl: "./images/fashion.jpeg",
      href: "/service/service-details",
    },
    {
      title: "Commercial",
      imageUrl: "./images/commercial.jpeg",
      href: "/service/service-details",
    },
    {
      title: "Landscape",
      imageUrl: "./images/landscape.jpeg",
      href: "/service/service-details",
    },
  ];
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
  return (
    <>
      <Hero2 data={heroData} phoneNumber="+044 546664" email="info@arino.com" />
      <div className="container">
        <FunFact
          variant="cs-type1"
          title="Our fun fact"
          subtitle="Sed ut perspiciatis unde omnis iste natus error voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis."
          data={funfaceData}
        />
      </div>
    </>
  );
}
