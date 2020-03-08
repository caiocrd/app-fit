import { pixelToPercentage } from '../../utils/styles';

export const styles = theme => ({
  wrapper: {
    backgroundColor: theme.palette.grays.gray800,
    height: '100%',
    overflow: 'auto'
  },
  swipeableContainer: {
    color: 'white',
    '& > div': {
      height: '100%'
    },
  },
  swipeableArea: {
    boxSizing: 'border-box',
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    padding: pixelToPercentage(40),
    overflow: 'auto',
  },
  selectButton: {
    backgroundColor: 'rgba(141,159,171,0.16)',
    color: 'white',
    fontSize: '16px',
    fontWeight: '700',
    height: '100%',
    padding: '20px'
  },
  selectList: {
    backgroundColor: 'rgba(141,159,171,0.16)',
    '& .MuiListItemText-primary': {
      color: theme.palette.grays.gray500,
      fontSize: '16px',
      fontWeight: '700',
      textTransform: 'uppercase'
    },
    '& .MuiListItemText-secondary': {
      color: 'white'
    }
  },
  darkMobileStepper: {
    justifyContent: 'center',
    backgroundColor: theme.palette.grays.gray800,
    padding: pixelToPercentage(20),
    '& .MuiMobileStepper-dot': {
      backgroundColor: theme.palette.grays.gray500,
    },
    '& .MuiMobileStepper-dotActive': {
      backgroundColor: theme.palette.secondary.main,
    }
  }
});