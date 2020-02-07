import React from 'react';
import SwipeableViews from 'react-swipeable-views';
import Typography from '@material-ui/core/Typography'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import { Link } from 'react-router-dom';

import { dietType, goalType, selfImageType } from './profileWizardUtils.js'

export default function ProfileWizardView({handleChange, setProfileProperty, setDietAndFinish}) {
  return (
    <div>
    <SwipeableViews>
      <div>
        <div>
          <label htmlFor="weight">
            <Typography variant="h5" component="h2">
              Qual o seu peso?
            </Typography>
          </label>
          <TextField id="weight" variant="outlined" onChange={handleChange} />
        </div>

        <div>
          <label htmlFor="height">
            <Typography variant="h5" component="h2">
              Qual sua altura?
            </Typography>
          </label>
          <TextField id="height" variant="outlined" onChange={handleChange}  />
        </div>

        <div>
          <Typography variant="h6" component="h3">
            IMC XX
          </Typography>
          <Typography variant="subtitle1" >
            Sobrepeso
          </Typography>
          <Typography variant="body2" >
            Praesent malesuada quis ante eu volutpat. Sed viverra non mauris pretium ullamcorper. Etiam dictum at massa et semper. Ut non sagittis leo. Duis accumsan elit arcu, ac vehicula erat dignissim et. 
          </Typography>
        </div>

        <Button variant="contained" color="primary">CONTINUAR</Button>
      </div>

      <div>
        <div>
          <Typography variant="h5" component="h2">
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

      <div>
        <div>
          <Typography variant="h5" component="h2">
            Qual o seu objetivo?
          </Typography>
          <div>
            <Button variant="outlined" onClick={() => setProfileProperty('goal', goalType.MUSCLE_GAIN)}>{goalType.MUSCLE_GAIN}</Button>
            <Button variant="outlined" onClick={() => setProfileProperty('goal', goalType.FAT_LOSS)}>{goalType.FAT_LOSS}</Button>
          </div>
        </div>
      </div>
      <div>
        <div>
          <Typography variant="h5" component="h2">
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