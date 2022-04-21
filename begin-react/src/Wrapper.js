import React from "react";

const Wrapper = ({ children }) => {
  const style = {
    border: "2px solid #282c34",
    padding: "15px",
  };
  return <div style={style}>{children}</div>;
};

export default Wrapper;
