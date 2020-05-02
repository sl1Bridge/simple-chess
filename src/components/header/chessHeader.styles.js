import {createUseStyles} from 'react-jss';

export default createUseStyles({
  headerContainer: {
    position: 'fixed',
    top: '0',
    height: '90px',
    width: '100%',
    marginBottom: '90px',
    backgroundColor: '#858585',
    boxShadow: '0px -5px 18px',
  },
  headerTypography: {
    fontFamily: 'Helvetica, Arial, sans-serif',
    fontSize: '52px',
    fontWeight: '500',
    color: 'black',
    textFillColor: 'white',
    textStroke: '2px',
    textStrokeColor: '#000000',
    textAlignLast: 'center',
    marginTop: '16px',
  },
});