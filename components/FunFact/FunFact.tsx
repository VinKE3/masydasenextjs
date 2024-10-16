import React from "react";
import Div from "../Div/Div";
import "./funfact.scss";

interface FunFactItem {
  factNumber: string | number; // Ajusta según el tipo real de factNumber
  title: string;
}

interface FunFactProps {
  variant?: string;
  title: string;
  subtitle: string;
  data: FunFactItem[];
}

const FunFact: React.FC<FunFactProps> = ({
  variant,
  title,
  subtitle,
  data,
}) => {
  return (
    <Div className={variant ? `cs-funfact_wrap ${variant}` : "cs-funfact_wrap"}>
      <Div
        className="cs-funfact_shape"
        style={{ backgroundImage: "url(./images/funfact_shape_bg.svg)" }}
      />
      <Div className="cs-funfact_left">
        <Div className="cs-funfact_heading">
          <h2>{title}</h2>
          <p>{subtitle}</p>
        </Div>
      </Div>
      <Div className="cs-funfact_right">
        <Div className="cs-funfacts">
          {data && data.length > 0 ? (
            data.map((item, index) => (
              <Div className="cs-funfact cs-style1" key={index}>
                <Div className="cs-funfact_number cs-primary_font cs-semi_bold cs-primary_color">
                  <span />
                  {item.factNumber}
                </Div>
                <Div className="cs-funfact_text">
                  <span className="cs-accent_color">+</span>
                  <p>{item.title}</p>
                </Div>
              </Div>
            ))
          ) : (
            <p>No fun facts available.</p> // Mensaje si no hay datos
          )}
        </Div>
      </Div>
    </Div>
  );
};

export default FunFact;
