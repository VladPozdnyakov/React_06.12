import React from "react";

let Counter = (props) => {
  if (props.value.length > 600) {
    return null;
  }
  return <div>{props.value.length + "/" + props.maxLength}</div>;
};

export default Counter;
