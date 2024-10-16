"use client";
import React from "react";
import { useState } from "react";
import Div from "../Div/Div";
import { dataAccordion } from "./Accordion.data";

const Accordion = () => {
  const [selected, setSelected] = useState<number | null>(
    dataAccordion[0]?.id || null
  );
  const handelToggle = (id: number) => {
    if (selected === id) {
      return setSelected(null);
    }
    setSelected(id);
  };
  return (
    <Div className="cs-accordians cs-style1">
      {dataAccordion.map(({ id, question, answer }) => (
        <Div
          className={`cs-accordian ${selected === id ? "active" : ""}`}
          key={id}
        >
          <Div className="cs-accordian_head" onClick={() => handelToggle(id)}>
            <h2 className="cs-accordian_title">{question}</h2>
            <span className="cs-accordian_toggle cs-accent_color">
              <svg
                width={15}
                height={8}
                viewBox="0 0 15 8"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M0 0L7.5 7.5L15 0H0Z" fill="currentColor" />
              </svg>
            </span>
          </Div>
          <Div className="cs-accordian_body">
            <Div className="cs-accordian_body_in">{answer}</Div>
          </Div>
        </Div>
      ))}
    </Div>
  );
};

export default Accordion;
