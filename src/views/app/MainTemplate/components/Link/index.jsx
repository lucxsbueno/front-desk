import React, { useState } from "react";

import { ChevronDown, ChevronLeft } from "lucide-react";

import "./styles.css";
import { NavLink } from "react-router-dom";

const Link = (props) => {
  const { icon, title, to, children } = props;

  const [toggle, setToggle] = useState(false);

  const isToggleActive = toggle ? "main-template__item--active" : "";

  const navActive = ({ isActive }) =>
    isActive || (toggle && to === "/#")
      ? "main-template__link active"
      : "main-template__link";

  const handleClick = (e) => {
    if (to === "/#") {
      e.preventDefault();
      setToggle(!toggle);
    }
  };

  return (
    <li className={`main-template__item ${isToggleActive}`.trim()}>
      <NavLink to={to} onClick={handleClick} className={navActive}>
        <div className="main-template__title-wrapper">
          {icon ? icon : <div className="fake-icon" />}

          <span className="main-template__title align-self-center">
            {title}
          </span>
        </div>

        {!!children &&
          (toggle ? (
            <div className="main-template__right-icon">
              <ChevronDown />
            </div>
          ) : (
            <div className="main-template__right-icon">
              <ChevronLeft />
            </div>
          ))}
      </NavLink>
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
