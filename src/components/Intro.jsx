import React from 'react';
// import IntroImg from "./IntroImg";

function Intro(props){
  console.log(props);
  return ( 
            <div className='container-fluid'>
              <div class="card text-bg-success mb-3" style={{ maxWidth: "25rem", minHeight: "15rem" }}>
                <div class="card-header">{props.details.name}</div>
                <div class="card-body">
                  <h5 class="card-title">{props.details.text}</h5>
                  <p class="card-text">{props.details.text}</p>
                </div>
              </div>
            </div>
          );

}

export default Intro;
