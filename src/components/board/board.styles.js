import {createUseStyles} from 'react-jss';

export default createUseStyles({
  // Board Frame
  boardFrame: {
    width: '440px',
    height: '440px',
    background: '#c9945e',
    position: 'relative',
    border: '10px double #f3e0b8',
    margin: '250px auto 0 auto',
    '&::after': {
      content: '""',
      position: 'absolute',
      top: '-35px',
      left: '-35px',
      right: '-35px',
      bottom: '-35px',
      background: '#603a27',
      zIndex: '-1',
    }
  },
  designationsTypography: {
    position: 'absolute',
    left: '-26px',
    fontSize: '18px',
    fontFamily: 'Helvetica, Arial, sans-serif',
    color: 'white',
  },
  leftNums: {
    left: '-27px',
  },
  rightNums: {
    left: '457px',
    transform: 'rotate(180deg)',
  },
  topLetters: {
    top: '-30px',
    transform: 'rotate(180deg)',
  },
  bottomLetters: {
    bottom: '-30px',
  },
  cellsContainer: {
    display: 'flex',
    flexWrap: 'wrap',
    width: '440px',
    height: '440px',
  },
  // Cell Component Styles
  cellContainer: {
    minWidth: '55px',
    height: '55px'
  }
});