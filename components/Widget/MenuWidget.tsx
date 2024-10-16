import React from "react";
import Link from "next/link";

interface MenuItem {
  title: string;
  href?: string;
}

interface MenuWidgetProps {
  menuItems: MenuItem[];
  menuHeading?: string;
  variant?: string;
}

const MenuWidget = ({ menuItems, menuHeading, variant }: MenuWidgetProps) => {
  return (
    <>
      {menuHeading && <h2 className="cs-widget_title">{menuHeading}</h2>}
      <ul
        className={`${
          variant ? `cs-menu_widget ${variant}` : "cs-menu_widget cs-style1"
        } cs-mp0`}
      >
        {menuItems.map((item, index) => (
          <li key={index}>
            {item.href ? (
              <Link href={item.href}>{item.title}</Link>
            ) : (
              item.title
            )}
          </li>
        ))}
      </ul>
    </>
  );
};

export default MenuWidget;
