import React, { useState } from "react";

import "./styles.css";

import { Smile, X } from "lucide-react";
import EmojiPicker from "emoji-picker-react";
import HeaderButton from "../../../../../../components/HeaderButton";

const EmojiButton = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <div className="emoji">
      {toggle && (
        <div className="emoji__container">
          <EmojiPicker width={400} height={500} />
        </div>
      )}
      <div className="emoji__button">
        <HeaderButton className="ml-5 mr-5" onClick={() => setToggle(!toggle)}>
          {toggle ? <X /> : <Smile />}
        </HeaderButton>
      </div>
    </div>
  );
};

export default EmojiButton;