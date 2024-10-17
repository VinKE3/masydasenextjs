import Div from "@/components/Div/Div";
import Portfolio2 from "@/components/Portfolio/Portfolio2";
import Portfolio3 from "@/components/Portfolio/Portfolio3";
import Spacing from "@/components/Spacing/Spacing";
import React from "react";
const portfolioData = [
  {
    title: "Winery eCommerce website design & development",
    subtitle: "Project 01",
    btnText: "See Details",
    btnLink: "/portfolio/portfolio-details",
    imageUrl: "/images/portfolio_35.jpeg",
    category: "Web Development",
  },
  {
    title: "Euro corporate agency for healthy environment",
    subtitle: "Project 02",
    btnText: "See Details",
    btnLink: "/portfolio/portfolio-details",
    imageUrl: "/images/portfolio_36.jpeg",
    category: "Branding",
  },
  {
    title: "Powerful admin dashboard design",
    subtitle: "Project 03",
    btnText: "See Details",
    btnLink: "/portfolio/portfolio-details",
    imageUrl: "/images/portfolio_37.jpeg",
    category: "UI Design",
  },
  {
    title: "Crypto financial trading apps for hedge fund",
    subtitle: "Project 04",
    btnText: "See Details",
    btnLink: "/portfolio/portfolio-details",
    imageUrl: "/images/portfolio_38.jpeg",
    category: "Apps Design",
  },
];
const Facturacion = () => {
  return (
    <div>
      <Spacing lg="150" md="80" />
      <Spacing lg="150" md="80" />
      {portfolioData.map((item, index) =>
        index % 2 === 0 ? (
          <Div key={index}>
            <Portfolio2
              title={item.title}
              subtitle={item.subtitle}
              btnText={item.btnText}
              btnLink={item.btnLink}
              imageUrl={item.imageUrl}
              category={item.category}
            />
            <Spacing lg="100" md="70" />
          </Div>
        ) : (
          <Div key={index}>
            <Portfolio3
              title={item.title}
              subtitle={item.subtitle}
              btnText={item.btnText}
              btnLink={item.btnLink}
              imageUrl={item.imageUrl}
              category={item.category}
            />
            <Spacing lg="100" md="70" />
          </Div>
        )
      )}
    </div>
  );
};

export default Facturacion;
