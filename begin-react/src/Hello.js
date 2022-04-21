import React from "react";

const Hello = ({ color, name, isSpecial }) => {
  return (
    <div style={{ color }}>
      {isSpecial ? <b>*</b> : null} Github {name}
    </div>
  );
};

Hello.defaultProps = {
  name: "이름 없음",
};

export default Hello;
