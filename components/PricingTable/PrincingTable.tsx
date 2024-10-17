import React from "react";
import { Icon } from "@iconify/react";
import Button from "../Button/Button";
import Div from "../Div/Div";

interface Feature {
  name: string;
  available: boolean;
}

interface PricingTableProps {
  title: string;
  features: Feature[];
  btnLink: string;
  btnText: string;
}

const PricingTable: React.FC<PricingTableProps> = ({
  title,
  features,
  btnLink,
  btnText,
}) => {
  return (
    <Div className="cs-pricing_table cs-style1">
      <h2 className="cs-pricing_title">{title}</h2>

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
            <span>{feature.name}</span>
          </li>
        ))}
      </ul>
      <Div className="cs-pricing_btn_wrap">
        <Button btnLink={btnLink} btnText={btnText} />
      </Div>
    </Div>
  );
};

export default PricingTable;
