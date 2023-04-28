import './MovieCards.css';
import React, { useState } from "react";
// import { movieResult } from '../../../store/index';
// import { useDispatch } from 'react-redux';

export default function MovieCard(props){
  // const dispatch = useDispatch();

  // const moreDetails = (movies) => {
  //   dispatch(movieResult.setMovieResults(movies));
  // };

  let image = "url('https://image.tmdb.org/t/p/original" + props.details.poster_path + "')";
  console.log(props.height)
  return (
    <div class="col-md-6 col-lg-4 column">
      <div class="card_2" style={{backgroundImage:image,backgroundRepeat:"no-repeat",backgroundSize:"cover",height:props.height,width:props.width}}>
        <div class="txt">
          <h1>{props.details.name?props.details.name:props.details.title}<br></br><span style={{fontSize:"20px"}}>{props.details.release_date}</span></h1>
          <p style={{fontSize:"0.8rem",fontWeight:"400"}}>{props.details.overview}</p>
        </div>
        {/* <a href="#" style={{fontSize:"1rem"}} onClick = {() => moreDetails(props.details)}>more</a> */}
        <div class="ico-card">
          <i class="fas fa-film"></i>
        </div>
      </div>
    </div>
  )
}
