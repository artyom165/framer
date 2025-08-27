import React from "react";

function Text() {
  return React.createElement(
    "div",
    {
      style: {
        padding: "20px",
        background: "blue",
        color: "white",
      },
    },
    React.createElement("p", null, "Hello World")
  );
}

export default Text;
