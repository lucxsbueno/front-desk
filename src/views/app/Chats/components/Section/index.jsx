import React, { useState } from "react";

import { ChevronDown, ChevronLeft } from "lucide-react";

import "./styles.css";

const Section = (props) => {
  const { title, length, defaultOpen, children } = props;

  const [toggle, setToggle] = useState(defaultOpen);

  const bttnActive = toggle ? "chat__bttn--active" : "";

  return (
    <div className="chat__section">
      <div className="chat__heading">
        <h2 className="chat__title">{title}</h2>
        <h2 className="chat__title d-flex flex-row">
          <div className="mr-10">{toggle ? length : ""}</div>
          <div className="w-22 h-22 d-flex flex-row align-items-center justify-content-center">
            {toggle ? "" : length}

            <button
              type="button"
              className={`chat__bttn ${bttnActive}`.trim()}
              onClick={() => setToggle(!toggle)}
            >
              {toggle ? <ChevronDown size={22} /> : <ChevronLeft size={22} />}
            </button>
          </div>
        </h2>
      </div>

      {toggle && <div className="chat__items">{children}</div>}
    </div>
  );
};

Section.defaultProps = {
  title: "Item item item",
  length: "",
  defaultOpen: true,
};

export default Section;
