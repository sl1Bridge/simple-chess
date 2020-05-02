
// board / cells

import {Cell} from '../types/chess';

export const DispatchActionCellType = 'SET_CELL_EMPLOYMENT';

export const setCellEmployment = (cells: Cell[]) => ({
  cells,
  type: DispatchActionCellType as typeof DispatchActionCellType
});

export type CellEmploymentActionType = ReturnType<typeof setCellEmployment>;