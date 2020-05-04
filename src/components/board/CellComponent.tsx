import React, {FC} from 'react';

import FigureImgComponent from './FigureImgComponent';

import {Team} from '../../utils/boardCells';
import {Figure} from '../../utils/generateFigures';

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
      <div className={classes.figureContainer}>
        { teamColor !== 'none' ? <FigureImgComponent figure={figure}
                                                     teamColor={teamColor}
        />
          : null}
      </div>
    </div>
  );
};

export default CellComponent;
