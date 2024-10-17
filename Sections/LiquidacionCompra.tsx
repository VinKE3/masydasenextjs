import Button from "@/components/Button/Button";
import Div from "@/components/Div/Div";
import Spacing from "@/components/Spacing/Spacing";
import React from "react";

const LiquidacionCompra = () => {
  return (
    <Div id="liquidaciones-compras">
      <Spacing lg="120" md="50" />
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
    </Div>
  );
};

export default LiquidacionCompra;
