export enum Figure {
  Pawn = 'pawn',
  Rook = 'rook',
  Knight = 'knight',
  Bishop = 'bishop',
  Queen = 'queen',
  King = 'king',
  Non = 'none',
}

const generateMainFigure = (xPos: number, yPos: number) => {
  if (xPos === 1 || xPos === 8) {
    return Figure.Rook;
  }
  if (xPos === 2 || xPos === 7) {
    return Figure.Knight;
  }
  if (xPos === 3 || xPos === 6) {
    return Figure.Bishop;
  }
  if (yPos === 1) {
    if (xPos === 4) {
      return Figure.King;
    }
    if (xPos === 5) {
      return Figure.Queen;
    }
  }
  if (yPos === 8) {
    if (xPos === 5) {
      return Figure.King;
    }
    if (xPos === 4) {
      return Figure.Queen;
    }
  }
  return Figure.Non;
};

export const generateFigure = (xPos: number, yPos: number) => {
  if (yPos === 2 || yPos === 7) {
    return Figure.Pawn;
  }
  if (yPos === 1 || yPos === 8) {
    return generateMainFigure(xPos, yPos);
  }
  return Figure.Non;
};
