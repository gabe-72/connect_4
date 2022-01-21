import './App.css';
import React from 'react';

const NUM_ROWS = 6;
const NUM_COLUMNS = 7;

function Square(props) {
  return (
    <button 
      className="square"
    />
  );
}

class Column extends React.Component {
  render() {
    let column = [];
    for (let i = 0; i < NUM_ROWS; ++i) {
      column.push(<Square key={i}/>);
    }

    return (
      <div className="column">
        {column}
      </div>
    );
  }
}

class Board extends React.Component {
  render() {
    let columns = [];
    for (let i = 0; i < NUM_COLUMNS; ++i) {
      columns.push(<Column key={i}/>);
    }
    
    return (
      <div className="board-columns">
        {columns}
      </div>
    );
  }
}

class Game extends React.Component {
  constructor(props) {
    super(props);

    // initialize the squares of the board
    let sqr = [];
    for (let i = 0; i < NUM_COLUMNS; ++i) {
      sqr.push(Array(NUM_ROWS).fill(0));
    }

    this.state = {
      squares: sqr,
      redNext: true
    };
  }

  handleClick(column, row) {
    let squares = this.state.squares.map((column) => column.slice());
    squares[column][row] = this.state.redNext? 1 : -1;
    this.setState({
      squares: squares,
      redNext: !this.state.redNext
    });
  }

  render() {
    return (
      <Board
        squares={this.state.squares}
        onClick={this.handleClick}
      />
    );
  }
}

export default Game;
