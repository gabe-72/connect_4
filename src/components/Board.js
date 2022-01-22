import React from "react";
import Column from "./Column";
import { NUM_COLUMNS } from "../gameconfig";

/**
 * Board of the game
 * contains NUM_COLUMNS Column Component
 */
export default function Board(props) {
  let columns = [];
  for (let i = 0; i < NUM_COLUMNS; ++i) {
    columns.push(
      <Column
        key={i}
        column={props.circles[i]}
        onClick={(row) => props.onClick(i, row)}
      />
    );
  }
  
  return (
    <div className="board-columns">
      {columns}
    </div>
  );
}