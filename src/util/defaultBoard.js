import { NUM_COLUMNS, NUM_ROWS } from "../gameconfig";

/**
 * Creates a default board
 * 
 * @returns {string[][]} Default game board filled with null
 */
export default function defaultBoard() {
  let circles = [];
  for (let i = 0; i < NUM_COLUMNS; ++i) {
    circles.push(Array(NUM_ROWS).fill(null));
  }
  return circles;
}