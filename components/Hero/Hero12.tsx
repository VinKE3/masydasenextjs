import React from "react";
import Div from "../Div/Div";
import FullScreenVerticalSlider2 from "../Slider/FullScreenVerticalSlider2";
import VerticalLinks from "../VerticalLinks/VerticalLinks";

// Definimos las interfaces para las props que se esperan
interface SocialLink {
  name: string;
  links: string;
}

interface ShowcaseItem {
  videoUrl: string;
  introTitle: string;
  title: string;
  href: string;
}

interface Hero12Props {
  socialLinksHeading: string;
  heroSocialLinks: SocialLink[];
  showcaseData: ShowcaseItem[];
}

const Hero12: React.FC<Hero12Props> = ({
  socialLinksHeading,
  heroSocialLinks,
  showcaseData,
}) => {
  return (
    <Div className="cs-hero_7_wrap">
      <VerticalLinks data={heroSocialLinks} title={socialLinksHeading} />
      <FullScreenVerticalSlider2 data={showcaseData} />
    </Div>
  );
};

export default Hero12;
