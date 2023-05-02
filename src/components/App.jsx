import {BrowserRouter as Router, Switch , Route} from 'react-router-dom';
import SearchBar from './SearchBar';
import Navbar from './Navbar';
import Intro from './Intro';
import Loader from './Loader';
import MovieCard from './MovieCards';
import HomeMovieCard from './HomeMovieCards';
import Alerts from './Alerts';
import Box from '@mui/material/Box';
import React, { useState, useRef, useEffect } from 'react';
import Zoom from '@mui/material/Zoom';
import axios from 'axios';
import ButtonGroup2 from './ButtonGroup2';
import RateMoviesCard from './RateMoviesCard';

function App() {

  var movies = [{'adult': false, 'backdrop_path': '/3Rfvhy1Nl6sSGJwyjb0QiZzZYlB.jpg', 'genre_ids': [16, 12, 10751, 35], 'id': 862, 'original_language': 'en', 'original_title': 'Toy Story', 'overview': "Led by Woody, Andy's toys live happily in his room until Andy's birthday brings Buzz Lightyear onto the scene. Afraid of losing his place in Andy's heart, Woody plots against Buzz. But when circumstances separate Buzz and Woody from their owner, the duo eventually learns to put aside their differences.", 'popularity': 116.851, 'poster_path': '/uXDfjJbdP4ijW5hWSBrPrlKpxab.jpg', 'release_date': '1995-10-30', 'title': 'Toy Story', 'video': false, 'vote_average': 7.969, 'vote_count': 16618}, {'adult': false, 'backdrop_path': '/qSxeCfWUUyht9hZgaaYmtPtTkw2.jpg', 'genre_ids': [12, 14, 10751], 'id': 8844, 'original_language': 'en', 'original_title': 'Jumanji', 'overview': "When siblings Judy and Peter discover an enchanted board game that opens the door to a magical world, they unwittingly invite Alan -- an adult who's been trapped inside the game for 26 years -- into their living room. Alan's only hope for freedom is to finish the game, which proves risky as all three find themselves running from giant rhinoceroses, evil monkeys and other terrifying creatures.", 'popularity': 17.19, 'poster_path': '/vgpXmVaVyUL7GGiDeiK1mKEKzcX.jpg', 'release_date': '1995-12-15', 'title': 'Jumanji', 'video': false, 'vote_average': 7.2, 'vote_count': 9567}, {'adult': false, 'backdrop_path': '/mWINg2BwQ2RBNIN8WSMjNbkih3d.jpg', 'genre_ids': [35, 27, 14], 'id': 12110, 'original_language': 'en', 'original_title': 'Dracula: Dead and Loving It', 'overview': "When a lawyer shows up at the vampire's doorstep, he falls prey to his charms and joins him in his search for fresh blood. Enter Professor Van Helsing, who may be the only one able to vanquish the Count.", 'popularity': 14.312, 'poster_path': '/4rRfZz8YnHNRr16t3CFcJrPdXHi.jpg', 'release_date': '1995-12-22', 'title': 'Dracula: Dead and Loving It', 'video': false, 'vote_average': 6.037, 'vote_count': 829}, {'adult': false, 'backdrop_path': '/p1mr2xCu4VSl7y41wDOV3swGQJf.jpg', 'genre_ids': [35, 18, 10749], 'id': 6620, 'original_language': 'en', 'original_title': 'Sabrina', 'overview': "Linus and David Larrabee are the two sons of a very wealthy family. Linus is all work – busily running the family corporate empire, he has no time for a wife and family. David is all play – technically he is employed by the family business, but never shows up for work, spends all his time entertaining, and has been married and divorced three times. Meanwhile, Sabrina Fairchild is the young, shy, and awkward daughter of the household chauffeur, who goes away to Paris for two years, and returns to capture David's attention, while falling in love with Linus.", 'popularity': 17.526, 'poster_path': '/8vvgKw3DbEPNlJAdHe7xXzhb2gN.jpg', 'release_date': '1954-09-10', 'title': 'Sabrina', 'video': false, 'vote_average': 7.526, 'vote_count': 1083}, {'adult': false, 'backdrop_path': '/9EUmwXS6EbY5djAhLtBGzUbBwNV.jpg', 'genre_ids': [878], 'id': 830, 'original_language': 'en', 'original_title': 'Forbidden Planet', 'overview': 'Starship C57D travels to planet Altair 4 in search of the crew of spaceship "Bellerophon," a scientific expedition that has been missing for 20 years, only to find themselves unwelcome by the expedition\'s lone survivor and warned of destruction by an invisible force if they don\'t turn back immediately.', 'popularity': 16.022, 'poster_path': '/aq0OQfRS7hDDI8vyD0ICbH9eguC.jpg', 'release_date': '1956-03-23', 'title': 'Forbidden Planet', 'video': false, 'vote_average': 7.276, 'vote_count': 776}, {'adult': false, 'backdrop_path': '/ka6np2LONtAElZOVeebb3mwSTBs.jpg', 'genre_ids': [18], 'id': 687, 'original_language': 'en', 'original_title': 'Dead Man Walking', 'overview': 'A death row inmate turns for spiritual guidance to a local nun in the days leading up to his scheduled execution for the murders of a young couple.', 'popularity': 11.285, 'poster_path': '/wQmmJi5ypfHH2boXrQBmsep7qb2.jpg', 'release_date': '1995-12-29', 'title': 'Dead Man Walking', 'video': false, 'vote_average': 7.368, 'vote_count': 1165}]
  const [movieName, setMovieName] = useState("");
  const [predictBy, setPredictBy] = useState("COSINE AND TF-IDF");
  const [isAlert, setIsAlert] = useState(false);
  const [method, setMethod] = useState("CONTENT BASED");

  const [gridItems, setGridItems] = useState([]);
  const [gridRatingItems, setGridRatingItems] = useState([]);
  const [homePageItems, setHomePageItems] = useState([]);
  const [ratingMovies, setRatingMovies] = useState(movies);
  const [maxRating, setMaxRating] = useState(["", 0]);
  const [loading, setLoading] = useState(false);


  const getHomePageItems = () => {
    axios({
      method:'post',
      url:`http://127.0.0.1:8000/predict_movie/HomePageMovie`,
      data: {
        movieName: movieName,
      }
    })
    .then(response => {
      // handle success
      console.log(response);
      var responseData = JSON.parse(response.data);
      console.log(responseData);
      setHomePageItems(responseData);
    })
    .catch(error => {
      // handle error
      console.log(error);
    });
  }

  const handleSearchClick = (event, value) =>{
    console.log(movieName);
    console.log(predictBy);
    if(movieName !== ""){
      console.log("inn")

      axios({
        method:'post',
        url:`http://127.0.0.1:8000/predict_movie/PredictMovie`,
        data: {
          movieName: movieName,
          predictBy: predictBy,
          method: method
        }
      })
      .then(response => {
        // handle success
        console.log(response);
        var responseData = JSON.parse(response.data);
        console.log(responseData);
        setGridItems(responseData);
      })
      .catch(error => {
        // handle error
        console.log(error);
      });
    }
  }

  const handleInputChange = (event, value) => {
    setMovieName(event.target.value);
  }

  const handlePredictBy = (event,value) =>{
    setPredictBy(event.target.innerText);
    setIsAlert(true);
  }

  const handleMethodChange = (event,value) =>{
    setMethod(event.target.innerText);
    setMaxRating(["", 0]);
    setGridRatingItems([]);
  }

  const handleRatingChange = (movie, rating) =>{
    if(maxRating[1] < Number(rating)){
      setMaxRating([movie, Number(rating)]);
    }
    console.log(maxRating);
  }

  const handleRatingClick = () => {
      setLoading(true);
      axios({
        method:'post',
        url:`http://127.0.0.1:8000/predict_movie/PredictMovie`,
        data: {
          movieName: movieName,
          predictBy: predictBy,
          method: method,
          inputData: maxRating[0]
        }
      })
      .then(response => {
        setLoading(false);
        // handle success
        console.log(response);
        var responseData = JSON.parse(response.data);
        console.log(responseData);
        setGridRatingItems(responseData);
      })
      .catch(error => {
        // handle error
        console.log(error);
      });
  }

  useEffect(() => {
    getHomePageItems();
  }, []);

  return (
    <Router>
        <Switch>
            <div className="" style={{position:"absolute",left:"0",right:"0"}}>
                <div class="navbar-container" style={{paddingTop:"0px"}}>
                  <Zoom in={isAlert} style={{ transitionDelay: isAlert ? "100ms" : "0ms" }}>
                    <div>
                      {isAlert &&  (<Alerts predictBy = {predictBy} closeAlert={setIsAlert}/>)}
                    </div>
                  </Zoom>
                  <Route path = "/">
                      <Navbar />
                        {
                          method === "CONTENT BASED" && (
                            <>
                              <SearchBar handleInputChange = {handleInputChange} handleMethodChange={handleMethodChange} handlePredictBy={handlePredictBy} handleSearchClick={handleSearchClick}/>
                              <div className="grid-container">
                                {gridItems.length !== 0 && gridItems.map((item) => (
                                    <MovieCard details={item} width={"18rem"} height={"24rem"}/>
                                ))}
                              </div>
                              {gridItems.length === 0 && homePageItems.map((item) => (
                                <>
                                  <div className='genre-title'>{item[0]}</div>
                                  <div className="grid-container-home">
                                    <HomeMovieCard data={item} width={"18rem"} height={"24rem"}/>
                                  </div>
                                </>
                              ))}
                            </>
                          )
                        }

                        {
                          method === "COLLABORATIVE" && (
                            <>
                              <div className="search-container">
                                <ButtonGroup2 handleMethodChange={handleMethodChange}/>
                                {!loading && <button type="button" class="btn btn-outline-danger" onClick={handleRatingClick}><i class="fa-brands fa-searchengin fa-2x"></i></button>}
                                {loading && <Loader />}
                              </div>
                              <div className="grid-container-recommendation">
                                {gridRatingItems.length === 0 && ratingMovies.length !== 0 && ratingMovies.map((item) => (
                                  <RateMoviesCard card={item} handleRatingChange={handleRatingChange}/>
                                ))}
                                {gridRatingItems !== 0 && gridRatingItems.map((item) => (
                                    <MovieCard details={item} width={"18rem"} height={"24rem"}/>
                                ))}
                              </div>
                            </>
                          )
                        }

                  </Route>
                </div>
            </div>
         </Switch>
    </Router>
  );
}

export default App;
