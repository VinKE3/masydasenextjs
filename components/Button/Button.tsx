import React from "react";
import { Icon } from "@iconify/react";
import Link from "next/link";

// Define el tipo para las props del componente Button
interface ButtonProps {
  btnLink: string;
  btnText: string;
  variant?: string; // Opcional, ya que podría no estar presente
  icon?: React.ReactNode; // Puede ser un elemento React o un ícono de Iconify
}

const Button: React.FC<ButtonProps> = ({ btnLink, btnText, variant, icon }) => {
  return (
    <Link
      href={btnLink}
      className={variant ? `cs-text_btn ${variant}` : "cs-text_btn"}
    >
      <>
        <span>{btnText}</span>
        {icon ? icon : <Icon icon="bi:arrow-right" />}
      </>
    </Link>
  );
};

export default Button;
