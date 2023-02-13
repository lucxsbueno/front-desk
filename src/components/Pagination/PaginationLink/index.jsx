import React from "react";

import { NavLink, useLocation } from "react-router-dom";

const PaginationLink = ({ children, page }) => {
  const location = useLocation();

  const isActive =
    location.search == `?pagina=${page}`
      ? "pagination__item pagination__item--active"
      : "pagination__item";

  return (
    <NavLink to={`?pagina=${page}`} className={isActive}>
      {children}
    </NavLink>
  );
};

export default PaginationLink;
