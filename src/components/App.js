import './App.css';
import { NUM_ROWS, NUM_COLUMNS, P1, P2 } from "./gameconfig";
import Board from './Board';
import React from 'react';

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
      redNext: true
    };
  }

  handleClick(column, row) {
    if (row >= NUM_ROWS || this.state.circles[column][row]) {
      return;
    }

    let circles = this.state.circles.map((column) => column.slice());
    
    circles[column][row] = (this.state.redNext? P1 : P2);
    this.setState({
      circles: circles,
      redNext: !this.state.redNext
    });
  }

  render() {
    return (
      <div className="game">
        <h1>Player <div /></h1>
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