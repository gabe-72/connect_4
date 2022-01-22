import React from "react";
import Circle from "./Circle";

export default function GameOver(props) {
  /** @type {JSX.Element} */
  let message = <div>Tie</div>;
  if (props.winner !== "None") {
    message = <div>Player<Circle color={props.winner}/></div>
  }

  // TODO add play again btn
  return (
    <div className="gameover-overlay">
      <div className="game-stat">{message}</div>
      <div className="game-stat"></div>
    </div>
  );
}