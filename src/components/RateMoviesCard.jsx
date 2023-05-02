import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import RatingInput from './RatingInput';

export default function MultiActionAreaCard(props) {
  function handleRatingChange(event){
    if(event.target.value !== ""){
      console.log(event.target.value);
      props.handleRatingChange(props.card['original_title'], event.target.value);
    }
  }
  return (
    <Card sx={{ maxWidth: 300, maxHeight:4000, margin:2}}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="200"
          image={"https://image.tmdb.org/t/p/original" + props.card['poster_path']}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {props.card['original_title']}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {props.card['overview']}
          </Typography>
          <RatingInput handleRatingChange={handleRatingChange}/>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}