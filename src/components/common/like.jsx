import React from "react";

// When you convert classes to a stateless functional components remove 'this' keywords and pass the 'props' to the function as an argument
const Like = (props, event) => {
  let classes = "fa fa-heart";
  if (!props.liked) classes += "-o";
  return (
    <i
      onClick={props.onClick}
      style={{ cursor: "pointer" }}
      className={classes}
      area-hidden="true"
    />
  );
};

export default Like;
