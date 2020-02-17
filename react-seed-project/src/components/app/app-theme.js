import { createMuiTheme } from '@material-ui/core/styles'

export const theme = createMuiTheme({
  typography: {
    fontFamily: [
      'Roboto Condensed',
      'sans-serif',
    ].join(','),
  },
  palette: {
    primary: {
      main: '#272D30'
    },
    secondary: {
      main: '#FF762C'
    },
    grays: {
      gray100: '#E5E9EC',
      gray200: '#CFD6DB',
      gray300: '#B9C4CB',
      gray400: '#A3B1BB',
      gray500: '#8D9FAB',
      gray600: '#6B7982',
      gray700: '#495359',
      gray800: '#272D30',
      gray900: '#060607',
    }
  }
});