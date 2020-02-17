/* Global Styles */

export const styles = theme => ({
  app: {
    height: '100%',

    '& h2': {
      fontWeight: '300',
      marginBottom: '20px'
    },
    '& .gray400': {
      color: theme.palette.grays.gray400
    },
    '& .input-group': {
      marginBottom: '40px'
    }
  }
});