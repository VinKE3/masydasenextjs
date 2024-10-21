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
            titleImage="/images/factura/standar.jpg"
            text="No aplica a "
            textUper="modificaciones"
            features={[
              { name: "Funciones predeterminadas.", available: true },
              { name: "Bajo costo.", available: true },
              { name: "Incluye Soporte estandarizado", available: true },
              { name: "Implementación inmediata.", available: true },
              { name: "Escalabilidad limitada.", available: true },
              {
                name: "Diseño y compatibilidad con cualquier rubro.",
                available: true,
              },
            ]}
            btnText="Contratar"
            btnLink="#contacto"
          />

          <Spacing lg="25" md="25" />
        </Section>

        <Section className="col-lg-6">
          <PricingTable
            titleImage="/images/factura/medida.jpg"
            text="Si Aplica a modificaciones bajo los "
            textUper="requerimientos del cliente"
            features={[
              {
                name: "Personalización según necesidades de la empresa.",
                available: true,
              },
              { name: "Mayor inversión con enfoque único.", available: true },
              { name: "Incluye Soporte especializado", available: true },
              {
                name: "Requiere tiempo de desarrollo e implementación.",
                available: true,
              },
              {
                name: "Apto para modificaciones según cambios de la empresa.",
                available: true,
              },
              {
                name: "Exclusividad de uso.",
                available: true,
              },
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
