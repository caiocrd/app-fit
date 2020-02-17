import React from 'react';
import Typography from '@material-ui/core/Typography'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import { makeStyles } from '@material-ui/core/styles';
import SwipeableViews from 'react-swipeable-views';

import { dietType, goalType, selfImageType } from './profile-wizard-utils'
import { styles } from './profile-wizard-styles'

const useStyles = makeStyles(styles);

export default function ProfileWizardView({handleChange, setProfileProperty, setDietAndFinish}) {
  const classes = useStyles();

  return (
    <div className={classes.componentRoot}>
    <SwipeableViews className={classes.slideContainer}>
      <div className={`${classes.slides}`}>
        <div className={`input-group`}>
          <label htmlFor="weight">
            <Typography variant="h5" component="h2" align="center">
              Qual o seu peso?
            </Typography>
          </label>
          <TextField id="weight" variant="filled" onChange={handleChange} />
        </div>
        <div className={`input-group`}>
          <label htmlFor="height">
            <Typography variant="h5" component="h2" align="center">
              Qual sua altura?
            </Typography>
          </label>
          <TextField id="height" variant="filled" onChange={handleChange} />
        </div>
        <div>
          <Typography className={`gray400`} variant="subtitle2">
            IMC XX
          </Typography>
          <Typography variant="body2" >
            Sobrepeso
          </Typography>
          <Typography variant="body1" >
            Praesent malesuada quis ante eu volutpat. Sed viverra non mauris pretium ullamcorper. Etiam dictum at massa et semper. Ut non sagittis leo. Duis accumsan elit arcu, ac vehicula erat dignissim et. 
          </Typography>
        </div>
        <Button variant="contained" color="secondary">CONTINUAR</Button>
      </div>

      <div className={`${classes.slides}`}>
        <div>
          <Typography variant="h5" component="h2"  align="center">
            Como você se sente?
          </Typography>
          <div>
            <Button variant="outlined" onClick={() => setProfileProperty('selfImage', selfImageType.TOO_SKINNY)}>{selfImageType.TOO_SKINNY}</Button>
            <Button variant="outlined" onClick={() => setProfileProperty('selfImage', selfImageType.SKINNY)}>{selfImageType.SKINNY}</Button>
            <Button variant="outlined" onClick={() => setProfileProperty('selfImage', selfImageType.OVERWEIGHT)}>{selfImageType.OVERWEIGHT}</Button>
            <Button variant="outlined" onClick={() => setProfileProperty('selfImage', selfImageType.OBESE)}>{selfImageType.OBESE}</Button>
          </div>
        </div>
      </div>

      <div className={`${classes.slides}`}>
        <div>
          <Typography variant="h5" component="h2"  align="center">
            Qual o seu objetivo?
          </Typography>
          <div>
            <Button variant="outlined" onClick={() => setProfileProperty('goal', goalType.MUSCLE_GAIN)}>{goalType.MUSCLE_GAIN}</Button>
            <Button variant="outlined" onClick={() => setProfileProperty('goal', goalType.FAT_LOSS)}>{goalType.FAT_LOSS}</Button>
          </div>
        </div>
      </div>

      <div className={`${classes.slides}`}>
        <div>
          <Typography variant="h5" component="h2"  align="center">
            E o que você prefere comer?
          </Typography>
          <List>
            <ListItem onClick={() => setDietAndFinish(dietType.LOW_CARB)} alignItems="flex-start">
              <ListItemAvatar>
                <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
              </ListItemAvatar>
              <ListItemText
                primary={dietType.LOW_CARB}
                secondary={
                  <Typography style={{display: 'inline'}} component="span" variant="body2" color="textPrimary">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut iaculis faucibus felis, in rutrum nisi porttitor sed. Nam nec lectus arcu.
                  </Typography>
                }
              />
            </ListItem>
            <Divider variant="inset" component="li" />
            <ListItem onClick={() => setDietAndFinish(dietType.MID_CARB)} alignItems="flex-start">
              <ListItemAvatar>
                <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
              </ListItemAvatar>
              <ListItemText
                primary={dietType.MID_CARB}
                secondary={
                  <Typography style={{display: 'inline'}} component="span" variant="body2" color="textPrimary">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut iaculis faucibus felis, in rutrum nisi porttitor sed. Nam nec lectus arcu.
                  </Typography>
                }
              />
            </ListItem>
            <Divider variant="inset" component="li" />
            <ListItem onClick={() => setDietAndFinish(dietType.HIGH_CARB)} alignItems="flex-start">
              <ListItemAvatar>
                <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
              </ListItemAvatar>
              <ListItemText
                primary={dietType.HIGH_CARB}
                secondary={
                  <Typography style={{display: 'inline'}} component="span" variant="body2" color="textPrimary">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut iaculis faucibus felis, in rutrum nisi porttitor sed. Nam nec lectus arcu.
                  </Typography>
                }
              />
            </ListItem>
            <Divider variant="inset" component="li" />

          </List>
        </div>
      </div>
     
    </SwipeableViews>
    </div>
  );
}