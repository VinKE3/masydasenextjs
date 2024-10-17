import React from "react";
import Button from "../Button/Button";

interface Hero10Props {
  title: string;
  subtitle: string;
  btnLink: string;
  btnText: string;
  shape1Url: string;
  shape2Url: string;
  shape3Url: string;
}

const Hero10: React.FC<Hero10Props> = ({
  title,
  subtitle,
  btnLink,
  btnText,
  shape1Url,
  shape2Url,
  shape3Url,
}) => {
  return (
    <div className="cs-hero cs-style7" id="home">
      <div className="container">
        <h1 className="cs-hero_title">{title}</h1>
      </div>
      <div className="container">
        <div className="cs-hero_text_in">
          <div className="cs-hero_subtitle">{subtitle}</div>
          <div className="cs-hero_btn">
            <Button btnLink={btnLink} btnText={btnText} />
          </div>
        </div>
      </div>
      <div className="cs-hero_img_1">
        <img src={shape1Url} alt="Hero Img" />
      </div>
      <div className="cs-hero_img_2">
        <img src={shape2Url} alt="Hero Img" />
      </div>
      <div className="cs-hero_img_3">
        <img src={shape3Url} alt="Hero Img" />
      </div>
    </div>
  );
};

export default Hero10;
