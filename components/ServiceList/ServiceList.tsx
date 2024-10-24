import React, { useState } from "react";
import Link from "next/link"; // Reemplazar react-router-dom con next/link
import Div from "../Div/Div"; // Asegúrate de tener este componente
import "./servicelist.scss";

// Definimos la estructura de los datos del servicio
interface ServiceData {
  title: string;
  subtitle?: string;
  imgUrl: string;
  href: string;
}

// Definimos las props del componente
interface ServiceListProps {
  variant?: string;
}

const serviceData: ServiceData[] = [
  {
    title: "Provision de Ventas Compras y Honorarios",

    imgUrl: "/images/utilcon/LOGIN.png",
    href: "/service/service-details",
  },
  {
    title: "Cancelaciones Masivas",

    imgUrl: "/images/utilcon/FONDO.png",
    href: "/service/service-details",
  },
  {
    title: "Elimina comprobantes subidos de manera masiva.",

    imgUrl: "/images/utilcon/CANCELACIONES.png",
    href: "/service/service-details",
  },
  {
    title: "Carga de anexos",

    imgUrl: "/images/utilcon/LOGIN.png",
    href: "/service/service-details",
  },
  {
    title: "Tipo de Cambio",

    imgUrl: "/images/utilcon/CANCELACIONES.png",
    href: "/service/service-details",
  },
  {
    title: "Valida comprobantes",

    imgUrl: "/images/utilcon/LOGIN.png",
    href: "/service/service-details",
  },
  {
    title: "Elimina empresas y periodos.",

    imgUrl: "/images/utilcon/LOGIN.png",
    href: "/service/service-details",
  },
];

const ServiceList: React.FC<ServiceListProps> = ({ variant }) => {
  const [active, setActive] = useState<number>(0);

  const handelActive = (index: number) => {
    setActive(index);
  };

  return (
    <Div className={`cs-iconbox_3_list ${variant ? variant : ""}`}>
      {serviceData.map((item, index) => (
        <Div
          className={`cs-hover_tab ${active === index ? "active" : ""}`}
          key={index}
          onMouseEnter={() => handelActive(index)}
        >
          <Link href={item.href} passHref className="cs-iconbox cs-style3">
            <Div className="cs-image_layer cs-style1 cs-size_md">
              <Div className="cs-image_layer_in">
                <img
                  src={item.imgUrl}
                  alt="Thumb"
                  className="w-100 cs-radius_15"
                />
              </Div>
            </Div>
            <span className="cs-iconbox_icon cs-center">
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
            <Div className="cs-iconbox_in">
              <h2 className="cs-iconbox_title">{item.title}</h2>
              <Div className="cs-iconbox_subtitle">{item.subtitle}</Div>
            </Div>
          </Link>
        </Div>
      ))}
    </Div>
  );
};

export default ServiceList;
