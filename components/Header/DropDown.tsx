import React, { useState, ReactNode } from "react";
interface DropDownProps {
  children: ReactNode;
}
const DropDown = ({ children }: DropDownProps) => {
  const [mobileToggle, setMobileToggle] = useState<boolean>(false);
  const handleMobileToggle = () => {
    setMobileToggle(!mobileToggle);
  };
  return (
    <>
      <span
        className={
          mobileToggle
            ? "cs-munu_dropdown_toggle active"
            : "cs-munu_dropdown_toggle"
        }
        onClick={handleMobileToggle}
      ></span>
      {children}
    </>
  );
};

export default DropDown;
