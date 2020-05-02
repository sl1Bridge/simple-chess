import {Cell} from './chess';

export interface Store {
  board: {
    cells: Cell[];
  };
}