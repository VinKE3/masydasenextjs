import React from "react";
import { Icon } from "@iconify/react";

interface ContactInfoWidgetProps {
  withIcon?: boolean;
  title?: string;
}

const ContactInfoWidget = ({ withIcon, title }: ContactInfoWidgetProps) => {
  return (
    <>
      {title && <h2 className="cs-widget_title">{title}</h2>}
      <ul className="cs-menu_widget cs-style1 cs-mp0">
        <li>
          {withIcon ? (
            <span className="cs-accent_color">
              <Icon icon="material-symbols:add-call-rounded" />
            </span>
          ) : (
            ""
          )}
          (+51)987351513
        </li>
        <li>
          {withIcon ? (
            <span className="cs-accent_color">
              <Icon icon="material-symbols:add-call-rounded" />
            </span>
          ) : (
            ""
          )}
          (+51)984799203
        </li>
        <li>
          {withIcon ? (
            <span className="cs-accent_color">
              <Icon icon="material-symbols:add-call-rounded" />
            </span>
          ) : (
            ""
          )}
          (+51)936072443
        </li>
        <li>
          {withIcon ? (
            <span className="cs-accent_color">
              <Icon icon="mdi:envelope" />
            </span>
          ) : (
            ""
          )}
          ventas@masydase.com
        </li>
        <li>
          {withIcon ? (
            <span className="cs-accent_color">
              <Icon icon="mdi:map-marker" />
            </span>
          ) : (
            ""
          )}
          Villa el Salvador, Sec. 3 <br />
          Grupo 13 Mza. C Lote. 9
        </li>
      </ul>
    </>
  );
};

export default ContactInfoWidget;
