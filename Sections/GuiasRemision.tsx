import Div from "@/components/Div/Div";
import SectionHeading from "@/components/SectionHeading/SectionHeading";
import Spacing from "@/components/Spacing/Spacing";
import React from "react";
import PostSlider from "../components/Slider/PostSlider";

const GuiasRemision = () => {
  return (
    <Div id="sistema-guias" className="container">
      <Spacing lg="150" md="70" />
      <Div className="row">
        <Div className="col-xl-4">
          <SectionHeading
            title="Guías de Remisión"
            subtitle="Sistema web"
            btnText="Contactar"
            btnLink="#contact"
          />
          <Spacing lg="90" md="45" />
        </Div>
        <Div className="col-xl-7 offset-xl-1">
          <Div className="cs-half_of_full_width">
            <PostSlider />
          </Div>
        </Div>
      </Div>
      <Spacing lg="150" md="70" />
    </Div>
  );
};

export default GuiasRemision;
