import React from "react";

import "./styles.css";

const variants = {
  primary: "card__component--primary",
};

const iconColorVariants = {
  blue: "card__picture--blue",
  purple: "card__picture--purple",
};

const Card = (props) => {
  const { icon, title, subtitle, color, iconColor } = props;

  const titleClassNames =
    color === "primary" ? "card__title text-fixed-white" : "card__title";

  const subtitleClassNames =
    color === "primary" ? "card__subtitle text-fixed-white" : "card__subtitle";

  return (
    <div className={`card__component ${variants[color]}`.trim()}>
      <div className="card__info">
        <div className={`card__picture ${iconColorVariants[iconColor]}`.trim()}>
          {icon}
        </div>
      </div>
      <div className={titleClassNames}>{title}</div>
      <div className={subtitleClassNames}>{subtitle}</div>
    </div>
  );
};

export default Card;
