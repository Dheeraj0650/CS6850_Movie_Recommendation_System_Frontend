import './MovieCards.css';
import React, { useState } from "react";
import {Swiper, SwiperSlide} from 'swiper/react';
import 'swiper/css';

export default function MovieCard(props){

  return (
    <Swiper
      // modules={[Navigation, Pagination, Scrollbar, A11y, EffectCube]}
      spaceBetween={100}
      slidesPerView={5}
      // navigation
      // pagination={{ clickable: true }}
      // scrollbar={{ draggable: true }}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
      // effect={"cube"}
      // cubeEffect={{
      //   shadow: true,
      //   slideShadows: true,
      //   shadowOffset: 20,
      //   shadowScale: 0.94,
      // }}
    >
      {props.data[1].map((item) => (
        <SwiperSlide key={"url('https://image.tmdb.org/t/p/original" + item.poster_path + "')"}>
          <div class="col-md-2 col-lg-4 column">
            <div class="card_2" style={{backgroundImage:"url('https://image.tmdb.org/t/p/original" + item.poster_path + "')",backgroundRepeat:"no-repeat",backgroundSize:"cover",height:"18rem",width:"12rem"}}>
            <div class="txt">
                <h1>{item.name?item.name:item.title}<br></br><span style={{fontSize:"20px"}}>{item.release_date}</span></h1>
                <p style={{fontSize:"0.65rem",fontWeight:"400"}}>{item.overview}</p>
            </div>
            {/* <a href="#" style={{fontSize:"1rem"}} onClick = {() => moreDetails(props.details)}>more</a> */}
            <div class="ico-card">
                <i class="fas fa-film"></i>
            </div>
            </div>
        </div>
        </SwiperSlide>
      ))}
    </Swiper>
        // {props.data[1].map((item) => (<div class="col-md-6 col-lg-4 column">
        //     <div class="card_2" style={{backgroundImage:"url('https://image.tmdb.org/t/p/original" + item.poster_path + "')",backgroundRepeat:"no-repeat",backgroundSize:"cover",height:"18rem",width:"12rem"}}>
        //     <div class="txt">
        //         <h1>{item.name?item.name:item.title}<br></br><span style={{fontSize:"20px"}}>{item.release_date}</span></h1>
        //         <p style={{fontSize:"0.8rem",fontWeight:"400"}}>{item.overview}</p>
        //     </div>
        //     {/* <a href="#" style={{fontSize:"1rem"}} onClick = {() => moreDetails(props.details)}>more</a> */}
        //     <div class="ico-card">
        //         <i class="fas fa-film"></i>
        //     </div>
        //     </div>
        // </div>))}
  )
}
