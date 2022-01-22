import React from "react";

/**
 * Circle Component of the game
 */
export default function Circle(props) {
  let color = (props.color? props.color : "#4d2600");
  return (
    <div 
      className="circle"
      style={{backgroundColor: color}}
    />
  );
}