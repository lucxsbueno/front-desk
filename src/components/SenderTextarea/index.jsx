import React, { useRef, useEffect } from "react";

import autosize from "autosize";

import "./styles.css";

const SenderTextarea = (props) => {
  const { setOpenPresets, textMessage, setTextMessage } = props;
  const textareaRef = useRef(null);

  useEffect(() => {
    textareaRef.current.focus();
    autosize.update(textareaRef.current);
  }, [textMessage]);

  useEffect(() => {
    autosize(textareaRef.current);
  }, []);

  const handleKeyDown = (e) => {
    const regex = /\/[^ ]*[^ ]?$/;

    if (regex.test(e.target.value)) {
      setOpenPresets(true);
    } else {
      setOpenPresets(false);
    }

    // Get the code of pressed key
    const keyCode = e.which || e.keyCode;

    // 13 represents the Enter key
    if (keyCode === 13 && !e.shiftKey) {
      // Donnt generate a new line
      e.preventDefault();

      if (textareaRef.current.value != "") {
        // Do something else such as send the message to back-end
        // ...
        console.log(textareaRef.current.value.trim());
        textareaRef.current.value = "";
        autosize.update(textareaRef.current);
      }
    }
  };

  return (
    <textarea
      onChange={(e) => setTextMessage(e.target.value)}
      value={textMessage}
      ref={textareaRef}
      onKeyDown={handleKeyDown}
      rows={1}
      type="text"
      className="sender__input"
      placeholder="Escreva uma mensagem para Marcelo. [SHIFT+ENTER] para quebrar a linha."
    />
  );
};

export default SenderTextarea;
