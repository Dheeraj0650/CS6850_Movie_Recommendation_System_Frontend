import {BrowserRouter as Router, Switch , Route} from 'react-router-dom';
import SearchBar from './SearchBar';
import Navbar from './Navbar';
import Intro from './Intro';
import Alerts from './Alerts';
import Box from '@mui/material/Box';
import React, { useState, useRef } from 'react';
import Zoom from '@mui/material/Zoom';
import axios from 'axios';


function App() {


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
                        {gridItems.map((item) => (
                          <Intro details = {item}/>
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
