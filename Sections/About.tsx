import Div from "@/components/Div/Div";
import IconBox from "@/components/IconBox/IconBox";
import SectionHeading from "@/components/SectionHeading/SectionHeading";
import Spacing from "@/components/Spacing/Spacing";
import React from "react";

const About = () => {
  return (
    <>
      {" "}
      {/* <Spacing lg="100" md="80" /> */}
      <Div id="nosotros">
        <div
          style={{
            background: "linear-gradient(to bottom, #034281, #001f4d)", // Degradado de azul oscuro
            paddingBottom: "100px",
            paddingTop: "100px",
          }}
        >
          <Div className="container">
            <Div className="row">
              <Div className="col-xl-5 col-lg-6">
                <Div className="cs-image_layer cs-style1">
                  <Div className="cs-image_layer_in">
                    <img
                      src="/images/about_img_4.jpeg"
                      alt="About"
                      className="w-100 cs-radius_15"
                    />
                  </Div>
                </Div>
                <Spacing lg="0" md="40" />
              </Div>
              <Div className="col-xl-5 offset-xl-1 col-lg-6">
                <SectionHeading
                  title="Encontramos la mejor solución"
                  subtitle="¿Por qué elegirnos?"
                >
                  <Spacing lg="30" md="20" />
                  <p className="cs-m0">
                    En MASYDASE, somos un equipo joven dedicado a la
                    programación de sistemas convertidas en soluciones, y que
                    brinda soporte técnico a más de 1500 empresas nacionales,
                    desde 1998.
                  </p>
                  <Spacing lg="15" md="15" />
                  <p className="cs-m0">
                    Nuestro equipo de expertos en tecnología y finanzas, te
                    ayudarán a transformar tu negocio y a mejorar tus procesos
                    de facturación para que puedas enfocarte en lo que realmente
                    importa.
                  </p>
                  <Spacing lg="30" md="30" />
                  <Div className="cs-separator cs-accent_bg"></Div>
                  <Spacing lg="25" md="0" />
                </SectionHeading>
              </Div>
            </Div>
          </Div>
        </div>
        <Spacing lg="145" md="80" />
        <Div className="container">
          <SectionHeading
            title="¿Que nos caracteriza?"
            subtitle="Nosotros"
            variant="cs-style1 text-center"
          />
          <Spacing lg="90" md="45" />
          <Div className="row">
            <Div className="col-lg-4">
              <IconBox
                icon="/svg/square.svg"
                title="Misión"
                subtitle="Nuestra misión es adaptarnos a las necesidades de los sistemas de gestión corporativa, ofreciendo soluciones creativas e innovadoras con sistemas flexibles y soporte técnico integrado."
              />
              <Spacing lg="30" md="30" />
            </Div>
            <Div className="col-lg-4">
              <IconBox
                icon="/svg/circle.svg"
                title="Visión"
                subtitle="Aspiramos a ser líderes en el mercado informático, patentando la mayoría de sistemas adaptables a todo tipo de negocios en Perú, fortaleciendo la seguridad de empresas confiadas en nosotros."
              />
              <Spacing lg="30" md="30" />
            </Div>
            <Div className="col-lg-4">
              <IconBox
                icon="/svg/traingle.svg"
                title="Valores"
                subtitle="Nuestros valores fundamentales son la responsabilidad, honestidad y respeto, principios que guían nuestro compromiso hacia la excelencia y la integridad en cada solución que brindamos a nuestros clientes."
              />
              <Spacing lg="30" md="30" />
            </Div>
          </Div>
        </Div>
      </Div>
    </>
  );
};

export default About;
