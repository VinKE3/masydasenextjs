import Div from "@/components/Div/Div";
import FunFact2 from "@/components/FunFact/FunFact2";
import Spacing from "@/components/Spacing/Spacing";
import React from "react";
const funfaceData = [
  {
    title: "Empresas nacionales",
    factNumber: "1.5K",
  },
  {
    title: "Páginas web creadas",
    factNumber: "120",
  },
  {
    title: "Años de experiencia",
    factNumber: "25",
  },
  {
    title: "Sistemas personalizados",
    factNumber: "25",
  },
];
const About = () => {
  return (
    <>
      <Div id="nosotros">
        {/* <div>
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
        </Div> */}
        <div className="container">
          {/* <FunFact
            variant="cs-type1"
            title="Soluciones al instante"
            subtitle="En MASYDASE, somos un equipo joven especializado en el desarrollo de soluciones tecnológicas que impulsan la transformación digital de tu empresa, permitiéndote concentrarte en las áreas clave de tu negocio."
            data={funfaceData}
          /> */}
          <FunFact2
            data={funfaceData}
            variant="cs-type1"
            bgUrl="/images/funfact_shape_bg.svg"
          />
          <Spacing lg="100" md="80" />
        </div>
      </Div>
    </>
  );
};

export default About;
