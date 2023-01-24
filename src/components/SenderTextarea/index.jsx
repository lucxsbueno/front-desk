import React, { useRef } from "react";

import "./styles.css";

const SenderTextarea = () => {
  const textAreaRef = useRef(null);

  const handleKeyDown = (event) => {
    if (
      (event.key === "Enter" && event.shiftKey) ||
      event.key === "Backspace"
    ) {
      const target = event.target;
      textAreaRef.current.style.height = "44px";
      textAreaRef.current.style.height = `${target.scrollHeight}px`;
      // props.onChange(e);
    } else if (event.key === "Enter") {
      event.preventDefault();
      submitForm();
    }
  };

  const submitForm = () => {
    //
  };

  return (
    <textarea
      ref={textAreaRef}
      onKeyDown={handleKeyDown}
      rows={1}
      type="text"
      className="sender__input"
      placeholder="Escreva uma mensagem para Marcelo. [SHIFT+ENTER] para quebrar a linha."
    />
  );
};

export default SenderTextarea;
