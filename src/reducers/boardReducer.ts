import {generateBoardCells} from '../utils/boardCells';

import {CellEmploymentActionType, DispatchActionCellType} from '../actions/actionCreators';

const cells = generateBoardCells();

const initialState = {
  cells
};

const boardReducer = (state = initialState, action: CellEmploymentActionType) => {
  const {cells, type} = action;
  if (type === DispatchActionCellType) {
    return {
      ...state,
      cells
    };
  }
  return state;
};

export default boardReducer;