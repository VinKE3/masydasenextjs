import React from "react";
import parse from "html-react-parser";
import "./hero.scss";
import Button from "../Button/Button";
import Div from "../Div/Div";
import VerticalLinks from "../VerticalLinks/VerticalLinks";

interface HeroProps {
  title: string;
  subtitle: string;
  btnText: string;
  btnLink: string;
  scrollDownId: string;
  socialLinksHeading: string;
  heroSocialLinks: Array<{ name: string; links: string }>; // Ajusta el tipo según tu estructura
  bgImageUrl: string;
}

const Hero: React.FC<HeroProps> = ({
  title,
  subtitle,
  btnText,
  btnLink,
  scrollDownId,
  socialLinksHeading,
  heroSocialLinks,
  bgImageUrl,
}) => {
  return (
    <Div
      className="cs-hero cs-style1 cs-bg cs-fixed_bg cs-shape_wrap_1"
      style={{ backgroundImage: `url(${bgImageUrl})` }}
    >
      <Div className="cs-shape_1" />
      <Div className="cs-shape_1" />
      <Div className="cs-shape_1" />
      <Div className="container">
        <Div className="cs-hero_text">
          <h1 className="cs-hero_title">{parse(title)}</h1>
          <Div className="cs-hero_info">
            <Div>
              <Button btnLink={btnLink} btnText={btnText} />
            </Div>
            <Div>
              <Div className="cs-hero_subtitle">{subtitle}</Div>
            </Div>
          </Div>
        </Div>
      </Div>
      <VerticalLinks data={heroSocialLinks} title={socialLinksHeading} />
      <a href={scrollDownId} className="cs-down_btn">
        Scroll Down
      </a>
    </Div>
  );
};

export default Hero;
