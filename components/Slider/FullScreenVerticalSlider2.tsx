import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Mousewheel, Pagination, Navigation } from "swiper/modules";
// Import Mousewheel from modules
import Link from "next/link"; // Usamos Link de Next.js
import "swiper/css";
import "swiper/css/pagination";
import Div from "../Div/Div";

interface SlideItem {
  videoUrl: string;
  introTitle: string;
  title: string;
  href: string;
}

interface FullScreenVerticalSliderProps {
  data: SlideItem[];
}

const FullScreenVerticalSlider: React.FC<FullScreenVerticalSliderProps> = ({
  data,
}) => {
  return (
    <Div className="cs-vertical_slider cs-swiper_arrow_style_1">
      <Div className="cs-down_btn cs-swiper_button_next"></Div>

      <Swiper
        direction="vertical"
        slidesPerView={1}
        spaceBetween={0}
        mousewheel={true}
        pagination={false}
        speed={1000}
        loop={true}
        modules={[Mousewheel, Pagination, Navigation]}
        className="mySwiper"
        navigation={{
          nextEl: ".cs-swiper_button_next",
          prevEl: null,
          disabledClass: "swiper-button-disabled",
        }}
      >
        {data.map((item, index) => (
          <SwiperSlide key={index}>
            <Div className="cs-hero cs-style5 cs_type_1">
              <video autoPlay loop muted>
                <source src={item.videoUrl} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              <div className="cs-hero_text">
                <h3 className="cs-hero_intro_title">{item.introTitle}</h3>
                <h2 className="cs-hero_title">{item.title}</h2>
                <Link href={item.href} passHref>
                  <button className="cs-hero_btn">
                    <svg
                      width={30}
                      height={30}
                      viewBox="0 0 30 30"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M29.7019 3.25126C29.7019 1.87055 28.5826 0.751264 27.2019 0.751262L4.70186 0.751262C3.32115 0.751262 2.20186 1.87055 2.20186 3.25126C2.20186 4.63197 3.32115 5.75126 4.70186 5.75126L24.7019 5.75126L24.7019 25.7513C24.7019 27.132 25.8212 28.2513 27.2019 28.2513C28.5826 28.2513 29.7019 27.132 29.7019 25.7513L29.7019 3.25126ZM4.22089 29.7678L28.9696 5.01903L25.4341 1.4835L0.685358 26.2322L4.22089 29.7678Z"
                        fill="currentColor"
                      />
                    </svg>
                  </button>
                </Link>
              </div>
            </Div>
          </SwiperSlide>
        ))}
      </Swiper>
    </Div>
  );
};

export default FullScreenVerticalSlider;
