export const styles = theme => ({
  componentRoot: {
    backgroundColor: theme.palette.grays.gray800,
    height: '100%'
  },
  slideContainer: {
    color: 'white',
    height: '100%',
    '& > div': {
      height: '100%'
    },
  },
  slides: {
    boxSizing: 'border-box',
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '40px'
  }
});