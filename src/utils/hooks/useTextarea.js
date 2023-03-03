import { useEffect, useState } from "react";

import autosize from "autosize";

const useTextarea = (textareaRef) => {
  const [isValidToPresets, setIsValidToPresets] = useState(false);

  useEffect(() => {
    autosize(textareaRef.current);
  }, []);

  const handleKeyDown = (e) => {
    const regex = /\/[^ ]*[^ ]?$/;

    if (regex.test(e.target.value)) {
      setIsValidToPresets(true);
    } else {
      setIsValidToPresets(false);
    }

    // const regex = /\/[^ ]+$/;
    // setIsValidToPresets(regex.test(e.target.value));
    // console.log(regex.test(e.target.value) ? "É válido" : "Não é válido");

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

  return { isValidToPresets, handleKeyDown };
};

export default useTextarea;
