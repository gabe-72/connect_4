import Circle from "./Circle";
import { NUM_ROWS } from "../gameconfig";
import React from "react";

export default class Column extends React.Component {
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