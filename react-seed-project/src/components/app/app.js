import React from 'react';
import { ThemeProvider } from '@material-ui/styles'
import { makeStyles } from '@material-ui/core/styles';
import Routes from '../../routes';

import { theme } from './app-theme'
import { styles } from './app-styles'


const useStyles = makeStyles(styles(theme));

export default function App(props) {
  const classes = useStyles();

  return (
    <ThemeProvider theme={theme}>
      <div className={classes.app}>
        <Routes />
      </div>
    </ThemeProvider>
  );
}