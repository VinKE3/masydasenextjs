import React from "react";
import Slider from "react-slick";
import Div from "../Div/Div";
import Post from "../Post/index";
const postData = [
  {
    url: "/blog/blog-details",
    src: "/images/guiasRemision/1.png",
    alt: "Guias",
    date: "Sistema Guía transportistas",
    title: "Login",
  },
  {
    url: "/blog/blog-details",
    src: "/images/guiasRemision/login.png",
    alt: "Guias",
    date: "Sistema Guía transportistas",
    title: "Login",
  },
  {
    url: "/blog/blog-details",
    src: "/images/guiasRemision/1.png",
    alt: "Guias",
    date: "Sistema Guía transportistas",
    title: "Login",
  },
  {
    url: "/blog/blog-details",
    src: "/images/guiasRemision/2.png",
    alt: "Guias",
    date: "Sistema Guía transportistas",
    title: "Login",
  },
];

export default function PostSlider() {
  /** Slider Settings **/
  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 3000,
    speed: 1000,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1600,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <Slider {...settings} className="cs-gap-24">
      {postData.map((item, index) => (
        <Div key={index}>
          <Post
            url={item.url}
            src={item.src}
            alt={item.alt}
            date={item.date}
            title={item.title}
          />
        </Div>
      ))}
    </Slider>
  );
}
