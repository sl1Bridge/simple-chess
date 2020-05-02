import {createBoardCells} from '../utils/boardCells';

const cells = createBoardCells();

const innitialState = {
  cells
};

const boardReducer = (state = innitialState, action: any) => {
  if (action.type === ' ') {
    console.log(' ');
  }
  return state;
};

export default boardReducer;