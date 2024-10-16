"use client";
import React, { useState } from "react";
import Link from "next/link";
import Div from "../Div/Div";

// Define el tipo para los elementos en el array de data
interface HeroData {
  imageUrl: string;
  href: string;
  title: string;
}

interface Hero2Props {
  data: HeroData[];
  phoneNumber: string;
  email: string;
}

const Hero2: React.FC<Hero2Props> = ({ data, phoneNumber, email }) => {
  const [active, setActive] = useState<number>(0);

  const handleActive = (index: number) => {
    setActive(index);
  };

  return (
    <Div className="cs-hero cs-style2" id="home">
      <Div className="container">
        <Div className="cs-hero_tab">
          {data.map((item, index) => (
            <Div
              key={index}
              className={`cs-hero_tab_item cs-hover_tab ${
                active === index ? "active" : ""
              }`}
            >
              <Div
                className="cs-hero_tab_img cs-bg"
                style={{ backgroundImage: `url(${item.imageUrl})` }}
              />
              <h2 onMouseEnter={() => handleActive(index)}>
                <Link href={item.href}>{item.title}</Link>
              </h2>
            </Div>
          ))}
        </Div>
      </Div>
      <Div className="cs-hero_social_wrap cs-left_side cs-primary_font cs-primary_color">
        <ul className="cs-hero_social_links">
          <li>
            <span>{email}</span>
          </li>
          <li>
            <span>{phoneNumber}</span>
          </li>
        </ul>
      </Div>
    </Div>
  );
};

export default Hero2;
