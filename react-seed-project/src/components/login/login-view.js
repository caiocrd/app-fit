import React from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

import { styles } from './login-styles'

const useStyles = makeStyles(styles);

export default function LoginView({ onLogin }) {
  const classes = useStyles();

  return (
    <div className={classes.wrapper}>
      <div className={classes.header}>
        <Typography variant="h4" className={classes.title}>App Fit</Typography>
      </div>
      <div className={classes.content}>
        <Grid container justify="center" spacing={3}>
          <Grid container item spacing={3}>
            <Grid item xs={12}>
              <TextField id="username" fullWidth label="Usuário" variant="filled" />
            </Grid>
            <Grid item xs={12}>
              <TextField id="password" fullWidth label="Senha" variant="filled" type="password" />
            </Grid>
            <Grid item xs={12}>
              <Button variant="contained" color="primary" onClick={onLogin} fullWidth className={`app-fit-round-button`}>LOGIN</Button>
            </Grid>
          </Grid>
          <Grid item xs={12}>
            <Typography align="center" variant="h5">Ou</Typography>
          </Grid>
          <Grid item xs={12}>
            <Button variant="contained" color="primary" onClick={onLogin} fullWidth className={`app-fit-round-button`}>CRIE UMA CONTA</Button>
          </Grid>
        </Grid>
      </div>
    </div>
  );
}