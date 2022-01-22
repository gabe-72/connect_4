import React from "react";
import Board from "./Board";
import Circle from "./Circle";
import GameOver from "./GameOver";
import { NUM_ROWS, NUM_COLUMNS, P1, P2 } from "../gameconfig";
import defaultBoard from "../util/defaultBoard";
import checkWinner from "../util/checkWin";
import checkTie from "../util/checkTie";
import "./App.css";


export default class Game extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      circles: defaultBoard(),
      p1Next: true,
      winner: null
    };
  }

  handleClick(col, row) {
    if (row >= NUM_ROWS || this.state.circles[col][row]) {
      return;
    }

    // copy of circles
    let circles = this.state.circles.map((col) => col.slice());
    circles[col][row] = (this.state.p1Next? P1 : P2);

    // check if this move causes a win
    let winner = null;
    if (checkWinner(circles, col, row)) {
      winner = circles[col][row];
      console.log("win")
    } else if (checkTie(circles)) {
      winner = "None";
    }

    this.setState({
      circles: circles,
      p1Next: !this.state.p1Next,
      winner: winner
    });
  }

  reset() {
    this.setState({
      circles: defaultBoard(),
      p1Next: true,
      winner: null
    });
  }

  // TODO add reset button
  render() {
    return (
      <div className="game">
        {this.state.winner === null?
          "" :
          <GameOver
            winner={this.state.winner === "None" ? "Tie" : this.state.winner}
            onClick={() => this.reset()}
          />
        }
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