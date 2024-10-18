import Button from "@/components/Button/Button";
import Div from "@/components/Div/Div";
import Portfolio from "@/components/Portfolio/index";
import SectionHeading from "@/components/SectionHeading/SectionHeading";

import PortfolioSlider from "@/components/Slider/PortfolioSlider";
import Spacing from "@/components/Spacing/Spacing";
import React from "react";
const portfolioData = [
  {
    title: "Login del sistema",
    subtitle: "Contratar",
    href: "#contacto",
    src: "/images/liquidacionCompras/liqui1.png",
  },
  {
    title: "Diferentes menus del sistema",
    subtitle: "Contratar",
    href: "#contacto",
    src: "/images/liquidacionCompras/liqui2.png",
  },
  {
    title: "Agregar empresas y vendedores",
    subtitle: "Contratar",
    href: "#contacto",
    src: "/images/liquidacionCompras/liqui3.png",
  },
  {
    title: "Gestión de diefentes usuarios",
    subtitle: "Contratar",
    href: "#contacto",
    src: "/images/liquidacionCompras/liqui1.png",
  },
];

const LiquidacionCompra = () => {
  return (
    <Div id="liquidaciones-compras">
      {/* <Spacing lg="125" md="50" />
      <Div className="container">
        <Div className="row align-items-center">
          <Div className="col-xl-5 col-lg-6">
            <Div className="cs-radius_15 cs-shine_hover_1">
              <img
                src="/images/liquidacionCompras/liqui2.png"
                alt="Service"
                className="cs-radius_15 w-100"
              />
            </Div>
            <Spacing lg="0" md="40" />
          </Div>
          <Div className="col-lg-6 offset-xl-1">
            <h2 className="cs-font_50 cs-m0">Liquidaciones de compra</h2>
            <p className="sizetext">
              Es el proceso mediante el cual se revisan, verifican y ajustan
              todas las transacciones relacionadas con la adquisición de bienes
              o servicios.
            </p>
            <Spacing lg="50" md="30" />
            <Div className="row">
              <Div className="col-lg-6">
                <Button
                  btnLink="#liquidaciones-compras"
                  btnText="Multi empresa"
                  variant="cs-type2"
                />
                <Spacing lg="20" md="10" />
                <Button
                  btnLink="#liquidaciones-compras"
                  btnText="Carga mediante excel"
                  variant="cs-type2"
                />
                <Spacing lg="20" md="10" />
                <Button
                  btnLink="#liquidaciones-compras"
                  btnText="Listado de vendedores"
                  variant="cs-type2"
                />
                <Spacing lg="20" md="10" />
              </Div>
              <Div className="col-lg-6">
                <Button
                  btnLink="#liquidaciones-compras"
                  btnText="Descarga PDF y XML"
                  variant="cs-type2"
                />
                <Spacing lg="20" md="10" />
                <Button
                  btnLink="#liquidaciones-compras"
                  btnText="Permite consultar DNI"
                  variant="cs-type2"
                />
                <Spacing lg="20" md="10" />
                <Button
                  btnLink="#liquidaciones-compras"
                  btnText="Opción de revertir las liquidaciones"
                  variant="cs-type2"
                />
                <Spacing lg="20" md="10" />
              </Div>
            </Div>
          </Div>
        </Div>
      </Div>
      <Spacing lg="125" md="50" />
      <Div>
        <Div className="container">
          <SectionHeading
            title="Capturas del sistema"
            subtitle="Liquidaciones de compra"
            variant="cs-style1 text-center"
          />
          <Spacing lg="90" md="45" />
        </Div>
        <PortfolioSlider data={portfolioData} />
        <Spacing lg="25" md="25" />
      </Div> */}
      <Spacing lg="150" md="80" />
      <Div className="container">
        <Div className="row">
          <Div className="col-xl-5 col-lg-7">
            <SectionHeading
              title="Sistema liquidación de compra"
              subtitle="Servicio"
            >
              <Spacing lg="30" md="20" />
              <p className="cs-m0">
                Es el proceso mediante el cual se revisan, verifican y ajustan
                todas las transacciones relacionadas con la adquisición de
                bienes o servicios.
              </p>
              <Spacing lg="50" md="30" />
              <Div className="row">
                <Div className="col-lg-6">
                  <Button
                    btnLink="#liquidaciones-compras"
                    btnText="Multi empresa"
                    variant="cs-type2"
                  />
                  <Spacing lg="20" md="10" />
                  <Button
                    btnLink="#liquidaciones-compras"
                    btnText="Carga mediante excel"
                    variant="cs-type2"
                  />
                  <Spacing lg="20" md="10" />
                  <Button
                    btnLink="#liquidaciones-compras"
                    btnText="Listado de vendedores"
                    variant="cs-type2"
                  />
                  <Spacing lg="20" md="10" />
                </Div>
                <Div className="col-lg-6">
                  <Button
                    btnLink="#liquidaciones-compras"
                    btnText="Descarga PDF y XML"
                    variant="cs-type2"
                  />
                  <Spacing lg="20" md="10" />
                  <Button
                    btnLink="#liquidaciones-compras"
                    btnText="Permite consultar DNI"
                    variant="cs-type2"
                  />
                  <Spacing lg="20" md="10" />
                  <Button
                    btnLink="#liquidaciones-compras"
                    btnText="Opción de revertir las liquidaciones"
                    variant="cs-type2"
                  />
                  <Spacing lg="20" md="10" />
                </Div>
              </Div>
              <Spacing lg="30" md="30" />
              <Div className="cs-separator cs-accent_bg"></Div>
              <Spacing lg="25" md="40" />
            </SectionHeading>
          </Div>
          <Div className="col-lg-5 offset-xl-2">
            <img
              src="/images/liquidacionCompras/liqui1.png"
              alt="About"
              className="w-100 cs-radius_15"
            />
            <Spacing lg="25" md="25" />
          </Div>
          <Div className="col-lg-7">
            <img
              src="/images/liquidacionCompras/liqui2.png"
              alt="About"
              className="w-100 cs-radius_15"
            />
            <Spacing lg="25" md="25" />
          </Div>
          <Div className="col-lg-5">
            <img
              src="/images/liquidacionCompras/liqui3.png"
              alt="About"
              className="w-100 cs-radius_15"
            />
            <Spacing lg="25" md="25" />
          </Div>
        </Div>
      </Div>
    </Div>
  );
};

export default LiquidacionCompra;
