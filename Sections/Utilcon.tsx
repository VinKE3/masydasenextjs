import Div from "@/components/Div/Div";
import SectionHeading from "@/components/SectionHeading/SectionHeading";
import ServiceList from "@/components/ServiceList/ServiceList";
import Spacing from "@/components/Spacing/Spacing";
import React from "react";

const Utilcon = () => {
  return (
    <>
      <Spacing lg="145" md="80" />
      <Div className="container">
        <SectionHeading
          title="Utilcon"
          subtitle="Servicios"
          text="Herramienta diseñada para facilitar las provisiones o cargas masivas de sus ventas y compras, cuenta con un módulo de cancelaciones y trabaja enterno red."
          variant="cs-style1 text-center"
        />

        <Spacing lg="70" md="45" />
        <ServiceList />
      </Div>
    </>
  );
};

export default Utilcon;
