import React from "react";

import "../styles.css";

const TableData = ({ children, className }) => {
  return <td className={`td ${className}`.trim()}>{children}</td>;
};

TableData.defaultProps = {
  className: "",
  children: "",
};

export default TableData;
