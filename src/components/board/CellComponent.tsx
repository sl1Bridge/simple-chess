import React, {FC} from 'react';

import {Team} from '../../utils/boardCells';
import {Figure} from '../../utils/generateFigures';

import PawnBlack from '../assets/img/pawn_black.svg';

import useStyles from './board.styles';

interface Props {
  id: string;
  backgroundColor: string;
  teamColor: Team;
  figure: Figure;
}

const CellComponent: FC<Props> = ({id, backgroundColor, teamColor, figure}) => {
  const classes = useStyles();

  return (
    <div className={classes.cellContainer}
         id={id}
         style={{backgroundColor}}
    >
      <div>
        { teamColor !== 'none' ?
          <img src={PawnBlack} /> : null}
      </div>
    </div>
  );
};

export default CellComponent;
