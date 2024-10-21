import Div from "@/components/Div/Div";
import Portfolio2 from "@/components/Portfolio/Portfolio2";
import PricingTableList from "@/components/PricingTable/PricingTableList";
import SectionHeading from "@/components/SectionHeading/SectionHeading";
import SectionHeading2 from "@/components/SectionHeading/SectionHeading2";
import Spacing from "@/components/Spacing/Spacing";
import VideoModal from "@/components/VideoModal/VideoModal";
import React from "react";
const portfolioData = [
  {
    title: "Facturación Electrónica",
    subtitle: "Servicio",
    text: "Ofrecemos un servicio de facturación electrónica que se divide en un sistema estándar que contiene las características básicas y un sistema a medida, personalizado brindando características exclusivas solicitadas por el usuario.",
    btnText: "Comparar",
    btnLink: "#sistema-estandar",
    imageUrl: "/images/utilcon/FONDO.png",
    category: "Facturación Electrónica",
  },
];
const Facturacion = () => {
  return (
    <Div id="facturacion-electronica">
      <Spacing lg="150" md="70" />
      {portfolioData.map((item, index) => (
        <Div key={index}>
          <Portfolio2
            title={item.title}
            subtitle={item.subtitle}
            text={item.text}
            btnText={item.btnText}
            btnLink={item.btnLink}
            imageUrl={item.imageUrl}
            category={item.category}
          />
          <Spacing lg="100" md="70" />
        </Div>
      ))}
      <Spacing lg="100" md="40" />
      <Div style={{ backgroundColor: "#000", position: "relative", zIndex: 1 }}>
        <Spacing lg="100" md="40" />
        <Div id="sistema-estandar" className="container">
          <SectionHeading
            title="Sistema de facturación web"
            subtitle="Servicios"
            text="Es una herramienta digital que automatiza la emisión y gestión de comprobantes electrónicos, ayudando a reducir errores, costos y optimizando sus procesos administrativos."
            variant="cs-style1 text-center"
          />
          <Spacing lg="180" md="40" />
        </Div>
      </Div>

      <Div style={{ backgroundColor: "#fff", zIndex: 2 }}>
        <Div
          className="container"
          style={{ marginTop: "-120px", position: "relative", zIndex: 2 }}
        >
          <PricingTableList />
        </Div>
      </Div>

      <Spacing lg="125" md="70" />
      <Div id="sistema-medida" className="container">
        <h2 className="cs-font_35 cs-m0 text-center cs-line_height_4">
          Video demostrativo sistema de facturación web a medida
        </h2>
        <Spacing lg="70" md="70" />
        <VideoModal
          videoSrc="https://www.youtube.com/watch?v=Kem-j1OLBwE"
          bgUrl="/images/utilcon/FONDO.png"
        />
      </Div>
      <Spacing lg="125" md="80" />
    </Div>
  );
};

export default Facturacion;
