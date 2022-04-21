import React, { useState } from "react";

const InputSample = () => {
  const [text, setText] = useState(0);

  const textChange = (e) => {
    setText(e.target.value);
  };

  const textReset = () => {
    setText("");
  };

  return (
    <div>
      <input onChange={textChange} value={text} />
      <button onClick={textReset}>Reset</button>
      <div>
        <b>값: {text}</b>
      </div>
    </div>
  );
};

export default InputSample;
