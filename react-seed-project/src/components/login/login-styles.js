import { pixelToPercentage } from '../../utils/styles';

export const styles = theme => ({
  wrapper: {
    width: '100%',
    height: '100%',
    display: 'flex',
    flexDirection: 'column'
  },
  header: {
    width: '100%',
    minHeight: '128px',
    backgroundColor: theme.palette.grays.gray800,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  title: {
    color: theme.palette.grays.gray100
  },
  content: {
    width: '100%',
    boxSizing: 'border-box',
    flexGrow: '1',
    backgroundColor: theme.palette.grays.gray200,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: pixelToPercentage(40)
  }
});