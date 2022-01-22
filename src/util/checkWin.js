import { NUM_ROWS, NUM_COLUMNS, WIN_NUM } from "../gameconfig";

/**
 * Checks if the last move causes a win condition
 * @param {string[][]} circles - 2d array of the game board
 * @param {int} col - Column which the last move was played
 * @param {int} row - Row which the last move was played
 * 
 * @returns {Boolean} true if there is a winner, otherwise false
 */
function checkWinner(circles, col, row) {
  const directions = [[-1, 0], [1, 0], [0, -1], [-1, -1], [1, -1], [-1, 1], [1, 1]];
  for (let [colChange, rowChange] of directions) {
    if (checkDirection(circles, col, row, colChange, rowChange))
      return true;
  }
  return false;
}

/**
 * Checks if there is 4 in a row a particular direction
 * @param {string[][]} circles - 2d array of the game board
 * @param {int} col - Column which the last move was played
 * @param {int} row - Row which the last move was played
 * @param {int} colChange - Column direction to check
 * @param {int} rowChange - Row direction to check
 * 
 * @returns {Boolean} true if there is a winner, otherwise false
 */
function checkDirection(circles, col, row, colChange, rowChange) {
  const COL_MAX = col + (colChange === 0 ? 1 : colChange * WIN_NUM);
  const ROW_MAX = row + (rowChange === 0 ? 1 : rowChange * WIN_NUM);

  const player = circles[col][row];
  let i = col, j = row;
  do {
    if (i < 0 || i >= NUM_COLUMNS || j < 0 || j >= NUM_ROWS || circles[i][j] !== player)
      return false;
    i += colChange;
    j += rowChange;
  } while (i !== COL_MAX && j !== ROW_MAX);
  return true;
}

export default checkWinner