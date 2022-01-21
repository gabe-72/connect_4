import './App.css';
import React from 'react';

const NUM_ROWS = 6;
const NUM_COLUMNS = 7;
const P1 = "#25211e"; // player 1 colour
const P2 = "#e8d6be"; // player 2 colour

function Circle(props) {
  let color = (props.color? props.color : "#4d2600");
  return (
    <button 
      className="circle"
      style={{backgroundColor: color}}
    />
  );
}

class Column extends React.Component {
  render() {
    let column = [];
    let nextSpot = 0;
    for (let i = 0; i < NUM_ROWS; ++i) {
      if (this.props.column[i]) {
        nextSpot = i + 1;
      }
      column.push(<Circle key={i} color={this.props.column[i]} />);
    }

    return (
      <div className="column" onClick={() => this.props.onClick(nextSpot)}>
        {column}
      </div>
    );
  }
}

class Board extends React.Component {
  render() {
    let columns = [];
    for (let i = 0; i < NUM_COLUMNS; ++i) {
      columns.push(
        <Column
          key={i}
          column={this.props.squares[i]}
          onClick={(row) => this.props.onClick(i, row)}
        />
      );
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
    if (row >= NUM_ROWS || this.state.squares[column][row]) {
      return;
    }

    let squares = this.state.squares.map((column) => column.slice());
    
    squares[column][row] = (this.state.redNext? P1 : P2);
    this.setState({
      squares: squares,
      redNext: !this.state.redNext
    });
    
    console.log(squares);
  }

  render() {
    return (
      <div className="game">
        <div className="game-board">
          <Board
            squares={this.state.squares}
            onClick={(col, row) => this.handleClick(col, row)}
          />
        </div>
      </div>
    );
  }
}

export default Game;
