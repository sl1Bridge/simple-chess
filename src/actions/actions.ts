import {Dispatch} from 'redux';

import {setCellEmployment} from './actionCreators';

import {Cell} from '../types/chess';

// cell actions
export const changeEngagedStatus = (id: string, cells: Cell[]) => (dispatch: Dispatch) => {
  const selectedCell = cells.find(cell => cell.id === id);
  if (selectedCell) {
    const indexSelectedCell = cells.indexOf(selectedCell);
    cells.splice(indexSelectedCell, 1, {...selectedCell, isEngaged: !selectedCell.isEngaged});
    dispatch(setCellEmployment(cells));
  }
};