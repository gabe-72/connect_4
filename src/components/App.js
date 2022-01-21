import "./App.css";
import { NUM_ROWS, NUM_COLUMNS, P1, P2 } from "./gameconfig";
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
      p1Next: true
    };
  }

  handleClick(column, row) {
    if (row >= NUM_ROWS || this.state.circles[column][row]) {
      return;
    }

    let circles = this.state.circles.map((column) => column.slice());
    
    circles[column][row] = (this.state.p1Next? P1 : P2);
    this.setState({
      circles: circles,
      p1Next: !this.state.p1Next
    });
  }

  render() {
    return (
      <div className="game">
        <h1 className="next-player-stat">Player <Circle color={this.state.p1Next? P1 : P2} /></h1>
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