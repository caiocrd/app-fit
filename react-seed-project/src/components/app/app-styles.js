import { pixelToPercentage } from '../../utils/styles';

/* Global Styles */

export const styles = theme => ({
  app: {
    height: '100%',
    '& h2': {
      fontWeight: '300',
      marginBottom: theme.spacing(2)
    },
    '& .gray400': {
      color: theme.palette.grays.gray400
    },
    '& .align-self-end': {
      alignSelf: 'flex-end'
    },
    '& .hidden': {
      display: 'none'
    },
    '& .input-group': {
      width: '100%',
      '& .app-fit-dark-input  input': {
        backgroundColor: 'rgba(141,159,171,0.16)',
        color: 'white',
      },
      '& .app-fit-big-input  input': {
        fontSize: '24px',
        fontWeight: '700',
        textAlign: 'center',
        padding: '10px'
      }
    },
    '& .app-fit-round-button': {
      borderRadius: '25px',
      fontSize: '20px',
      fontWeight: '700',
      height: '50px'
    },
    '& .margin-top-40': {
      marginTop: '40px'
    },
    '& .margin-bottom-40': {
      marginBottom: '40px'
    },
  }
});