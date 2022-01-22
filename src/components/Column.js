import React from "react";
import Circle from "./Circle";
import { NUM_ROWS } from "../gameconfig";

/**
 * Column Component of the game
 * each column has NUM_ROWS Circle Component in it
 */
export default function Column(props) {
  let column = [];
  let nextSpot = 0;
  for (let i = 0; i < NUM_ROWS; ++i) {
    if (props.column[i]) {
      nextSpot = i + 1;
    }
    column.push(<Circle key={i} color={props.column[i]} />);
  }

  return (
    <div className="column" onClick={() => props.onClick(nextSpot)}>
      {column}
    </div>
  );
}