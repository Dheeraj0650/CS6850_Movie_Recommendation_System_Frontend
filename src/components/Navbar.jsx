import React from 'react';
import Logo from './Logo';


function Navbar(){

  return (<nav class="navbar navbar-expand-lg navbar-light" style={{backgroundColor:"white"}}>
        <a class="navbar-brand" style={{fontFamily: "'Pacifico', cursive",fontSize:"2rem"}}><Logo /><span style={{color:"#6a197d"}}>Movie Prediction</span></a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav ml-auto" style={{textAlign:"center"}}>
            <li class="nav-item active">
              <a class="nav-link" ><button type="button" className="nav-button">About</button> <span class="sr-only">(current)</span></a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#bottom-section" ><button type="button" className="nav-button">Prediction</button></a>
            </li>
          </ul>
        </div>
      </nav>);

}

export default Navbar;
