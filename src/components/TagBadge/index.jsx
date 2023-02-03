import { X } from "lucide-react";

import React from "react";

import "./styles.css";

const TagBadge = (props) => {
  const { tag } = props;

  return (
    <div className="tag">
      <span className="tag__name">
        #{tag.name}
      </span>
      <button className="tag__bttn">
        <X size={16} />
      </button>
    </div>
  );
};

TagBadge.defaultProps = {
  tag: ""
}

export default TagBadge;