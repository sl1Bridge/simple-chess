import { FigureImgType } from '../types/chess';

export const findSrc = (figuresImgs: FigureImgType[], figure: string, teamColor: string) => {
  const findedFigure = figuresImgs.find((item: FigureImgType) => item.figureName === `${figure}_${teamColor}`);
  return findedFigure?.src;
};