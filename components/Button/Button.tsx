import React from "react";
import { Icon } from "@iconify/react";
import Link from "next/link";

// Define el tipo para las props del componente Button
interface ButtonProps {
  btnLink?: string;
  btnText: string;
  variant?: string;
  icon?: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({
  btnLink = "#",
  btnText,
  variant,
  icon,
}) => {
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
