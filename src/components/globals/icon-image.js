import React from "react";

export default function IconImage(props) {
  return (
    <div className="icon">
      <img src={props.iconUrl} alt="icon" />
      <p>{props.title}</p>
    </div>
  );
}