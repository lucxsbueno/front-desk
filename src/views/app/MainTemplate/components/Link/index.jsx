import React, { useState } from "react";

import { ChevronDown, ChevronLeft } from "lucide-react";

import "./styles.css";

const Link = (props) => {
  const { icon, title, to, active, children } = props;

  const [toggle, setToggle] = useState(false);

  const isActive = active || !!toggle ? "main-template__link--active" : "";

  const isToggleActive = toggle ? "main-template__item--active" : "";

  return (
    <li className={`main-template__item ${isToggleActive}`.trim()}>
      <a
        href={to}
        onClick={() => setToggle(!toggle)}
        className={`main-template__link ${isActive}`.trim()}
      >
        <div className="main-template__title-wrapper">
          {icon ? icon : <div className="fake-icon"></div>}

          <span className="main-template__title align-self-center">
            {title}
          </span>
        </div>

        {!!children && (toggle ? <ChevronDown /> : <ChevronLeft />)}
      </a>
      {toggle && <div>{children}</div>}
    </li>
  );
};

Link.defaultProps = {
  icon: null,
  to: "/#",
  active: false,
  title: "Item item item",
  children: null,
};

export default Link;
