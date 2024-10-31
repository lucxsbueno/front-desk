import React from "react";

const Logo = (props) => {
  const { className } = props;

  return (
    <span className={`text-center text-fixed-white fs-16 ${className}`.trim()}>
      front<span className="text-bold text-primary-color">desk</span>
    </span>
  );
};

Logo.defaultProps = {
  className: "",
};

export default Logo;
