import React, { useRef } from "react";

import "./styles.css";

const SenderTextarea = () => {
  const textAreaRef = useRef(null);

  const onChangeHandler = (e) => {
    const target = e.target;
    textAreaRef.current.style.height = "44px";
    textAreaRef.current.style.height = `${target.scrollHeight}px`;
    // props.onChange(e);
  };

  return (
    <textarea
      ref={textAreaRef}
      onChange={onChangeHandler}
      rows={1}
      type="text"
      placeholder="Escreva uma mensagem para Marcelo"
      className="sender__input"
    />
  );
};

export default SenderTextarea;
