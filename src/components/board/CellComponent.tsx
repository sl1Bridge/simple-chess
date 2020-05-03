import React, {FC} from 'react';

import useStyles from './board.styles';

interface Props {
  id: string;
  backgroundColor: string;
}

const CellComponent: FC<Props> = props => {
  const {id, backgroundColor} = props;
  const classes = useStyles();

  return (
    <div className={classes.cellContainer}
         id={id}
         style={{backgroundColor}}
    >
      <div>
        1
      </div>
    </div>
  );
};

export default CellComponent;
