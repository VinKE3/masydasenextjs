"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import SocialWidget from "../Widget/SocialWidget";
import Newsletter from "../Widget/Newsletter";
import ContactInfoWidget from "../Widget/ContactInfoWidget";
import Div from "../Div/Div";
import DropDown from "./DropDown";
import "./header.scss";
import SubDropDown from "./SubDropDown";
interface HeaderProps {
  variant?: string; // Puedes ajustar el tipo según lo que necesites
}
const Header: React.FC<HeaderProps> = ({ variant }) => {
  const [isSticky, setIsSticky] = useState(false);
  const [sideHeaderToggle, setSideHeaderToggle] = useState(false);
  const [mobileToggle, setMobileToggle] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 0) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    });
  }, []);
  return (
    <>
      <header
        className={`cs-site_header cs-style1 text-uppercase ${
          variant ? variant : ""
        } cs-sticky_header ${isSticky ? "cs-sticky_header_active" : ""}`}
      >
        <Div className="cs-main_header">
          <Div className="container">
            <Div className="cs-main_header_in">
              <Div className="cs-main_header_left">
                <Link className="cs-site_branding" href="/">
                  <img src="/images/logo/MS2.png" alt="Logo" />
                </Link>
              </Div>
              <Div className="cs-main_header_center">
                <Div className="cs-nav cs-primary_font cs-medium">
                  <ul
                    className="cs-nav_list"
                    style={{ display: `${mobileToggle ? "block" : "none"}` }}
                  >
                    <li>
                      <Link
                        href="#nosotros"
                        onClick={() => setMobileToggle(false)}
                      >
                        Nosotros
                      </Link>
                    </li>
                    <li className="menu-item-has-children">
                      <Link
                        href="#servicios"
                        onClick={() => setMobileToggle(false)}
                      >
                        Servicios
                      </Link>
                      <DropDown>
                        <ul>
                          <li className="menu-item-has-children">
                            <Link
                              href="#facturacion-electronica"
                              onClick={() => setMobileToggle(false)}
                            >
                              F. Electrónica
                            </Link>
                            <SubDropDown>
                              <li>
                                <Link
                                  href="#sistema-estandar"
                                  onClick={() => setMobileToggle(false)}
                                >
                                  Sistema Estandar
                                </Link>
                              </li>
                              <li>
                                <Link
                                  href="#sistema-medida"
                                  onClick={() => setMobileToggle(false)}
                                >
                                  Sistema a medida
                                </Link>
                              </li>
                            </SubDropDown>
                          </li>

                          <li>
                            <Link
                              href="#liquidaciones-compras"
                              onClick={() => setMobileToggle(false)}
                            >
                              Liquidaciones de compra
                            </Link>
                          </li>
                          <li className="menu-item-has-children">
                            <Link
                              href="#sistema-guias-remision"
                              onClick={() => setMobileToggle(false)}
                            >
                              Sist. Guías de Remisión
                            </Link>
                            <SubDropDown>
                              <li>
                                <Link
                                  href="#guias-transportistas"
                                  onClick={() => setMobileToggle(false)}
                                >
                                  Sistema web de guías de transportistas
                                </Link>
                              </li>
                              <li>
                                <Link
                                  href="#guias-remision"
                                  onClick={() => setMobileToggle(false)}
                                >
                                  Sistema web de guías de remisión
                                </Link>
                              </li>
                            </SubDropDown>
                          </li>
                          <li>
                            <Link
                              href="#vps"
                              onClick={() => setMobileToggle(false)}
                            >
                              VPS
                            </Link>
                            <SubDropDown>
                              <li>
                                <Link
                                  href="#alquiler-alojamiento"
                                  onClick={() => setMobileToggle(false)}
                                >
                                  Alquiler Alojamiento
                                </Link>
                              </li>
                              <li>
                                <Link
                                  href="#alquiler-sistemas"
                                  onClick={() => setMobileToggle(false)}
                                >
                                  Alquiler Sistemas
                                </Link>
                              </li>
                            </SubDropDown>
                          </li>
                          <li>
                            <Link
                              href="#utilcon"
                              onClick={() => setMobileToggle(false)}
                            >
                              Utilcon
                            </Link>
                          </li>
                        </ul>
                      </DropDown>
                    </li>
                    <li>
                      <Link
                        href="#outsourcing"
                        onClick={() => setMobileToggle(false)}
                      >
                        Outsourcing Contable
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="#desarrollo-web"
                        onClick={() => setMobileToggle(false)}
                      >
                        Desarrollo Web
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="#contacto"
                        onClick={() => setMobileToggle(false)}
                      >
                        Contacto
                      </Link>
                    </li>
                  </ul>
                  <span
                    className={
                      mobileToggle
                        ? "cs-munu_toggle cs-toggle_active"
                        : "cs-munu_toggle"
                    }
                    onClick={() => setMobileToggle(!mobileToggle)}
                  >
                    <span></span>
                  </span>
                </Div>
              </Div>
              <Div className="cs-main_header_right">
                <Div className="cs-toolbox">
                  <span
                    className="cs-icon_btn"
                    onClick={() => setSideHeaderToggle(!sideHeaderToggle)}
                  >
                    <span className="cs-icon_btn_in">
                      <span />
                      <span />
                      <span />
                      <span />
                    </span>
                  </span>
                </Div>
              </Div>
            </Div>
          </Div>
        </Div>
      </header>

      <Div
        className={
          sideHeaderToggle ? "cs-side_header active" : "cs-side_header"
        }
      >
        <button
          className="cs-close"
          onClick={() => setSideHeaderToggle(!sideHeaderToggle)}
        />
        <Div
          className="cs-side_header_overlay"
          onClick={() => setSideHeaderToggle(!sideHeaderToggle)}
        />
        <Div className="cs-side_header_in">
          <Div className="cs-side_header_shape" />
          <Link className="cs-site_branding" href="/">
            <img src="/images/logo/MS2.png" alt="Logo" />
          </Link>
          <Div className="cs-side_header_box">
            <h2 className="cs-side_header_heading">
              Transformamos ideas <br /> en soluciones ágiles de confianza.
            </h2>
          </Div>
          <Div className="cs-side_header_box">
            <ContactInfoWidget title="Contacto" withIcon />
          </Div>
          {/* <Div className="cs-side_header_box">
            <Newsletter
              title="Subscribe"
              subtitle="At vero eos et accusamus et iusto odio as part dignissimos ducimus qui blandit."
              placeholder="example@gmail.com"
            />
          </Div> */}
          <Div className="cs-side_header_box">
            <SocialWidget />
          </Div>
        </Div>
      </Div>
    </>
  );
};

export default Header;
