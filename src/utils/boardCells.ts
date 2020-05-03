import nextId from 'react-id-generator';

import { generateFigure } from './generateFigures';

import {Cell} from '../types/chess';

export enum Team {
  Black = 'black',
  White = 'white',
  Non = 'none',
}

export const generateBoardCells = () => {
  const cells: Cell[] = [];
  let x = 1;
  let y = 1;
  // eslint-disable-next-line no-constant-condition
  while (true) {
    cells.push({
      xPosition: x,
      yPosition: y,
      isEngagedBy: (y === 1 || y === 2) ? Team.White : (y === 7 || y === 8) ? Team.Black : Team.Non,
      figure: generateFigure(x, y),
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