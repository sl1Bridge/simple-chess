import {createUseStyles} from 'react-jss';

export default createUseStyles({
  boardFrame: {
    width: '440px',
    height: '440px',
    background: '#c9945e',
    position: 'relative',
    border: '10px double #603a27',
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
    left: '-26px',
  },
  rightNums: {
    left: '455px',
    transform: 'rotate(180deg)',
  },
  topLetters: {
    top: '-28px',
    transform: 'rotate(180deg)',
  },
  bottomLetters: {
    bottom: '-28px',
  }
});