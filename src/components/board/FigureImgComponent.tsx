import React, {FC} from 'react';

import {Figure} from '../../utils/generateFigures';
import {Team} from '../../utils/boardCells';

import useStyles from './board.styles';

import PawnBlack from '../../assets/img/pawn_black.svg';
import PawnWhite from '../../assets/img/pawn_white.svg';
import QueenBlack from '../../assets/img/queen_black.svg';
import QueenWhite from '../../assets/img/queen_white.svg';
import KingBlack from '../../assets/img/king_black.svg';
import KingWhite from '../../assets/img/king_white.svg';
import KnightBlack from '../../assets/img/knight_black.svg';
import KnightWhite from '../../assets/img/knight_white.svg';
import BishopBlack from '../../assets/img/bishop_black.svg';
import BishopWhite from '../../assets/img/bishop_white.svg';
import RookBlack from '../../assets/img/rook_black.svg';
import RookWhite from '../../assets/img/rook_white.svg';
import { findSrc } from '../../utils/findSrc';

interface Props {
  figure: Figure;
  teamColor: Team;
}

const FigureImgComponent: FC<Props> = ({figure, teamColor}) => {
  const classes = useStyles();
  const figuresImgs = [
    {
      figureName: 'pawn_black',
      src: PawnBlack,
    },
    {
      figureName: 'pawn_white',
      src: PawnWhite,
    },
    {
      figureName: 'queen_black',
      src: QueenBlack,
    },
    {
      figureName: 'queen_white',
      src: QueenWhite,
    },
    {
      figureName: 'king_black',
      src: KingBlack,
    },
    {
      figureName: 'king_white',
      src: KingWhite,
    },
    {
      figureName: 'knight_black',
      src: KnightBlack,
    },
    {
      figureName: 'knight_white',
      src: KnightWhite,
    },
    {
      figureName: 'bishop_black',
      src: BishopBlack,
    },
    {
      figureName: 'bishop_white',
      src: BishopWhite,
    },
    {
      figureName: 'rook_black',
      src: RookBlack,
    },
    {
      figureName: 'rook_white',
      src: RookWhite,
    },
  ];

  return (
    <img alt="figure"
         className={classes.figureSize}
         src={findSrc(figuresImgs, figure, teamColor)}
    />
  );
};

export default FigureImgComponent;