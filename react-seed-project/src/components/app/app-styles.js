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
      //marginBottom: pixelToPercentage(40),
      width: '100%',

      '& input': {
        backgroundColor: 'rgba(141,159,171,0.16)',
        color: 'white',
        fontSize: '24px',
        fontWeight: '700',
        textAlign: 'center',
        padding: '10px'
      }
    },
    '& .round-button': {
      borderRadius: '25px',
      color: theme.palette.grays.gray800,
      fontSize: '20px',
      fontWeight: '700',
      height: '50px'
    },
    '& .margin-top-40': {
      marginTop: '40px'
    },
  }
});