import { NUM_ROWS, NUM_COLUMNS } from "../gameconfig";

/**
 * Checks if the game is a tie (assuming no wins)
 * @param {string[][]} circles - 2d array of the game board
 * 
 * @returns {Boolean} true if tie, otherwise false
 */
export default function checkTie(circles) {
  for (let i = 0; i < NUM_COLUMNS; ++i) {
    if (circles[i][NUM_ROWS-1] === null)
      return false;
  }
  return true;
}