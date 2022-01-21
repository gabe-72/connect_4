import Column from "./Column";
import { NUM_COLUMNS } from "./gameconfig";
import React from "react";

export default class Board extends React.Component {
  render() {
    let columns = [];
    for (let i = 0; i < NUM_COLUMNS; ++i) {
      columns.push(
        <Column
          key={i}
          column={this.props.circles[i]}
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