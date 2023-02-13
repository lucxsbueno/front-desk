import React from "react";

import "../styles.css";

const TableRow = ({ children, className }) => {
  return <tr className={`tr ${className}`.trim()}>{children}</tr>;
};

TableRow.defaultProps = {
  className: "",
  children: "",
};

export default TableRow;
