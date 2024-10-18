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

const Button2: React.FC<ButtonProps> = ({
  btnLink = "#",
  btnText,
  variant,
  icon,
}) => {
  return (
    <Link
      href={btnLink}
      className={variant ? `cs-text_btn2 ${variant}` : "cs-text_btn2"}
    >
      <>
        <span>{btnText}</span>
        {icon ? icon : <Icon icon="bi:arrow-right" />}
      </>
    </Link>
  );
};

export default Button2;
