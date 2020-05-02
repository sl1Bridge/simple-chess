import { Store } from '../types/store';

export const boardSelector = (state: Store) => state.board.cells;