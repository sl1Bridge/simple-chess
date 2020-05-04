import {Team} from '../utils/boardCells';
import {Figure} from '../utils/generateFigures';

export interface Cell {
  xPosition: number;
  yPosition: number;
  isEngagedBy: Team;
  figure: Figure;
  id: string;
}

export interface FigureImgType {
  figureName: string;
  src: string;
}