import React from "react";

export default function ResetBtn(props) {
  return (
    <button onClick={() => props.onClick()}>{props.message}</button>
  );
}