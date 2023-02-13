import React from "react";

import { Link } from "react-router-dom";
import { ChevronLeft, ChevronRight } from "lucide-react";

import PaginationLink from "./PaginationLink";

import "./styles.css";

const Pagination = () => {
  return (
    <div className="pagination">
      <Link className="pagination__item pagination__item--prev">
        <ChevronLeft />
      </Link>

      <PaginationLink page={1}>1</PaginationLink>

      <PaginationLink page={2}>2</PaginationLink>

      <PaginationLink page={3}>3</PaginationLink>

      <PaginationLink page={4}>4</PaginationLink>

      <Link className="pagination__item pagination__item--next">
        <ChevronRight />
      </Link>
    </div>
  );
};

export default Pagination;
