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

export default function ProfileWizardView(props) {
  return (
    <div>
    <SwipeableViews>
      <div>
        <div>
          <Typography variant="h5" component="h2">
            Qual o seu peso?
          </Typography>
          <TextField id="input-weight" variant="outlined" />
        </div>

        <div>
          <Typography variant="h5" component="h2">
            Qual sua altura?
          </Typography>
          <TextField id="input-height" variant="outlined" />
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
            <Button variant="outlined">Muito Magro</Button>
            <Button variant="outlined">Magro</Button>
            <Button variant="outlined">Acima do Peso</Button>
            <Button variant="outlined">Muito Acima</Button>
          </div>
        </div>
      </div>

      <div>
        <div>
          <Typography variant="h5" component="h2">
            Qual o seu objetivo?
          </Typography>
          <div>
            <Button variant="outlined">Ganhar Músculo</Button>
            <Button variant="outlined">Perder Gordura</Button>
          </div>
        </div>
      </div>
      <div>
        <div>
          <Typography variant="h5" component="h2">
            E o que você prefere comer?
          </Typography>
          <List>
            <ListItem to={{ pathname: `/screen1`}} component={Link} alignItems="flex-start">
              <ListItemAvatar>
                <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
              </ListItemAvatar>
              <ListItemText
                primary="Muita proteína e muita salada"
                secondary={
                  <Typography style={{display: 'inline'}} component="span" variant="body2" color="textPrimary">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut iaculis faucibus felis, in rutrum nisi porttitor sed. Nam nec lectus arcu.
                  </Typography>
                }
              />
            </ListItem>
            <Divider variant="inset" component="li" />
            <ListItem to={{ pathname: `/screen1`}} component={Link} alignItems="flex-start">
              <ListItemAvatar>
                <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
              </ListItemAvatar>
              <ListItemText
                primary="Carboidratos, proteína e salada"
                secondary={
                  <Typography style={{display: 'inline'}} component="span" variant="body2" color="textPrimary">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut iaculis faucibus felis, in rutrum nisi porttitor sed. Nam nec lectus arcu.
                  </Typography>
                }
              />
            </ListItem>
            <Divider variant="inset" component="li" />
            <ListItem to={{ pathname: `/screen1`}} component={Link} alignItems="flex-start">
              <ListItemAvatar>
                <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
              </ListItemAvatar>
              <ListItemText
                primary="Muito carboidrato"
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