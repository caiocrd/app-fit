import React from 'react';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

export default function ProfileView({profile, onStart}) {
  console.log(profile);
    
  return (
    <div>
      <div>
        <Typography variant="h5" component="h2">Perfil Fitness</Typography>
        <Typography variant="subtitle2">DICAS DE DIETA E EXERCÍCIOS</Typography>
      </div>

      <div>
        <Typography variant="h5" component="h3">Dieta</Typography>
        <div>Img</div>
        <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce et tristique dui. Phasellus sit amet lacus dignissim, condimentum ligula vitae, iaculis nibh.</div>
        <div>Img</div><div>Img</div><div>Img</div>
      </div>

      <div>
        <Typography variant="h5" component="h3">Exercícios</Typography>
        <div>Img</div>
        <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce et tristique dui. Phasellus sit amet lacus dignissim, condimentum ligula vitae, iaculis nibh.</div>
        <div>Img</div><div>Img</div><div>Img</div>
      </div>
      
      <div>
        <Button variant="outlined">REFAZER</Button>
        <Button variant="contained" color="primary" onClick={() => onStart()}>COMEÇAR</Button>
      </div>
    </div>
  );
}