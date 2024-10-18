import React from "react";
import { Icon } from "@iconify/react";
import Div from "../Div/Div";
import Button2 from "../Button/Button2";

interface Feature {
  name: string;
  available: boolean;
}

interface PricingTableProps {
  title: string;
  features: Feature[];
  btnLink: string;
  btnText: string;

  text: string;
}

const PricingTable: React.FC<PricingTableProps> = ({
  title,
  features,
  btnLink,
  btnText,

  text,
}) => {
  return (
    <Div className="cs-pricing_table cs-style1">
      <Div className="row align-items-center">
        {/* Columna para el ícono */}
        <Div className="col-auto">
          <span className="cs-icon cs-accent_color">
            {/* Aquí puedes poner un ícono, como un SVG o un ícono de FontAwesome */}
            <svg
              width={30}
              height={29}
              viewBox="0 0 30 29"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M29.3803 3.05172C29.4089 1.94752 28.537 1.02921 27.4328 1.00062L9.43879 0.534749C8.33459 0.506159 7.41628 1.37811 7.38769 2.48231C7.35911 3.58651 8.23106 4.50482 9.33526 4.53341L25.3299 4.94752L24.9158 20.9422C24.8872 22.0464 25.7592 22.9647 26.8634 22.9933C27.9676 23.0218 28.8859 22.1499 28.9144 21.0457L29.3803 3.05172ZM3.37714 28.5502L28.7581 4.4503L26.0039 1.54961L0.622863 25.6495L3.37714 28.5502Z"
                fill="currentColor"
              />
            </svg>
          </span>
        </Div>

        <Div className="col">
          <h2 className="cs-pricing_title cs-accent_color">{title}</h2>
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
