import React from "react";
import { Icon } from "@iconify/react";
import Div from "../Div/Div";
import Button2 from "../Button/Button2";

interface Feature {
  name: string;
  available: boolean;
}

interface PricingTableProps {
  titleImage: string; // Nueva propiedad para la imagen
  features: Feature[];
  btnLink: string;
  btnText: string;
  text: string;
}

const PricingTable: React.FC<PricingTableProps> = ({
  titleImage, // Usar la nueva propiedad
  features,
  btnLink,
  btnText,
  text,
}) => {
  return (
    <Div className="cs-pricing_table cs-style1">
      <Div className="row align-items-center">
        <Div className="col-auto">
          <img
            src={titleImage}
            alt="Pricing Title"
            className="cs-title_image"
          />
        </Div>
      </Div>
      <Div className="cs-pricing_info">
        <Div className="cs-price"></Div>
        <Div className="cs-gray_color">{text}</Div>
      </Div>
      <ul className="cs-pricing_feature cs-mp0">
        {features.map((feature, index) => (
          <li key={index}>
            <span className="cs-feature_icon cs-accent_color">
              {feature.available ? (
                <Icon icon="bi:arrow-right-circle" />
              ) : (
                <Icon icon="bi:x-circle" />
              )}
            </span>
            <span className="cs-accent_color">{feature.name}</span>
          </li>
        ))}
      </ul>
      <Div className="cs-pricing_btn_wrap">
        <Button2 btnLink={btnLink} btnText={btnText} />
      </Div>
    </Div>
  );
};

export default PricingTable;
