import React from "react";

export default function Circle(props) {
  let color = (props.color? props.color : "#4d2600");
  return (
    <button 
      className="circle"
      style={{backgroundColor: color}}
    />
  );
}