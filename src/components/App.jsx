import {BrowserRouter as Router, Switch , Route} from 'react-router-dom';
import SearchBar from './SearchBar';
import Navbar from './Navbar';
import Intro from './Intro';
import MovieCard from './MovieCards';
import Alerts from './Alerts';
import Box from '@mui/material/Box';
import React, { useState, useRef } from 'react';
import Zoom from '@mui/material/Zoom';
import axios from 'axios';


function App() {

  var movies = [{
    "poster_path": "/uXDfjJbdP4ijW5hWSBrPrlKpxab.jpg",
    "adult": false,
    "overview": "When an unexpected enemy emerges and threatens global safety and security, Nick Fury, director of the international peacekeeping agency known as S.H.I.E.L.D., finds himself in need of a team to pull the world back from the brink of disaster. Spanning the globe, a daring recruitment effort begins!",
    "release_date": "2012-04-25",
    "genre_ids": [
      878,
      28,
      12
    ],
    "id": 24428,
    "original_title": "The Avengers",
    "original_language": "en",
    "title": "The Avengers",
    "backdrop_path": "/uXDfjJbdP4ijW5hWSBrPrlKpxab.jpg",
    "popularity": 7.353212,
    "vote_count": 8503,
    "video": false,
    "vote_average": 7.33
  },
  {
    "poster_path": "/uXDfjJbdP4ijW5hWSBrPrlKpxab.jpg",
    "adult": false,
    "overview": "British Ministry agent John Steed, under direction from \"Mother\", investigates a diabolical plot by arch-villain Sir August de Wynter to rule the world with his weather control machine. Steed investigates the beautiful Doctor Mrs. Emma Peel, the only suspect, but simultaneously falls for her and joins forces with her to combat Sir August.",
    "release_date": "1998-08-13",
    "genre_ids": [
      53
    ],
    "id": 9320,
    "original_title": "The Avengers",
    "original_language": "en",
    "title": "The Avengers",
    "backdrop_path": "/uXDfjJbdP4ijW5hWSBrPrlKpxab.jpg",
    "popularity": 2.270454,
    "vote_count": 111,
    "video": false,
    "vote_average": 4.7
  },
  {
    "poster_path": "/t90Y3G8UGQp0f0DrP60wRu9gfrH.jpg",
    "adult": false,
    "overview": "When Tony Stark tries to jumpstart a dormant peacekeeping program, things go awry and Earth’s Mightiest Heroes are put to the ultimate test as the fate of the planet hangs in the balance. As the villainous Ultron emerges, it is up to The Avengers to stop him from enacting his terrible plans, and soon uneasy alliances and unexpected action pave the way for an epic and unique global adventure.",
    "release_date": "2015-04-22",
    "genre_ids": [
      28,
      12,
      878
    ],
    "id": 99861,
    "original_title": "Avengers: Age of Ultron",
    "original_language": "en",
    "title": "Avengers: Age of Ultron",
    "backdrop_path": "/570qhjGZmGPrBGnfx70jcwIuBr4.jpg",
    "popularity": 7.557812,
    "vote_count": 3924,
    "video": false,
    "vote_average": 7.4
  },
  {
    "poster_path": "/imTUeuHuxVLxC7sxKqi2G0RPF7k.jpg",
    "adult": false,
    "overview": "This Australian children's film is about scientist Bill Stewart goes to Fiji with his son Tim to investigate the appearance of the Crown of Thorns starfish in the reefs off the island.",
    "release_date": "1973-10-20",
    "genre_ids": [],
    "id": 392031,
    "original_title": "Avengers of the Reef",
    "original_language": "en",
    "title": "Avengers of the Reef",
    "backdrop_path": null,
    "popularity": 1.05,
    "vote_count": 0,
    "video": false,
    "vote_average": 0
  },
  {
    "poster_path": "/u7vvexSU81Qk20yU7Vog23Ogob.jpg",
    "adult": false,
    "overview": "Mysterious Wakanda lies in the darkest heart of Africa, unknown to most of the world. An isolated land hidden behind closed borders, fiercely protected by its young king - the Black Panther. But when brutal alien invaders attack, the threat leaves the Black Panther with no option but to go against the sacred decrees of his people and ask for help from outsiders.",
    "release_date": "2006-08-08",
    "genre_ids": [
      16,
      28,
      878
    ],
    "id": 14611,
    "original_title": "Ultimate Avengers 2",
    "original_language": "en",
    "title": "Ultimate Avengers 2",
    "backdrop_path": "/85NqI4WuCim6dZexmTPUAi13Af0.jpg",
    "popularity": 1.912805,
    "vote_count": 33,
    "video": false,
    "vote_average": 6.33
  },
  {
    "poster_path": "/we6igIU5gXVwuSL6M6pJP75TwEf.jpg",
    "adult": false,
    "overview": "When a nuclear missile was fired at Washington in 1945, Captain America managed to detonate it in the upper atmosphere. But then he fell miles into the icy depths of the North Atlantic, where he remained lost for over sixty years. But now, with the world facing the very same evil, Captain America must rise again as our last hope for survival.",
    "release_date": "2006-02-21",
    "genre_ids": [
      28,
      16,
      878
    ],
    "id": 14609,
    "original_title": "Ultimate Avengers",
    "original_language": "en",
    "title": "Ultimate Avengers",
    "backdrop_path": "/mZO4V0ALx15QTgWr4SaXYGT7i60.jpg",
    "popularity": 1.691503,
    "vote_count": 44,
    "video": false,
    "vote_average": 6.44
  }]

  const [movieName, setMovieName] = useState("");
  const [predictBy, setPredictBy] = useState("");
  const [isAlert, setIsAlert] = useState(false);

  const handleSearchClick = (event, value) =>{
    console.log(movieName);

    if(movieName !== ""){
      console.log("inn")
      axios({
        method:'post',
        url:`http://127.0.0.1:8000/predict_movie/PredictMovie`,
        data: {
          movieName: movieName,
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

    // const data = {
    //   firstName: 'John',
    //   lastName: 'Doe',
    // };
    
    // axios.post('http://127.0.0.1:8000/predict_movie/post', data,   {
    //   'X-CSRFToken': "hello world" // Replace csrf_token with your actual CSRF token
    // })
    //   .then(response => {
    //     // handle success
    //     console.log(response);
    //   })
    //   .catch(error => {
    //     // handle error
    //     console.log(error);
    //   });    
  }

  const handleInputChange = (event, value) => {
    setMovieName(event.target.value);
  }

  const handlePredictBy = (event) =>{
    setPredictBy(event.target.innerText);
    setIsAlert(true);
  }

  const [gridItems, setGridItems] = useState([]);

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
                      <SearchBar handleInputChange = {handleInputChange} handlePredictBy={handlePredictBy} handleSearchClick={handleSearchClick}/>

                      <div className="grid-container">
                        {/* {gridItems.map((item) => (
                          <Intro details = {item}/>
                        ))} */}
                        {gridItems.map((item) => (
                          <MovieCard details={item} width={"18rem"} height={"24rem"}/>
                        ))}
                      </div>
                  </Route>
                </div>
            </div>
         </Switch>
    </Router>
  );
}

export default App;
