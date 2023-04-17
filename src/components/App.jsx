import {BrowserRouter as Router, Switch , Route} from 'react-router-dom';
import SearchBar from './SearchBar';
import Navbar from './Navbar';
import Intro from './Intro';
import Alerts from './Alerts';
import Box from '@mui/material/Box';
import React, { useState, useRef } from 'react';
import Zoom from '@mui/material/Zoom';


function App() {

  const handleInputChange = (event, value) => {
    setMovieName(value);
  }

  const handlePredictBy = (event) =>{
    setPredictBy(event.target.innerText);
    setIsAlert(true);
  }

  const [gridItems, setGridItems] = useState([
    { name:"Gabbar singh" , text: 'pawan kalyan 1' },
    { name:"Kushi", text: 'pawan kalyan  2' },
    { name:"OG", text: 'pawan kalyan  3' },
    { name:"Bheemla nayak", text: 'pawan kalyan  4' },
    { name:"Toli prema", text: 'pawan kalyan  5' },
    { name:"Sardaar", text: 'pawan kalyan  6' },
    { name:"puli", text: 'pawan kalyan 7' },
  ]);

  const [movieName, setMovieName] = useState("");
  const [predictBy, setPredictBy] = useState("");
  const [isAlert, setIsAlert] = useState(false);


  console.log(movieName);
  console.log(predictBy);

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
                      <SearchBar handleInputChange = {handleInputChange} handlePredictBy={handlePredictBy}/>

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
