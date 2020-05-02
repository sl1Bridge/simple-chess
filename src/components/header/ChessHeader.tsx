import React from 'react';

import useStyles from './chessHeader.styles';

const ChessHeader = () => {
  const classes = useStyles();

  return (
    <div className={classes.headerContainer}>
      <div>
        <p className={classes.headerTypography}>
          Simple Chess
        </p>
      </div>
    </div>
  );
};

export default ChessHeader;
