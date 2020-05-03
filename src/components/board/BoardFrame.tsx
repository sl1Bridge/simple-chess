import React, {FC} from 'react';
import cx from 'classnames';

import CellComponent from './CellComponent';

import useStyles from './board.styles';

interface Props {
  children: ReturnType<typeof CellComponent>[];
}

const BoardFrame: FC<Props> = ({children}) => {
  const classes = useStyles();
  const numberDesignations = [1, 2, 3, 4, 5, 6, 7, 8];
  const lettersDesignations = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];

  return (
    <div className={classes.boardFrame}>
      {numberDesignations.map((item, i) =>
        // eslint-disable-next-line react/no-array-index-key
        <p key={i}
           className={cx(classes.designationsTypography, classes.leftNums)}
           style={{bottom: i === 0 ? 20 : 20 + 55 * i}}
        >
          {item}
        </p>)}
      {numberDesignations.map((item, i) =>
        // eslint-disable-next-line react/no-array-index-key
        <p key={i}
           className={cx(classes.designationsTypography, classes.rightNums)}
           style={{bottom: i === 0 ? 20 : 20 + 55 * i}}
        >
          {item}
        </p>)}
      {lettersDesignations.map((item, i) =>
        // eslint-disable-next-line react/no-array-index-key
        <p key={i}
           className={cx(classes.designationsTypography, classes.topLetters)}
           style={{left: i === 0 ? 20 : 20 + 55 * i}}
        >
          {item}
        </p>)}
      {lettersDesignations.map((item, i) =>
        // eslint-disable-next-line react/no-array-index-key
        <p key={i}
           className={cx(classes.designationsTypography, classes.bottomLetters)}
           style={{left: i === 0 ? 20 : 20 + 55 * i}}
        >
          {item}
        </p>)}
      <div className={classes.cellsContainer}>
        {children}
      </div>
    </div>
  );
};

export default BoardFrame;
