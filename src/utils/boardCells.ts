import nextId from 'react-id-generator';

import {Cell} from '../types/chess';

export const createBoardCells = () => {
  const cells: Cell[] = [];
  let x = 1;
  let y = 1;
  // eslint-disable-next-line no-constant-condition
  while (true) {
    cells.push({
      xPosition: x,
      yPosition: y,
      isEngaged: (y === 1 || y === 2 || y === 7 || y === 8),
      id: nextId(),
    });
    x += 1;
    if (x === 9) {
      y += 1;
      x = 1;
    }
    if (cells.length === 64) {
      break;
    }
  }
  return cells;
};