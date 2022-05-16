import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';


export default function MediaCard({img, tittle, description}) {
  return (
    <Card sx={{ maxWidth: 200,height:300, borderRadius:45, display:'flex', paddingTop:'2rem',
    alignItems:'center',flexDirection:'column', alignContent:'center', textAlign:'center' }}>     
      <img style={{marginBottom:"1.5rem"}}
        src={img}
        height="65rem"
        width="65rem"
        alt="cap"
      />
      <CardContent>
        <Typography gutterBottom variant= "h5" component= "div">          
          {tittle}          
        </Typography>
          <Divider sx={{backgroundColor: "red", height: "0.1rem"}} variant= "middle"/>
        <Typography variant="body2" color="text.secondary">
          {description}
        </Typography>
      </CardContent>
      <CardActions>
      </CardActions>
    </Card>
  );
}
