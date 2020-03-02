import React from 'react';
import Typography from '@material-ui/core/Typography'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import Grid from '@material-ui/core/Grid'
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import MobileStepper from '@material-ui/core/MobileStepper';
import { makeStyles } from '@material-ui/core/styles';
import SwipeableViews from 'react-swipeable-views';

import { dietType, goalType, selfImageType } from './profile-wizard-utils'
import { styles } from './profile-wizard-styles'

const useStyles = makeStyles(styles);

export default function ProfileWizardView({index, setIndex, handleChange, setProfileProperty, setDietAndFinish}) {
  const classes = useStyles();

  return (
    <div className={classes.profileWizardRoot}>
      <SwipeableViews className={classes.swipeableContainer} onChangeIndex={setIndex}>
        <WeightAndHeightArea classes={classes} index={index} handleChange={handleChange} />
        <BodyTypeArea classes={classes} index={index} setProfileProperty={setProfileProperty} />
        <GoalArea classes={classes} setProfileProperty={setProfileProperty} />
        <DietArea classes={classes} setDietAndFinish={setDietAndFinish} />
      </SwipeableViews>
      <MobileStepper className={classes.darkMobileStepper} variant="dots" steps={4} activeStep={index} position="bottom" />
    </div>
  );
}

const WeightAndHeightArea = ({classes, handleChange}) => (
  <div className={`${classes.swipeableArea}`}>
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <div className={`input-group`}>
          <label htmlFor="weight">
            <Typography variant="h5" component="h2" align="center">
              Qual o seu peso?
            </Typography>
          </label>
          <TextField id="weight" variant="filled" color="secondary" fullWidth onChange={handleChange} />
        </div>
      </Grid>
      <Grid item xs={12}>
        <div className={`input-group`}>
          <label htmlFor="height">
            <Typography variant="h5" component="h2" align="center">
              Qual sua altura?
            </Typography>
          </label>
          <TextField id="height" variant="filled" color="secondary" fullWidth onChange={handleChange} />
        </div>
      </Grid>
      <Grid item xs={12}>
        <div className={`imc-info ` + (false ? `hidden` : ``)}>
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
      </Grid>
    </Grid>
    <div>
      <Button variant="contained" color="secondary" fullWidth className={`round-button margin-top-40`}>CONTINUAR</Button>
    </div>
  </div>
);

const BodyTypeArea = ({classes, setProfileProperty}) => (
  <div className={`${classes.swipeableArea}`}>
    <div>
      <Typography variant="h5" component="h2"  align="center">
        Como você se sente?
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <Button
            variant="outlined"
            className={`${classes.selectButton}`}
            fullWidth
            onClick={() => setProfileProperty('selfImage', selfImageType.TOO_SKINNY)} >
              {selfImageType.TOO_SKINNY}
          </Button>
        </Grid>
        <Grid item xs={6}>
          <Button
            variant="outlined"
            fullWidth
            className={`${classes.selectButton}`}
            onClick={() => setProfileProperty('selfImage', selfImageType.SKINNY)} >
              {selfImageType.SKINNY}
          </Button>
        </Grid>
        <Grid item xs={6}>
          <Button
            variant="outlined"
            fullWidth
            className={`${classes.selectButton}`}
            onClick={() => setProfileProperty('selfImage', selfImageType.OVERWEIGHT)} >
              {selfImageType.OVERWEIGHT}
          </Button>
        </Grid>
        <Grid item xs={6}>
          <Button
            variant="outlined"
            fullWidth
            className={`${classes.selectButton}`}
            onClick={() => setProfileProperty('selfImage', selfImageType.OBESE)} >
              {selfImageType.OBESE}
          </Button>
        </Grid>
      </Grid>
    </div>
  </div>
);

const GoalArea = ({classes, setProfileProperty}) => (
  <div className={`${classes.swipeableArea}`}>
    <div>
      <Typography variant="h5" component="h2"  align="center">
        Qual o seu objetivo?
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <Button
            variant="outlined"
            fullWidth
            className={`${classes.selectButton}`}
            onClick={() => setProfileProperty('goal', goalType.MUSCLE_GAIN)} >
              {goalType.MUSCLE_GAIN}
          </Button>
        </Grid>
        <Grid item xs={6}>
          <Button
            variant="outlined"
            fullWidth
            className={`${classes.selectButton}`}
            onClick={() => setProfileProperty('goal', goalType.FAT_LOSS)} >
              {goalType.FAT_LOSS}
          </Button>
        </Grid>
      </Grid>
    </div>
  </div>
);

const DietArea = ({classes, setDietAndFinish}) => (
  <div className={`${classes.swipeableArea}`}>
    <div>
      <Typography variant="h5" component="h2"  align="center">
        E o que você prefere comer?
      </Typography>
      <List className={`${classes.selectList}`}>
        <ListItem onClick={() => setDietAndFinish(dietType.LOW_CARB)}>
          <ListItemAvatar>
            <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
          </ListItemAvatar>
          <ListItemText
            primary={dietType.LOW_CARB}
            secondary={"Vestibulum sit amet tortor id tellus consequat lobortis. Suspendisse potenti."}
          />
        </ListItem>
        <Divider component="li" />
        <ListItem onClick={() => setDietAndFinish(dietType.MID_CARB)}>
          <ListItemAvatar>
            <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
          </ListItemAvatar>
          <ListItemText
            primary={dietType.MID_CARB}
            secondary={"Sed ac ultricies risus, sed rutrum lectus. Suspendisse sit amet erat sapien. Etiam egestas aliquam malesuada."}
          />
        </ListItem>
        <Divider component="li" />
        <ListItem onClick={() => setDietAndFinish(dietType.HIGH_CARB)}>
          <ListItemAvatar>
            <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
          </ListItemAvatar>
          <ListItemText
            primary={dietType.HIGH_CARB}
            secondary={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque eu ullamcorper erat."}
          />
        </ListItem>
      </List>
    </div>
  </div>
);