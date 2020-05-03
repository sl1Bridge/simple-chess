import React from 'react';
import {useSelector} from 'react-redux';

import BoardFrame from './BoardFrame';
import CellComponent from './CellComponent';

import {boardSelector} from '../../selectors/selectors';

const Board = () => {
  const {cells} = useSelector(boardSelector);

  return (
    <div>
      <BoardFrame>
        {cells.map((cell, i) => (
          (i >= 0 && i < 8 && i % 2 === 0) || (i >= 9 && i < 16 && i % 2 !== 0) || (i >= 16 && i < 24 && i % 2 === 0) || (i >= 25 && i < 32 && i % 2 !== 0) ||
          (i >= 32 && i < 40 && i % 2 === 0) || (i >= 41 && i < 49 && i % 2 !== 0) || (i >= 48 && i < 56 && i % 2 === 0) || (i >= 56 && i < 64 && i % 2 !== 0) ?
            <CellComponent key={cell.id}
                           backgroundColor="#f3e0b8"
                           id={cell.id}
            /> :
            <CellComponent key={cell.id}
                           backgroundColor="#c6915b"
                           id={cell.id}
            />))}
      </BoardFrame>
    </div>
  );
};

export default Board;
