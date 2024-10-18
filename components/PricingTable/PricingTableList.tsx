import React from "react";
import PricingTable from "../PricingTable/PrincingTable";
import Section from "../Div/Div";
import Spacing from "../Spacing/Spacing";
import "./pricing.scss";

const PricingTableList: React.FC = () => {
  return (
    <Section className="position-relative">
      <Section className="row">
        <Section className="col-lg-6">
          <PricingTable
            title="Estándar"
            text="Sistema para gestionar distintas etapas del procesamiento adasdasda s dasd as dsa"
            features={[
              { name: "Sujeto a modificaciones", available: false },
              { name: "Multiples Usuarios", available: true },
              { name: "Demostración", available: true },
              { name: "Soporte", available: true },
            ]}
            btnText="Contratar"
            btnLink="#contacto"
          />

          <Spacing lg="25" md="25" />
        </Section>

        <Section className="col-lg-6">
          <PricingTable
            title="A Medida"
            text="Sistema para gestionar distintas etapas del procesamiento adasdasda s dasd as dsa"
            features={[
              { name: "Sujeto a modificaciones", available: true },
              { name: "Multiples Usuarios", available: true },
              { name: "Demostración", available: true },
              { name: "Soporte", available: true },
            ]}
            btnText="Contratar"
            btnLink="#contacto"
          />
          <Spacing lg="25" md="25" />
        </Section>
      </Section>
    </Section>
  );
};

export default PricingTableList;
