import "./App.css";
import { NUM_ROWS, NUM_COLUMNS, P1, P2 } from "../gameconfig";
import checkWinner from "../game/checkWin";
import Board from "./Board";
import Circle from "./Circle";
import React from "react";

export default class Game extends React.Component {
  constructor(props) {
    super(props);

    // initialize the circles of the board
    let sqr = [];
    for (let i = 0; i < NUM_COLUMNS; ++i) {
      sqr.push(Array(NUM_ROWS).fill(0));
    }

    this.state = {
      circles: sqr,
      p1Next: true,
      winner: 0
    };
  }

  handleClick(col, row) {
    if (row >= NUM_ROWS || this.state.circles[col][row]) {
      return;
    }

    let circles = this.state.circles.map((col) => col.slice());
    circles[col][row] = (this.state.p1Next? P1 : P2);
    let winner = 0;
    if (checkWinner(circles, col, row)) {
      winner = circles[col][row];
      console.log("won");
    }

    this.setState({
      circles: circles,
      p1Next: !this.state.p1Next,
      winner: winner
    });
  }

  render() {
    return (
      <div className="game">
        <div className="game-stat">
          <h1>Player</h1><Circle color={this.state.p1Next? P1 : P2} />
        </div>
        <div className="game-board">
          <Board
            circles={this.state.circles}
            onClick={(col, row) => this.handleClick(col, row)}
          />
        </div>
      </div>
    );
  }
}