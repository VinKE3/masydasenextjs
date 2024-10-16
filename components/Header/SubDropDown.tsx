import React, { useState, ReactNode } from "react";

interface SubDropDownProps {
  children: ReactNode;
}

const SubDropDown = ({ children }: SubDropDownProps) => {
  const [subMenuToggle, setSubMenuToggle] = useState<boolean>(false);

  const handleSubMenuToggle = () => {
    setSubMenuToggle(!subMenuToggle);
  };

  return (
    <>
      <span
        className={
          subMenuToggle
            ? "cs-munu_dropdown_toggle active"
            : "cs-munu_dropdown_toggle"
        }
        onClick={handleSubMenuToggle}
      ></span>
      <ul
        className="cs-submenu_list"
        style={{ display: `${subMenuToggle ? "block" : "none"}` }}
      >
        {children}
      </ul>
    </>
  );
};

export default SubDropDown;
