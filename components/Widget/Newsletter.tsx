import React from "react";
import Div from "../Div/Div";
interface NewsletterProps {
  title?: string;
  subtitle?: string;
  placeholder?: string;
}
const Newsletter = ({ title, subtitle, placeholder }: NewsletterProps) => {
  return (
    <>
      {title && <h2 className="cs-widget_title">{title}</h2>}
      <Div className="cs-newsletter cs-style1">
        <form action="#" className="cs-newsletter_form">
          <input
            type="email"
            className="cs-newsletter_input"
            placeholder={placeholder}
          />
          <button className="cs-newsletter_btn">
            <span>Enviar</span>
          </button>
        </form>
        <Div className="cs-newsletter_text">{subtitle}</Div>
      </Div>
    </>
  );
};

export default Newsletter;
