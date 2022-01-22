import React from "react";
import Circle from "./Circle";

export default function GameOver(props) {
  /** @type {JSX.Element} */
  let message = <div>Tie</div>;
  if (props.winner !== "None") {
    message = <div className="game-stat"><h1>Winner:</h1><Circle color={props.winner}/></div>
  }

  // TODO add play again btn
  return (
    <div className="gameover-overlay" onClick={() => props.onClick()}>
      <div className="game-stat">{message}</div>
      <p>Click to play again</p>
    </div>
  );
}