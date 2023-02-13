import React from "react";

import "../styles.css";

const TableHead = ({ children, className }) => {
  return <th className={`th ${className}`.trim()}>{children}</th>;
};

TableHead.defaultProps = {
  className: "",
  children: "",
};

export default TableHead;
